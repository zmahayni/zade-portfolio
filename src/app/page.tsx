"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '../components/Section';
import { projects } from '../data/projects';

export default function Home() {
  // Removed animation variants to prioritize functionality

  return (
    <div className="container mx-auto px-6 pt-32 lg:pt-0">
      {/* Hero Section */}
      <Section id="hero" key="hero-section" className="min-h-[30vh] pb-0 flex items-center justify-center lg:justify-start">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold text-slate-lightest">
            Zade Mahayni
          </h1>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="pt-8 md:pt-10">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-slate-light">
            <p>
              Hello! I'm Zade Mahayni, a software engineer passionate about writing code that matters. 💻 
              I'm currently working on developing my skills as a solo-developer. My goal is to eventually break into big-tech!
            </p>
            <p>
              I'm currently working on full-stack development with Next.js and Supabase. I'm also learning to use .Net and Angular! 🚀
            </p>
            <p className="font-medium text-slate-lightest">
              Some other non-tech related things about me:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green mr-2 text-xl">🏐</span> 
                <span>I love sports!! I play volleyball and soccer, and I even founded the volleyball club at the University of Tulsa!</span>
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2 text-xl">🎮</span> 
                <span>I also enjoy video games! I've played League of Legends since I was 11, as well as a bunch of other games like Hollow Knight, Chess, etc.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2 text-xl">📚</span> 
                <span>I love reading Manga as well, would love to hear about any recommendations!!</span>
              </li>
            </ul>
            
            <p className="font-medium text-slate-lightest mt-6">
              Technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-2">
              <li className="flex items-center">
                <span className="text-green mr-2">▹</span> Next.js
              </li>
              <li className="flex items-center">
                <span className="text-green mr-2">▹</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-green mr-2">▹</span> React
              </li>
              <li className="flex items-center">
                <span className="text-green mr-2">▹</span> Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="text-green mr-2">▹</span> Supabase
              </li>
              <li className="flex items-center">
                <span className="text-green mr-2">▹</span> .NET/Angular stack
              </li>
            </ul>
          </div>
          
          <div className="relative">
            {/* Profile image */}
            <div className="aspect-square rounded-lg relative overflow-hidden border-2 border-green border-opacity-30 shadow-lg shadow-green/10">
              <Image 
                src="/profile.jpg" 
                alt="Zade Mahayni" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Preview Section */}
      <Section id="projects">
        <h2 className="section-heading">Some Things I've Built</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <div 
              key={project.slug}
              className="bg-navy-dark bg-opacity-50 rounded-lg overflow-hidden border border-navy-light border-opacity-30 hover:border-green-tint transition-all duration-300">
              <Link href={`/projects/${project.slug}`} prefetch={true} className="cursor-pointer block">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={project.images[0]} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-lightest mb-2 hover:text-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-light mb-4 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono text-slate-light bg-navy-light bg-opacity-50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/projects" prefetch={true} className="btn-primary inline-flex items-center">
            See All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="text-center">
        <h2 className="section-heading justify-center">Get In Touch</h2>
        
        <div className="max-w-xl mx-auto">
          <p className="text-slate-light mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!  
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a 
              href="https://github.com/zmahayni" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-navy-dark bg-opacity-50 rounded-lg border border-navy-light border-opacity-30 hover:border-green-tint transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-green mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <h3 className="text-slate-lightest font-medium mb-1">GitHub</h3>
              <p className="text-green text-sm font-mono">@zmahayni</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/zademahayni/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-navy-dark bg-opacity-50 rounded-lg border border-navy-light border-opacity-30 hover:border-green-tint transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-green mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <h3 className="text-slate-lightest font-medium mb-1">LinkedIn</h3>
              <p className="text-green text-sm font-mono">@zademahayni</p>
            </a>
            
            <a 
              href="mailto:zmahayni056@gmail.com" 
              className="flex flex-col items-center p-6 bg-navy-dark bg-opacity-50 rounded-lg border border-navy-light border-opacity-30 hover:border-green-tint transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-green mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h3 className="text-slate-lightest font-medium mb-1">Email</h3>
              <p className="text-green text-sm font-mono">zmahayni056@gmail.com</p>
            </a>
          </div>
          
          <a href="mailto:zmahayni056@gmail.com" className="btn-primary inline-flex items-center">
            Say Hello
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </Section>
    </div>
  );
}
