import { ArrowUpRight, Github, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { projects, socials } from '../data'

export default function Projects() {
  return <section id="projects" className="section projects"><div className="container">
    <Reveal><div className="section-head project-head"><p className="eyebrow accent">03 — Selected work</p><h2>Ideas, made <em>tangible.</em></h2><p>Full-stack and AI products built around practical problems, clear interfaces, and useful technology.</p></div></Reveal>
    <div className="projects-grid">{projects.map((project, i) => { const Visual = project.visual; return <Reveal className="project-card" delay={i * .05} key={project.title}><div className={`project-art ${project.tone}`}><span>{project.code}</span><Visual className="project-visual" aria-hidden="true" /><small>{project.status}</small></div><div className="project-body"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={socials.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>{project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a> : <a href="#contact">Ask about it <MessageCircle size={16} /></a>}</div></div></Reveal> })}</div>
  </div></section>
}
