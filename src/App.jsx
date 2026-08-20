import { useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { Skiper30 } from "@/components/ui/skiper-ui/skiper30";
import { Skiper54Projects } from "@/components/ui/skiper-ui/skiper54Projects";
import { CertificationGrid } from "@/components/ui/CertificationGrid";
import { HackathonSection } from "@/components/ui/HackathonSection";
import { HackathonDetails } from "@/components/HackathonDetails";
import { hackathons } from "@/data/hackathons";
import { ProjectDetails } from "@/components/ProjectDetails";
import silhouetteImg from "./assets/silhouette.png";
import visionguideImg from "./assets/2.PNG";
import maskImg from "./assets/mask1.PNG";
import moroccoImg from "./assets/morocco1.PNG";
import morocco2Img from "./assets/morocco2.PNG";
import morocco3Img from "./assets/morocco3.PNG";
import morocco4Img from "./assets/morocco4.PNG";
import morocco5Img from "./assets/morocco5.PNG";
import morocco6Img from "./assets/morocco6.PNG";
import tactixImg from "./assets/tactix1.PNG";
import tactix2Img from "./assets/tactix2.PNG";
import tactix3Img from "./assets/tactix3.PNG";
import fplImg from "./assets/fpl.PNG";
import clinicImg from "./assets/clinic1.PNG";
import clinic2Img from "./assets/clinic2.PNG";
import clinic3Img from "./assets/clinic3.PNG";
import clinic4Img from "./assets/clinic4.PNG";
import soapImg from "./assets/soap.PNG";
import ecommerceImg from "./assets/ecommerce1.PNG";
import ecommerce2Img from "./assets/ecommerce2.PNG";
import ecommerce3Img from "./assets/ecommerce3.PNG";
import ecommerce4Img from "./assets/ecommerce4.PNG";
import studyImg from "./assets/study1.PNG";
import study2Img from "./assets/study2.PNG";
import greenLeaf1Img from "./assets/pcs_agri1.png";
import greenLeaf2Img from "./assets/pcs_agri2.jpeg";
import greenLeaf3Img from "./assets/pcs_agri3.jpeg";
const projects = [
    { 
      id: '001', 
      title: 'MOROCCO MEMORY', 
      tech: 'React / Spring Boot / AI', 
      status: 'Completed', 
      img: moroccoImg,
      gallery: [moroccoImg, morocco2Img, morocco3Img, morocco4Img, morocco5Img, morocco6Img],
      role: 'FULL STACK DEVELOPER & AI ENGINEER',
      description: 'Morocco Memory is a high-end travel web application designed to offer a total and personalized immersion into the heart of Morocco. More than just a booking site, it is an intelligent travel companion that connects travelers to the soul of the country.',
      featuresText: 'The application features an immersive interactive map for exploring regions by city, and an AI Trip Planner powered by AI to generate custom itineraries based on each traveler\'s preferences. The project also supports the local economy through an integrated Cooperative Marketplace, and offers a comprehensive booking management system for hotels, vehicles, and tours. The experience is enriched by a dynamic Visual Journey using Wikipedia and Pexels APIs for each destination.',
      techStackDetails: [
        'React.js / Vite',
        'Spring Boot 3',
        'Spring Security / JWT',
        'PostgreSQL',
        'Tailwind & Vanilla CSS',
        'AI Trip Planner',
        'Interactive Maps',
        'Wikipedia & Pexels APIs'
      ]
    },
    { 
      id: '002', 
      title: 'MASKGUARD SYSTEM DETECTION', 
      tech: 'Python / YOLOv8 / OpenCV', 
      status: 'Live', 
      img: maskImg,
      role: 'AI ENGINEER & DEVELOPER',
      description: 'An AI-powered face mask detection system using YOLOv8 for real-time monitoring of mask compliance. The system accurately identifies whether individuals are wearing masks correctly, incorrectly, or not at all.',
      featuresText: 'Built with deep learning and computer vision, it processes live camera feeds with high accuracy and speed, making it ideal for public spaces, offices, and healthcare facilities.',
      techStackDetails: [
        'Python',
        'YOLOv8',
        'OpenCV',
        'PyTorch',
        'Deep Learning',
        'Real-time Analytics'
      ]
    },
    { 
      id: '003', 
      title: 'AI STUDYPRO', 
      tech: 'LangChain / Flask / React', 
      status: 'Stable', 
      img: studyImg,
      gallery: [studyImg, study2Img],
      role: 'AI FULL STACK DEVELOPER',
      description: 'AI StudyPro is a sophisticated, multi-agent educational platform that leverages a Python-based Flask backend and a React/Vite frontend to provide students with a comprehensive, AI-powered learning environment.',
      featuresText: 'Built using the LangChain framework and powered by the GitHub Models API (GPT-4o-mini), the system features a dedicated network of specialized agents capable of analyzing complex PDFs, solving advanced math and science problems, and generating personalized study plans or interactive quizzes. By combining modern web technologies like Lucide React for premium UI aesthetics with robust document processing via pypdf, the application delivers a seamless, high-performance experience that transforms how students interact with and master their academic materials.',
      techStackDetails: [
        'LangChain',
        'React / Vite',
        'Python / Flask',
        'GPT-4o-mini',
        'pypdf',
        'Multi-Agent AI'
      ]
    },
    { 
      id: '004', 
      title: 'MEDICAL SOAP GENERATOR', 
      tech: 'Llama 3.2 / LoRA / Python', 
      status: 'Completed', 
      img: soapImg,
      role: 'AI ENGINEER',
      description: 'Medical-Dialogue-SOAP-Generator is an AI-powered tool that automatically converts doctor-patient conversations into structured SOAP (Subjective, Objective, Assessment, Plan) medical notes. Built on a fine-tuned Llama 3.2 1B model using LoRA adapters, it processes clinical dialogues and generates comprehensive medical summaries following standard healthcare documentation formats.',
      featuresText: 'The model was trained on the omi-health medical dialogue dataset to understand clinical conversations and extract key information into the four SOAP components: patient-reported symptoms (Subjective), clinical findings and test results (Objective), medical diagnosis and clinical reasoning (Assessment), and treatment plans and follow-up actions (Plan). This lightweight solution runs efficiently on consumer GPUs and helps healthcare professionals save time on documentation, reduce administrative burden, and maintain consistent, high-quality medical records while allowing them to focus more attention on patient care.',
      techStackDetails: [
        'Llama 3.2 1B',
        'LoRA Adapters',
        'NLP / LLMs',
        'Python',
        'SOAP Format',
        'Hugging Face'
      ]
    },
    { 
      id: '005', 
      title: 'FANTASY PREMIER LEAGUE', 
      tech: 'LightGBM / Python / ML', 
      status: 'Active', 
      img: fplImg,
      role: 'DATA SCIENTIST & AI ENGINEER',
      description: 'FPL Squad Optimizer is a machine learning-powered tool that predicts Fantasy Premier League player performance and builds optimal 15-player squads for Gameweek 1.',
      featuresText: 'It trains a LightGBM model on historical match data (2024-2025 season) combined with preseason performance, incorporating over 150 advanced features including per-90 statistics, fixture difficulty, team strength metrics, consistency scores, injury risk, and FPL-specific indicators like bonus point potential and captaincy scores. The system uses linear programming to construct the best possible squad within the £100m budget constraint while respecting position requirements (2 GKP, 5 DEF, 5 MID, 3 FWD) and the 3-player-per-team limit, maximizing predicted points based on upcoming fixtures and player form.',
      techStackDetails: [
        'LightGBM',
        'Python',
        'Linear Programming',
        'Pandas / NumPy',
        'Feature Engineering',
        'Optimization Algorithms'
      ]
    },
    { 
      id: '006', 
      title: 'TACTIX AI PLATFORM', 
      tech: 'React / Flask / LLMs', 
      status: 'In Design', 
      img: tactixImg,
      gallery: [tactixImg, tactix2Img, tactix3Img],
      role: 'AI & FULL STACK DEVELOPER',
      description: 'Tactix is an advanced, AI-driven football tactical analysis and squad intelligence dashboard designed to streamline scouting and match preparation. Built with a sleek, futuristic React (Vite) frontend and powered by a robust Python/Flask backend, the application ingests comprehensive historical and current season statistical data to forge unique "Player DNA" profiles.',
      featuresText: 'By integrating live external APIs for player cutouts and utilizing Large Language Models (like Gemini and GitHub Models), the system autonomously generates deep-dive tactical dossiers, visualizes head-to-head team matchups, and simulates on-pitch unit scenarios, providing analysts and managers with strategic insights through a professional, high-performance interface.',
      techStackDetails: [
        'React / Vite',
        'Python / Flask',
        'LLMs (Gemini)',
        'Data Analytics',
        'External APIs',
        'AI Strategy Simulation'
      ]
    },
    { 
      id: '007', 
      title: 'CLINIC ERP ODOO', 
      tech: 'Odoo 17 / Python / Postgres', 
      status: 'Production', 
      img: clinicImg, 
      gallery: [clinicImg, clinic2Img, clinic3Img, clinic4Img],
      role: 'PYTHON & ODOO DEVELOPER',
      description: 'The Clinic Management System is a specialized ERP solution developed on the Odoo 17 platform, designed to digitize and optimize the operational workflows of healthcare facilities.',
      featuresText: 'By integrating patient record management, automated appointment scheduling, and electronic prescription handling into a single cohesive interface, the system eliminates administrative bottlenecks and enhances the quality of patient care. Built with a robust Python backend and a containerized Docker environment, it offers a scalable and secure foundation that leverages Odoo\'s native reporting and security features to deliver a professional, regulation-compliant medical management experience.',
      techStackDetails: [
        'Odoo 17',
        'Python',
        'PostgreSQL',
        'Docker',
        'ERP Development',
        'XML / QWeb'
      ]
    },
    { 
      id: '008', 
      title: 'E-COMMERCE SPORTS', 
      tech: 'React / PHP / MySQL', 
      status: 'Archive', 
      img: ecommerceImg, 
      gallery: [ecommerceImg, ecommerce2Img, ecommerce3Img, ecommerce4Img],
      role: 'FULL STACK DEVELOPER',
      description: 'Football Equipment Magazine is a full-stack e-commerce platform built with React and PHP, dedicated to selling high-quality football gear including official jerseys from the five top European leagues, football boots, jackets, and balls.',
      featuresText: 'The website features a modern, responsive interface with dynamic product browsing, category filtering, detailed product pages, and an optimized cart and checkout flow. Designed with a clean football-inspired UI, the project showcases strong front-end performance, secure backend integration, and a smooth shopping experience highlighting the capacity to build real-world, scalable online stores.',
      techStackDetails: [
        'React',
        'PHP',
        'MySQL',
        'E-commerce',
        'REST API',
        'Tailwind CSS'
      ]
    },
    { 
      id: '009', 
      title: 'GREENLEAF AI', 
      tech: 'Laravel 12 / React Native / FastAPI', 
      status: 'Production', 
      img: greenLeaf1Img,
      gallery: [greenLeaf1Img, greenLeaf2Img, greenLeaf3Img],
      role: 'FULL STACK & DEEP LEARNING ENGINEER',
      description: 'GreenLeafAI is an advanced agricultural ecosystem built with a Laravel 12 (PHP 8.2) REST API backend that handles database registry, authentication, and detailed AI diagnostics through LLM integrations.',
      featuresText: 'The system features a React Native and Expo field inspection mobile application supporting native camera capture and offline synchronization with SQLite caching, alongside a responsive dashboard designed with Vite and React using Tailwind CSS v4 and Recharts. Date palm health classification is powered by a high-performance FastAPI microservice serving deep learning models (including EfficientNet classifiers) via ONNX Runtime for real-time tree disease detection, with the entire multi-container service orchestrated using Docker Compose and Dokploy for production deployment.',
      techStackDetails: [
        'Laravel 12 / PHP 8.2 (REST API)',
        'React Native & Expo (TypeScript)',
        'FastAPI Microservice & ONNX Runtime',
        'EfficientNet Classifiers (Deep Learning)',
        'Vite / React Admin Dashboard',
        'Tailwind CSS v4 & Recharts',
        'SQLite Caching & Offline Sync',
        'Docker Compose & Dokploy Deployment'
      ]
    },
  ];

  const techs = [
    { name: 'C', id: 'c' },
    { name: 'C++', id: 'cpp' },
    { name: 'C#', id: 'cs' },
    { name: 'Java', id: 'java' },
    { name: 'Python', id: 'py' },
    { name: 'React.js', id: 'react' },
    { name: 'Angular', id: 'angular' },
    { name: 'Next.js', id: 'nextjs' },
    { name: 'Nest.js', id: 'nestjs' },
    { name: 'Node.js', id: 'nodejs' },
    { name: 'Spring Boot', id: 'spring' },
    { name: 'HTML5', id: 'html' },
    { name: 'CSS3', id: 'css' },
    { name: 'JavaScript', id: 'js' },
    { name: 'TypeScript', id: 'ts' },
    { name: 'SQL', id: 'mysql' },
    { name: 'NoSQL', id: 'mongodb' },
    { name: 'PHP', id: 'php' },
    { name: 'Laravel', id: 'laravel' },
  ];

  const certifications = [
    { id: '0-001', title: 'Machine Learning Specialization', issuer: 'Stanford / DeepLearning.AI', desc: 'Comprehensive mastery of supervised, unsupervised, and reinforcement learning.', link: 'https://www.coursera.org/account/accomplishments/specialization/MPJPJGCG7TDZ' },
    { id: '0-002', title: 'Supervised Machine Learning', issuer: 'Stanford / DeepLearning.AI', desc: 'Core regression and classification algorithms for predictive modeling.', link: 'https://www.coursera.org/account/accomplishments/verify/G08IF8NN3DG1' },
    { id: '0-003', title: 'Neural Networks and Deep Learning', issuer: 'DeepLearning.AI', desc: 'Building and training deep neural networks and mastering fundamental theory.', link: 'https://www.coursera.org/account/accomplishments/verify/MH2F0VW1TO7B' },
    { id: '0-004', title: 'Convolutional Neural Networks (CNN)', issuer: 'DeepLearning.AI', desc: 'Specialized focus on computer vision and visual recognition systems.', link: 'https://www.coursera.org/account/accomplishments/verify/2LEMDK7UOKDB' },
    { id: '0-005', title: 'Improving Deep Neural Networks', issuer: 'DeepLearning.AI', desc: 'Optimizing deep neural networks through advanced tuning and regularization.', link: 'https://www.coursera.org/account/accomplishments/verify/Y44J91PEL20G' },
    { id: '0-006', title: 'Back-End Apps (Node.js & Express)', issuer: 'IBM', desc: 'Building scalable server-side applications and RESTful API ecosystems.', link: 'https://www.coursera.org/account/accomplishments/verify/A3QKW0NLRJSL' },
    { id: '0-007', title: 'Advanced React', issuer: 'Meta', desc: 'Professional certification in high-performance React architecture and design.', link: 'https://www.coursera.org/account/accomplishments/verify/10G09ZX4KKF1' },
    { id: '0-008', title: 'Web Applications in PHP', issuer: 'University of Michigan', desc: 'Backend development using PHP and database integration strategies.', link: 'https://www.coursera.org/account/accomplishments/verify/QO3ZOE01XWBY' },
    { id: '0-009', title: 'AI for Everyone', issuer: 'DeepLearning.AI', desc: 'Strategic understanding of AI applications in business and society.', link: 'https://www.coursera.org/account/accomplishments/verify/HUB4W4AMDILH' },
    { id: '0-010', title: 'Introduction to DevOps', issuer: 'IBM', desc: 'CI/CD pipelines, containerization with Docker, and agile automation.', link: 'https://www.coursera.org/account/accomplishments/verify/NRBUL3BP0PKA' },
    { id: '0-011', title: 'Agile Development and Scrum', issuer: 'IBM', desc: 'Project management methodology for efficient software delivery.', link: 'https://www.coursera.org/account/accomplishments/verify/2TEF3QIJCALJ' },
    { id: '0-012', title: 'AWS Cloud Essentials', issuer: 'AWS', desc: 'Foundation of cloud infrastructure, security, and global AWS services.', link: 'https://www.coursera.org/account/accomplishments/verify/GWRJM2QN2XPX' },
    { id: '0-013', title: 'NumPy, Matplotlib and Pandas', issuer: 'IBM', desc: 'Mastery of the Python data ecosystem for analysis and visualization.', link: 'https://www.coursera.org/account/accomplishments/verify/L26VWLRU68ER' },
    { id: '0-014', title: 'ML Math: Linear Algebra', issuer: 'Imperial College', desc: 'Mathematical foundations of vector spaces and matrix operations for ML.', link: 'https://www.coursera.org/account/accomplishments/verify/WOMYX6EOPTEB' },
    { id: '0-015', title: 'ML Math: Multivariate Calculus', issuer: 'Imperial College', desc: 'Calculus foundations for gradient descent and model optimization.', link: 'https://www.coursera.org/account/accomplishments/verify/0RSAL02DO2D5' },
    { id: '0-016', title: 'Front-End Development', issuer: 'Meta', desc: 'Professional UI engineering and web standard implementation.', link: 'https://www.coursera.org/account/accomplishments/verify/0Y7JXRYS4ARV' },
    { id: '0-017', title: 'Probability and Statistics', issuer: 'DeepLearning.AI', desc: 'Statistical analysis and probability theory for data science and AI.', link: 'https://www.coursera.org/account/accomplishments/verify/ZKAEFCKZXAFG' },
  ];

let savedScrollY = 0;

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, savedScrollY);
    const timer = setTimeout(() => {
      window.scrollTo(0, savedScrollY);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-outfit">
      <section className="min-h-screen flex flex-col md:flex-row relative bg-primary-red overflow-hidden">
        
        <div className="relative flex-[1.2] md:flex-[1] min-h-[65vh] md:min-h-screen flex flex-col justify-start md:justify-between p-6 sm:p-8 md:p-16 z-10">
          <div className="relative z-20 pt-2 md:pt-0 shrink-0">
            <h2 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[0.9] uppercase tracking-tighter drop-shadow-md md:drop-shadow-none">
              ABDES SAMAD<br />
              ACHEHR OUR
            </h2>
          </div>

          <div className="relative flex-1 w-full mt-4 z-10 md:hidden">
            <img
              src={silhouetteImg}
              alt="Profile Silhouette"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-full h-full object-contain object-bottom scale-[1.50] origin-bottom"
            />
          </div>

          <img
            src={silhouetteImg}
            alt="Profile Silhouette"
            className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] lg:w-[130%] xl:w-[140%] h-[95%] lg:h-full object-cover object-bottom z-0"
          />
          
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary-red via-primary-red/80 to-transparent md:hidden z-[5]"></div>
        </div>

        <div className="relative flex-[1] p-6 sm:p-8 md:p-16 pb-28 sm:pb-28 md:pb-16 flex flex-col justify-start md:justify-center z-20 bg-primary-red md:bg-transparent -mt-2 md:mt-0">
          <div className="text-[0.6rem] font-bold text-white/50 uppercase tracking-[0.3em] mb-4 md:mb-6">*PROFILE / 01</div>
          
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-8 md:mb-12 max-w-[95%] uppercase text-white tracking-tight">
            COMPUTER SCIENCE <br className="hidden md:block" />
            STUDENT <br className="hidden md:block" />
            PASSIONATE ABOUT <br className="hidden md:block" />
            <span className="text-white">TECHNOLOGICAL</span> INNOVATION.
          </h1>

          <div className="space-y-6 md:space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 md:gap-8 max-w-xl">
              <div className="text-[0.55rem] md:text-[0.65rem] font-black text-white/30 uppercase tracking-widest pt-1">( focus )</div>
              <div className="text-xs md:text-sm leading-relaxed text-white/90 font-inter font-medium md:font-normal">
                I design efficient and well-adapted solutions while maintaining strong 
                technical skills and organizational abilities.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 md:gap-8 max-w-xl">
              <div className="text-[0.55rem] md:text-[0.65rem] font-black text-white/30 uppercase tracking-widest pt-1">( approach )</div>
              <div className="text-xs md:text-sm leading-relaxed text-white/90 font-inter font-medium md:font-normal">
                Dedicated to building systems that are scalable, intuitive, 
                and architecturally sound.
              </div>
            </div>
          </div>
        </div>

        {/* HERO BOTTOM SECTION NAVBAR */}
        <div 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className="flex flex-nowrap overflow-x-auto md:overflow-x-visible md:justify-between items-end w-full px-6 sm:px-8 md:px-10 lg:px-16 py-5 sm:py-6 md:py-8 absolute bottom-0 z-30 pointer-events-auto gap-8 md:gap-2 bg-gradient-to-t from-primary-red via-primary-red/90 to-transparent md:bg-none scrollbar-none"
        >
          {[
            { label: 'ABOUT', target: 'about', sub: '01 / PROFILE' },
            { label: 'EDUCATION', target: 'education', sub: '02 / ACADEMIC' },
            { label: 'PROJECTS', target: 'projects', sub: '03 / WORK' },
            { label: 'HACKATHONS', target: 'hackathons', sub: '04 / HONORS' },
            { label: 'CERTIFICATIONS', target: 'certifications', sub: '05 / CERTS' },
            { label: 'TECHNOLOGIES', target: 'technologies', sub: '06 / STACK' },
            { label: 'LANGUAGES', target: 'languages', sub: '07 / GLOBAL' },
          ].map((nav) => (
            <button
              key={nav.target}
              onClick={() => scrollToSection(nav.target)}
              className="group flex flex-col items-start shrink-0 cursor-pointer text-left transition-all duration-300 hover:scale-105"
            >
              <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] font-mono font-bold tracking-wider sm:tracking-widest uppercase text-white/50 group-hover:text-white transition-opacity">
                {nav.sub}
              </span>
              <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl font-extrabold uppercase text-white tracking-tight group-hover:text-white/80 transition-all whitespace-nowrap">
                {nav.label}
              </span>
              <div className="h-[2px] w-0 group-hover:w-full bg-white transition-all duration-500 mt-1" />
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="min-h-[50vh] md:min-h-screen bg-black p-6 sm:p-8 md:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="mb-8 md:mb-12">
          <span className="text-primary-red font-bold uppercase tracking-widest text-xs md:text-sm">About Me</span>
        </div>

        <div className="max-w-5xl ml-auto w-full md:w-3/4">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white leading-tight mb-6 md:mb-8">
            Abdessamad is a <span className="text-primary-red">software engineering student</span> blending
            technical precision and creative problem solving — building enduring,
            high-impact systems.
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
            <p className="text-gray-500 font-inter text-xs md:text-sm max-w-md leading-relaxed">
              Crafting robust solutions through strategy, clean code, and modern
              architecture — built to scale beyond current technology trends.
            </p>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block">
          <span className="text-[15rem] font-extrabold text-white select-none">SWE</span>
        </div>
      </section>

      <section id="education" className="min-h-[70vh] bg-black p-6 sm:p-8 md:p-24 flex flex-col justify-center relative border-t border-white/5">
        <div className="mb-10 md:mb-16">
          <span className="text-primary-red font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Academic Path</span>
          <h2 className="text-4xl sm:text-5xl md:text-[6rem] font-extrabold text-white leading-tight md:leading-[0.8] uppercase tracking-tighter">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-20 max-w-6xl">
          {[
            {
              year: '2024 – Pres.',
              degree: 'Engineering Cycle – Computer Networks and Systems',
              school: 'Faculty of Science and Technology of Marrakech',
              details: 'Specializing in scalable network architectures, distributed systems, and advanced security protocols.'
            },
            {
              year: '2022 – 2024',
              degree: 'DEUST – Mathematics, CS, Physics, Chemistry',
              school: 'Faculty of Science and Technology of Marrakech',
              details: 'Foundational studies in computer science, calculus, and physical systems with high academic standing.'
            },
            {
              year: '2020 – 2021',
              degree: 'Baccalaureate – Physical Sciences (French Option)',
              school: 'Argane High School',
              details: 'Advanced focus on physics and mathematics, graduated with honors.'
            },
          ].map((edu, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-24 group cursor-default">
              <div className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-outline opacity-20 group-hover:opacity-100 group-hover:text-primary-red transition-all duration-700 font-outfit uppercase">
                {edu.year}
              </div>
              <div className="flex flex-col justify-center mt-1 md:mt-0">
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-500 uppercase tracking-tighter">
                  {edu.degree}
                </h3>
                <p className="text-primary-red text-xs md:text-base font-bold mb-2 md:mb-4 tracking-wide uppercase">
                  {edu.school}
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-inter max-w-xl leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="min-h-[70vh] bg-black p-6 sm:p-8 md:p-16 flex flex-col relative overflow-hidden border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-8">
          <div className="relative">
            <span className="text-primary-red font-bold uppercase tracking-[0.4em] text-[0.6rem] md:text-xs mb-3 md:mb-4 block">Work / Portfolio</span>
            <h2 className="text-4xl sm:text-5xl md:text-[6rem] font-extrabold text-white leading-[0.8] uppercase tracking-tighter">
              Projects
            </h2>
          </div>
          <div className="max-w-xs md:max-w-md md:text-right">
            <p className="text-white/40 text-[0.65rem] md:text-xs font-inter uppercase leading-relaxed tracking-widest">
              A curated selection of engineering projects, from computer vision systems 
              to full-stack distributed applications.
            </p>
          </div>
        </div>

        <div className="w-full relative z-10">
          <Skiper54Projects projects={projects} onProjectClick={(p) => {
            savedScrollY = window.scrollY;
            navigate(`/project/${p.id}`);
          }} />
        </div>
      </section>

      <HackathonSection onHackathonClick={(h) => {
        savedScrollY = window.scrollY;
        navigate(`/hackathon/${h.id}`);
      }} />

      <section id="certifications" className="bg-black p-6 sm:p-8 md:p-24 flex flex-col relative overflow-hidden border-t border-white/5 py-12 md:py-16">
        <div className="mb-6 md:mb-8 relative z-10">
          <span className="text-primary-red font-bold uppercase tracking-[0.3em] text-[0.6rem] md:text-xs mb-3 md:mb-4 block opacity-80">Validation / Expertise</span>
          <h2 className="text-4xl sm:text-5xl md:text-[6rem] font-extrabold text-white leading-[0.8] uppercase tracking-tighter">
            Certifications
          </h2>
        </div>

        <div className="mt-8 md:mt-12 relative z-10">
          <CertificationGrid certifications={certifications} />
        </div>

        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none z-0">
          <div className="w-64 h-64 border border-white/20 rounded-full animate-pulse"></div>
        </div>
      </section>
      <div id="technologies">
        <Skiper30 techs={techs} />
      </div>

      <section id="languages" className="bg-black py-16 sm:py-20 md:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="px-6 sm:px-8 md:px-24 mb-10 md:mb-16 relative z-10">
          <span className="text-primary-red font-bold uppercase tracking-[0.3em] text-[0.6rem] md:text-xs mb-3 md:mb-4 block">Communication / Global</span>
          <h2 className="text-4xl sm:text-5xl md:text-[6rem] font-extrabold text-white leading-[0.8] uppercase tracking-tighter">
            Languages
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-around sm:justify-between items-center px-6 sm:px-8 md:px-24 gap-12 sm:gap-0 relative z-10">
          {[
            { name: 'French', level: 'Fluent', icon: 'FR' },
            { name: 'English', level: 'Fluent', icon: 'EN' },
            { name: 'Arabic', level: 'Native', icon: 'AR' },
          ].map((lang, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <span className="text-6xl sm:text-6xl md:text-8xl font-extrabold text-outline opacity-10 group-hover:opacity-100 group-hover:text-primary-red transition-all duration-700 font-outfit uppercase">
                {lang.icon}
              </span>
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tighter mt-[-15px] sm:mt-[-15px] md:mt-[-30px] group-hover:text-primary-red transition-colors duration-500">
                {lang.name}
              </h3>
              <div className="h-[2px] w-0 bg-primary-red group-hover:w-full transition-all duration-700 mt-2"></div>
              <span className="text-[0.6rem] md:text-xs font-mono text-white/40 uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
                {lang.level}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none hidden md:block">
          <span className="text-[20rem] font-extrabold text-white whitespace-nowrap">GLOBAL CITIZEN</span>
        </div>
      </section>
      <footer className="bg-black p-8 md:p-12 text-center">
        <div className="mb-8 flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdessamad-achehrour-800138346' },
            { name: 'GitHub', url: 'https://github.com/Achehrour05' },
            { name: 'Email', url: 'mailto:abdessamadachehrour@gmail.com' }
          ].map((social) => (
            <a 
              key={social.name} 
              href={social.url}
              target={social.name === 'Email' ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-white/40 hover:text-primary-red cursor-pointer text-xs uppercase tracking-widest font-bold transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-white/20 font-inter text-[0.6rem] uppercase tracking-widest">
          Designed by Abdessamad — © 2026
        </p>
      </footer>
    </div>
  );
}

function ProjectRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="p-8 text-white">Project not found</div>;

  return <ProjectDetails project={project} onClose={() => navigate('/')} />;
}

function HackathonRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hackathon = hackathons.find(h => h.id === id);

  if (!hackathon) return <div className="p-8 text-white">Hackathon not found</div>;

  return <HackathonDetails hackathon={hackathon} onClose={() => navigate('/')} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectRoute />} />
      <Route path="/hackathon/:id" element={<HackathonRoute />} />
    </Routes>
  );
}

export default App;
