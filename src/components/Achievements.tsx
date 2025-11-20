"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { achievements } from "@/components/achievements_data";
import { Trophy, Award, Target } from "lucide-react";

export function Achievements() {
  // Transform achievements data for the infinite moving cards format
  const achievementCards = achievements.map((achievement) => ({
    quote: achievement.description,
    name: achievement.title,
    title: "Achievement Unlocked",
    image: achievement.image,
  }));

  // Split into two rows for better display
  const row1 = achievementCards;
  return (
    <section className="py-20 px-4 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--military-accent)] mb-4 uppercase tracking-wider">
            [ ACHIEVEMENTS ]
          </h2>
          <div className="w-32 h-1 bg-[var(--military-tactical)] mx-auto"></div>
          <p className="mt-6 text-[var(--military-text)] text-lg font-mono">
            MISSION ACCOMPLISHMENTS & BATTLE HONORS
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="military-card p-6 text-center">
            <Trophy className="h-10 w-10 text-[var(--military-tactical)] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[var(--military-accent)]">TOP 48</p>
            <p className="text-[var(--military-text)] text-sm mt-2 font-mono">SIH 2024 Finalist</p>
          </div>
          <div className="military-card p-6 text-center">
            <Award className="h-10 w-10 text-[var(--military-tactical)] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[var(--military-accent)]">600+</p>
            <p className="text-[var(--military-text)] text-sm mt-2 font-mono">LeetCode Problems</p>
          </div>
          <div className="military-card p-6 text-center">
            <Target className="h-10 w-10 text-[var(--military-tactical)] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[var(--military-accent)]">350+</p>
            <p className="text-[var(--military-text)] text-sm mt-2 font-mono">Day Streak</p>
          </div>
        </div>

        {/* Infinite Moving Cards - Row 1 */}
        <div className="mb-8 h-[500px]">
          <InfiniteMovingCards
            items={row1}
            direction="right"
            speed="fast"
            pauseOnHover={true}
            className="mb-8 h-full"
          />
        </div>
      </div>
    </section>
  );
}
