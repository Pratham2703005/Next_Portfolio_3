'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from './project_data';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section className="w-full py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--military-accent)] mb-4 uppercase tracking-wider">
            [ MISSION LOGS ]
          </h2>
          <div className="w-32 h-1 bg-[var(--military-tactical)] mx-auto"></div>
          <p className="mt-6 text-[var(--military-text)] text-lg">
            TACTICAL DEPLOYMENTS & OPERATIONAL SUCCESSES
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="military-card military-hover group relative overflow-hidden h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden border-b border-[var(--military-border)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--military-dark)] via-transparent to-transparent opacity-80"></div>
                
                {/* Corner Markers */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--military-accent)]"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--military-accent)]"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--military-accent)]"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--military-accent)]"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-bold text-[var(--military-accent)] mb-3 uppercase tracking-wide line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--military-text)] text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-[var(--military-tactical)] text-xs font-bold mb-2 uppercase tracking-wider">
                    Tech Arsenal:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 6).map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="w-7 h-7 relative border border-[var(--military-border)] bg-[var(--military-olive)]/20 p-0.5 hover:border-[var(--military-accent)]"
                      >
                        <Image
                          src={tech}
                          alt="tech"
                          width={32}
                          height={32}
                          loading="lazy"
                          className="object-contain p-0.5"
                        />
                      </div>
                    ))}
                    {project.techStack.length > 6 && (
                      <div className="w-7 h-7 border border-[var(--military-border)] bg-[var(--military-olive)]/20 flex items-center justify-center">
                        <span className="text-[var(--military-accent)] text-xs font-bold">+{project.techStack.length - 6}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[var(--military-tactical)] text-[var(--military-dark)] font-bold uppercase text-xs tracking-wider hover:bg-[var(--military-accent)] hover:text-[var(--military-dark)] transition-all border border-transparent hover:border-[var(--military-accent)]"
                    >
                      <ExternalLink size={14} />
                      DEPLOY
                    </Link>
                  )}
                  {project.repoLink && (
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[var(--military-border)] text-[var(--military-text)] font-bold uppercase text-xs tracking-wider hover:border-[var(--military-accent)] hover:text-[var(--military-accent)] transition-all"
                    >
                      <Github size={14} />
                      SOURCE
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Number Badge */}
              <div className="absolute top-3 right-3 w-10 h-10 bg-[var(--military-dark)] border-2 border-[var(--military-accent)] flex items-center justify-center">
                <span className="text-[var(--military-accent)] font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
