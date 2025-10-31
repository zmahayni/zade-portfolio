"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export default function ProjectDetail({ project, nextProject, prevProject }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string>(project.images[0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-6 pt-32 lg:pt-24 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Back button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link 
            href="/projects" 
            prefetch={true}
            scroll={false}
            className="inline-flex items-center text-slate-light hover:text-green transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Title and Summary */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-semibold text-slate-lightest mb-4"
        >
          {project.title}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl text-slate-light mb-6"
        >
          {project.summary}
        </motion.p>

        {/* Tech badges */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-2 mb-10"
        >
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="text-sm font-mono text-green bg-green-tint px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="aspect-video relative rounded-lg overflow-hidden border border-navy-light mb-4">
            <Image 
              src={selectedImage} 
              alt={project.title}
              fill
              className="object-contain bg-navy-dark"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          
          {project.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {project.images.map((image) => (
                <div 
                  key={image} 
                  className={`aspect-video relative rounded cursor-pointer overflow-hidden border-2 transition-all ${selectedImage === image ? 'border-green' : 'border-transparent hover:border-green-tint'}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image 
                    src={image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 200px"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Overview */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-lightest mb-4">Overview</h2>
          <p className="text-slate-light leading-relaxed">{project.overview}</p>
        </motion.div>

        {/* Highlights */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-lightest mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green mr-2 text-xl">✦</span>
                <span className="text-slate-light">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Demo
            </a>
          )}
        </motion.div>

        {/* Project Navigation */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-navy-light pt-8"
        >
          {prevProject && (
            <Link 
              href={`/projects/${prevProject.slug}`}
              prefetch={true}
              scroll={false}
              className="group flex flex-col"
            >
              <span className="text-sm text-slate mb-1">Previous Project</span>
              <span className="text-slate-light group-hover:text-green transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                {prevProject.title}
              </span>
            </Link>
          )}
          
          {nextProject && (
            <Link 
              href={`/projects/${nextProject.slug}`}
              prefetch={true}
              scroll={false}
              className="group flex flex-col md:items-end md:ml-auto"
            >
              <span className="text-sm text-slate mb-1">Next Project</span>
              <span className="text-slate-light group-hover:text-green transition-colors flex items-center">
                {nextProject.title}
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
