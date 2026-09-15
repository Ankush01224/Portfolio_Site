import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Hackathons', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const go = (label) => { document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
    <button className="brand" onClick={() => go('Home')} aria-label="Go to home">AP<span>.</span></button>
    <div className="desktop-links">{links.map((link) => <button key={link} onClick={() => go(link)}>{link}</button>)}</div>
    <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <div className="mobile-menu">{links.map((link) => <button key={link} onClick={() => go(link)}>{link}</button>)}</div>}
  </nav></header>
}
