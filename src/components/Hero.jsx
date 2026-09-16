import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { socials } from '../data'

export default function Hero() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return <section id="home" className="hero" aria-label="Introduction">
    <div className="orb orb-one" /><div className="orb orb-two" /><div className="grid-lines" />
    <div className="container hero-inner">
      <motion.p className="eyebrow" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:.15}}>Open to internships &amp; full-time opportunities <i /> Greater Noida, India</motion.p>
      <div className="hero-main">
        <motion.div initial={{opacity:0, y:22}} animate={{opacity:1,y:0}} transition={{duration:.75, delay:.25}}>
          <p className="hero-label">B.Tech CSE <span>(AI & ML)</span></p>
          <h1>Ankush<br /><em>Poonia</em></h1>
          <p className="hero-role">Computer Science student, full-stack developer, and AI/ML enthusiast building practical products for real problems.</p>
          <div className="hero-actions"><button className="button primary" onClick={() => scroll('projects')}>View projects <ArrowDownRight size={17}/></button><button className="button ghost" onClick={() => scroll('contact')}>Contact me</button></div>
          <div className="hero-socials" aria-label="Social links"><a href={socials.github} target="_blank" rel="noreferrer"><Github /> <span>GitHub</span></a><a href={socials.linkedin} target="_blank" rel="noreferrer"><Linkedin /> <span>LinkedIn</span></a><a href={socials.email}><Mail /> <span>Email</span></a></div>
        </motion.div>
        <motion.div className="portrait-wrap" initial={{opacity:0, scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.85,delay:.35}}>
          <div className="portrait-ring" /><img src="/profile.jpg" alt="Ankush Poonia in a navy suit" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement.classList.add('photo-missing') }} />
          <span className="portrait-caption">Since 2026<br />Portfolio</span>
        </motion.div>
      </div>
      <div className="hero-bottom"><p>Turning curious ideas into useful digital experiences.</p><p>From product UI and APIs to databases and deployment, I enjoy bringing an idea all the way to a working result.</p></div>
    </div>
  </section>
}
