"use client";

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="py-6 text-center text-slate text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <p>Designed & Built by Zade Mahayni</p>
        <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
