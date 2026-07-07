// data.ts 

import {
  AnchorIcon,
  Cloud,
  CloudCogIcon,
  Code2,
  Cpu,
  Database,
  FastForwardIcon,
  FunctionSquareIcon,
  GitBranch,
  Globe,
  GraduationCapIcon,
  HandshakeIcon,
  HeaterIcon,
  Layers,
  LayersIcon,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  SettingsIcon,
  Smartphone,
  StarsIcon,
  Terminal,
  WifiSyncIcon,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";


export const stats = [
  { label: "Years Experience", value: " 3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Students Taught", value: "500+" },
];

export const highlights = [
  { icon: AnchorIcon, text: "Based in Nairobi, Kenya - Where Dreams Become a Reality" },
  { icon: HandshakeIcon, text: "Open for freelance work and consultation tasks" },
  { icon: GraduationCapIcon, text: "Engineering Graduate from Moi University" },
  { icon: HeaterIcon, text: "Powered by coffee & passion - Every single day of being alive" },
];

export const userReviewData = [
  {
    id: 1,
    name: "Margaret Kinyanjui",
    profession: "Real Estate Agent",
    userImage: "/images/margaret-kinyanjui-reviewer.jpg",
    review:
      "James delivered exactly what I needed — clear, reliable, and even ahead of schedule.",
  },
  {
    id: 2,
    name: "Mike Kamau",
    profession: "Business Owner",
    userImage: "/images/mike-kamau-reviewer.jpg",
    review:
      "Seamless process, strong architecture, and results that scaled perfectly with my business.",
  },
  {
    id: 3,
    name: "Alex Njuguna",
    profession: "Web developer",
    userImage: "/images/alex-njuguna-reviewer.jpg",
    review:
      "Fast, intuitive solutions with clean code that made future updates effortless.",
  },
  {
    id: 4,
    name: "Daisy Makau",
    profession: "Interior Designer",
    userImage: "/images/daisy-makau-reviewer.jpg",
    review:
      "Beautifully executed work, with design touches that matched my brand vision perfectly.",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jkilonzo2023@gmail.com",
    href: "mailto:jkilonzo2023@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254700139946",
    href: "tel: +254700139946",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ex-rnd", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/james-kilonzo-0aa2b1197/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/ex_rnd72144", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Technical Security & IP Architect",
    company: "Com Twenty One Ltd.",
    period: "Jun::2024 - Present",
    description:
      "I led key elements of the Kenya Parliament’s network modernization by upgrading core infrastructure, strengthening security, integrating VoIP services, stabilizing DMZ systems, producing essential documentation, and ensuring reliable operations across all Parliament buildings.",
    technologies: ["Huawei HCIA Certification", "Cisco CCNA Certification", "Fortigate Operator Certification"],
  },
  {
    type: "education",
    title: "Data Science Trainee",
    company: "Martial School of IT",
    period: "Jan::2025 - Dec::2025",
    description:
      "Developed and deployed live ML web applications. Gained experience in modern AI technologies.",
    technologies: ["Machine Learning Algorithms", "Large Language Models", "Neural networks", "Deep learning"],
  },
  {
    type: "education",
    title: "Data Analysis Trainee",
    company: "Sigma Academy",
    period: "Nov::2024 - May::2025",
    description:
      "Strong foundation in python programming, data statistics, and data analysis principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
  {
    type: "work",
    title: "Product Technology Engineer",
    company: "Huawei Technologies (Kenya) Ltd.",
    period: "Feb::2024 - Jun::2024",
    description:
      "I drove operational and product‑technology success for Malawi TNM Overdraft by boosting Huawei’s revenue, co‑designing new credit products, improving repayment performance, enabling major airtime‑loan growth, delivering data‑driven business reporting, supporting product documentation and C‑level presentations, optimizing mobile money user journeys, and contributing to on‑ground promotions across Malawi and Kenya.",
    technologies: ["HMTP Certification", "Electrical & Telecommunications Degree"],
  },
  {
    type: "work",
    title: "Software Service Engineer",
    company: "Huawei Technologies (Kenya) Ltd.",
    period: "Nov::2023 - Feb::2024",
    description:
      "I supported business growth and operational stability by producing market and performance reports, analyzing Fuliza and FFO data, creating marketing assets, and ensuring reliable cross‑country site operations through proactive SRE monitoring for Malawi and Zambia.",
    technologies: ["HMTP Certification", "Electrical & Telecommunications Degree"],
  },
  {
    type: "work",
    title: "HMTP Trainee",
    company: "Huawei Technologies (Kenya) Ltd.",
    period: "Jun::2023 - Dec::2023",
    description:
      "I developed an original fintech concept (SurePact), gained end‑to‑end training across telecom and mobile‑money systems, and built practical skills in market research, data analysis, SQL querying, and digital asset creation while supporting product, marketing, and operational functions across CBS, Mobile Money, and Overdraft solutions.",
    technologies: ["Computer Applications I", "Computer Applications II"],
  },
  {
    type: "work",
    title: "Software Delivery Engineer",
    company: "Huawei Technologies (Kenya) Ltd.",
    period: "Jun::2022 - Nov::2022",
    description:
      "I supported major M‑Pesa and Overdraft initiatives by assisting cross‑functional engineering teams, monitoring Hustler Fund performance, installing critical data‑centre infrastructure, contributing to Oracle DB and API testing, and helping improve M‑Pesa service uptime by roughly 50%.",
    technologies: ["Computer Applications I", "Computer Applications II"],
  },
  {
    type: "work",
    title: "FTTx Design Engineer",
    company: "Huawei Technologies (Kenya) Ltd.",
    period: "Jan::2021 - Mar::2021",
    description:
      "I supported the Konza City FTTx rollout by producing daily AutoCAD designs, guiding new interns, and helping the design team exceed productivity targets and meet project deadlines.",
    technologies: ["Computer Applications I", "Computer Applications II"],
  },
  {
    type: "work",
    title: "FTTx Design Engineer",
    company: "Huawei Technologies (Kenya) Ltd.",
    period: "Jan::2019 - Mar::2019",
    description:
      "I supported the NOFBI II Phase II rollout by producing daily AutoCAD fibre‑layout designs, simultaneously building skills in LAN and security device configuration, and quickly advancing from a beginner to a reliable contributor who delivered accurate work within weeks.",
    technologies: ["Computer Applications I", "Computer Applications II"],
  },
  {
    type: "education",
    title: "B.Eng. Electrical & Telecommunications",
    company: "Moi University (Kenya)",
    period: "Sep::2015 - Dec::2022",
    description:
      "Specialized in telecommunication systems. Thesis on a new invention, a portable music studio.",
    technologies: ["Research", "Telecommunications", "Software Development"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/ex-rnd", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/james-kilonzo-0aa2b1197/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/ex_rnd72144", label: "Twitter" },
  { icon: Mail, href: "mailto:jkilonzo2023@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "⚡️ Fast MCP Server",
    description:
      "A secure Next.js 16 + Descope reference app that demonstrates full‑lifecycle agent identity with Dynamic Client Registration, scoped M2M JWTs, and a real MCP tool server with audit‑grade authorization.",
    image: "/images/Mcp-Image.jpg",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "FramerMotion", "Descope"],
    demoUrl: "https://fast-mcp-server.soullets.com/",
    githubUrl: "https://github.com/ex-rnd/fast-mcp-server",
  },
  {
    title: "⚡️ AI RAG Langchain",
    description:
      "“⚡️ (Pending Deployment) - AI RAG LangChain App — a Next.js reference project demonstrating Retrieval‑Augmented Generation with LangChain for secure, context‑aware AI responses.",
    image: "/images/Agentic-AI-App.jpg",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "FramerMotion", "Descope"],
    demoUrl: "#",
    githubUrl: "https://github.com/ex-rnd/ai-rag-langchain-nextjs",
  },
  {
    title: "⚡️ Multi-Agentic AI",
    description:
      "(Pending Deployment) - Multi‑Agentic AI — a Next.js + Node.js system orchestrating multiple LLM agents via Ollama, with a modern React/Tailwind frontend.",
    image: "/images/Multi-Agent-AI.jpg",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vite", "Axios"],
    demoUrl: "#",
    githubUrl: "https://github.com/ex-rnd/multi-agentic-ai",
  },
  {
    title: "✨ Awesome Portfolio",
    description:
      "A modern Next.js 16 portfolio with a fully-wired contact form that ships messages straight to my inbox — built, debugged, and deployed on a Coolify VPS.",
    image: "/images/awesomeness.jpg",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Shadcn", "Resend", "Zod"],
    demoUrl: "https://awesomeportfolio.soullets.com",
    githubUrl: "https://github.com/ex-rnd/awesome-portfolio",
  },
  {
    title: "🪙 SureTact Finance",
    description:
      "A Node.js Express application that lets users initiate M-Pesa STK Push payments via Safaricom’s Daraja API 💳, complete with live ngrok tunneling, EJS views, and polling for transaction status.",
    image: "/images/suretact-finance.png",
    techStack: ["Node.js", "JavaScript", "EJS Views", "Daraja API", "MPesa STK Push"],
    demoUrl: "https://suretact.soullets.com",
    githubUrl: "https://github.com/ex-rnd/suretact",
  },
  {
    title: "🕵🏽 Obesity Condition Detector",
    description:
      "A Streamlit web app that predicts the obesity level of a person using a trained Deep Learning model.",
    image: "/images/health-predictor.jpg",
    techStack: ["Python", "Streamlit", "Jupyter Notebook"],
    demoUrl: "https://app-diabetes-condition-predictor.streamlit.app/",
    githubUrl: "https://github.com/ex-rnd/Streamlit-Obesity-Detector",
  },
  {
    title: "❤️ Heart Disease Predictor",
    description:
      "A Streamlit web app that predicts the risk of heart disease using a trained Logistic Regression model.",
    image: "/images/heart-detector.jpg",
    techStack: ["Python", "Streamlit", "Jupyter Notebook"],
    demoUrl: "https://app-heart-disease-predictor.streamlit.app/",
    githubUrl: "https://github.com/ex-rnd/Streamlit-Heart-Disease-Predictor",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Rust", icon: SettingsIcon },
      { name: "Lean", icon: FunctionSquareIcon },
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Flutter", icon: LayersIcon },
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "FastAPI", icon: FastForwardIcon },
      { name: "Spring Boot", icon: StarsIcon },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: WifiSyncIcon },
      { name: "Google", icon: CloudCogIcon },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];