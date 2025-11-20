'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HyperSpeed from "@/components/ui/Hyperspeed";
import Image from 'next/image';

export default function SkillsSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", icon: "/skills/next.svg" },
        { name: "React.js", icon: "/skills/React.svg" },
        { name: "HTML5", icon: "/skills/html.svg" },
        { name: "CSS3", icon: "/skills/css.svg" },
        { name: "JavaScript", icon: "/skills/js.svg" },
        { name: "TypeScript", icon: "/skills/TypeScript.svg" },
        { name: "Tailwind CSS", icon: "/skills/tail.svg" },
        { name: "Redux Toolkit", icon: "/skills/redux.svg" },
        { name: "Zustand", icon: "/skills/zustand.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "/skills/Node.js.svg" },
        { name: "Express", icon: "/skills/express.svg", classname: "text-white" },
        { name: "Redis", icon: "/skills/redis.svg" },
        { name: "Socket.io", icon: "/skills/socketio.svg" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "/skills/mongo.svg" },
        { name: "Firebase", icon: "/skills/firebase.svg" },
        { name: "PrismaORM", icon: "/skills/prisma3.svg" },
        { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
        {name: "NeonDB", icon: "/skills/neon.svg" }
      ],
    },
    {
      title: "Auth & Validation",
      skills: [
        { name: "Zod", icon: "/skills/zod.svg" },
        { name: "NextAuth", icon: "/skills/nextauth.svg", classname: "" },
        { name: "Clerk", icon: "/skills/clerk.svg" },
        { name: "Passport.js", icon: "https://www.passportjs.org/images/logo.svg" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", icon: "/skills/github.svg" },
        { name: "Vercel", icon: "/skills/Vercel.svg", classname:"scale:60" },
        { name: "Postman", icon: "/skills/Postman.svg" },
        { name: "Railway", icon: "/skills/railway.svg" , classname: "scale-175"},
        { name: "Render", icon: "/skills/render.svg", classname: "scale-175"},
      ],
    },
    {
      
      title: "Maps & ML",
      skills: [
        { name: "Leaflet.js", icon: "/skills/leaflet.svg",classname: "scale-140" },
        { name: "MapboxGL", icon: "/skills/mapbox.svg" },
        { name: "Google Earth Engine", icon: "/skills/google_earth_engine.svg" },
        { name: "Hugging Face", icon: "/skills/huggingface.svg" },
        { name: "Google ML Kit", icon: "/skills/ml.svg" },
      ],
    },
  ];

  // Create transform values for each card - cards slide in from right as you scroll
  const card0X = useTransform(scrollYProgress, [0, 0.15], [800, 0]);
  const card0Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [0, 1, 1]);
  
  const card1X = useTransform(scrollYProgress, [0.1, 0.25], [800, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.25], [0, 1, 1]);
  
  const card2X = useTransform(scrollYProgress, [0.2, 0.35], [800, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.35], [0, 1, 1]);

  const card3X = useTransform(scrollYProgress, [0.3, 0.45], [800, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.55], [0, 1, 1]);

  const card4X = useTransform(scrollYProgress, [0.4, 0.55], [800, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.55], [0, 1, 1]);

  const card5X = useTransform(scrollYProgress, [0.5, 0.65], [800, 0]);
  const card5Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.65], [0, 1, 1]);

  const cardTransforms = [
    { x: card0X, opacity: card0Opacity },
    { x: card1X, opacity: card1Opacity },
    { x: card2X, opacity: card2Opacity },
    { x: card3X, opacity: card3Opacity },
    { x: card4X, opacity: card4Opacity },
    { x: card5X, opacity: card5Opacity }
  ];

  return (
    <div ref={containerRef} style={{ height: '370vh' }} className="relative w-full" id="skills">
      <div className="sticky top-0 h-[110vh] w-full overflow-hidden bg-black z-20">
        {/* HyperSpeed Background */}
        <div className="absolute inset-0 grayscale opacity-25">
          <HyperSpeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3, // Reduced from 4
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 15, // Reduced from 20
              lightPairsPerRoadWay: 25, // Reduced from 40
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0xffffff,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              }
            }}/>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16 py-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Tech Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
              Technical <span className="text-orange-500">Skills</span>
            </h2>
            {/* <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building modern, scalable applications
            </p> */}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const { x, opacity } = cardTransforms[index];

              return (
                <motion.div
                  key={index}
                  style={{ 
                    x,
                    opacity
                  }}
                  className="group relative"
                >
                  <div className="rounded-2xl p-6 h-full border border-white/10 overflow-hidden backdrop-blur-md bg-black/40">
                    
                    <div className="relative z-10">
                      {/* Category Header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                          {category.title}
                        </h3>
                        {/* <div className="w-8 h-8 border border-orange-500/50 flex items-center justify-center rounded">
                          <span className="text-orange-500 font-bold text-sm">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div> */}
                      </div>

                      {/* Skills Icons - Horizontal Layout */}
                      <div className="flex flex-wrap gap-3 items-center justify-start">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="group/skill relative"
                            title={skill.name}
                          >
                            {skill.icon ? (
                              <div className="w-12 h-12 p-2 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                                <Image 
                                  src={skill.icon} 
                                  alt={skill.name}
                                  width={48}
                                  height={48}
                                  loading="lazy"
                                  className={`w-full h-full object-contain ${skill.classname ? skill.classname : ''}`}
                                />
                              </div>
                            ) : (
                              <div className="w-12 h-12 p-2 rounded-lg bg-white/5 hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-orange-500/50">
                                <span className="text-xs font-bold text-orange-500">{skill.name.slice(0, 2)}</span>
                              </div>
                            )}
                            {/* Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity pointer-events-none !z-11">
                              <span className="text-xs text-white bg-black/90 px-2 py-1 rounded whitespace-nowrap">
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                   
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-30"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}