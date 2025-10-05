import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import elite from '@/public/light site.png';
import friday from '@/public/friday.png';
import terravision from '@/public/terravision.png';
import skindisease from '@/public/skindisease.png';
import mystoryapp from '@/public/mystoryapp.png';
import dashboard2 from '@/public/dashboard.png';
import gastro from '@/public/gastro.png';
import livingRoomBedroom from '@/public/livingRoomBedroom.png';
import letterboxd from '@/public/letterboxd.png';

import letterboxd from '/letterboxd.png';
import React from 'react';

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const experiencesData = [
  {
    title: 'Bachelor of Computer Science (S.Kom)',
    location: 'Universitas Gunadarma',
    description:
      'Graduated with GPA 3.82, majoring in Informatics Engineering. Completed coursework in software engineering, database systems, computer networks, and artificial intelligence. Actively involved in research and projects including Android development, machine learning implementation, and data visualization dashboards.',
    icon: React.createElement(LuGraduationCap),
    date: 'Jun 2021 – Aug 2025',
  },
  {
    title: 'Mobile Developer',
    location:
      'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    description:
      'Completed the Android Development curriculum (Kotlin, UX Design, SOLID Principles, and Machine Learning for Android). Developed multiple Android apps including an OCR App, Story App, and Skin Disease Detection App with REST API and ML deployment. Collaborated in a cross-functional capstone team to deliver a functional Android application.',
    icon: React.createElement(FaReact),
    date: 'Feb – Jul 2024',
  },
  {
    title: 'AI Engineer – Medical Device Industry',
    location: 'PT Stechoq Robotika Indonesia',
    description:
      'Built a medical image classification model (MobileNetV2) with >90% accuracy on Kaggle dataset. Worked in a cross-functional team of 6 engineers and delivered the final project 1 week ahead of deadline, focusing on the application of AI in Industry 4.0 for medical devices.',
    icon: React.createElement(FaReact),
    date: 'Sep – Dec 2024',
  },
  {
    title: 'Intern – Secretariat of Directorate General of Protocol and Consular Affairs',
    location: 'Ministry of Foreign Affairs of the Republic of Indonesia',
    description:
      'Reviewed cooperation agreements and participated in stakeholder meetings. Contributed to public awareness initiatives on citizen protection through media, infographics, and social content. Assisted in managing data of Indonesian citizens abroad, supported consultations, and developed dashboards to monitor deportation and repatriation cases.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug – Dec 2024',
  },
  {
    title: 'IT Support Engineer Intern',
    location: 'Ministry of Foreign Affairs of the Republic of Indonesia',
    description:
      'Provided IT technical support for Zoom video conferences. Repaired internet networks (Cisco, Fortinet), configured FortiClient VPN, and implemented Kaspersky Endpoint Security. Assisted users with Microsoft Exchange email, contributed to UI/UX development of Gastrodiplomacy 2025 RI, and designed interactive dashboards to monitor IT and operational data.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan – Mar 2025',
  },
] as const;

export const projectsData = [
  {
    title: 'F.R.I.D.A.Y.',
    description:
      'Sistem Klasifikasi Multi-Kelas Penyakit Kulit dengan Integrasi Metadata Spasio-Temporal dan Modul Interaktif Berbasis AI.',
    tags: [
      'Kotlin',
      'TensorFlow',
      'Camera Integrated',
      'MobileNetV2',
      'Local Database',
      'Gemini 2.5 Flash',
    ],
    imageUrl: friday,
    demoLink:
      'https://drive.google.com/file/d/1R614AH-5wf9vhKF9lTSD4sQR2MY4VCsY/view?usp=drive_link',
    repoLink: 'https://github.com/fernandolaurens/F.R.I..D.A.Y.-V.2.0-',
    docLink:
      'https://drive.google.com/drive/folders/1dSq7HkCMrmJqOai4ixeDtb0EWjkmrqwO',
  },
  {
    title: 'Excel Spreadsheet & OnlyOffice Dashboard',
    description:
      'Created an interactive dashboard using Excel Spreadsheet and OnlyOffice to organize, analyze, and visualize data effectively for reporting and monitoring purposes.',
    imageUrl: dashboard2,
    tags: ['Excel Spreadsheet', 'OnlyOffice', 'Data Visualization', 'Reporting'],
    docLink:
      'https://drive.google.com/file/d/1sViitI_xqMwR7zsxSkYHC4EqhjSJcicp/view?usp=drive_link',
  },
  {
    title: 'TerraVision',
    description:
      'An application that uses artificial intelligence to help beginners in real estate investment by predicting property prices and providing strategic recommendations.',
    tags: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn', 'Pandas'],
    imageUrl: terravision,
    demoLink:
      'https://www.linkedin.com/posts/rianco-marcellino-andreas_lifeatbangkit-bangkit24h1-pmchallenge-ugcPost-7213926513367269376-Noxf',
    repoLink: 'https://github.com/fernandolaurens/Terravision',
  },
  {
    title: 'UI/UX Gastro Diplomasi RI 2025',
    description:
      'Designed the user interface and experience for the Gastro Diplomasi RI 2025 initiative, focusing on modern, accessible, and responsive layouts to enhance digital engagement and communication.',
    tags: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
    imageUrl: gastro,
    demoLink:
      'https://www.figma.com/design/YSoTCvuduma4pY9PDLFOdC/Untitled?node-id=0-1&p=f&t=F1sGV6xXMiZ4ESYq-0',
  },
  {
    title: 'Skin Disease Detection',
    description:
      'Mobile application for detecting skin diseases using MobileNetV2 CNN architecture integrated with TensorFlow Lite and Gemini 2.5 Flash. Features include camera-based image input, local database storage, and real-time prediction for improved healthcare accessibility.',
    tags: [
      'Kotlin',
      'TensorFlow',
      'Camera Integrated',
      'MobileNetV2',
      'Local Database',
      'Gemini 2.5 Flash',
    ],
    imageUrl: skindisease,
    demoLink:
      'https://drive.google.com/file/d/1_lxqQHZaP0XChAaKETsDormMoBx4hc7c/view?usp=drive_link',
    repoLink: 'https://github.com/braceskabane23/Dermatech',
    docLink:
      'https://docs.google.com/presentation/d/144cdLXBgNr-MjQkhZGVlAXmjcXiq8X4f/edit?usp=sharing&ouid=105860731392822925433&rtpof=true&sd=true',
  },
  {
    title:
      'Modern Living Room and Bedroom Modeling & Texturing with Blender',
    description:
      'A 3D project showcasing modern living room and bedroom interior design created with Blender, focusing on modeling, texturing, and realistic rendering.',
    imageUrl: livingRoomBedroom,
    tags: ['Blender', '3D', 'Rendering', 'Texturing', 'Modeling'],
    demoLink:
      'https://media.journoportfolio.com/users/362759/uploads/fb96f618-e913-48bd-8ee8-4435a3d767d7.pdf',
  },
  {
    title: 'MyStory App',
    description:
      'The application that I worked on during Bangkit. Has the main feature of being able to post and view stories and display location.',
    tags: ['Kotlin', 'JSON', 'Cloud API', 'Local Database'],
    imageUrl: mystoryapp,
    demoLink:
      'https://drive.google.com/file/d/1_lxqQHZaP0XChAaKETsDormMoBx4hc7c/view?usp=drive_link',
    repoLink: 'https://github.com/braceskabane23/Dermatech',
  },
  {
    title: 'Redesigning Letterboxd UI',
    description:
      'A UI/UX redesign project for Letterboxd, focusing on improving user interface clarity, accessibility, and overall user experience through modern design principles.',
    imageUrl: letterboxd,
    tags: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
    demoLink:
      'https://www.figma.com/file/u0fMDpPOwQ4M0rtwLWlhOY/IMK5_Laurens-Fernando-Pasaribu?type=design&node-id=0-1&mode=design&t=QgOYyIKZdqN8F2cS-0',
    docLink:
      'https://laurens-fernandopasaribu.portfolial.com/?item=2478329',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Kotlin',
  'React',
  'Next.js',
  'CodeIgniter 3',
  'Laravel',
  'Node.js',
  'Git',
  'GitHub',
  'Python',
  'Bootstrap',
  'Firebase',
  'API (Gemini 2.5)',
  'Blender 3D',
  'Figma',
  'MySQL',
  'PostgreSQL',
  'Excel',
  'Jupyter Notebook',
] as const;
