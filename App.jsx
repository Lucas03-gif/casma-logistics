import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from './assets/logo-placeholder.png'

export default function App(){
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''})
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
      })
      if(res.ok){ setStatus('sent'); setForm({name:'',email:'',phone:'',message:''}) }
      else { const data = await res.json(); setStatus('error: '+(data.error||res.statusText)) }
    }catch(err){ setStatus('error: '+err.message) }
  }

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <img src={logo} alt="Casma Logo" className="logo-small" />
            <div className="brand-text">
              <h1>Casma Logistics</h1>
              <p className="tagline">Smart • Simple • Cost Effective</p>
            </div>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section id="home" className="hero">
          <motion.h2 initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>Reliable Transport & Logistics Solutions</motion.h2>
          <p className="lead">Casma Logistics connects businesses with fast, affordable, and dependable delivery and freight solutions across Tanzania and East Africa.</p>
          <a className="btn" href="#contact">Request a Quote</a>
        </section>
        <section id="contact" className="section">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required/>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required/>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone Number"/>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required/>
            <button type="submit" className="btn">Send Message</button>
          </form>
          <div className="status" aria-live="polite" style={{marginTop:12}}>
            {status === 'sending' && <p>Sending…</p>}
            {status === 'sent' && <p>Thanks — your message was sent.</p>}
            {status.startsWith('error') && <p style={{color:'red'}}>{status}</p>}
          </div>
        </section>
      </main>
      <footer className="site-footer"><p>© {new Date().getFullYear()} Casma Logistics. All rights reserved.</p></footer>
    </div>
  )
}
