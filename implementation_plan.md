# Implementation Plan - Futuristic Cybersecurity Portfolio (Jofrandev)

Creación de un portafolio web futurista, interactivo y totalmente responsive para **Jofrandev - Programador y Analista de Ciberseguridad**.

## User Review Required

> [!IMPORTANT]
> - El portafolio tendrá un diseño dark cyber / futurista con efectos de neón (cian `#00f0ff`, verde matriz `#00ff66` y violeta `#a855f7`), efectos de cristal (glassmorphism), cuadrícula cibernética y terminal interactivo.
> - Se integrará un header fijo transparente que se vuelve opaco con efecto glass y borde brillante al hacer scroll.
> - El menú móvil hamburguesa se deslizará de derecha a izquierda (`right to left`).
> - Se crearán 6 tarjetas de proyectos reales de ciberseguridad con botones hacia GitHub y 4 tarjetas de certificados profesionales.

## Proposed Changes

### Work Directory: `/home/jofrandev/Documentos/ciberseguridad/web portafolio`

#### [NEW] [index.html](file:///home/jofrandev/Documentos/ciberseguridad/web%20portafolio/index.html)
- Estructura semántica HTML5 optimizada para SEO y velocidad.
- Metatags de SEO, título `Ciberseguridad: Jofrandev | Programador y Analista de Ciberseguridad`.
- Secciones principales:
  1. **Header/Nav**: Logo cyber, links de navegación (Inicio, Sobre mí, Proyectos, Certificados, Contacto), botón hamburguesa con menú desplegable deslizable de derecha a izquierda.
  2. **Inicio (Hero)**: Presentación con título principal "Jofrandev - Programador y Analista de Ciberseguridad", efecto de terminal tipeada en vivo (`$ whoami`, `$ status: ready_to_defend`), botones CTA.
  3. **Sobre Mí**: Biografía profesional, estadísticas de seguridad, matriz de habilidades (Pentesting, SOC/SIEM, Python/Bash Dev, Web App Security, Forense).
  4. **Proyectos (6 Cards)**:
     - Project 1: *CyberShield - Vulnerability Scanner CLI*
     - Project 2: *SentinelLog - SIEM & Log Analyzer*
     - Project 3: *NetPulse - Packet Inspector & IDS*
     - Project 4: *OSINT-Crawler - Threat Intelligence Tool*
     - Project 5: *GuardAPI - API Security Auditor*
     - Project 6: *PhishGuard - Phishing Simulation Platform*
     - Cada card incluye etiquetas tecnológicas, descripción, estado, y botón directo a GitHub.
  5. **Certificados (Mini-sección con 4 Certificados)**:
     - Cert 1: *CompTIA Security+*
     - Cert 2: *Certified Ethical Hacker (CEH)*
     - Cert 3: *Offensive Security Certified Professional (OSCP)*
     - Cert 4: *ISO/IEC 27001 Lead Implementer*
     - Incluye visualización de badge neón y detalles.
  6. **Contacto**: Formulario tipo terminal cibernética, botón de copia rápida de correo, enlaces a redes/GitHub.
  7. **Footer**: Copyright y estado del sistema.

#### [NEW] [styles.css](file:///home/jofrandev/Documentos/ciberseguridad/web%20portafolio/styles.css)
- Variables CSS para paleta cibernética (`--bg-dark`, `--primary-cyan`, `--secondary-purple`, `--accent-green`, `--glass-bg`, `--font-mono`, etc.).
- Fondo animado cibernético (Cyber Grid / Matrix Canvas background).
- Estilos para Header Fijo:
  - Inicialmente `background: transparent`.
  - Clase `.scrolled` activada por JS: `background: rgba(10, 14, 23, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid var(--primary-cyan);`.
- Menú Hamburguesa Responsive:
  - Posición `fixed`, `top: 0`, `right: 0`, `transform: translateX(100%)`.
  - Al abrirse (`.active`), `transform: translateX(0)` (deslizamiento de derecha a izquierda).
  - Overlay semi-transparente para cerrar al hacer click fuera.
- Tarjetas de proyectos y certificados futuristas con bordes neón reactivos a `:hover` y animaciones fluídas.

#### [NEW] [script.js](file:///home/jofrandev/Documentos/ciberseguridad/web%20portafolio/script.js)
- Detección de Scroll para el Header fijo (cambio de transparente a glass/opaco con bordes neón).
- Lógica del Menú Hamburguesa (abrir/cerrar de derecha a izquierda, animación del icono hamburguesa a X).
- Animación de máquina de escribir para la terminal en la sección de inicio.
- Fondo dinámico cibernético en `<canvas>` (partículas cibernéticas o lluvia de código).
- Navegación suave (Smooth Scroll) y resaltado activo de la sección visible.
- Modal interactivo para ver certificados ampliados o detalles de proyectos.

## Verification Plan

### Automated / Browser Verification
- Ejecutar servidor local dev.
- Usar el subagente de navegador (`browser_subagent`) para probar:
  1. Carga inicial de la página y verificación del header transparente.
  2. Scroll vertical para verificar que el header cambie a opaco/glassmorphism con borde neón.
  3. Redimensionamiento a vista móvil (375px) para verificar que el menú hamburguesa se deslice desde la derecha a la izquierda.
  4. Presencia y funcionamiento de las 6 cards de proyectos con sus botones hacia GitHub.
  5. Presencia y estética de las 4 cards de certificados.
  6. Funcionamiento del formulario de contacto.
