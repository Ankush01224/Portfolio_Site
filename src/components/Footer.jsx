import { Github, Linkedin, Mail } from 'lucide-react'
import { socials } from '../data'
export default function Footer() { return <footer><div className="container footer-inner"><p>© 2026 Ankush Poonia. Built with React &amp; Vite.</p><div><a href={socials.github} aria-label="GitHub"><Github size={17}/></a><a href={socials.linkedin} aria-label="LinkedIn"><Linkedin size={17}/></a><a href={socials.email} aria-label="Email"><Mail size={17}/></a></div></div></footer> }
