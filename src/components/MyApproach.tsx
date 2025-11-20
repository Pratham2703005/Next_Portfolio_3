"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Target, Code, Rocket } from "lucide-react";

export function MyApproach() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--military-accent)] mb-4 uppercase tracking-wider">
            [ MY APPROACH ]
          </h2>
          <div className="w-32 h-1 bg-[var(--military-tactical)] mx-auto"></div>
          <p className="mt-6 text-[var(--military-text)] text-lg font-mono">
            TACTICAL EXECUTION IN THREE PHASES
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card
            title="Planning & Strategy"
            phase="PHASE 01"
            icon={<Target className="h-12 w-12" />}
            description="Map out goals, target audience, and key functionalities. Structure, navigation, and content requirements."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-emerald-900"
              
            />
          </Card>

          <Card
            title="Development & Build"
            phase="PHASE 02"
            icon={<Code className="h-12 w-12" />}
            description="Execute the plan with clean, efficient code. Building robust features with modern tech stack."
          >
            <CanvasRevealEffect
              animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
          </Card>

          <Card
            title="Deploy & Optimize"
            phase="PHASE 03"
            icon={<Rocket className="h-12 w-12" />}
            description="Launch the solution and continuously optimize for performance, scalability, and user experience."
          >
            <CanvasRevealEffect
              animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  phase,
  icon,
  description,
  children,
}: {
  title: string;
  phase: string;
  icon: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-2 border-[var(--military-border)] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-6 relative h-[30rem] bg-[var(--military-base)] hover:border-[var(--military-accent)] transition-all duration-300"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[var(--military-accent)]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[var(--military-accent)]" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[var(--military-accent)]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[var(--military-accent)]" />

      {/* Canvas Reveal Effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-20 text-center">
        {/* Icon */}
        <div className="text-center group-hover/canvas-card:-translate-y-4 transition duration-200 w-full mx-auto flex items-center justify-center text-[var(--military-accent)] group-hover/canvas-card:text-white">
          {icon}
        </div>

        {/* Phase Badge */}
        <div className="mt-4 opacity-100 group-hover/canvas-card:opacity-0 transition duration-200">
          <div className="inline-block border border-[var(--military-accent)] px-3 py-1">
            <span className="text-[var(--military-accent)] text-xs font-bold tracking-wider">
              {phase}
            </span>
          </div>
        </div>

        {/* Title - Hidden initially, shown on hover */}
        <h3 className="text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-6 font-bold uppercase tracking-wider group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h3>

        {/* Description - Shown on hover */}
        <p className="text-white/90 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-mono leading-relaxed group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
