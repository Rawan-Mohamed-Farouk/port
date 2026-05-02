import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.section-animate')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['About', 'Experience', 'Projects', 'Gallery', 'Contact']

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'rgba(245,240,232,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18 }}>RF</span>
        <div className="nav-links">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#0D0D0D', textDecoration: 'none', opacity: 0.7,
            }}>{l}</a>
          ))}
        </div>
        <a href="mailto:rawanmohamedf@gmail.com" className="hire-btn" style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          border: '1px solid #C9A84C', padding: '6px 16px', color: '#C9A84C',
          textDecoration: 'none', letterSpacing: '0.06em', borderRadius: 2,
        }}>Hire Me</a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 4,
          display: 'flex', flexDirection: 'column', gap: 5,
        }}>
          <span style={{ display: 'block', width: 24, height: 2, background: '#0D0D0D', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#0D0D0D', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#0D0D0D', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </nav>
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(245,240,232,0.98)', backdropFilter: 'blur(12px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700,
              color: '#0D0D0D', textDecoration: 'none',
            }}>{l}</a>
          ))}
          <a href="mailto:rawanmohamedf@gmail.com" style={{
            marginTop: 16, fontFamily: "'JetBrains Mono'", fontSize: 12,
            border: '1px solid #C9A84C', padding: '10px 28px', color: '#C9A84C',
            textDecoration: 'none', borderRadius: 2,
          }}>Hire Me</a>
        </div>
      )}
    </>
  )
}

function Hero() {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 24px 60px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <div>
          <div className="tag" style={{ marginBottom: 20 }}>AI / ML Engineer</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20 }}>
            Rawan<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Mohamed</em><br />Farouk
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#2A2D35', maxWidth: 440, marginBottom: 32, fontWeight: 300 }}>
            Computer Science student specializing in Intelligent Systems & AI at Alexandria National University. Building production-grade ML pipelines, computer vision systems, and AI-powered applications.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#experience" style={{ background: '#0D0D0D', color: '#F5F0E8', padding: '12px 24px', textDecoration: 'none', fontFamily: "'DM Sans'", fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 2 }}>View Work</a>
            <a href="https://www.linkedin.com/in/rawan-mohamed-67271225b/" target="_blank" rel="noreferrer" style={{ border: '1px solid #0D0D0D', color: '#0D0D0D', padding: '12px 24px', textDecoration: 'none', fontFamily: "'DM Sans'", fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 2 }}>LinkedIn</a>
          </div>
          <div className="stats-row" style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            {[['3.3','GPA'],['4+','Internships'],['10+','Projects'],['200+','Club Members']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#C9A84C' }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-photos" style={{ position: 'relative', height: 480 }}>
          <div className="photo-hover" style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '70%', borderRadius: 4, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.15)' }}>
            <Image src="/photos/arab-league-hall.jpeg" alt="Arab League Hall" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="photo-hover" style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '55%', borderRadius: 4, overflow: 'hidden', border: '4px solid #F5F0E8', boxShadow: '0 24px 64px rgba(0,0,0,0.15)' }}>
            <Image src="/photos/brightskies.jpeg" alt="BrightSkies" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div style={{ position: 'absolute', bottom: '18%', right: '4%', background: '#0D0D0D', color: '#F5F0E8', padding: '10px 14px', borderRadius: 4, zIndex: 10 }}>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 9, color: '#C9A84C', letterSpacing: '0.1em' }}>CURRENTLY</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 11, marginTop: 3 }}>CS @ ANU, Egypt</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 10, opacity: 0.5, marginTop: 2 }}>Expected 2026</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const experiences = [
    { company: 'Pharos Solutions', role: 'ML & AI Intern', period: 'Jul–Aug 2024 & Jul–Sep 2025', desc: 'Built OCR pipelines, RAG applications, and prompt engineering. Developed a CV parsing pipeline using Apache Tika and OpenAI models. Delivered Flask/REST demos containerized with Docker.', tags: ['Python','OCR','RAG','Docker','Flask'] },
    { company: 'BrightSkies', role: 'BrightDrive Intern', period: 'Jul–Sep 2025', desc: 'Competed in Kaggle house pricing challenge. Built CNN on Fashion-MNIST. Developed real-time computer vision system for driver safety.', tags: ['Computer Vision','CNN','Kaggle','Deep Learning'] },
    { company: 'DEPI', role: 'ML & AI Trainee → DevOps Trainee', period: 'Apr 2024 – Oct 2025', desc: 'Built BERT classifier for disaster-tweet categorization. CI/CD pipelines, Docker, Kubernetes, Ansible, Prometheus monitoring.', tags: ['BERT','NLP','CI/CD','Kubernetes','Ansible'] },
    { company: 'NTI', role: 'AI Trainee', period: 'Sep 2024', desc: 'Developed CNN for digit classification and PCA visualizations. Preprocessed data via outlier detection, SMOTE.', tags: ['CNN','PCA','SMOTE','Fraud Detection'] },
    { company: 'Mentorness', role: 'Data Analyst Intern', period: 'Jun–Jul 2024', desc: 'SQL queries on multi-million-row datasets. Built interactive Power BI dashboards delivering actionable insights.', tags: ['SQL','Power BI','Data Analysis'] },
  ]
  return (
    <section id="experience" style={{ padding: '80px 24px', background: '#0D0D0D' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate">
          <div className="tag" style={{ marginBottom: 16, borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>Experience</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 52px)', color: '#F5F0E8', fontWeight: 700, marginBottom: 48 }}>Where I&apos;ve Worked</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {experiences.map((exp, i) => (
            <div key={i} className="section-animate exp-row" style={{ padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#F5F0E8', fontWeight: 600 }}>{exp.company}</div>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#C9A84C', marginTop: 4, letterSpacing: '0.06em' }}>{exp.period}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans'", fontSize: 15, color: '#F5F0E8', fontWeight: 500, marginBottom: 8 }}>{exp.role}</div>
                <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.55)', lineHeight: 1.7, marginBottom: 12 }}>{exp.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {exp.tags.map(t => <span key={t} style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, padding: '3px 8px', border: '1px solid rgba(201,168,76,0.25)', color: 'rgba(201,168,76,0.7)', borderRadius: 2 }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    { title: 'Driver Safety System', desc: 'Real-time CV system detecting drowsiness and driver distractions using OpenCV and deep learning.', tags: ['OpenCV','Python','Computer Vision'] },
    { title: 'Face Recognition System', desc: 'PCA+LDA reduction with K-NN classifier achieving 92% accuracy on facial recognition.', tags: ['PCA','LDA','K-NN'] },
    { title: 'CV Parsing Pipeline', desc: 'Extracts and structures candidate data into JSON using Apache Tika and OpenAI models.', tags: ['Apache Tika','OpenAI','NLP'] },
    { title: 'BERT Disaster Tweets', desc: 'Fine-tuned BERT for classifying disaster-related tweets with automated data pipelines.', tags: ['BERT','PyTorch','NLP'] },
    { title: 'CNN on Fashion-MNIST', desc: 'Built CNN from scratch on Fashion-MNIST, optimizing architecture and hyperparameters.', tags: ['PyTorch','CNN','Deep Learning'] },
    { title: 'Revenue Prediction API', desc: 'RFM + PCA feature engineering with K-NN regressor, deployed as a Flask REST API.', tags: ['Flask','K-NN','PCA'] },
    { title: 'Car Store Website', desc: 'Full-stack app with React frontend, MySQL backend, and JWT authentication.', tags: ['React','MySQL','JWT'] },
    { title: 'Hotel Reservation System', desc: 'Java MVC application for managing hotel bookings and room management.', tags: ['Java','MVC','OOP'] },
  ]
  return (
    <section id="projects" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate" style={{ marginBottom: 48 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Projects</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 700 }}>Things I&apos;ve Built</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="section-animate project-card" style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: '24px 20px', background: 'rgba(255,255,255,0.5)', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600 }}>{p.title}</h3>
                <a href="https://github.com/Rawan-Mohamed-Farouk" target="_blank" rel="noreferrer" style={{ color: '#C9A84C', textDecoration: 'none', fontSize: 18, marginLeft: 8 }}>↗</a>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#6B7280', marginBottom: 14 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const cats = [
    { label: 'AI / ML', items: ['PyTorch','scikit-learn','BERT','CNNs','PCA','SMOTE','RAG','Prompt Engineering'] },
    { label: 'Computer Vision', items: ['OpenCV','scikit-fuzzy','CNN Architectures','Real-time Detection'] },
    { label: 'Data & Analytics', items: ['SQL','Power BI','Data Cleaning','Pandas','Matplotlib'] },
    { label: 'Engineering', items: ['Python','Java','JavaScript','React','Flask','REST APIs'] },
    { label: 'DevOps / Cloud', items: ['Docker','Kubernetes','Ansible','CI/CD','Prometheus'] },
    { label: 'Languages', items: ['Arabic (Native)','English (Fluent)','Turkish (Fluent)'] },
  ]
  return (
    <section style={{ padding: '80px 24px', background: '#F0EBE0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate" style={{ marginBottom: 48 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Toolkit</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700 }}>Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {cats.map((cat) => (
            <div key={cat.label} className="section-animate">
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#C9A84C', letterSpacing: '0.1em', marginBottom: 10 }}>{cat.label.toUpperCase()}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {cat.items.map(s => <span key={s} className="skill-pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const photos = [
    { src: '/photos/arab-league-podium.jpeg', caption: 'Speaking at Orientation day at ANU' },
    { src: '/photos/arab-league-hall.jpeg', caption: 'Arab League Main Hall' },
    { src: '/photos/speaking-is.jpeg', caption: 'Pharos Solutions — AI Team' },
    { src: 'public/photos/arab', caption: 'Arab League Main Hall' },
    { src: '/photos/group.jpeg', caption: 'ACPC Community Event' },
    { src: 'public/photos/pharos-pic', caption: 'Pharos Solutions' },
     { src: 'public/photos/Brightskies.jpeg', caption: 'Brightskies' }
  ]
  return (
    <section id="gallery" style={{ padding: '80px 24px', background: '#0D0D0D' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate" style={{ marginBottom: 48 }}>
          <div className="tag" style={{ marginBottom: 16, borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>Gallery</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 52px)', color: '#F5F0E8', fontWeight: 700 }}>Moments & Milestones</h2>
        </div>
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <div key={i} className="photo-hover section-animate gallery-item" style={{ borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
              <Image src={p.src} alt={p.caption} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', fontFamily: "'DM Sans'", fontSize: 12, color: '#F5F0E8' }}>{p.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="leadership-grid">
          <div className="section-animate">
            <div className="tag" style={{ marginBottom: 16 }}>Leadership</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, marginBottom: 24 }}>Building Communities</h2>
            <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 20, marginBottom: 28 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600 }}>Head — Pivots Community</div>
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#C9A84C', margin: '5px 0', letterSpacing: '0.08em' }}>DEC 2023 – PRESENT</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#6B7280' }}>Scaled AI club to 200+ members. Organized 10 hackathons and guest lectures.</p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: 20 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600 }}>Volunteer — Safwa Community</div>
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#C9A84C', margin: '5px 0', letterSpacing: '0.08em' }}>JAN 2020 – OCT 2023</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#6B7280' }}>Led HR & PR teams. Coordinated 15 events serving 500+ participants.</p>
            </div>
          </div>
          <div className="section-animate leadership-photo-wrap">
            <div className="photo-hover" style={{ position: 'relative', width: '100%', height: 300, borderRadius: 4, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
              <Image src="/photos/group.jpeg" alt="Community event" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ background: '#0D0D0D', padding: '16px 20px', borderRadius: 4, marginTop: 16, display: 'inline-block' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: '#C9A84C', fontWeight: 700 }}>200+</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: 'rgba(245,240,232,0.6)', marginTop: 2 }}>AI Club Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 24px', background: '#0D0D0D' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-animate">
          <div className="tag" style={{ marginBottom: 20, borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>Contact</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 64px)', color: '#F5F0E8', fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
            Let&apos;s Work<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Together</em>
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
            Open to internships, collaborations, and AI/ML opportunities. Based in Alexandria, Egypt.
          </p>
          <div className="contact-grid">
            {[
              { label: 'Email', href: 'mailto:rawanmohamedf@gmail.com', value: 'rawanmohamedf@gmail.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rawan-mohamed-67271225b/', value: 'rawan-mohamed' },
              { label: 'GitHub', href: 'https://github.com/Rawan-Mohamed-Farouk', value: 'GitHub' },
              { label: 'Phone', href: 'tel:+201091221840', value: '+20 109 122 1840' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '18px 16px', border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 4, textDecoration: 'none', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.background = 'rgba(201,168,76,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#C9A84C', letterSpacing: '0.1em', marginBottom: 5 }}>{c.label}</span>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: 'rgba(245,240,232,0.7)', wordBreak: 'break-all', textAlign: 'center' }}>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ padding: '20px 24px', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16 }}>RF</span>
      <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#6B7280', letterSpacing: '0.1em' }}>© 2026 RAWAN FAROUK</span>
    </footer>
  )
}

export default function Home() {
  useReveal()
  return (
    <>
      <Head>
        <title>Rawan Mohamed Farouk — AI/ML Engineer</title>
        <meta name="description" content="Portfolio of Rawan Mohamed Farouk — AI and Machine Learning Engineer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>R</text></svg>" />
      </Head>
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Gallery />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <style>{`
        .nav-links { display: flex; gap: 28px; }
        .hire-btn  { display: inline-block; }
        .hamburger { display: none; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hero-photos { display: block; }
        .stats-row { display: flex; gap: 32px; flex-wrap: wrap; }
        .exp-row { display: grid; grid-template-columns: 180px 1fr; gap: 32px; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .project-card:hover { border-color: #C9A84C !important; transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .gallery-item { height: 220px; }
        .leadership-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .leadership-photo-wrap { display: block; }
        .contact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }

        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .skills-grid   { grid-template-columns: repeat(2, 1fr); }
          .contact-grid  { grid-template-columns: repeat(2, 1fr); }
          .leadership-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        @media (max-width: 640px) {
          .nav-links { display: none; }
          .hire-btn  { display: none; }
          .hamburger { display: flex; }
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-photos { height: 280px; }
          .stats-row { gap: 20px; }
          .exp-row { grid-template-columns: 1fr; gap: 4px; }
          .projects-grid { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: 1fr; gap: 24px; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .gallery-item { height: 160px; }
          .contact-grid { grid-template-columns: repeat(2, 1fr); }
          .leadership-photo-wrap { display: none; }
        }
      `}</style>
    </>
  )
}
