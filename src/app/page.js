"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const skills = [
  { title: "Core", items: ["JavaScript", "HTML", "CSS"] },
  { title: "Frameworks & libraries", items: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "Axios", "Mapbox GL JS", "jsPDF", "jsPDF-AutoTable", "Ant Design", "Framer Motion", "React Icons", "Lucide React"] },
  { title: "Ways of working", items: ["Component-based architecture", "State management", "Agile methodologies", "Collaborative development", "Branch-based Git workflows"] },
];

const roles = [
  {
    company: "Mcabee Digital", location: "Kochi", title: "Software Development Engineer", dates: "Mar 2025 — Sep 2026", current: true,
    points: [
      "Built and maintained production web applications with React and Next.js, focusing on performance, reusable components, and clean UI architecture.",
      "Integrated REST APIs with Axios, including authentication, pagination, error handling, and asynchronous workflows.",
      "Implemented multi-step forms, validation, role-based access, and data-driven interfaces; managed shared state with Zustand.",
      "Delivered responsive, mobile-first interfaces from Figma and collaborated with backend teams through Swagger API contracts.",
      "Worked in Agile teams using Jira and Git, contributing to sprint planning, code reviews, and delivery coordination.",
    ],
  },
  {
    company: "Vconsol Innovations Pvt Ltd", location: "Alappuzha", title: "Frontend Developer", dates: "Aug 2023 — Mar 2025",
    points: [
      "Developed scalable, responsive applications using React, Next.js, and Tailwind CSS, with a focus on user experience and performance.",
      "Collaborated with designers, developers, and clients in remote teams to deliver web applications smoothly.",
      "Worked with cross-functional teams to shape frontend solutions around project goals and user needs.",
    ],
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    nodes.forEach((node) => revealObserver.observe(node));

    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

    let frame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--hero-parallax", `${Math.min(window.scrollY * 0.12, 76)}px`);
      });
    };
    window.addEventListener("scroll", updateParallax, { passive: true });
    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); window.removeEventListener("scroll", updateParallax); cancelAnimationFrame(frame); };
  }, []);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Albin Anto home">AA<span>.</span></a>
        <nav aria-label="Main navigation">
          {[ ["home", "Home"], ["about", "About"], ["experience", "Experience"], ["skills", "Skills"] ].map(([id, label]) => (
            <a key={id} className={active === id ? "nav-link active" : "nav-link"} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <a className="nav-contact" href="mailto:albinanto06@gmail.com">Let’s talk <Arrow diagonal /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow intro-up"><span className="live-dot" /> AVAILABLE FOR THE NEXT CHALLENGE</div>
          <p className="hero-kicker intro-up delay-1">FRONTEND DEVELOPER <span>·</span> DUBAI, UAE</p>
          <h1 className="intro-up delay-2">Albin Anto<br /><em>Devasia.</em></h1>
          <p className="hero-description intro-up delay-3">I turn complex ideas into <span>clear, thoughtful</span><br className="desktop-break" /> digital experiences people love to use.</p>
          <div className="hero-actions intro-up delay-4">
            <a className="button button-primary" href="#experience">Explore my work <Arrow /></a>
            <a className="button button-text" href="/AlbinAnto-Resume.pdf" download>Download CV <span className="download-icon">↓</span></a>
          </div>
          <div className="hero-socials intro-up delay-4"><span>FIND ME</span><a href="https://www.linkedin.com/in/albin-anto06/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/Albin213" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-sun" />
          <div className="portrait-wrap"><Image className="portrait" src="/albin-anto.png" alt="Albin Anto Devasia" fill priority sizes="(max-width: 640px) 76vw, 42vw" /></div>
          <div className="portrait-note"><span className="portrait-note-dot" /> BUILT WITH INTENTION</div>
          <div className="art-caption"><span>ALBIN ANTO DEVASIA</span><span>DESIGN · CODE · DETAIL</span></div>
          <div className="art-stamp">CRAFT<br />OVER<br />NOISE</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /><span>01 — 04</span></div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="section-label" data-reveal><span>01</span> A LITTLE ABOUT ME</div>
        <div className="intro-content" data-reveal>
          <h2>Good interfaces feel<br />effortless. <em>They aren’t.</em></h2>
          <div className="intro-text"><p>I’m a frontend developer with <strong>3 years of experience</strong> building scalable, responsive web applications with React, Next.js, and Tailwind CSS.</p><p>I enjoy the details behind a great experience: considered component systems, reliable API integrations, and interfaces that stay intuitive as they grow. I work closely with designers, backend engineers, and product teams to turn ambitious ideas into polished, dependable software.</p><a className="inline-link" href="mailto:albinanto06@gmail.com">Have a role in mind? Let’s talk <Arrow diagonal /></a></div>
        </div>
        <div className="facts-row" data-reveal>
          <div className="fact"><strong>03<span>+</span></strong><small>YEARS BUILDING FOR THE WEB</small></div>
          <div className="fact"><strong>02</strong><small>TEAMS &mdash; AND COUNTING</small></div>
          <div className="fact"><strong>∞</strong><small>DETAILS WORTH SWEATING</small></div>
          <div className="fact-note">Curious by default.<br />Thoughtful by design.</div>
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="section-label" data-reveal><span>02</span> THE JOURNEY SO FAR</div>
        <div className="experience-heading" data-reveal><h2>Experience that<br /><em>makes an impact.</em></h2><p>Thoughtful work, shared ownership,<br />and a steady focus on the details.</p></div>
        <div className="timeline">
          {roles.map((role, index) => <article className="role-card" data-reveal key={role.company}>
            <div className="timeline-index"><span>0{index + 1}</span><i /></div>
            <div className="role-main"><div className="role-heading"><div><p className="role-title">{role.title}</p><h3>{role.company}<span className="period">.</span></h3></div><div className="role-meta"><span>{role.dates}</span><span>{role.location}</span></div></div><ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
          </article>)}
        </div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-label" data-reveal><span>03</span> MY TOOLKIT</div>
        <div className="skills-heading" data-reveal><h2>Tools for turning<br /><em>good ideas real.</em></h2><p>The right tool matters.<br />Knowing when to use it matters more.</p></div>
        <div className="skills-grid" data-reveal>{skills.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="section-label" data-reveal><span>04</span> THE NEXT CHAPTER</div>
        <div className="contact-content" data-reveal><p className="contact-overline">GOOD THINGS START WITH A CONVERSATION</p><h2>Let’s make<br /><em>something matter.</em></h2><a className="contact-link" href="mailto:albinanto06@gmail.com">albinanto06@gmail.com <Arrow diagonal /></a></div>
        <div className="contact-details" data-reveal><a href="tel:+971559447696">+971 55 944 7696</a><span>Based in Dubai, UAE</span><a href="https://www.linkedin.com/in/albin-anto06/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/Albin213" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a className="button button-outline" href="/AlbinAnto-Resume.pdf" download>Get my CV <span className="download-icon">↓</span></a></div>
      </section>

      <footer className="footer"><a className="wordmark" href="#home">AA<span>.</span></a><span>DESIGNED WITH INTENTION. BUILT WITH CARE.</span><a href="#home">BACK TO TOP ↑</a><small>© 2026 ALBIN ANTO DEVASIA</small></footer>
    </main>
  );
}
