import { Bot, Code2, Database, GraduationCap, KeyRound, LayoutPanelTop, Server, Sprout } from 'lucide-react'

export const skills = [
  { title: 'Languages', icon: Code2, items: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend', icon: LayoutPanelTop, items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'] },
  { title: 'Backend & Auth', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'JWT', 'bcrypt'] },
  { title: 'Data & AI', icon: Database, items: ['MongoDB', 'PostgreSQL', 'ChromaDB', 'RAG', 'Gemini API', 'Vector Search'] },
  { title: 'Tools & Workflow', icon: KeyRound, items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Postman'] },
]

export const projects = [
  { title: 'Agri Farm', code: '01', status: 'Live', visual: Sprout, description: 'A role-based full-stack platform connecting farmers, agricultural workers, and crop buyers to reduce delayed sales and labour shortages.', tags: ['React', 'Node.js', 'MongoDB', 'JWT'], tone: 'lime', live: 'https://agri-farm-rouge.vercel.app/' },
  { title: 'IP-SAKTI Sahayak', code: '02', status: 'Hackathon entry', visual: Database, description: 'An AI-powered RAG assistant for Ayurveda IP and regulatory questions, grounded in trusted documents with page citations.', tags: ['RAG', 'Gemini API', 'ChromaDB', 'React'], tone: 'blue', live: 'https://ip-sakti-phi.vercel.app/' },
  { title: 'Anova AI', code: '03', status: 'Live', visual: Bot, description: 'A collection of conversational AI assistants for practical task automation through intelligent workflows and prompt engineering.', tags: ['Generative AI', 'AI Agents', 'Prompt Engineering'], tone: 'purple', live: 'https://anova-ai-one.vercel.app/' },
  { title: 'Personal Portfolio', code: '04', status: 'Built', visual: LayoutPanelTop, description: 'A responsive portfolio that brings together projects, technical strengths, and a learning journey in one focused experience.', tags: ['React', 'Tailwind CSS', 'Framer Motion'], tone: 'orange' },
  { title: 'School Website', code: '05', status: 'Built', visual: GraduationCap, description: 'A clean, responsive school website frontend with modern navigation and a user-focused interface.', tags: ['JavaScript', 'React', 'Responsive UI'], tone: 'pink' },
]

export const socials = {
  github: 'https://github.com/Ankush01224',
  linkedin: 'https://www.linkedin.com/in/ankush-poonia-83897a330',
  email: 'mailto:ankushpoonia4896@gmail.com',
}
