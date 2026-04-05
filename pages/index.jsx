import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// ── Intersection Observer hook ─────────────────────────────────
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

// ── Nav ────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['About', 'Experience', 'Projects', 'Gallery', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '16px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      background: scrolled ? 'rgba(245,240,232,0.85)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>
        RF
      </span>
      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 32 }} className="hidden-mobile">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#0D0D0D', textDecoration: 'none',
            opacity: 0.7, transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.7}
          >{l}</a>
        ))}
      </div>
      <a href="mailto:rawanmohamedf@gmail.com" style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        border: '1px solid #C9A84C', padding: '6px 16px', color: '#C9A84C',
        textDecoration: 'none', letterSpacing: '0.06em', borderRadius: 2,
        transition: 'all 0.2s ease',
      }}
        onMouseEnter={e => { e.target.style.background = '#C9A84C'; e.target.style.color = '#0D0D0D' }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#C9A84C' }}
      >
        Hire Me
      </a>
    </nav>
  )
}

// ── Hero ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="about" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 40px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: '40%',
        width: 1, height: '60%',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div className="tag" style={{ marginBottom: 24 }}>AI / ML Engineer</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700, lineHeight: 1.05,
            letterSpacing: '-0.03em', marginBottom: 24,
          }}>
            Rawan<br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Mohamed</em><br />
            Farouk
          </h1>
          <p style={{
            fontSize: 16, lineHeight: 1.8, color: '#2A2D35', maxWidth: 440,
            marginBottom: 40, fontWeight: 300,
          }}>
            Computer Science student specializing in Intelligent Systems & AI at Alexandria National University.
            Building production-grade ML pipelines, computer vision systems, and AI-powered applications.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#experience" style={{
              background: '#0D0D0D', color: '#F5F0E8',
              padding: '12px 28px', textDecoration: 'none',
              fontFamily: "'DM Sans'", fontSize: 13, letterSpacing: '0.06em',
              textTransform: 'uppercase', borderRadius: 2,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)' }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
            >
              View Work
            </a>
            <a href="https://www.linkedin.com/in/rawan-mohamed" target="_blank" rel="noreferrer" style={{
              border: '1px solid #0D0D0D', color: '#0D0D0D',
              padding: '12px 28px', textDecoration: 'none',
              fontFamily: "'DM Sans'", fontSize: 13, letterSpacing: '0.06em',
              textTransform: 'uppercase', borderRadius: 2,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = '#0D0D0D'; e.target.style.color = '#F5F0E8' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#0D0D0D' }}
            >
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 60, paddingTop: 40, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            {[['3.3', 'GPA'], ['4+', 'Internships'], ['10+', 'Projects'], ['200+', 'Club Members']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#C9A84C' }}>{n}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo collage */}
        <div style={{ position: 'relative', height: 560 }}>
          <div className="photo-hover" style={{
            position: 'absolute', top: 0, right: 0, width: 300, height: 380,
            borderRadius: 4, overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
          }}>
            <Image src="/photos/arab-league-hall.jpeg" alt="Arab League Hall" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="photo-hover" style={{
            position: 'absolute', bottom: 0, left: 0, width: 240, height: 300,
            borderRadius: 4, overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
            border: '4px solid #F5F0E8',
          }}>
            <Image src="/photos/brightskies.jpeg" alt="BrightSkies" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div style={{
            position: 'absolute', bottom: 80, right: 30,
            background: '#0D0D0D', color: '#F5F0E8',
            padding: '12px 16px', borderRadius: 4, zIndex: 10,
          }}>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#C9A84C', letterSpacing: '0.1em' }}>CURRENTLY</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 12, marginTop: 4 }}>CS @ ANU, Egypt</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 11, opacity: 0.5, marginTop: 2 }}>Expected 2026</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Experience ─────────────────────────────────────────────────
function Experience() {
  const experiences = [
    {
      company: 'Pharos Solutions',
      role: 'ML & AI Intern',
      period: 'Jul–Aug 2024 & Jul–Sep 2025',
      desc: 'Built OCR pipelines, RAG applications, and prompt engineering. Developed a CV parsing pipeline using Apache Tika and OpenAI models. Delivered Flask/REST demos containerized with Docker.',
      tags: ['Python', 'OCR', 'RAG', 'Docker', 'Flask'],
      img: '/photos/pharos-cert.jpeg',
    },
    {
      company: 'BrightSkies',
      role: 'BrightDrive Intern',
      period: 'Jul–Sep 2025',
      desc: 'Competed in Kaggle house pricing challenge. Built CNN on Fashion-MNIST. Developed real-time computer vision system for driver safety — drowsiness & distraction detection.',
      tags: ['Computer Vision', 'CNN', 'Kaggle', 'Deep Learning'],
      img: '/photos/brightskies.jpeg',
    },
    {
      company: 'DEPI',
      role: 'ML & AI Trainee → DevOps Trainee',
      period: 'Apr 2024 – Oct 2025',
      desc: 'Built BERT classifier for disaster-tweet categorization. Gained hands-on experience in CI/CD pipelines, Docker, Kubernetes, Ansible, Prometheus monitoring.',
      tags: ['BERT', 'NLP', 'CI/CD', 'Kubernetes', 'Ansible'],
      img: '/photos/cert-brightengine.jpeg',
    },
    {
      company: 'NTI',
      role: 'AI Trainee',
      period: 'Sep 2024',
      desc: 'Developed CNN for digit classification and PCA visualizations. Studied ML/DL applications including fraud detection and chatbots. Preprocessed data via outlier detection, SMOTE.',
      tags: ['CNN', 'PCA', 'SMOTE', 'Fraud Detection'],
      img: null,
    },
    {
      company: 'Mentorness',
      role: 'Data Analyst Intern',
      period: 'Jun–Jul 2024',
      desc: 'Authored SQL queries on multi-million-row datasets. Built interactive Power BI dashboards. Cleaned and imputed data to deliver actionable business insights.',
      tags: ['SQL', 'Power BI', 'Data Analysis'],
      img: null,
    },
  ]

  return (
    <section id="experience" style={{ padding: '100px 40px', background: '#0D0D0D' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate">
          <div className="tag" style={{ marginBottom: 16, borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>Experience</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)',
            color: '#F5F0E8', fontWeight: 700, marginBottom: 60,
          }}>
            Where I've Worked
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {experiences.map((exp, i) => (
            <div key={i} className="section-animate" style={{
              display: 'grid', gridTemplateColumns: '1fr 3fr',
              gap: 40, padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.3s ease', cursor: 'default',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ paddingTop: 4 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#F5F0E8', fontWeight: 600 }}>
                  {exp.company}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: '#C9A84C', marginTop: 6, letterSpacing: '0.06em' }}>
                  {exp.period}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans'", fontSize: 16, color: '#F5F0E8', fontWeight: 500, marginBottom: 8 }}>
                  {exp.role}
                </div>
                <p style={{ fontSize: 14, color: 'rgba(245,240,232,0.55)', lineHeight: 1.7, marginBottom: 16 }}>
                  {exp.desc}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {exp.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: "'JetBrains Mono'", fontSize: 10, padding: '3px 8px',
                      border: '1px solid rgba(201,168,76,0.25)', color: 'rgba(201,168,76,0.7)',
                      borderRadius: 2, letterSpacing: '0.05em',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Projects ───────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      title: 'Driver Safety System',
      desc: 'Real-time computer vision system detecting drowsiness and driver distractions using OpenCV and deep learning.',
      tags: ['OpenCV', 'Python', 'Computer Vision', 'Deep Learning'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
    {
      title: 'Face Recognition System',
      desc: 'PCA+LDA dimensionality reduction combined with K-NN classifier achieving 92% accuracy on facial recognition.',
      tags: ['PCA', 'LDA', 'K-NN', 'scikit-learn'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
    {
      title: 'CV Parsing Pipeline',
      desc: 'Extracts and structures candidate data from CVs into JSON using Apache Tika, OpenAI models, and NLP techniques.',
      tags: ['Apache Tika', 'OpenAI', 'NLP', 'Python'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
    {
      title: 'BERT Disaster Tweet Classifier',
      desc: 'Fine-tuned BERT model for classifying disaster-related tweets. Automated data-processing pipelines.',
      tags: ['BERT', 'NLP', 'PyTorch', 'Transformers'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
    {
      title: 'CNN on Fashion-MNIST',
      desc: 'Built CNN from scratch on Fashion-MNIST dataset for clothing classification, optimizing architecture and hyperparameters.',
      tags: ['PyTorch', 'CNN', 'Deep Learning'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
    {
      title: 'Revenue Prediction API',
      desc: 'RFM + PCA feature engineering with K-NN regressor, deployed as a Flask REST API. Achieved MAPE improvement.',
      tags: ['Flask', 'K-NN', 'PCA', 'REST API'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
    {
      title: 'Car Store Website',
      desc: 'Full-stack web app with React frontend, MySQL backend, and JWT authentication for a car dealership.',
      tags: ['React', 'MySQL', 'JWT', 'Node.js'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
    {
      title: 'Hotel Reservation System',
      desc: 'Java MVC application for managing hotel bookings with a full reservation and room management workflow.',
      tags: ['Java', 'MVC', 'OOP'],
      github: 'https://github.com/Rawan-Mohamed-Farouk',
    },
  ]

  return (
    <section id="projects" style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate" style={{ marginBottom: 60 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Projects</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)',
            fontWeight: 700,
          }}>
            Things I've Built
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i} className="section-animate" style={{
              border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4,
              padding: '28px 24px',
              transition: 'all 0.3s ease',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(4px)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C9A84C'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600 }}>{p.title}</h3>
                <a href={p.github} target="_blank" rel="noreferrer" style={{ color: '#C9A84C', textDecoration: 'none', fontSize: 20, marginLeft: 12 }}>↗</a>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#6B7280', marginBottom: 16 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map(t => (
                  <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Skills ─────────────────────────────────────────────────────
function Skills() {
  const cats = [
    { label: 'AI / ML', items: ['PyTorch', 'scikit-learn', 'BERT', 'CNNs', 'PCA', 'SMOTE', 'RAG', 'Prompt Engineering'] },
    { label: 'Computer Vision', items: ['OpenCV', 'scikit-fuzzy', 'CNN Architectures', 'Real-time Detection'] },
    { label: 'Data & Analytics', items: ['SQL', 'Power BI', 'Data Cleaning', 'Pandas', 'Matplotlib'] },
    { label: 'Engineering', items: ['Python', 'Java', 'JavaScript', 'React', 'Flask', 'REST APIs', 'Docker', 'Kubernetes'] },
    { label: 'DevOps / Cloud', items: ['Docker', 'Kubernetes', 'Ansible', 'CI/CD', 'Prometheus', 'Apache Tika'] },
    { label: 'Languages', items: ['Arabic (Native)', 'English (Fluent)', 'Turkish (Fluent)'] },
  ]

  return (
    <section style={{ padding: '80px 40px', background: '#F0EBE0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate" style={{ marginBottom: 50 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Toolkit</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700 }}>
            Skills & Technologies
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 32 }}>
          {cats.map((cat) => (
            <div key={cat.label} className="section-animate">
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: '#C9A84C', letterSpacing: '0.1em', marginBottom: 12 }}>
                {cat.label.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map(s => <span key={s} className="skill-pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Gallery ────────────────────────────────────────────────────
function Gallery() {
  const photos = [
    { src: '/photos/arab-league-podium.jpeg', caption: 'Speaking at the Arab League', span: 1 },
    { src: '/photos/arab-league-hall.jpeg', caption: 'Arab League Main Hall', span: 1 },
    { src: '/photos/speaking-is.jpeg', caption: 'Presenting at Alexandria National University', span: 1 },
    { src: '/photos/cert-brightengine.jpeg', caption: 'BrightEngine Certificate of Completion', span: 1 },
    { src: '/photos/group.jpeg', caption: 'ACFC Community Event', span: 1 },
    { src: '/photos/pharos-cert.jpeg', caption: 'Pharos Solutions — AI Team Internship', span: 1 },
  ]

  return (
    <section id="gallery" style={{ padding: '100px 40px', background: '#0D0D0D' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-animate" style={{ marginBottom: 60 }}>
          <div className="tag" style={{ marginBottom: 16, borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>Gallery</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)', color: '#F5F0E8', fontWeight: 700 }}>
            Moments & Milestones
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {photos.map((p, i) => (
            <div key={i} className="photo-hover section-animate" style={{
              gridColumn: `span ${p.span}`,
              borderRadius: 4, overflow: 'hidden',
              height: p.span === 2 ? 280 : 220,
              position: 'relative', cursor: 'pointer',
            }}>
              <Image src={p.src} alt={p.caption} fill style={{ objectFit: 'cover' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                opacity: 0, transition: 'opacity 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 16px',
                  fontFamily: "'DM Sans'", fontSize: 13, color: '#F5F0E8', letterSpacing: '0.02em',
                }}>
                  {p.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Leadership ─────────────────────────────────────────────────
function Leadership() {
  return (
    <section style={{ padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div className="section-animate">
          <div className="tag" style={{ marginBottom: 16 }}>Leadership</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, marginBottom: 24 }}>
            Building Communities
          </h2>
          <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 24, marginBottom: 32 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600 }}>Head — Pivots Community</div>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: '#C9A84C', margin: '6px 0', letterSpacing: '0.08em' }}>DEC 2023 – PRESENT</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#6B7280' }}>
              Scaled AI club to 200+ members. Organized 10 hackathons and guest lectures.
              Creating a vibrant ecosystem for students to explore AI, machine learning, and technology.
            </p>
          </div>
          <div style={{ borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: 24 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600 }}>Volunteer — Safwa Community</div>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: '#C9A84C', margin: '6px 0', letterSpacing: '0.08em' }}>JAN 2020 – OCT 2023</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#6B7280' }}>
              Led HR & PR teams. Coordinated 15 events serving 500+ participants.
              Developed strong skills in event management and cross-functional team leadership.
            </p>
          </div>
        </div>
        <div className="section-animate" style={{ position: 'relative', height: 420 }}>
          <div className="photo-hover" style={{
            position: 'absolute', top: 0, right: 0, width: '75%', height: 320,
            borderRadius: 4, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
          }}>
            <Image src="/photos/group.jpeg" alt="Community event" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0,
            background: '#0D0D0D', padding: '20px 24px', borderRadius: 4, width: 200,
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: '#C9A84C', fontWeight: 700 }}>200+</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: 'rgba(245,240,232,0.6)', marginTop: 4 }}>AI Club Members</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact ────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 40px', background: '#0D0D0D' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-animate">
          <div className="tag" style={{ marginBottom: 20, borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>Contact</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 6vw, 64px)',
            color: '#F5F0E8', fontWeight: 700, lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Let's Work<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Together</em>
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 16, lineHeight: 1.8, marginBottom: 48 }}>
            I'm open to internships, collaborations, and exciting AI/ML opportunities.
            Currently based in Alexandria, Egypt.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Email', href: 'mailto:rawanmohamedf@gmail.com', value: 'rawanmohamedf@gmail.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rawan-mohamed', value: 'rawan-mohamed' },
              { label: 'GitHub', href: 'https://github.com/Rawan-Mohamed-Farouk', value: 'GitHub' },
              { label: 'Phone', href: 'tel:+201091221840', value: '+20 109 122 1840' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '20px 28px', border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 4, textDecoration: 'none',
                transition: 'all 0.3s ease', minWidth: 140,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.background = 'rgba(201,168,76,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#C9A84C', letterSpacing: '0.1em', marginBottom: 6 }}>{c.label}</span>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: 'rgba(245,240,232,0.7)' }}>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: '24px 40px', borderTop: '1px solid rgba(0,0,0,0.08)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16 }}>RF</span>
      <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: '#6B7280', letterSpacing: '0.1em' }}>
        © 2026 RAWAN FAROUK
      </span>
    </footer>
  )
}

// ── Main ───────────────────────────────────────────────────────
export default function Home() {
  useReveal()

  return (
    <>
      <Head>
        <title>Rawan Mohamed Farouk — AI/ML Engineer</title>
        <meta name="description" content="Portfolio of Rawan Mohamed Farouk — Computer Science student specializing in AI and Machine Learning at Alexandria National University." />
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
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
