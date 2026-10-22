import React, { useEffect, useRef, useState } from 'react';
import '../styles.css';

const navigation = [
  ['inicio', 'Inicio', 'fa-terminal'],
  ['sobre-mi', 'Sobre Mí', 'fa-user-ninja'],
  ['proyectos', 'Proyectos', 'fa-code-branch'],
  ['certificados', 'Certificados', 'fa-certificate'],
  ['contacto', 'Contacto', 'fa-satellite-dish'],
];

const projects = [
  {
    badge: 'CYBER_TOOL #01',
    icon: 'fa-shield-halved',
    title: 'CyberShield Scanner CLI',
    description:
      'Escáner automatizado de vulnerabilidades en Python con soporte multihilo. Analiza puertos abiertos, versiones obsoletas de servicios y genera reportes interactivos en HTML/JSON.',
    tags: ['Python', 'Nmap API', 'Sockets', 'CLI'],
    details: 'Escáner de vulnerabilidades multihilo para auditorías rápidas de infraestructura de red.',
    technologies: 'Python, Asyncio, Socket API',
    url: 'https://github.com/jofrandev/cybershield-scanner',
  },
  {
    badge: 'SOC_MODULE #02',
    icon: 'fa-chart-line',
    title: 'SentinelLog SIEM Analyzer',
    description:
      'Motor de correlación de eventos y análisis sintáctico de logs (Syslog, Auth.log, Apache/Nginx). Detecta ataques de fuerza bruta, escaneos de puertos e inyecciones SQL en tiempo real.',
    tags: ['Python', 'Regex', 'ELK Stack', 'SIEM'],
    details: 'Analizador de patrones anómalos y correlador de eventos para centros de operaciones de seguridad.',
    technologies: 'Python, Elasticsearch, Syslog Parser',
    url: 'https://github.com/jofrandev/sentinellog-siem',
  },
  {
    badge: 'NET_DEFENSE #03',
    icon: 'fa-network-wired',
    title: 'NetPulse IDS Packet Sniffer',
    description:
      'Inspector de paquetes de red y Sistema de Detección de Intrusiones (IDS) liviano. Captura tráfico raw, detecta anomalías de protocolos TCP/UDP e identifica posibles fugas de datos.',
    tags: ['C / Python', 'Scapy', 'Wireshark Rules', 'IDS'],
    details: 'Herramienta de monitoreo de tráfico de red a bajo nivel para detección de paquetes maliciosos.',
    technologies: 'Python, Scapy, Raw Sockets',
    url: 'https://github.com/jofrandev/netpulse-ids',
  },
  {
    badge: 'OSINT_FRAMEWORK #04',
    icon: 'fa-globe',
    title: 'OSINT-Crawler Threat Intel',
    description:
      'Herramienta de recolección de inteligencia en fuentes abiertas (OSINT). Automatiza la búsqueda de fugas de credenciales en pastebins, enumeración de subdominios y metadatos de documentos.',
    tags: ['JavaScript', 'Node.js', 'OSINT APIs', 'Crawler'],
    details: 'Framework de reconocimiento defensivo y monitoreo de exposición de marcas y dominios.',
    technologies: 'Node.js, Web Scraping, Shodan API',
    url: 'https://github.com/jofrandev/osint-crawler',
  },
  {
    badge: 'API_SECURITY #05',
    icon: 'fa-key',
    title: 'GuardAPI Security Auditor',
    description:
      'Suite de pruebas automatizadas para detectar vulnerabilidades OWASP Top 10 en APIs REST y GraphQL (BOLA/IDOR, autenticación débil, exfiltración de campos sensibles y rate limit).',
    tags: ['Python', 'OWASP API', 'REST / GraphQL', 'OAuth2'],
    details: 'Probador de seguridad de endpoints para verificar el cumplimiento del OWASP API Top 10.',
    technologies: 'Python, Requests, PyTest Security',
    url: 'https://github.com/jofrandev/guardapi-auditor',
  },
  {
    badge: 'SECURITY_AWARENESS #06',
    icon: 'fa-fish-fins',
    title: 'PhishGuard Simulation Platform',
    description:
      'Plataforma web de simulaciones de phishing controlado para capacitación institucional. Incluye métricas de tasa de apertura, recolección segura de métricas y campañas educativas.',
    tags: ['HTML5 / CSS3', 'JavaScript', 'Express', 'SQLite'],
    details: 'Entorno de simulación de ingeniería social con paneles estadísticos de concientización.',
    technologies: 'Fullstack JS, Chart.js, Express',
    url: 'https://github.com/jofrandev/phishguard-platform',
  },
];

const certificates = [
  {
    icon: 'fa-shield-virus',
    title: 'Google CyberSecurity',
    issuer: 'Google | Coursera Professional Certificate',
    id: ' OUV0R6XV7021',
    description:
      'Certificación estándar internacional en arquitectura de seguridad, gestión de riesgos, criptografía y respuesta proactiva ante amenazas.',
    details:
      'Certificación global en principios fundamentales de ciberseguridad, gestión de incidentes, criptografía defensiva y redes seguras.',
  },
  {
    icon: 'fa-user-ninja',
    title: 'Tools of the Trade: Linux and SQL for Cybersecurity',
    issuer: 'Google | Coursera Professional Certificate',
    id: 'GVGB9RZJUOWL',
    description:
      'Dominio de herramientas y técnicas de ciberseguridad para la gestión de incidentes y el análisis de amenazas.',
    details:
      'Especialización en Linux, SQL y herramientas de análisis de seguridad para la detección y mitigación de vulnerabilidades.',
  },
  {
    icon: 'fa-terminal',
    title: 'Connect and Protect: Networks and Networks Security',
    issuer: 'Google | Coursera Certificate',
    id: ' TIF9W6W14Y82',
    description:
      'Comprensión de redes, protocolos y técnicas de protección para asegurar la integridad y confidencialidad de los datos.',
    details:
      'Especialización en redes seguras y técnicas de protección contra amenazas cibernéticas.'
  },
  {
    icon: 'fa-file-contract',
    title: 'Front end Development',
    issuer: 'Oracle next education / Alura Latam',
    id: 'cf0784df-db88-4e6b-a782-9143489937ae',
    description:
      'Especializacion en desarrollo frontend para plataformas web seguras.',
    details:
      'Especialización en tecnologías frontend para el desarrollo de aplicaciones web seguras.',
  },
];

const skills = [
  ['fa-bug', 'Ethical Hacking & Pentesting', 92],
  ['fa-code', 'Desarrollo Seguro (Python / JS / Bash)', 95],
  ['fa-shield-virus', 'SIEM, SOC & Análisis de Logs', 88],
  ['fa-lock', 'Web App Security (OWASP Top 10)', 94],
  ['fa-network-wired', 'Análisis de Tráfico de Red (Wireshark/Nmap)', 90],
];

const stats = [
  ['50', '+', 'Vulnerabilidades Detectadas'],
  ['6', '', 'Proyectos Security GitHub'],
  ['4', '', 'Certificaciones Clave'],
  ['99', '%', 'Mitigación Eficiente'],
];

const email = 'jofrandev.cyber@gmail.com';
const commands = [
  'nmap -sV -p 1-65535 192.168.1.1',
  'python3 cybershield_cli.py --scan-vulns',
  'suricata -c /etc/suricata/suricata.yaml -i eth0',
  "echo 'SYSTEM STATUS: DEFENSE_READY'",
];

function SectionHeading({ tag, title, highlight, subtitle }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">
        {title} <span className="highlight">{highlight}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-line" />
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const [modal, setModal] = useState(null);
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [statValues, setStatValues] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const statsAnimated = useRef(false);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = [...document.querySelectorAll('main section[id]')];
      const current = sections.find((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= 120 && bottom > 120;
      });
      if (current) setActiveSection(current.id);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || modal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, modal]);

  useEffect(() => {
    if (!modal) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [modal]);

  useEffect(() => {
    let commandIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const current = commands[commandIndex];
      characterIndex += deleting ? -1 : 1;
      setTypedCommand(current.slice(0, characterIndex));
      if (!deleting && characterIndex === current.length) {
        deleting = true;
        timeout = window.setTimeout(type, 2000);
      } else if (deleting && characterIndex === 0) {
        deleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
        timeout = window.setTimeout(type, 500);
      } else {
        timeout = window.setTimeout(type, deleting ? 40 : 70);
      }
    };
    timeout = window.setTimeout(type, 70);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('cyber-canvas');
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    const particles = Array.from({ length: Math.floor(width / 35) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speedY: 0.3 + Math.random() * 0.8,
      radius: Math.random() * 1.8 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(0, 240, 255, ${particle.opacity})`;
        context.shadowBlur = 8;
        context.shadowColor = '#00f0ff';
        context.fill();
        particle.y += particle.speedY;
        if (particle.y > height) {
          particle.y = -10;
          particle.x = Math.random() * width;
        }
      });
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 110) {
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - distance / 110)})`;
            context.lineWidth = 0.6;
            context.stroke();
          }
        }
      }
      animationFrame = window.requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize);
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const section = statsRef.current;
    if (!section || !('IntersectionObserver' in window)) return undefined;
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || statsAnimated.current) return;
        statsAnimated.current = true;
        const startedAt = performance.now();
        const duration = 1400;
        const animate = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          setStatValues(stats.map(([target]) => Math.floor(Number(target) * progress)));
          if (progress < 1) frame = window.requestAnimationFrame(animate);
        };
        frame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('No se pudo copiar el correo:', error);
      setCopied(false);
    }
  };

  const submitContact = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get('subject'));
    const body = encodeURIComponent(
      `Nombre: ${formData.get('name')}\nCorreo: ${formData.get('senderEmail')}\n\n${formData.get('message')}`,
    );
    setFormStatus('Se abrirá tu aplicación de correo para completar el envío.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <canvas id="cyber-canvas" aria-hidden="true" />
      <div className="cyber-grid-overlay" aria-hidden="true" />

      <header id="main-header" className={scrolled ? 'header-scrolled' : 'header-transparent'}>
        <div className="header-container">
          <a href="#inicio" className="logo" onClick={closeMenu}>
            <div className="logo-icon"><i className="fa-solid fa-shield-halved" /></div>
            <span className="logo-text">JOFRAN<span className="highlight">DEV</span><span className="sub-tag">//SEC</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <ul className="nav-list">
              {navigation.map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className={`nav-link ${activeSection === id ? 'active' : ''}`}>
                    <span className="nav-num">0{index + 1}.</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <a href="#contacto" className="btn-cyber-sm"><i className="fa-solid fa-terminal" /> Terminal</a>
            <button
              id="hamburger-btn"
              className={`hamburger-btn ${menuOpen ? 'active' : ''}`}
              aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="bar" /><span className="bar" /><span className="bar" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside id="mobile-menu" className={`mobile-menu ${menuOpen ? 'active' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-header">
          <div className="mobile-logo"><i className="fa-solid fa-user-shield" /><span>MENU_CYBER</span></div>
          <button className="close-menu-btn" aria-label="Cerrar menú" onClick={closeMenu}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="mobile-menu-body">
          <ul className="mobile-nav-list">
            {navigation.map(([id, label, icon], index) => (
              <li key={id}>
                <a href={`#${id}`} className="mobile-nav-link" onClick={closeMenu}>
                  <i className={`fa-solid ${icon}`} /><span className="num">0{index + 1}.</span> {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <div className="status-indicator"><span className="dot-online" /> NODE_ONLINE // SECURE_PORT</div>
            <div className="mobile-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="#contacto" onClick={closeMenu} aria-label="Correo electrónico"><i className="fa-solid fa-envelope" /></a>
            </div>
          </div>
        </div>
      </aside>

      <main>
        <section id="inicio" className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="status-badge glow-box"><span className="status-dot" /><span className="status-text">SISTEMA OPERATIVO // DEFENSE MODE READY</span></div>
              <h1 className="hero-title"><span className="greeting">Ciberseguridad:</span><span className="author-name">Jofran<span className="author-secun">dev</span></span></h1>
              <h2 className="hero-subtitle"><span className="type-prefix">&gt; </span><span className="gradient-text">Programador y Analista de Ciberseguridad</span></h2>
              <p className="hero-description">Especialista en desarrollo seguro, hacking ético, análisis de vulnerabilidades y respuesta ante incidentes. Transformo amenazas digitales en infraestructuras resilientes e inexpugnables.</p>
              <div className="hero-buttons">
                <a href="#proyectos" className="btn-cyber primary"><i className="fa-solid fa-shield-cat" /> Ver Proyectos</a>
                <a href="#contacto" className="btn-cyber secondary"><i className="fa-solid fa-network-wired" /> Establecer Conexión</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-cyber github"><i className="fa-brands fa-github" /> GitHub</a>
              </div>
            </div>
            <div className="hero-terminal glow-box">
              <div className="terminal-header">
                <div className="terminal-dots"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /></div>
                <div className="terminal-title"><i className="fa-solid fa-terminal" /> bash - jofrandev@cyber-sec:~</div>
                <div className="terminal-badge">TLS v1.3</div>
              </div>
              <div className="terminal-body">
                <p className="term-line"><span className="prompt">root@cyber-node:~#</span> <span className="command">whoami</span></p>
                <p className="term-output glow-cyan">Jofrandev - Cybersecurity Analyst &amp; Software Developer</p>
                <p className="term-line"><span className="prompt">root@cyber-node:~#</span> <span className="command">cat skills_summary.json</span></p>
                <div className="term-output json-output">
                  {'{'}<br />&nbsp;&nbsp;<span className="json-key">"role"</span>: <span className="json-val">"Red &amp; Blue Teaming Specialist"</span>,<br />
                  &nbsp;&nbsp;<span className="json-key">"languages"</span>: [<span className="json-val">"Python", "JavaScript", "Bash", "C/C++", "SQL"</span>],<br />
                  &nbsp;&nbsp;<span className="json-key">"domains"</span>: [<span className="json-val">"Pentesting", "SIEM/SOC", "Auditoría Web", "Forense"</span>],<br />
                  &nbsp;&nbsp;<span className="json-key">"status"</span>: <span className="json-val glow-green">"DISPONIBLE PARA PROYECTOS &amp; SOC"</span><br />
                  {'}'}
                </div>
                <p className="term-line"><span className="prompt">root@cyber-node:~#</span> <span>{typedCommand}</span><span className="cursor">_</span></p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section sobre-mi-section" ref={statsRef}>
          <div className="container">
            <SectionHeading tag="// 02. PERFIL TÉCNICO" title="Sobre" highlight="Mí" />
            <div className="sobre-mi-grid">
              <div className="bio-card glow-box">
                <div className="card-corner top-left" /><div className="card-corner bottom-right" />
                <div className="bio-header"><div className="avatar-box"><i className="fa-solid fa-user-secret" /></div><div><h3>Jofrandev</h3><p className="bio-subtitle">Programador y Analista de Ciberseguridad</p></div></div>
                <p className="bio-text">Apasionado de la ciberseguridad con enfoque analítico y capacidad de desarrollo orientado a la protección. Combino la lógica de programación rigurosa con metodologías de hacking ético para auditorías, detección proactiva de amenazas y blindaje de aplicaciones web e infraestructura de red.</p>
                <p className="bio-text">Mi filosofía se centra en la &quot;Seguridad desde el Diseño&quot; (Security by Design), automatizando análisis de vulnerabilidades y creando herramientas personalizadas para responder de forma ágil a vectores de ataque modernos.</p>
                <div className="stats-mini-grid">
                  {stats.map(([, suffix, label], index) => (
                    <div className="stat-box" key={label}><span className="stat-num">{statValues[index]}</span><span className="stat-plus">{suffix}</span><span className="stat-label">{label}</span></div>
                  ))}
                </div>
              </div>
              <div className="skills-card glow-box">
                <h3><i className="fa-solid fa-microchip" /> Matriz de Competencias Cyber</h3>
                <div className="skills-container">
                  {skills.map(([icon, label, value]) => (
                    <div className="skill-item" key={label}>
                      <div className="skill-info"><span><i className={`fa-solid ${icon}`} /> {label}</span><span>{value}%</span></div>
                      <div className="skill-bar"><div className="skill-fill" style={{ width: `${value}%` }} /></div>
                    </div>
                  ))}
                </div>
                <div className="tech-tags">
                  <span className="tech-pill"><i className="fa-brands fa-python" /> Python</span><span className="tech-pill"><i className="fa-brands fa-linux" /> Kali Linux</span>
                  <span className="tech-pill"><i className="fa-brands fa-docker" /> Docker</span><span className="tech-pill"><i className="fa-solid fa-terminal" /> Bash</span>
                  <span className="tech-pill"><i className="fa-solid fa-server" /> Nmap / Metasploit</span><span className="tech-pill"><i className="fa-brands fa-git-alt" /> Git &amp; GitHub</span>
                  <span className="tech-pill"><i className="fa-solid fa-shield" /> Burp Suite</span><span className="tech-pill"><i className="fa-brands fa-js" /> Node / JS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="section proyectos-section">
          <div className="container">
            <SectionHeading tag="// 03. REPOSITORIOS Y DESARROLLOS" title="Proyectos de" highlight="Ciberseguridad" subtitle="6 herramientas e investigaciones con código fuente disponible en GitHub" />
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card glow-box" key={project.title}>
                  <div className="card-badge">{project.badge}</div>
                  <div className="project-icon-wrapper"><i className={`fa-solid ${project.icon}`} /></div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-github"><i className="fa-brands fa-github" /> Ver en GitHub</a>
                    <button className="btn-preview" onClick={() => setModal({ type: 'project', ...project })}><i className="fa-solid fa-eye" /> Detalle</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="certificados" className="section certificados-section">
          <div className="container">
            <SectionHeading tag="// 04. CREDENCIALES OFICIALES" title="Certificados de" highlight="Ciberseguridad" subtitle="4 acreditaciones profesionales que respaldan mi nivel técnico y metodológico" />
            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <article className="cert-card glow-box" key={certificate.id}>
                  <div className="cert-status"><i className="fa-solid fa-check-double" /> VERIFICADO</div>
                  <div className="cert-badge"><i className={`fa-solid ${certificate.icon}`} /></div>
                  <h3 className="cert-title">{certificate.title}</h3>
                  <p className="cert-issuer">{certificate.issuer}</p>
                  <p className="cert-desc">{certificate.description}</p>
                  <div className="cert-footer">
                    <span className="cert-id"><i className="fa-solid fa-fingerprint" /> ID: {certificate.id}</span>
                    <button className="btn-cert-view" onClick={() => setModal({ type: 'certificate', ...certificate })}>Ver Credencial</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section contacto-section">
          <div className="container">
            <SectionHeading tag="// 05. CANAL ENCRIPTADO DE CANALIZACIÓN" title="Iniciar" highlight="Contacto" subtitle="¿Tienes un proyecto, auditoría o vacante en ciberseguridad? Envía un mensaje directo." />
            <div className="contacto-wrapper glow-box">
              <div className="contacto-info">
                <h3><i className="fa-solid fa-satellite" /> Datos de Conexión Directa</h3>
                <p>Disponible para auditorías de seguridad, consultorías de código seguro, análisis SOC y colaboración en proyectos open-source.</p>
                <div className="info-items">
                  <div className="info-item"><div className="info-icon"><i className="fa-solid fa-envelope" /></div><div><span className="info-label">Correo Electrónico Directo</span><div className="email-copy-box"><span>{email}</span><button className="btn-copy" title="Copiar correo" aria-label="Copiar correo" onClick={copyEmail}><i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} /></button></div></div></div>
                  <div className="info-item"><div className="info-icon"><i className="fa-solid fa-location-dot" /></div><div><span className="info-label">Ubicación &amp; Modalidad</span><span className="info-val">Remoto / Híbrido | Disponibilidad Global</span></div></div>
                  <div className="info-item"><div className="info-icon"><i className="fa-solid fa-key" /></div><div><span className="info-label">Clave PGP Fingerprint</span><span className="info-val code-text">4A89 F290 11C2 B902 SEC7</span></div></div>
                </div>
                <div className="social-cyber-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-cyber-btn"><i className="fa-brands fa-github" /> <span>GitHub</span></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-cyber-btn"><i className="fa-brands fa-linkedin-in" /> <span>LinkedIn</span></a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-cyber-btn"><i className="fa-brands fa-x-twitter" /> <span>Twitter</span></a>
                </div>
              </div>
              <form className="contacto-form" onSubmit={submitContact}>
                <div className="form-title-bar"><i className="fa-solid fa-lock" /> MENSAJE_ENCRIPTADO_TLS</div>
                <div className="form-group"><label htmlFor="form-name"><i className="fa-solid fa-user" /> Nombre / Entidad</label><input id="form-name" name="name" type="text" placeholder="Ej. Alex Turner / SecOps Inc." required /></div>
                <div className="form-group"><label htmlFor="form-email"><i className="fa-solid fa-at" /> Correo Electrónico</label><input id="form-email" name="senderEmail" type="email" placeholder="ejemplo@empresa.com" required /></div>
                <div className="form-group"><label htmlFor="form-subject"><i className="fa-solid fa-heading" /> Asunto del Mensaje</label><input id="form-subject" name="subject" type="text" placeholder="Auditoría Web / Proyecto Pentest / Contratación" required /></div>
                <div className="form-group"><label htmlFor="form-message"><i className="fa-solid fa-comment-dots" /> Detalles de la Solicitud</label><textarea id="form-message" name="message" rows="4" placeholder="Describe brevemente tus requerimientos o el alcance del proyecto..." required /></div>
                <button type="submit" className="btn-cyber submit-btn"><i className="fa-solid fa-paper-plane" /> Transmitir Mensaje Seguramente</button>
                <div className="form-status" role="status">{formStatus}</div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="cyber-footer">
        <div className="container footer-container">
          <div className="footer-left"><p>&copy; 2026 <strong>Jofrandev</strong>. Programador y Analista de Ciberseguridad.</p><p className="footer-sub">Todos los derechos reservados. Diseñado con estándares Cyber-Defense &amp; High Aesthetic.</p></div>
          <div className="footer-right"><a href="#inicio" className="back-to-top" title="Volver arriba"><i className="fa-solid fa-chevron-up" /></a></div>
        </div>
      </footer>

      <div className={`cyber-modal ${modal ? 'active' : ''}`} role={modal ? 'dialog' : undefined} aria-modal={modal ? 'true' : undefined} aria-labelledby="modal-title">
        <button className="modal-overlay" aria-label="Cerrar diálogo" onClick={() => setModal(null)} />
        {modal && (
          <div className="modal-content glow-box">
            <div className="modal-header"><h3 id="modal-title">{modal.title}</h3><button className="modal-close-btn" aria-label="Cerrar" onClick={() => setModal(null)}><i className="fa-solid fa-xmark" /></button></div>
            <div className="modal-body">
              {modal.type === 'project' ? (
                <div className="modal-project-details"><p>{modal.details}</p><div className="modal-tech"><span>// TECNOLOGÍAS UTILIZADAS:</span><span>{modal.technologies}</span></div></div>
              ) : (
                <div className="modal-cert-details"><div className="modal-cert-badge"><i className="fa-solid fa-award" /></div><h4>{modal.issuer}</h4><p className="modal-cert-id">ID VERIFICADO: {modal.id}</p><p>{modal.details}</p></div>
              )}
            </div>
            <div className="modal-footer">
              {modal.type === 'project' && <a href={modal.url} target="_blank" rel="noopener noreferrer" className="btn-cyber primary"><i className="fa-brands fa-github" /> Ver Código en GitHub</a>}
              <button className="btn-cyber secondary" onClick={() => setModal(null)}>{modal.type === 'project' ? 'Cerrar' : <><i className="fa-solid fa-check" /> Credencial Validada</>}</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};


export default App;
