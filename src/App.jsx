import { useState } from "react";
/* import {
  ArrowRight, Menu, X, ShieldCheck, Users, Clock3, HardHat,
  Wrench, Building2, Hammer, CheckCircle2, MapPin, Phone,
  Mail, Instagram, Linkedin, Facebook, ChevronLeft, ChevronRight
} from "lucide-react"; */
import {
  ArrowRight, Menu, X, ShieldCheck, Users, Clock3, HardHat,
  Wrench, Building2, Hammer, CheckCircle2, MapPin, Phone,
  Mail, ChevronLeft, ChevronRight
} from "lucide-react";
import emailjs from "@emailjs/browser";


const WHATSAPP_NUMBER = "573003890733"; // CAMBIAR por el número oficial de la empresa, con indicativo de país.
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, deseo solicitar una cotización para un proyecto con Systec Atlántico SAS.")}`;

const services = [
  {
    icon: Wrench,
    title: "Metalmecánica",
    description: "Fabricación, montaje, cortes, soldaduras y trabajos especializados en acero.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85"
  },
  {
    icon: Hammer,
    title: "Remodelación de concreto",
    description: "Reforzamiento, reparación y adecuación de estructuras de concreto.",
    image: "https://www.shutterstock.com/image-photo/cement-trucks-construction-area-pouring-260nw-2670441683.jpg"
  },
  {
    icon: Building2,
    title: "Estructuras metálicas",
    description: "Diseño, fabricación e instalación de estructuras metálicas a la medida.",
    image: "https://es.airliquide.com/statics/styles/crop_image_illustrated_editeur_rte_/s3/2021-10/Welding%20%26%20Cutting%20SWE%20Air%20Liquide-jpg.jpg.webp?itok=pRP0o7Qy"
  },
  {
    icon: HardHat,
    title: "Obras y adecuaciones",
    description: "Soluciones para espacios industriales, comerciales y residenciales.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJwZ2oCJGFpjNR_O8YXJipwHlct_xDz83t-RXzKXQ-g&s=10"
  }
];

const projects = [
  {
    title: "Estructura metálica industrial",
    category: "Metalmecánica",
    image: "img/metalmecanica.png"
  },
  {
    title: "Obra y estructura en concreto",
    category: "Construcción",
    image: "img/civil.png"
  },
  {
    title: "Fibra de vidrio",
    category: "Materiales compuestos",
    image: "img/fibradevidrio.png"
  },
  {
    title: "Cubiertas y espacios industriales",
    category: "Adecuaciones",
    image: "img/coberturas.png"
  }
];

function Brand() {
  return (
    <a class="brand" href="#inicio" aria-label="Systec Atlántico, ir al inicio">
      {/* <span class="brand-mark">S</span> */}
        {/* <img src="img/logo.png" alt="logo" class="logo"></img> */}
        <img src="{`${import.meta.env.BASE_URL}img/logo.png`}" alt="SYSTEC Atlántico"></img>
      <span class="brand-copy">
        <strong>SYSTEC</strong>
        <span>ATLÁNTICO SAS</span>
        <small>Metalmecánica · Concreto · Estructuras</small>
      </span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Inicio", "#inicio"],
    ["Nosotros", "#nosotros"],
    ["Servicios", "#servicios"],
    ["Proyectos", "#proyectos"],
    ["Contacto", "#contacto"]
  ];

  return (
    <header class="site-header">
      <div class="container nav-wrap">
        <Brand />
        <button class="menu-toggle" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav class={open ? "nav-links is-open" : "nav-links"} aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a class="button button-yellow nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
            Solicita tu cotización <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section class="hero" id="inicio">
      <div class="hero-overlay" />
      <div class="container hero-content">
        <div class="hero-copy">
          <span class="eyebrow">SYSTEC ATLÁNTICO SAS</span>
          <h1>Soluciones en metalmecánica y remodelación de estructuras de concreto</h1>
          <p>Diseñamos, fabricamos y remodelamos estructuras que impulsan el desarrollo de tus proyectos. Calidad, seguridad y compromiso en cada trabajo.</p>
          <div class="hero-actions">
            <a class="button button-yellow" href="#servicios">Nuestros servicios <ArrowRight size={17} /></a>
            <a class="button button-outline" href="#nosotros">Conoce más</a>
          </div>
        </div>
        <div class="hero-points">
          <span><ShieldCheck /> Calidad y compromiso</span>
          <span><Users /> Personal especializado</span>
          <span><Clock3 /> Cumplimiento de tiempos</span>
          <span><CheckCircle2 /> Atención personalizada</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section class="section services-section" id="servicios">
      <div class="container">
        <div class="section-heading services-heading">
          <div>
            <span class="eyebrow">NUESTROS SERVICIOS</span>
            <h2>Lo que hacemos</h2>
            <p>Soluciones técnicas para proyectos que requieren calidad, coordinación y trabajo bien ejecutado.</p>
          </div>
          <a class="text-link" href="#contacto">Cuéntanos tu proyecto <ArrowRight size={16} /></a>
        </div>
        <div class="service-grid">
          {services.map(({ icon: Icon, title, description, image }) => (
            <article class="service-card" key={title}>
              <img src={image} alt={title} loading="lazy" />
              <div class="service-icon"><Icon size={22} /></div>
              <div class="service-card-copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Consultar por ${title}`}>Consultar servicio <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section class="about-section" id="nosotros">
      <div class="about-photo" role="img" aria-label="Estructura industrial en construcción" />
      <div class="about-content">
        <span class="eyebrow">SOBRE NOSOTROS</span>
        <h2>Experiencia y compromiso en cada proyecto</h2>
        <p>En Systec Atlántico SAS trabajamos para ofrecer soluciones en metalmecánica, estructuras y remodelación de concreto, adaptadas a las necesidades de cada cliente.</p>
        <ul class="check-list">
          <li><CheckCircle2 /> Atención orientada a cada proyecto</li>
          <li><CheckCircle2 /> Compromiso con la calidad y la seguridad</li>
          <li><CheckCircle2 /> Comunicación clara durante el trabajo</li>
          <li><CheckCircle2 /> Soluciones ajustadas a tus necesidades</li>
        </ul>
        <a class="button button-yellow" href="#contacto">Hablemos de tu proyecto <ArrowRight size={16} /></a>
      </div>
      <div class="stats-panel">
        <div class="stat">
          <Wrench />
          <div><strong>Soluciones</strong><span>Para distintos sectores</span></div>
        </div>
        <div class="stat">
          <Users />
          <div><strong>Atención cercana</strong><span>Comunicación con el cliente</span></div>
        </div>
        <div class="stat">
          <ShieldCheck />
          <div><strong>Calidad y seguridad</strong><span>Enfoque en cada trabajo</span></div>
        </div>
        <p class="stats-note">Los datos de experiencia y proyectos se pueden añadir aquí cuando la empresa los confirme.</p>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);

  const move = (direction) => setActive((current) => (current + direction + projects.length) % projects.length);
  const visibleProjects = projects.map((_, index) => projects[(index + active) % projects.length]);

  return (
    <section class="section projects-section" id="proyectos">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">PORTAFOLIO</span>
            <h2>Proyectos que construyen confianza</h2>
            <p>Una muestra visual de las áreas de trabajo que podemos presentar en el portafolio.</p>
          </div>
          <div class="carousel-controls">
            <button onClick={() => move(-1)} aria-label="Proyecto anterior"><ChevronLeft /></button>
            <button onClick={() => move(1)} aria-label="Proyecto siguiente"><ChevronRight /></button>
          </div>
        </div>
        <div class="project-grid">
          {visibleProjects.map((project, index) => (
            <button class="project-card" key={`${project.title}-${index}`} onClick={() => setSelected(project)}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <span class="project-category">{project.category}</span>
              <strong>{project.title}</strong>
              <span class="project-more">Ver detalles <ArrowRight size={15} /></span>
            </button>
          ))}
        </div>
       
      </div>
      {selected && (
        <div class="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <div class="project-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={(e) => e.stopPropagation()}>
            <button class="modal-close" onClick={() => setSelected(null)} aria-label="Cerrar"><X /></button>
            <img src={selected.image} alt={selected.title} />
            <div class="modal-copy">
              <span class="eyebrow">{selected.category}</span>
              <h3>{selected.title}</h3>
              <p>Este espacio puede mostrar el alcance, los materiales, la ubicación general y las fotografías reales de un proyecto ejecutado por la empresa.</p>
              <a class="button button-yellow" href={whatsappLink} target="_blank" rel="noreferrer">Consultar un proyecto similar <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Contact() {

  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error


  /*
    Id EmailJS: service_38bmlao
    Id Template: template_oq1g5o7 
    Public Key: PIAw88mSe4luAapky
  */
 
  /* function submitForm(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Completa tu nombre, correo y descripción del proyecto.");
      return;
    }
    const body = `Nombre: ${form.name}\nCorreo: ${form.email}\nServicio: ${form.service}\nProyecto: ${form.message}`;
    console.log(body);
    const subject = encodeURIComponent("Solicitud de cotización - Systec Atlántico SAS");
    /* En esta parte va el correo al cual va a llegar la cotizacion *
    window.location.href = `mailto:jaorozco2002@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    setError(
      "Se abrió tu aplicación de correo. Revisa el destinatario y envía el mensaje. Para producción, conectaremos un servicio de formularios."
    );
  } */

    async function submitForm(event) {
  event.preventDefault();

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    setStatus("error");
    setError("Completa tu nombre, correo y descripción del proyecto.");
    return;
  }

  setStatus("sending");
  setError("");

  try {
    await emailjs.send(
      "service_38bmlao",
      "template_oq1g5o7",
      {
        name: form.name,
        email: form.email,
        service: form.service || "No especificado",
        message: form.message,
      },
      "PIAw88mSe4luAapky"
    );

    setStatus("success");
    setForm({ name: "", email: "", service: "", message: "" });
  } catch (err) {
    console.error(err);
    setStatus("error");
    setError("No se pudo enviar el mensaje. Intenta de nuevo en unos minutos.");
  }
}


  return (
    <section class="contact-section" id="contacto">
      <div class="container contact-grid">
        <div class="contact-copy">
          <span class="eyebrow">HABLEMOS DE TU PROYECTO</span>
          <h2>¿Necesitas una solución para tu empresa?</h2>
          <p>Cuéntanos qué necesitas. Podemos conversar sobre el alcance, los tiempos y los siguientes pasos para solicitar una cotización.</p>
          <div class="contact-detail"><MapPin /><span>Barranquilla, Atlántico, Colombia <small>Calle 39 N 46-126</small></span></div>
          <div class="contact-detail"><Phone /><span>Teléfono empresarial <small>3003890733</small></span></div>
          <div class="contact-detail"><Mail /><span>Correo de contacto <small>comercialsystec3@gmail.com</small></span></div>
          <a class="button button-yellow whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowRight size={16} /></a>
        </div>
        {/* <form class="contact-form" onSubmit={submitForm}>
          <h3>Solicita una cotización</h3>
          <p>Completa estos datos para preparar tu consulta.</p>
          <label>Nombre
            <input type="text" value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} placeholder="Tu nombre o empresa" />
          </label>
          <label>Correo electrónico
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="nombre@empresa.com" />
          </label>
          <label>Servicio de interés
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              {services.map((service) => <option key={service.title}>{service.title}</option>)}
              <option>Otro servicio</option>
            </select>
          </label>
          <label>Describe tu proyecto
            <textarea rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} 
            placeholder="Cuéntanos brevemente qué necesitas..."></textarea>
          </label>
          {error && <p class="form-feedback" role="status">{error}</p>}
          <button class="button button-yellow form-submit" type="submit">Preparar solicitud <ArrowRight size={16} /></button>
          <small class="form-privacy">No incluyas información confidencial en este formulario de demostración.</small>
        </form> */}
        <form className="contact-form" onSubmit={submitForm}>
          <h3>Solicita una cotización</h3>
          <p>Completa estos datos para preparar tu consulta.</p>

          <label>Nombre
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Tu nombre o empresa"
          />
          </label>

          <label>Correo electrónico
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="nombre@empresa.com"
          />
          </label>

          <label>Servicio de interés
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            {services.map((service) => (
              <option key={service.title} value={service.title}>{service.title}</option>
            ))}
            <option value="Otro servicio">Otro servicio</option>
          </select>
          </label>

          <label>Describe tu proyecto
          <textarea
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Cuéntanos brevemente qué necesitas..."
          ></textarea>
          </label>

          {status === "error" && <p className="form-feedback" role="alert">{error}</p>}
          {status === "success" && (
          <p className="form-feedback" role="status">
            ¡Gracias! Recibimos tu solicitud y te contactaremos pronto.
          </p>
          )}

          <button
          className="button button-yellow form-submit"
          type="submit"
          disabled={status === "sending"}
          >
          {status === "sending" ? "Enviando..." : <>Enviar solicitud <ArrowRight size={16} /></>}
          </button>

          <small className="form-privacy">
          No incluyas información confidencial en este formulario.
          </small>
          </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer class="site-footer">
      <div class="container footer-main">
        <Brand />
        <div class="footer-links">
          <strong>Enlaces rápidos</strong>
          <a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a>
        </div>
        <div class="footer-social">
          <strong>Conecta con nosotros</strong>
          <div class="social-icons">
            <a href={whatsappLink} aria-label="WhatsApp" target="_blank" rel="noreferrer"><Phone /></a>
            {/* <a href="#contacto" aria-label="Instagram"><Instagram /></a>
            <a href="#contacto" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#contacto" aria-label="Facebook"><Facebook /></a> */}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container"><span>© {new Date().getFullYear()} Systec Atlántico SAS. Todos los derechos reservados.</span><span>Calidad, compromiso y soluciones para cada proyecto.</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {<a class="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <img src="img/whatsapp.png" alt="WhatsApp" class="WhatsApp"></img>
      </a>}
      {/* <a class="btn-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
         
      </a> */}
    </>
  );
}
