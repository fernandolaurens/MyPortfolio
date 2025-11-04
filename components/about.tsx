'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
  A recent Bachelor of Computer Science (S.Kom, GPA 3.82) graduate from Universitas Gunadarma. 
  Experienced in developing more than five mobile applications and designing interactive and 
  responsive user interfaces (UI/UX). Skilled in building several machine learning models with 
  proven accuracy improvements. Proficient in creating analytical dashboards for monitoring and 
  reporting using <span className="font-medium">Power BI</span> and <span className="font-medium">Google Data Studio</span>, 
  as well as managing and analyzing data with <span className="font-medium">SQL</span>, 
  <span className="font-medium"> BigQuery</span>, and <span className="font-medium">Microsoft Excel</span>. 
  Gained hands-on experience in <span className="font-medium">IT Support</span> at the Ministry of Foreign Affairs, 
  covering multimedia operations and network troubleshooting. Highly motivated to learn new 
  technologies, adaptable to change, and committed to continuous growth in the field of 
  information technology and data analysis.
</p>
</motion.section>
  );
}
