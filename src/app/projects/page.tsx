"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/projects';
import Section from '../../components/Section';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 pt-32 lg:pt-24">
      <Section id="projects-header">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-lightest mb-8">
          My Projects
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.slug}
              className="bg-navy-dark bg-opacity-50 rounded-lg overflow-hidden border border-navy-light border-opacity-30 hover:border-green-tint transition-all duration-300"
            >
              <div className="cursor-pointer">
                <Link href={`/projects/${project.slug}`} prefetch={true} className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <Image 
                      src={project.images[0]} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy-dark bg-opacity-30 pointer-events-none"></div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-slate-lightest mb-2 group-hover:text-green transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-slate-light mb-4 line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs font-mono text-slate-light bg-navy-light bg-opacity-50 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs font-mono text-slate-light bg-navy-light bg-opacity-50 px-2 py-1 rounded">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
