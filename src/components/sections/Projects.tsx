import AnimateIn from "@/components/AnimateIn";
import { Github, ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";

interface Project {
  title: string;
  subtitle?: string;
  desc: string;
  stack: string[];
  github?: string;
  featured?: boolean;
  highlight?: boolean;
  categories: string[];
}

const projects: Project[] = [
  {
    title: "PlacePrep",
    subtitle: "Placement Assistance System",
    desc: "A TypeScript-based placement preparation platform that helps students prepare for job placements with AI-powered resume analysis, mock interviews, aptitude practice, and a career guidance chatbot.",
    stack: ["TypeScript", "React", "Node.js", "AI"],
    github: "https://github.com/sudhher1s/PERSONALIZED-PLACEMENT-ASSISTANCE-SYSTEM",
    highlight: true,
    categories: ["Web", "ML/AI", "Full Stack", "Apps", "Games", "Mobile"],
  },
  {
    title: "Qsentix",
    subtitle: "Quantum ML Stock Predictor",
    desc: "Python ML project for FTSE UK stock sentiment analysis and price prediction using feature engineering, sentiment analysis, and a quantum model for forecasting.",
    stack: ["Python", "ML", "Sentiment Analysis", "Quantum"],
    github: "https://github.com/sudhher1s/Qsentix-QuntumML-Stock-Predector",
    highlight: true,
    featured: true,
    categories: ["ML/AI", "Quantum"],
  },
  {
    title: "EyeOnRoad",
    subtitle: "Accident Detection",
    desc: "Car accident detection project using YOLO with Jupyter notebooks, demo videos, and crash image datasets for training an accident detection model.",
    stack: ["Python", "YOLO", "OpenCV", "CV"],
    github: "https://github.com/sudhher1s/EyeOnRoad",
    highlight: true,
    categories: ["ML/AI"],
  },
  {
    title: "CODE-MART-SPRING",
    subtitle: "E-commerce Platform",
    desc: "Spring Boot + Angular e-commerce platform for selling coding courses, projects, and digital resources with product listings, cart, authentication, and order management.",
    stack: ["Spring Boot", "Angular", "REST APIs", "MySQL"],
    github: "https://github.com/sudhher1s/CODE-MART-SPRING",
    highlight: true,
    categories: ["Web", "Full Stack", "Backend"],
  },
  {
    title: "RescueNet",
    subtitle: "Disaster Relief Platform",
    desc: "Disaster relief/donation platform with React client and Node.js server, connecting donors with people in need during emergencies with full donation flow and data management.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/sudhher1s/RescueNet",
    featured: true,
    categories: ["Web", "Full Stack"],
  },
  {
    title: "RouteAI",
    subtitle: "Smart Waste Route Optimizer",
    desc: "AI-powered waste collection management system with ML-based bin fill prediction, geospatial route optimization, and dashboards for improving urban waste collection.",
    stack: ["Flask", "ML", "Folium", "Plotly", "SQLAlchemy"],
    github: "https://github.com/sudhher1s/RouteAI",
    featured: true,
    categories: ["ML/AI", "Data", "Web"],
  },
  {
    title: "RouteSense AI",
    subtitle: "Accident-Aware Clean Route Finder",
    desc: "Smart route recommendation project that suggests shortest paths with accident-risk awareness and cleaner weather conditions based on chosen source and destination.",
    stack: ["Python", "Flask", "Routing", "Weather API", "Safety"],
    github: "https://github.com/sudhher1s/RouteSense-AI",
    categories: ["ML/AI", "Data", "Web", "Apps"],
  },
  {
    title: "MediLogic",
    subtitle: "Smart Medical ICD Codes Detector",
    desc: "GenAI-based healthcare medical coding assistant with clinical demo modules, FAISS vector search for 71K+ codes, and GenAI-powered medical coding.",
    stack: ["Python", "FastAPI", "GenAI", "FAISS"],
    github: "https://github.com/sudhher1s/MediLogic",
    featured: true,
    categories: ["ML/AI", "Backend"],
  },
  {
    title: "SPACE-KNOWLEDGE-BOT",
    subtitle: "NASA RAG Chatbot",
    desc: "A Python RAG chatbot trained on NASA/space-related documents. Users can ask questions about space missions, planets, and astronomy; it retrieves accurate answers from an indexed knowledge base.",
    stack: ["Python", "RAG", "NLP", "Vector Search"],
    github: "https://github.com/sudhher1s/SPACE-KNOWLEDGE-BOT",
    categories: ["ML/AI"],
  },
  {
    title: "AI Summit 2026 Analysis",
    subtitle: "Delegate Data Analytics",
    desc: "JavaScript/Node.js analytics project for processing and visualizing delegate/sample data from the AI Summit 2026 event, including charts and insights dashboards.",
    stack: ["JavaScript", "Node.js", "Data Analysis", "Charts"],
    github: "https://github.com/sudhher1s/AI-SUMMIT-2026-DELAGATES-SAMPLE-DATA-ANALYSIS",
    categories: ["Data", "Web"],
  },
  {
    title: "Fake News Detection",
    subtitle: "ResNet50 Classifier",
    desc: "Python project using a ResNet50 deep learning model for detecting fake news with image/text classification techniques and a trained .h5 model with metrics tracking.",
    stack: ["Python", "ResNet50", "Deep Learning", "NLP"],
    github: "https://github.com/sudhher1s/FAKE-NEWS-DETECTION-RESNET",
    categories: ["ML/AI"],
  },
  {
    title: "CrimeEye",
    subtitle: "Video Crime Detection",
    desc: "Python AI-powered video crime detection system using a fine-tuned VideoMAE model to detect criminal activities in video footage with Streamlit/Gradio interface.",
    stack: ["Python", "VideoMAE", "Computer Vision", "Streamlit"],
    github: "https://github.com/sudhher1s/CrimeEye",
    categories: ["ML/AI"],
  },
  {
    title: "FoodSense",
    subtitle: "Food Calorie Estimation",
    desc: "Food calorie estimation project using Mask R-CNN for food segmentation, Telegram bot integration, and web interface to estimate calories from food photos.",
    stack: ["Python", "Mask R-CNN", "Telegram Bot", "Web"],
    github: "https://github.com/sudhher1s/FoodSense",
    categories: ["ML/AI", "Web"],
  },
  {
    title: "DriveSafe",
    subtitle: "Driver Drowsiness Detection",
    desc: "Python driver safety monitoring system using MediaPipe and OpenCV to track driver drowsiness/distraction using facial landmarks.",
    stack: ["Python", "MediaPipe", "OpenCV", "CV"],
    github: "https://github.com/sudhher1s/DriveSafe",
    categories: ["ML/AI"],
  },
  {
    title: "3QTele",
    subtitle: "Quantum Communication Studio",
    desc: "Quantum Communication Studio 'Quantum Qurukshetra' built with TypeScript and Python, including backend simulation, frontend visualization, and quantum entanglement experiment scripts.",
    stack: ["TypeScript", "Python", "Qiskit", "Visualization"],
    github: "https://github.com/sudhher1s/3QTele",
    categories: ["Quantum", "Full Stack"],
  },
  {
    title: "GreenEcoPlay",
    subtitle: "Gamified Learning Platform",
    desc: "Gamified learning platform for kids with Spring Boot backend, React + Vite frontend, and MySQL database. Includes environmental/academic quizzes, points, levels, and leaderboards.",
    stack: ["Spring Boot", "React", "Vite", "MySQL"],
    github: "https://github.com/sudhher1s/GreenEcoPlay",
    categories: ["Web", "Full Stack", "Games", "Apps"],
  },
  {
    title: "EcoBeacon",
    subtitle: "Community Sustainability Tracker",
    desc: "Flask web app to help people and communities reduce environmental impact via tracking, eco-challenges, smart eco-tips, and environmental reports.",
    stack: ["Flask", "SQLite", "Data Viz", "Sustainability"],
    github: "https://github.com/sudhher1s/EcoBeacon",
    categories: ["Web", "Data"],
  },
  {
    title: "EduExtract",
    subtitle: "Syllabus Extractor",
    desc: "FastAPI app that extracts syllabus data from PDF documents using a vendored version of the unstructured Python library.",
    stack: ["FastAPI", "Python", "PDF Parsing", "NLP"],
    github: "https://github.com/sudhher1s/EduExtract",
    categories: ["ML/AI", "Backend"],
  },
  {
    title: "SAGAR",
    subtitle: "Full-stack ML Platform",
    desc: "Full-stack TypeScript application with Supabase backend, Next.js frontend, and dnabert tutorial integration for data analysis/ML with datasets and scripts.",
    stack: ["Next.js", "TypeScript", "Supabase", "ML"],
    github: "https://github.com/sudhher1s/SAGAR",
    categories: ["Web", "ML/AI", "Full Stack"],
  },
  {
    title: "UrbanEye",
    subtitle: "Urban Issue Reporter",
    desc: "Flask web app for citizens to report potholes, waste, broken streetlights, etc., with geolocation, photo uploads, admin dashboard, and real-time updates.",
    stack: ["Flask", "SQLite", "Maps", "Email"],
    github: "https://github.com/sudhher1s/UrbanEye",
    categories: ["Web"],
  },
  {
    title: "EduPredict",
    subtitle: "Student Performance Predictor",
    desc: "Student performance prediction system using Python and Flask, training on student data to predict academic outcomes via a simple web interface.",
    stack: ["Python", "Flask", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/sudhher1s/EduPredict",
    categories: ["ML/AI", "Web"],
  },
  {
    title: "HeartAI",
    subtitle: "Heart Disease Prediction",
    desc: "Heart disease prediction system using Python/Flask and a trained ML model to predict cardiovascular disease risk with a web interface.",
    stack: ["Python", "Flask", "Scikit-learn"],
    github: "https://github.com/sudhher1s/HeartAI",
    categories: ["ML/AI", "Web"],
  },
  {
    title: "Bicyclelo",
    subtitle: "Bicycle Management System",
    desc: "Online Bicycle Management System for on-campus use. Built with PHP to handle admin management, employee details, QR code scanning, and bicycle tracking.",
    stack: ["PHP", "MySQL", "HTML/CSS", "QR"],
    github: "https://github.com/sudhher1s/Bicyclelo",
    categories: ["Web"],
  },
  {
    title: "Friendly Farmer",
    subtitle: "Farmer Assistance Platform",
    desc: "Farmer assistance platform with PHP backend, supporting farmer demand tracking, chat support, confirmation systems, and resource management with QR code integration.",
    stack: ["PHP", "MySQL", "HTML/CSS", "QR"],
    github: "https://github.com/sudhher1s/FRIENDLY-FARMER",
    categories: ["Web"],
  },
  {
    title: "Eventify",
    subtitle: "Event Management System",
    desc: "College event management system built with PHP to handle student registrations, faculty management, admin controls, login/register flows, and event organization.",
    stack: ["PHP", "MySQL", "Web"],
    github: "https://github.com/sudhher1s/Eventify",
    categories: ["Web"],
  },
  {
    title: "RapidAid",
    subtitle: "Emergency Medical Aid",
    desc: "PHP-based emergency medical aid web application with user registration, login, doctor contact, medicine lists, and modules for patient care management.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    github: "https://github.com/sudhher1s/RapidAid",
    categories: ["Web"],
  },
  {
    title: "Safest Journey",
    subtitle: "Live Journey Safety App",
    desc: "Flask safety application where passengers scan QR codes to start live journey tracking, use timed check-ins, and trigger emergency alerts to contacts.",
    stack: ["Python", "Flask", "QR Codes", "Location API"],
    categories: ["Web", "Backend"],
  },
  {
    title: "CODE-MART-2",
    subtitle: "Digital Marketplace v2",
    desc: "Full-stack TypeScript app with React frontend, Node.js server, and Supabase backend — second iteration of CodeMart for selling digital coding resources.",
    stack: ["TypeScript", "React", "Node.js", "Supabase"],
    github: "https://github.com/sudhher1s/CODE-MART-2",
    categories: ["Web", "Full Stack"],
  },
  {
    title: "CODE-MART",
    subtitle: "Code Marketplace",
    desc: "Angular + Node.js/Express version of the CodeMart e-commerce platform, a marketplace for buying/selling code snippets, projects, and programming resources.",
    stack: ["Angular", "Node.js", "Express", "REST APIs"],
    github: "https://github.com/sudhher1s/CODE-MART",
    categories: ["Web", "Full Stack"],
  },
  {
    title: "SuRaksha",
    subtitle: "Women Safety App",
    desc: "Android women's safety app that instantly alerts guardians with the user's location during emergencies, triggered by shaking the device.",
    stack: ["Android", "Java", "GPS"],
    github: "https://github.com/sudhher1s/SuRaksha",
    categories: ["Mobile"],
  },
  {
    title: "VINTERNSHIP-vishaka",
    subtitle: "AI Chatbot Platform",
    desc: "A fork of LibreChat, a TypeScript-based AI chatbot platform. Supports multiple AI providers and has a modern React frontend with a Node.js backend.",
    stack: ["TypeScript", "React", "Node.js", "AI APIs"],
    github: "https://github.com/sudhher1s/VINTERNSHIP-vishaka",
    categories: ["Web", "ML/AI", "Full Stack"],
  },
  {
    title: "FLAMES-GAME",
    subtitle: "Fun Relationship Game",
    desc: "Classic FLAMES relationship game built with vanilla HTML, CSS, and JavaScript; a simple fun web app to calculate relationship compatibility.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sudhher1s/FLAMES-GAME",
    categories: ["Web", "Games"],
  },
  {
    title: "Personalized Todo",
    subtitle: "Reminder-based Task Manager",
    desc: "A personalized to-do list app that helps users organize tasks, set reminders, and stay on top of daily work with a simple productivity-focused interface.",
    stack: ["JavaScript", "HTML/CSS", "Reminders", "Productivity"],
    github: "https://github.com/sudhher1s/TODO-LIST-APP",
    categories: ["Web", "Apps", "Mobile"],
  },
];

const allCategories = ["All", "Web", "ML/AI", "Full Stack", "Quantum", "Data", "Backend", "Apps", "Games", "Mobile"];

const featuredMainTitles = [
  "PlacePrep",
  "Qsentix",
  "EyeOnRoad",
  "CODE-MART",
  "UrbanEye",
  "RouteAI",
];

function partitionProjects(all: Project[]) {
  const main = featuredMainTitles
    .map((title) => all.find((p) => p.title === title))
    .filter((p): p is Project => Boolean(p));
  const rest = all.filter((p) => !featuredMainTitles.includes(p.title));
  return { main, rest };
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const isHighlighted = project.highlight;
  const isFeatured = project.featured;

  return (
    <div className={`glass-card ${large ? "p-6 md:p-8" : "p-5 md:p-6"} flex flex-col h-full hover:scale-[1.01] transition-transform relative overflow-hidden ${
      isHighlighted ? "ring-2 ring-primary shadow-[0_0_15px_rgba(0,229,255,0.3)]" : 
      isFeatured ? "ring-1 ring-primary/20" : ""
    }`}>
      {isHighlighted && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
      )}
      <div className="flex-1 relative z-10">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-display font-semibold text-foreground ${large ? "text-xl md:text-2xl" : ""}`}>{project.title}</h3>
          {(isHighlighted || isFeatured) && (
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
              isHighlighted ? "bg-primary text-background" : "bg-primary/10 text-primary border border-primary/20"
            }`}>
              {isHighlighted ? "Top Pick" : "Featured"}
            </span>
          )}
        </div>
        {project.subtitle && <p className={`text-primary font-medium mt-0.5 ${large ? "text-sm" : "text-xs"}`}>{project.subtitle}</p>}
        <p className={`text-muted-foreground mt-2 leading-relaxed ${large ? "text-sm line-clamp-5" : "text-xs line-clamp-3"}`}>{project.desc}</p>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground">{t}</span>
          ))}
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium">
            <Github size={13} /> View on GitHub <ExternalLink size={10} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const { main: featuredMainProjects, rest: restProjects } = useMemo(() => partitionProjects(projects), []);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const smallProjects = useMemo(() => {
    if (filter === "All") return restProjects;
    return filtered;
  }, [filter, filtered, restProjects]);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle mt-2">A collection of {projects.length} projects spanning full-stack, AI/ML, quantum computing, and civic tech.</p>
        </AnimateIn>

        {/* Filter bar */}
        <div className="mt-6 flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main big projects */}
        {filter === "All" && (
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            {featuredMainProjects.map((p, i) => (
              <AnimateIn key={`main-${p.title}`} delay={Math.min(i * 0.05, 0.25)}>
                <ProjectCard project={p} large />
              </AnimateIn>
            ))}
          </div>
        )}

        {/* Remaining projects grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {smallProjects.map((p, i) => (
            <AnimateIn key={`all-${p.title}`} delay={Math.min(i * 0.03, 0.3)}>
              <ProjectCard project={p} />
            </AnimateIn>
          ))}
        </div>

        {smallProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
}
