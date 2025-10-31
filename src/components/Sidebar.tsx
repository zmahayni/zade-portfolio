"use client";

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/#contact' },
];

const Sidebar = () => {
  const sidebarVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + custom * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.aside
      className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-navy-dark bg-opacity-80 backdrop-blur-sm border-r border-navy-light border-opacity-20 hidden lg:flex flex-col justify-between z-10"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="flex flex-col items-center md:items-start p-6">
        <motion.div 
          className="mb-10"
          variants={childVariants}
          custom={0}
        >
          <Link href="/" prefetch={true} className="text-xl md:text-2xl font-semibold text-slate-lightest hover:text-green transition-colors">
            <span className="hidden md:inline">Zade Mahayni</span>
            <span className="md:hidden">ZM</span>
          </Link>
          <p className="text-xs md:text-sm text-slate mt-1 hidden md:block">Software Engineer • CS + Cyber Security</p>
        </motion.div>

        <nav className="w-full">
          <ul className="space-y-4">
            {navLinks.map((link, i) => (
              <motion.li key={link.name} variants={childVariants} custom={i + 1}>
                <Link 
                  href={link.href}
                  prefetch={!link.href.startsWith('#')}
                  className="nav-link block text-center md:text-left md:pl-2"
                  onClick={(e) => {
                    // Handle hash links with smooth scrolling
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else if (link.href.includes('#')) {
                      // Combined path and hash (like /#contact)
                      e.preventDefault();
                      const parts = link.href.split('#');
                      const path = parts[0];
                      const hash = '#' + parts[1];
                      
                      // If we're already on the right path, just scroll
                      if (path === '/' && window.location.pathname === '/') {
                        const element = document.querySelector(hash);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        // Navigate to the path with hash
                        window.location.href = link.href;
                      }
                    }
                    // Regular links will use Next.js navigation by default
                  }}
                >
                  <span className="md:hidden">{link.name.charAt(0)}</span>
                  <span className="hidden md:inline">{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-6">
        {/* Social icons removed - now in contact section */}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
