'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[]; // ✅ fix readonly type
  imageUrl: string;
  demoLink?: string;
  repoLink?: string;
  docLink?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demoLink,
  repoLink,
  docLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isExcelProject =
    title === 'Excel Spreadsheet & OnlyOffice Dashboard' ||
    title === 'Project-Based Virtual Internship – Big Data Analytics Intern';

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className={`bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg 
          sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 
          dark:text-white dark:bg-white/10 dark:hover:bg-white/20
          ${isExcelProject ? 'overflow-visible' : 'overflow-hidden'}
        `}
      >
        {isExcelProject ? (
          <div className="pt-6 pb-7 px-5 sm:px-10 flex flex-col items-start text-left">
            <h3 className="text-2xl font-semibold text-left w-full">
              {title}
            </h3>

            <div className="mt-3 text-[0.95rem] leading-relaxed text-gray-700 dark:text-white/80 max-w-2xl space-y-3">
              {description}
            </div>

            <div className="mt-4 mb-2 flex items-center justify-start flex-wrap gap-3">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-btn1"
                >
                  Link
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
              )}

              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-btn1 px-1"
                >
                  GitHub
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
              )}

              {docLink && (
                <a
                  href={docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-btn1 px-1"
                >
                  Documentation
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
              )}
            </div>

            <ul className="flex flex-wrap justify-start mt-2 gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-black/[0.7] px-2.5 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/80"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-5 w-full">
              <Image
                src={imageUrl}
                alt={`Screenshot of ${title}`}
                width={1000}
                height={600}
                quality={95}
                className="w-full h-auto rounded-xl shadow-xl object-contain"
                priority
              />
            </div>
          </div>
        ) : (
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
              {description}
            </p>

            <div className="mt-3 mb-2 flex items-center flex-row gap-3">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-btn1"
                >
                  Link
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
              )}

              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-btn1 px-1"
                >
                  GitHub
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
              )}

              {docLink && (
                <a
                  href={docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-btn1 px-1"
                >
                  Documentation
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
              )}
            </div>

            <ul className="flex flex-wrap mt-2 gap-1 sm:mt-auto">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-black/[0.7] px-2 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <Image
              src={imageUrl}
              alt={`Screenshot of ${title}`}
              width={800}
              height={500}
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[30.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
}
