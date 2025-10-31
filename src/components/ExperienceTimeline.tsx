"use client";

import { Experience } from '../data/experience';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-navy-light"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={`${exp.org}-${exp.role}`}
            className="relative pl-8 md:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-5px] md:left-[11px] top-2 w-[10px] h-[10px] rounded-full bg-green border-2 border-navy-dark"></div>
            
            {/* Experience card */}
            <div className="bg-navy-dark bg-opacity-50 rounded-lg p-6 border border-navy-light border-opacity-30 hover:border-green-tint transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(100,255,218,0.1)]">
              {/* Type badge */}
              <span className="inline-block text-xs font-mono text-green bg-green-tint px-2 py-1 rounded-full mb-2">
                {exp.type}
              </span>
              
              {/* Role and organization */}
              <h3 className="text-xl font-semibold text-slate-lightest">
                {exp.role}
              </h3>
              <p className="text-green font-medium mb-1">{exp.org}</p>
              
              {/* Date and location */}
              <div className="flex flex-wrap items-center text-slate mb-4 text-sm">
                <span>{exp.date}</span>
                {exp.location && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </>
                )}
              </div>
              
              {/* Bullet points (if any) */}
              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green mr-2 text-xl">✦</span>
                      <span className="text-slate-light">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Tech tags */}
              {exp.tech && exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono text-slate-light bg-navy-light bg-opacity-50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
