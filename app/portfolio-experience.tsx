"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Download,
  Feather,
  FileText,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  PenTool,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Category = "web" | "social" | "editorial" | "brand";

type Project = {
  id: string;
  title: string;
  type: string;
  category: Category;
  cover: string;
  gallery: string[];
  description: string;
  tags: string[];
  accent: string;
};

const galleryImages = (folder: string, files: string[]) =>
  files.map((file) => `/gallery/${folder}/${file}`);

const projects: Project[] = [
  {
    id: "sauce",
    title: "Golden hot sauce",
    type: "Web/UI koncept",
    category: "web",
    cover: "/assets/images/sauce-cover.webp",
    gallery: galleryImages("sauce", ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"]),
    description:
      "Produktová webová prezentácia s výrazným vizuálnym tónom, kontrastnou typografiou a rozhraním pripraveným pre e-commerce dojem.",
    tags: ["UI dizajn", "produkt", "web"],
    accent: "peach",
  },
  {
    id: "joga",
    title: "Jóga nežně",
    type: "Web dizajn a identita",
    category: "web",
    cover: "/assets/images/joga-cover.webp",
    gallery: galleryImages("joga", ["01.png", "02.png", "03.png", "04.png"]),
    description:
      "Pokojný webový koncept a komunikačný vizuál pre jogu, postavený na jemnej farebnosti, priestore a mäkkom tempe kompozície.",
    tags: ["web dizajn", "brand feel", "print"],
    accent: "mint",
  },
  {
    id: "fashion",
    title: "Fashion magazine",
    type: "Editorial dizajn",
    category: "editorial",
    cover: "/assets/images/fashion-cover.webp",
    gallery: galleryImages("fashion", ["01.png"]),
    description:
      "Magazínový layout s módnou témou, výraznou typografiou, prácou s moodboardom a vizuálnou hierarchiou pre rozsiahlejší obsah.",
    tags: ["editorial", "typografia", "móda"],
    accent: "lilac",
  },
  {
    id: "automax",
    title: "Automax rent",
    type: "Social media kampaň",
    category: "social",
    cover: "/assets/images/automax-cover.webp",
    gallery: galleryImages("automax", ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"]),
    description:
      "Séria prenájmových vizuálov pre sociálne siete s dôrazom na jasnú cenu, model auta a rýchle čítanie ponuky v mobile.",
    tags: ["social media", "kampaň", "banner"],
    accent: "sky",
  },
  {
    id: "dring",
    title: "DR.ING",
    type: "Digitálna kampaň",
    category: "social",
    cover: "/assets/images/dring-cover.webp",
    gallery: galleryImages("dring", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.png", "06.png", "07.png"]),
    description:
      "Sezónne promo výstupy pre produktovú značku, kde sa predajný claim spája s náladou kampane a jasným vizuálnym kontrastom.",
    tags: ["kampaň", "produkt", "social"],
    accent: "lemon",
  },
  {
    id: "muni",
    title: "MUNI news",
    type: "Novinový layout",
    category: "editorial",
    cover: "/assets/images/muni-cover.webp",
    gallery: galleryImages("muni", ["01.png", "02.png"]),
    description:
      "Fiktívny univerzitný news layout so silnou mriežkou, veľkými nadpismi a informačnou štruktúrou pre rýchle skenovanie obsahu.",
    tags: ["layout", "editorial", "grid"],
    accent: "rose",
  },
  {
    id: "psbrno",
    title: "PS Brno",
    type: "Print a prezentácia",
    category: "editorial",
    cover: "/assets/images/psbrno-cover.webp",
    gallery: galleryImages("psbrno", ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"]),
    description:
      "Tlačové a prezentačné materiály s výrazným brand systémom, kontrastnými farbami a jasnou informačnou hierarchiou.",
    tags: ["print", "brand manuál", "prezentácia"],
    accent: "mint",
  },
  {
    id: "podane",
    title: "Podané ruce",
    type: "Šablóny pre komunikáciu",
    category: "brand",
    cover: "/assets/images/podane-cover.webp",
    gallery: galleryImages("podane-ruce", ["01.png", "02.png", "03.png", "04.png", "05.jpg", "06.jpg", "07.png", "08.png"]),
    description:
      "Sada komunikačných šablón a vizuálnych prvkov pre organizáciu, navrhnutá tak, aby sa dala opakovane používať v rôznych výstupoch.",
    tags: ["šablóny", "neziskový sektor", "brand"],
    accent: "sky",
  },
  {
    id: "zubar",
    title: "Schill Dental Clinic",
    type: "Social media vizuály",
    category: "social",
    cover: "/assets/images/zubar-cover.webp",
    gallery: galleryImages("schill", ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png"]),
    description:
      "Príspevky a bannery pre zdravotnícku komunikáciu, kde je dôležitá dôveryhodnosť, čitateľnosť a priateľský vizuálny tón.",
    tags: ["social media", "zdravie", "banner"],
    accent: "lilac",
  },
  {
    id: "zvol",
    title: "Zvol si info",
    type: "Instagram séria",
    category: "social",
    cover: "/assets/images/zvol-cover.webp",
    gallery: galleryImages("zvol", ["01.png", "02.png", "03.png", "04.png", "05.png"]),
    description:
      "Edukačné instagramové výstupy s minimalistickým vizuálom, ikonografiou a dôrazom na rýchle pochopenie správy.",
    tags: ["Instagram", "edukácia", "ikonky"],
    accent: "lemon",
  },
  {
    id: "alien",
    title: "Alien plagát",
    type: "Plagátový koncept",
    category: "brand",
    cover: "/assets/images/alien-cover.webp",
    gallery: galleryImages("alien", ["01.jpg", "02.png", "03.png"]),
    description:
      "Filmový plagátový návrh s prácou s atmosférou, kontrastom a výraznou kompozíciou pre kultový vizuálny motív.",
    tags: ["plagát", "kompozícia", "film"],
    accent: "peach",
  },
];

const filters: Array<{ id: "all" | Category; label: string; icon: typeof Layers3 }> = [
  { id: "all", label: "Všetko", icon: Layers3 },
  { id: "web", label: "Web/UI", icon: MonitorSmartphone },
  { id: "social", label: "Kampane", icon: Palette },
  { id: "editorial", label: "Editorial", icon: BookOpen },
  { id: "brand", label: "Identita", icon: PenTool },
];

const categoryLabels: Record<Category, string> = {
  web: "Web/UI",
  social: "Kampaň",
  editorial: "Editorial",
  brand: "Identita",
};

const skills = [
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Photoshop",
  "Figma",
  "UX/UI dizajn",
  "Web dizajn",
  "Typografia",
];

const timeline = [
  {
    period: "2025 - 2026",
    title: "Junior grafická dizajnérka, Narrative Media",
    text: "Digitálne kampane, sociálne siete, bannery, prezentačné materiály, tlač a úpravy vizuálov podľa brand manuálov klientov.",
    icon: BriefcaseBusiness,
  },
  {
    period: "2025 - súčasnosť",
    title: "Masarykova univerzita",
    text: "Magisterské štúdium informačných štúdií a knihovníctva na Filozofickej fakulte.",
    icon: BookOpen,
  },
  {
    period: "2021 - 2025",
    title: "Teória a dejiny filmu a audiovizuálnej kultúry",
    text: "Bakalárske štúdium na Filozofickej fakulte Masarykovej univerzity.",
    icon: Feather,
  },
];

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selectedProject) {
      document.body.classList.remove("modal-open");
      return;
    }

    const project = selectedProject;
    document.body.classList.add("modal-open");

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          project.gallery.length
            ? (current - 1 + project.gallery.length) % project.gallery.length
            : current,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          project.gallery.length ? (current + 1) % project.gallery.length : current,
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  function openProject(project: Project) {
    setSelectedProject(project);
    setActiveImage(0);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#projekty">
        Preskočiť na projekty
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zlatica Štrkolcová portfólio">
          <span>ZŠ</span>
          <strong>Zlatica Štrkolcová</strong>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Hlavná navigácia">
          <a href="#projekty" onClick={closeMenu}>
            Projekty
          </a>
          <a href="#o-mne" onClick={closeMenu}>
            O mne
          </a>
          <a href="#proces" onClick={closeMenu}>
            Proces
          </a>
          <a href="#kontakt" onClick={closeMenu}>
            Kontakt
          </a>
        </nav>

        <a className="header-cv" href="/assets/cv-zlatica-strkolcova.pdf" aria-label="Stiahnuť CV">
          <Download aria-hidden="true" />
          <span>CV</span>
        </a>

        <a
          className="header-cv header-portfolio"
          href="/assets/portfolio-zlatica-strkolcova-a4.pdf"
          aria-label="Otvoriť detailné A4 PDF portfólio"
          target="_blank"
          rel="noreferrer"
        >
          <FileText aria-hidden="true" />
          <span>Portfólio</span>
        </a>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" />
              Grafická dizajnérka
            </p>
            <h1 id="hero-title">Zlatica Štrkolcová</h1>
            <p className="hero-lead">
              Tvorím vizuály, ktoré vedia byť jemné aj výrazné. Prepájam web/UI, typografiu,
              kampane, editorial a print do kompozícií, ktoré majú jasný tón aj atmosféru.
            </p>

            <div className="hero-actions" aria-label="Hlavné odkazy">
              <a className="button button-primary" href="#projekty">
                <Layers3 aria-hidden="true" />
                Pozrieť projekty
              </a>
              <a className="button button-soft" href="mailto:strkolcovazlatica@gmail.com">
                <Mail aria-hidden="true" />
                Napísať
              </a>
            </div>

            <ul className="hero-facts" aria-label="Rýchly prehľad">
              <li>
                <BadgeCheck aria-hidden="true" />
                Adobe + Figma
              </li>
              <li>
                <BadgeCheck aria-hidden="true" />
                UX/UI a web
              </li>
              <li>
                <BadgeCheck aria-hidden="true" />
                Tlač aj digitál
              </li>
            </ul>
          </div>

          <div className="hero-stage" aria-label="Profilová fotografia">
            <figure className="portrait-frame">
              <Image src="/assets/images/portrait.webp" alt="Zlatica Štrkolcová" fill priority sizes="(min-width: 900px) 360px, 70vw" />
            </figure>
          </div>
        </section>

        <section className="intro-strip" aria-label="Silné stránky">
          <div>
            <Palette aria-hidden="true" />
            <span>cit pre vizuálny tón</span>
          </div>
          <div>
            <MonitorSmartphone aria-hidden="true" />
            <span>web, UI a sociálne siete</span>
          </div>
          <div>
            <BookOpen aria-hidden="true" />
            <span>typografia a print</span>
          </div>
          <div>
            <Layers3 aria-hidden="true" />
            <span>premyslený layout</span>
          </div>
          <div>
            <BadgeCheck aria-hidden="true" />
            <span>konzistentný brand</span>
          </div>
          <div>
            <PenTool aria-hidden="true" />
            <span>cit pre detail</span>
          </div>
        </section>

        <section className="section section-projects" id="projekty" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-kicker">
              <Layers3 aria-hidden="true" />
              Vybrané práce
            </p>
            <h2 id="projects-title">Portfólio s mojimi vybranými prácami.</h2>
            <p>
              Projekty sú zostavené z podkladov v tomto priečinku: webové koncepty, social media
              vizuály, plagát, editorial aj tlačové výstupy.
            </p>
          </div>

          <div className="filters" role="group" aria-label="Filtrovať projekty">
            {filters.map((filter) => {
              const Icon = filter.icon;

              return (
                <button
                  className={activeFilter === filter.id ? "filter-button is-active" : "filter-button"}
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  <Icon aria-hidden="true" />
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className={`project-card accent-${project.accent}`} key={project.id}>
                <button className="project-media" type="button" onClick={() => openProject(project)}>
                  <Image src={project.cover} alt={project.title} fill sizes="(min-width: 1060px) 33vw, (min-width: 700px) 50vw, 100vw" />
                  <span>{categoryLabels[project.category]}</span>
                </button>
                <div className="project-body">
                  <div className="project-title-row">
                    <div>
                      <p>{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <button
                      className="project-open icon-button"
                      type="button"
                      aria-label={`Otvoriť projekt ${project.title}`}
                      onClick={() => openProject(project)}
                    >
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="o-mne" aria-labelledby="about-title">
          <div className="about-media">
            <Image src="/assets/images/portrait.webp" alt="Zlatica Štrkolcová" fill sizes="(min-width: 900px) 36vw, 100vw" />
          </div>

          <div className="about-copy">
            <p className="section-kicker">
              <Sparkles aria-hidden="true" />
              O mne
            </p>
            <h2 id="about-title">Dizajn beriem ako spôsob, ako dať veciam tón, rytmus a zrozumiteľnosť.</h2>
            <p>
              Som grafická dizajnérka so zameraním na vizuálnu komunikáciu, web dizajn, UX/UI,
              typografiu a print. Rada pracujem s atmosférou značky, no zároveň držím výstupy
              čitateľné, praktické a pripravené pre reálne použitie.
            </p>

            <div className="skill-cloud" aria-label="Znalosti">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" aria-labelledby="experience-title">
          <div className="section-heading compact">
            <p className="section-kicker">
              <BriefcaseBusiness aria-hidden="true" />
              Skúsenosti
            </p>
            <h2 id="experience-title">Z digitálnej kampane k premyslenému vizuálnemu systému.</h2>
          </div>

          <div className="timeline-grid">
            {timeline.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title}>
                  <Icon aria-hidden="true" />
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section process" id="proces" aria-labelledby="process-title">
          <div className="section-heading compact">
            <p className="section-kicker">
              <PenTool aria-hidden="true" />
              Proces
            </p>
            <h2 id="process-title">Od nápadu k použiteľnému výstupu.</h2>
          </div>

          <div className="process-grid">
            <article>
              <Sparkles aria-hidden="true" />
              <h3>Kontext</h3>
              <p>Hľadám, čo má vizuál povedať, komu slúži a aký tón značka potrebuje.</p>
            </article>
            <article>
              <Layers3 aria-hidden="true" />
              <h3>Systém</h3>
              <p>Skladám farbu, typografiu, rytmus a hierarchiu do čitateľnej kompozície.</p>
            </article>
            <article>
              <BadgeCheck aria-hidden="true" />
              <h3>Výstup</h3>
              <p>Pripravujem dizajn pre web, sociálne siete aj tlač tak, aby sa dal rovno používať.</p>
            </article>
          </div>
        </section>

        <section className="section contact" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="section-kicker">
              <Mail aria-hidden="true" />
              Kontakt
            </p>
            <h2 id="contact-title">Poďme vytvoriť vizuál, ktorý bude mať vlastný hlas.</h2>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:strkolcovazlatica@gmail.com">
              <Mail aria-hidden="true" />
              strkolcovazlatica@gmail.com
            </a>
            <a className="button button-soft" href="tel:+421950851121">
              <Phone aria-hidden="true" />
              +421 950 851 121
            </a>
            <a className="button button-outline" href="/assets/cv-zlatica-strkolcova.pdf">
              <Download aria-hidden="true" />
              Stiahnuť CV
            </a>
            <a
              className="button button-outline"
              href="/assets/portfolio-zlatica-strkolcova-a4.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText aria-hidden="true" />
              Portfólio PDF (A4)
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Zlatica Štrkolcová</span>
        <span>Grafický dizajn · Web/UI · Typografia</span>
      </footer>

      {selectedProject ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="icon-button modal-close" type="button" aria-label="Zavrieť detail" onClick={() => setSelectedProject(null)}>
              <X aria-hidden="true" />
            </button>

            <div className="modal-gallery">
              <Image
                className="modal-backdrop-image"
                src={selectedProject.gallery[activeImage]}
                alt=""
                fill
                sizes="100vw"
                aria-hidden="true"
              />
              <div className="modal-image-frame">
                <Image
                  className="modal-image"
                  src={selectedProject.gallery[activeImage]}
                  alt={selectedProject.title}
                  fill
                  sizes="(min-width: 900px) 62vw, 100vw"
                  priority
                />
              </div>
              <span className="gallery-count">
                {activeImage + 1} / {selectedProject.gallery.length}
              </span>
              <button
                className="gallery-button gallery-prev"
                type="button"
                aria-label="Predchádzajúci obrázok"
                onClick={() =>
                  setActiveImage((current) => (current - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
                }
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                className="gallery-button gallery-next"
                type="button"
                aria-label="Ďalší obrázok"
                onClick={() => setActiveImage((current) => (current + 1) % selectedProject.gallery.length)}
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>

            <div className="modal-copy">
              <p className="section-kicker">{selectedProject.type}</p>
              <h2 id="modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="project-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="gallery-thumbs" aria-label="Galéria projektu">
                {selectedProject.gallery.map((image, index) => (
                  <button
                    className={activeImage === index ? "gallery-thumb is-active" : "gallery-thumb"}
                    key={image}
                    type="button"
                    aria-label={`Zobraziť obrázok ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image src={image} alt="" fill sizes="72px" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
