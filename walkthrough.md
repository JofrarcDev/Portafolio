# Walkthrough - CyberSecurity Portfolio (Jofrandev)

Se ha creado con éxito el portafolio web de ciberseguridad futurista para **Jofrandev - Programador y Analista de Ciberseguridad** en la ruta `/home/jofrandev/Documentos/ciberseguridad/web portafolio`.

![Cyber Security Banner](/home/jofrandev/.gemini/antigravity/brain/eee0629c-94cf-4a51-9c77-281ec4cc1417/cyber_portfolio_banner_1786840314771.png)

## Componentes y Características Implementadas

### 1. Header Fijo Dinámico (Transparent & Glassmorphism)
- **Modo Inicial**: Totalmente transparente con sutiles acentos neón en la parte superior.
- **Scroll Interactivo**: Al desplazarse verticalmente por la página, el header se transforma automáticamente en un contenedor oscuro de cristal (`glassmorphism`) con desenfoque de fondo (`backdrop-filter: blur`) y un borde inferior resplandeciente en **cian neón** (`#00f0ff`).

### 2. Menú Hamburguesa Responsive (Derecha a Izquierda)
- En dispositivos móviles y pantallas estrechas, el menú de navegación tradicional se oculta y aparece el botón hamburguesa animado.
- Al hacer clic, el panel lateral desplegable aparece **deslizándose desde la derecha hacia la izquierda** (`transform: translateX(100%)` a `translateX(0)`), acompañado de una capa oscura semi-transparente para cerrar el menú con un toque o clic fuera.

### 3. Sección de Inicio (Hero Section) & Terminal Animada
- **Título Oficial**: `Ciberseguridad: Jofrandev` - *Programador y Analista de Ciberseguridad*.
- **Terminal Interactivo**: Muestra salida con resaltado de sintaxis tipo JSON y simula una consola de comandos `bash` tipeando continuamente comandos de seguridad como `nmap`, `python3 scan_vulns.py` y `suricata`.
- **Fondo de Partículas & Red Cyber**: Canvas HTML5 dinámico con nodos flotantes y conexiones interactivas.

### 4. Sección Sobre Mí
- Presentación del perfil profesional enfocado en el concepto de *"Seguridad desde el Diseño"* (Security by Design).
- **Contadores Estadísticos**: 50+ vulnerabilidades detectadas, 6+ proyectos de seguridad, 4 certificaciones clave y 99% de tasa de mitigación.
- **Matriz de Competencias Cyber**: Barras de progreso de habilidades en Ethical Hacking, Scripting Security (Python/JS), SIEM/SOC, OWASP Top 10 y Análisis de Tráfico de Red.

### 5. Sección de Proyectos (6 Cards con enlaces a GitHub)
Se integraron 6 tarjetas con estilo cyber neón, badges de tecnología, breve descripción, modal de detalle y **botón directo a GitHub**:
1. **CyberShield Scanner CLI**: Escáner de vulnerabilidades multihilo en Python.
2. **SentinelLog SIEM Analyzer**: Correlador de eventos e incidentes de seguridad en tiempo real.
3. **NetPulse IDS Packet Sniffer**: Inspector de paquetes a bajo nivel y detector de intrucciones.
4. **OSINT-Crawler Threat Intel**: Herramienta de inteligencia en fuentes abiertas y fugas de credenciales.
5. **GuardAPI Security Auditor**: Auditoría automatizada de vulnerabilidades OWASP API Top 10.
6. **PhishGuard Simulation Platform**: Plataforma full-stack de simulación de vectores de phishing.

### 6. Mini-Sección de Certificados (4 Acreditaciones)
Mini-sección dedicada a 4 certificaciones profesionales clave con estado de verificación y modal interactivo para consultar detalles y credenciales:
1. **CompTIA Security+** (Credencial Global)
2. **Certified Ethical Hacker (CEH v12)** (EC-Council)
3. **OSCP - Offensive Security Certified Professional** (OffSec)
4. **ISO/IEC 27001 Lead Implementer** (Auditoría de SGSI)

### 7. Sección de Contacto
- Interfaz de contacto estilo terminal de transmisión encriptada.
- Formulario interactivo con feedback de envío en tiempo real.
- **Botón de Copia Rápida** de correo electrónico (`jofrandev.cyber@gmail.com`) con confirmación en tooltip.
- Enlaces a perfiles de GitHub, LinkedIn y Twitter/X.

---

## Migración a React

El portafolio ahora se renderiza con React 18 y Vite. La navegación, el menú móvil,
la terminal, el canvas de partículas, los contadores y las ventanas modales se
gestionan con componentes y hooks de React. El formulario abre el cliente de correo
del visitante con el mensaje preparado; no simula un envío a un servidor.

## Archivos principales

- `index.html`: Documento base y metadatos SEO.
- `src/main.jsx`: Punto de entrada que monta la aplicación React.
- `src/App.jsx`: Componentes, contenido e interacciones del portafolio.
- `styles.css`: Sistema de diseño futurista, neones, glassmorphism y estilos responsive.
- `package.json`: Dependencias y comandos del proyecto.

---

## Cómo Ejecutar Localmente

Instala las dependencias y arranca el servidor de desarrollo de Vite:

```sh
npm install
npm run dev
```

Para comprobar la compilación de producción ejecuta `npm run build`. El resultado se
genera en `dist/`.
