import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { socials } from '../data'

// Replace these values with credentials from your EmailJS dashboard before deploying.
const EMAILJS_CONFIG = { SERVICE_ID: 'YOUR_SERVICE_ID', TEMPLATE_ID: 'YOUR_TEMPLATE_ID', PUBLIC_KEY: 'YOUR_PUBLIC_KEY' }
const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', text: '' })
  const [sending, setSending] = useState(false)
  const submit = async (event) => {
    event.preventDefault(); setStatus({ type: '', text: '' })
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return setStatus({ type: 'error', text: 'Please complete all fields.' })
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setStatus({ type: 'error', text: 'Please enter a valid email address.' })
    if (Object.values(EMAILJS_CONFIG).some(value => value.startsWith('YOUR_'))) return setStatus({ type: 'error', text: 'EmailJS is not configured yet. Add your credentials in Contact.jsx.' })
    setSending(true)
    try { await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, { from_name: form.name, from_email: form.email, message: form.message, to_name: 'Ankush Poonia' }, { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }); setForm(initialForm); setStatus({ type: 'success', text: 'Thanks — your message is on its way!' }) } catch { setStatus({ type: 'error', text: 'Something went wrong. Please try email directly instead.' }) } finally { setSending(false) }
  }
  return <section id="contact" className="section contact"><div className="container"><Reveal><p className="eyebrow accent">06 — Get in touch</p></Reveal><div className="contact-grid"><Reveal><div className="contact-intro"><h2>Let’s build<br /><em>together.</em></h2><p>Have an interesting project, internship opportunity, or simply want to connect? Feel free to reach out.</p><div className="contact-methods"><a href={socials.email}><Mail size={18} /><span><small>Email</small>ankushpoonia4896@gmail.com</span></a><a href="tel:+919588167139"><Phone size={18} /><span><small>Phone</small>+91 9588167139</span></a><a href={socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LinkedIn</small>Connect with me</span></a><a href={socials.github} target="_blank" rel="noreferrer"><Github size={18} /><span><small>GitHub</small>@Ankush01224</span></a></div></div></Reveal><Reveal delay={.12}><form className="contact-form" onSubmit={submit} noValidate><label>Your name<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Email address<input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Message<textarea rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your idea..." /></label>{status.text && <p className={`form-status ${status.type}`} role="status">{status.type === 'success' && <CheckCircle2 size={17} />} {status.text}</p>}<button className="button primary submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <span>↗</span></button></form></Reveal></div></div></section>
}
