const projects = [
  {
    id: "sauce",
    title: "Golden hot sauce",
    type: "Web/UI koncept",
    category: "web",
    cover: "assets/images/sauce-cover.webp",
    gallery: ["assets/images/sauce-cover.webp", "assets/images/sauce-phone.webp"],
    description:
      "Produktová webová prezentácia s výrazným vizuálnym tónom, kontrastnou typografiou a rozhraním pripraveným pre e-commerce dojem.",
    tags: ["UI dizajn", "produkt", "web"],
  },
  {
    id: "joga",
    title: "Jóga nežne",
    type: "Web dizajn a identita",
    category: "web",
    cover: "assets/images/joga-cover.webp",
    gallery: ["assets/images/joga-cover.webp", "assets/images/joga-poster.webp"],
    description:
      "Pokojný webový koncept a komunikačný vizuál pre jogu, postavený na jemnej farebnosti, priestore a mäkkom tempe kompozície.",
    tags: ["web dizajn", "brand feel", "print"],
  },
  {
    id: "fashion",
    title: "Fashion magazine",
    type: "Editorial dizajn",
    category: "editorial",
    cover: "assets/images/fashion-cover.webp",
    gallery: ["assets/images/fashion-cover.webp", "assets/images/fashion-detail.webp"],
    description:
      "Magazínový layout s módnou témou, výraznou typografiou, prácou s moodboardom a vizuálnou hierarchiou pre rozsiahlejší obsah.",
    tags: ["editorial", "typografia", "móda"],
  },
  {
    id: "automax",
    title: "Automax rent",
    type: "Social media kampaň",
    category: "social",
    cover: "assets/images/automax-cover.webp",
    gallery: ["assets/images/automax-cover.webp", "assets/images/automax-detail.webp"],
    description:
      "Séria prenájmových vizuálov pre sociálne siete s dôrazom na jasnú cenu, model auta a rýchle čítanie ponuky v mobile.",
    tags: ["social media", "kampaň", "banner"],
  },
  {
    id: "dring",
    title: "DR.ING",
    type: "Digitálna kampaň",
    category: "social",
    cover: "assets/images/dring-cover.webp",
    gallery: ["assets/images/dring-cover.webp", "assets/images/dring-detail.webp"],
    description:
      "Sezónne promo výstupy pre produktovú značku, kde sa predajný claim spája s náladou kampane a jasným vizuálnym kontrastom.",
    tags: ["kampaň", "produkt", "social"],
  },
  {
    id: "muni",
    title: "MUNI news",
    type: "Novinový layout",
    category: "editorial",
    cover: "assets/images/muni-cover.webp",
    gallery: ["assets/images/muni-cover.webp", "assets/images/muni-detail.webp"],
    description:
      "Fiktívny univerzitný news layout so silnou mriežkou, veľkými nadpismi a informačnou štruktúrou pre rýchle skenovanie obsahu.",
    tags: ["layout", "editorial", "grid"],
  },
  {
    id: "psbrno",
    title: "PS Brno",
    type: "Print a prezentácia",
    category: "editorial",
    cover: "assets/images/psbrno-cover.webp",
    gallery: ["assets/images/psbrno-cover.webp", "assets/images/psbrno-detail.webp"],
    description:
      "Tlačové a prezentačné materiály s výrazným brand systémom, kontrastnými farbami a jasnou informačnou hierarchiou.",
    tags: ["print", "brand manuál", "prezentácia"],
  },
  {
    id: "podane",
    title: "Podané ruce",
    type: "Šablóny pre komunikáciu",
    category: "brand",
    cover: "assets/images/podane-cover.webp",
    gallery: ["assets/images/podane-cover.webp", "assets/images/podane-detail.webp"],
    description:
      "Sada komunikačných šablón a vizuálnych prvkov pre organizáciu, navrhnutá tak, aby sa dala opakovane používať v rôznych výstupoch.",
    tags: ["šablóny", "neziskový sektor", "brand"],
  },
  {
    id: "zubar",
    title: "Zubár",
    type: "Social media vizuály",
    category: "social",
    cover: "assets/images/zubar-cover.webp",
    gallery: ["assets/images/zubar-cover.webp", "assets/images/zubar-detail.webp"],
    description:
      "Príspevky a bannery pre zdravotnícku komunikáciu, kde je dôležitá dôveryhodnosť, čitateľnosť a priateľský vizuálny tón.",
    tags: ["social media", "zdravie", "banner"],
  },
  {
    id: "zvol",
    title: "Zvol si info",
    type: "Instagram séria",
    category: "social",
    cover: "assets/images/zvol-cover.webp",
    gallery: ["assets/images/zvol-cover.webp", "assets/images/zvol-detail.webp"],
    description:
      "Edukačné instagramové výstupy s minimalistickým vizuálom, ikonografiou a dôrazom na rýchle pochopenie správy.",
    tags: ["Instagram", "edukácia", "ikonky"],
  },
  {
    id: "alien",
    title: "Alien plagát",
    type: "Plagátový koncept",
    category: "brand",
    cover: "assets/images/alien-cover.webp",
    gallery: ["assets/images/alien-cover.webp", "assets/images/alien-detail.webp"],
    description:
      "Filmový plagátový návrh s prácou s atmosférou, kontrastom a výraznou kompozíciou pre kultový vizuálny motív.",
    tags: ["plagát", "kompozícia", "film"],
  },
];

const grid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
const dialog = document.querySelector("#project-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const dialogType = document.querySelector("#dialog-type");
const dialogDescription = document.querySelector("#dialog-description");
const dialogTags = document.querySelector("#dialog-tags");
const dialogClose = document.querySelector(".dialog-close");
const dots = document.querySelector("#gallery-dots");
const previousButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");

let activeProject = null;
let activeImage = 0;

const categoryLabels = {
  web: "Web/UI",
  social: "Kampaň",
  editorial: "Editorial",
  brand: "Identita",
};

function iconArrow() {
  return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>';
}

function renderProjects() {
  grid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card" data-category="${project.category}">
          <div class="project-media">
            <img src="${project.cover}" alt="${project.title}" loading="lazy" />
            <span class="project-category">${categoryLabels[project.category]}</span>
          </div>
          <div class="project-body">
            <div class="project-title-row">
              <h3>${project.title}</h3>
              <button class="project-open" type="button" data-project="${project.id}" aria-label="Otvoriť projekt ${project.title}" title="Otvoriť detail">
                ${iconArrow()}
              </button>
            </div>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function applyFilter(filter) {
  document.querySelectorAll(".project-card").forEach((card) => {
    const isVisible = filter === "all" || card.dataset.category === filter;
    card.hidden = !isVisible;
  });
}

function setActiveImage(index) {
  if (!activeProject) return;

  activeImage = (index + activeProject.gallery.length) % activeProject.gallery.length;
  dialogImage.src = activeProject.gallery[activeImage];
  dialogImage.alt = activeProject.title;

  dots.innerHTML = activeProject.gallery
    .map(
      (_, imageIndex) =>
        `<button type="button" class="${imageIndex === activeImage ? "is-active" : ""}" data-image="${imageIndex}" aria-label="Zobraziť obrázok ${imageIndex + 1}"></button>`
    )
    .join("");
}

function openProject(projectId) {
  activeProject = projects.find((project) => project.id === projectId);
  if (!activeProject) return;

  dialogTitle.textContent = activeProject.title;
  dialogType.textContent = activeProject.type;
  dialogDescription.textContent = activeProject.description;
  dialogTags.innerHTML = activeProject.tags.map((tag) => `<span>${tag}</span>`).join("");
  setActiveImage(0);

  document.body.classList.add("modal-open");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog() {
  document.body.classList.remove("modal-open");
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

renderProjects();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".project-open");
  if (!button) return;
  openProject(button.dataset.project);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Zavrieť menu" : "Otvoriť menu");
  menuToggle.setAttribute("title", isOpen ? "Zavrieť menu" : "Otvoriť menu");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Otvoriť menu");
    menuToggle.setAttribute("title", "Otvoriť menu");
  }
});

dialogClose.addEventListener("click", closeDialog);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});

previousButton.addEventListener("click", () => setActiveImage(activeImage - 1));
nextButton.addEventListener("click", () => setActiveImage(activeImage + 1));

dots.addEventListener("click", (event) => {
  const dot = event.target.closest("button[data-image]");
  if (dot) {
    setActiveImage(Number(dot.dataset.image));
  }
});

document.addEventListener("keydown", (event) => {
  if (!dialog.open) return;

  if (event.key === "ArrowLeft") {
    setActiveImage(activeImage - 1);
  }
  if (event.key === "ArrowRight") {
    setActiveImage(activeImage + 1);
  }
});
