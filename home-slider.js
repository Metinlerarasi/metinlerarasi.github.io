const track = document.querySelector(".slides-track");
const slider = document.querySelector(".card-slider");
const panels = [...document.querySelectorAll("[data-panel]")];
const navItems = [...document.querySelectorAll(".site-nav [data-slide]")];
const slideLinks = [...document.querySelectorAll("[data-slide]")];
const cue = document.querySelector(".scroll-cue");
const detailShell = document.querySelector(".detail-shell");
const detailPages = [...document.querySelectorAll("[data-detail-page]")];
const detailButtons = [...document.querySelectorAll("[data-detail]")];
const backToCards = document.querySelector(".back-to-cards");

let activeIndex = 1;
let pointerStartX = null;
let detailCard = null;
let transitionInProgress = false;
const currentMonths = { book: "august", film: "august" };
let currentFilmProgram = "truman";
let currentAugustFilm = "interstellar";

const bookMonths = {
  august: {
    badge: "DOSYA 001",
    number: "08",
    month: "AĞUSTOS",
    kicker: "AĞUSTOS AYININ KİTABI",
    title: "Evreni Anlayan<br><em>Maymun</em>",
    author: "Steve Stewart-Williams",
    summary: "İnsan zihni nasıl evrimleşti? Kültürümüz bizi doğadan ne kadar uzaklaştırdı? Bu ay kendimize biraz dışarıdan bakıyoruz.",
    tags: ["İnsan", "Evrim", "Kültür"],
    question: "Bizi insan<br>yapan nedir?"
  },
  september: {
    badge: "DOSYA 002",
    number: "09",
    month: "EYLÜL",
    kicker: "EYLÜL AYININ SEÇKİSİ",
    title: "Seçilen Altı<br><em>Tragedya</em>",
    author: "Aiskhylos · Sophokles · Euripides",
    summary: "İki lanetli hanedanın kuşaklara yayılan hikâyesinde kaderi, adaleti ve insanın kararlarını birlikte okuyacağız.",
    tags: ["Tiyatro", "Kader", "Adalet"],
    question: "Kader mi,<br>yoksa seçim mi?"
  }
};

const filmPrograms = {
  "in-time": {
    month: "august", badge: "AYIN FİLMİ · 01", date: "17–23 AĞUSTOS 2026",
    title: "Zamana<br><em>Karşı</em>", plainTitle: "Zamana Karşı",
    author: "Andrew Niccol · 2011", image: "assets/in-time-home-poster.jpg", trailer: "xhYUaR5QiUs",
    summary: "Yaşam süresinin para olduğu bir gelecekte, bir gün daha yaşamak bile sınıfsal bir ayrıcalığa dönüşüyor.",
    tags: ["Zaman", "Eşitsizlik", "Özgürlük"], question: "Bir saatin<br>gerçek bedeli nedir?"
  },
  interstellar: {
    month: "august", badge: "AYIN FİLMİ · 02", date: "24–30 AĞUSTOS 2026",
    title: "Yıldızlar<br><em>Arasında</em>", plainTitle: "Yıldızlar Arasında",
    author: "Christopher Nolan · 2014", image: "assets/interstellar-home-poster.jpg", trailer: "R8teZZ-loaI",
    summary: "Zamanın büküldüğü, sevginin mesafeleri aştığı ve insanın bilinmeyene doğru yürüdüğü büyük bir yolculuk.",
    tags: ["Zaman", "Uzay", "İnsan"], question: "Zaman geçer mi,<br>yoksa biz mi geçeriz?"
  },
  truman: {
    month: "september", badge: "EYLÜL FİLMİ · 03", date: "31 AĞUSTOS–6 EYLÜL",
    title: "Truman<br><em>Show</em>", plainTitle: "Truman Show",
    author: "Peter Weir · 1998", image: "assets/truman-hero.jpg", trailer: "NkZM2oWcleM",
    summary: "Kusursuz görünen hayatının başkaları tarafından yazıldığını fark eden bir adamın gerçekliğe doğru yürüyüşü.",
    tags: ["Gerçeklik", "Gözetim", "Özgürlük"], question: "Gerçek olanı<br>kim belirler?"
  },
  marty: {
    month: "september", badge: "EYLÜL FİLMİ · 04", date: "7–13 EYLÜL 2026",
    title: "Marty<br><em>Supreme</em>", plainTitle: "Marty Supreme",
    author: "Josh Safdie · 2025", image: "assets/marty-hero.jpg", trailer: "s9gSuKaKcqM",
    summary: "Görünür olma arzusu ile kendini kanıtlama hırsı arasında giderek hızlanan bir karakter yolculuğu.",
    tags: ["Hırs", "Oyun", "Görünürlük"], question: "Kazanmak için<br>ne kaybedilir?"
  },
  father: {
    month: "september", badge: "EYLÜL FİLMİ · 05", date: "14–20 EYLÜL 2026",
    title: "The<br><em>Father</em>", plainTitle: "The Father",
    author: "Florian Zeller · 2020", image: "assets/father-hero.jpg", trailer: "4TZb7YfK-JI",
    summary: "Mekânların, yüzlerin ve zamanın yer değiştirdiği; hafızanın içinden anlatılan sarsıcı bir kimlik hikâyesi.",
    tags: ["Hafıza", "Kimlik", "Aile"], question: "Hatırlamak bizi<br>biz yapar mı?"
  },
  banshees: {
    month: "september", badge: "EYLÜL FİLMİ · 06", date: "21–27 EYLÜL 2026",
    title: "The Banshees of<br><em>Inisherin</em>", plainTitle: "The Banshees of Inisherin",
    author: "Martin McDonagh · 2022", image: "assets/banshees-hero.jpg", trailer: "uRu3zLOJN2c",
    summary: "Uzak bir adada ansızın biten dostluğun sessiz bir kırgınlıktan geri dönüşsüz bir çatışmaya dönüşmesi.",
    tags: ["Dostluk", "Yalnızlık", "İnat"], question: "Bir dostluk<br>nasıl biter?"
  },
  duvar: {
    month: "september", badge: "EYLÜL–EKİM · 07", date: "28 EYLÜL–4 EKİM 2026",
    title: "<em>Duvar</em>", plainTitle: "Duvar",
    author: "Yılmaz Güney · 1983", image: "https://img.youtube.com/vi/upCZb3xLUl4/hqdefault.jpg", trailer: "upCZb3xLUl4",
    summary: "Bir cezaevinin çocuklar koğuşunda büyüyen baskının, dayanışmanın ve özgürlük arzusunun sert hikâyesi.",
    tags: ["İsyan", "Adalet", "Özgürlük"], question: "Bir duvar yalnızca<br>neyi içeride tutar?"
  }
};

function replaceTags(container, tags) {
  const existing = [...container.querySelectorAll("span")];
  tags.forEach((tag, index) => {
    const span = existing[index] || document.createElement("span");
    span.textContent = tag;
    if (!span.parentElement) container.append(span);
  });
  existing.slice(tags.length).forEach((span) => span.remove());
}

function setBookCardMonth(month) {
  const data = bookMonths[month];
  const card = document.querySelector("#kitap");
  if (!data || !card) return;
  currentMonths.book = month;
  card.classList.add("is-month-changing");
  card.querySelector("[data-book-badge]").textContent = data.badge;
  card.querySelector("[data-book-number]").textContent = data.number;
  card.querySelector("[data-book-month]").textContent = data.month;
  card.querySelector("[data-book-kicker]").textContent = data.kicker;
  card.querySelector("[data-book-title]").innerHTML = data.title;
  card.querySelector("[data-book-author]").textContent = data.author;
  card.querySelector("[data-book-summary]").textContent = data.summary;
  replaceTags(card.querySelector("[data-book-tags]"), data.tags);
  card.querySelector("[data-book-question] b").innerHTML = data.question;
  card.querySelector(".book-month-cover").hidden = month !== "august";
  card.querySelector(".tragedy-stack").hidden = month !== "september";
  card.querySelectorAll("[data-card-month-switcher='book'] button").forEach((button) => {
    button.classList.toggle("active", button.dataset.month === month);
  });
  window.setTimeout(() => card.classList.remove("is-month-changing"), 430);
}

function setFilmCard(programId) {
  const data = filmPrograms[programId];
  const card = document.querySelector("#film");
  if (!data || !card) return;
  currentMonths.film = data.month;
  if (data.month === "september") currentFilmProgram = programId;
  if (data.month === "august") currentAugustFilm = programId;
  card.classList.add("is-month-changing");
  card.querySelector("[data-film-badge]").textContent = data.badge;
  card.querySelector("[data-film-kicker]").textContent = data.date;
  card.querySelector("[data-film-card-title]").innerHTML = data.title;
  card.querySelector("[data-film-card-author]").textContent = data.author;
  card.querySelector("[data-film-card-summary]").textContent = data.summary;
  replaceTags(card.querySelector("[data-film-card-tags]"), data.tags);
  card.querySelector("[data-film-card-image]").src = data.image;
  card.querySelector("[data-film-card-image]").alt = `${data.plainTitle} filminden bir sahne`;
  card.querySelector(".film-sticker b").innerHTML = data.question;
  card.querySelectorAll("[data-card-month-switcher='film'] button").forEach((button) => {
    button.classList.toggle("active", button.dataset.month === data.month);
  });
  window.setTimeout(() => card.classList.remove("is-month-changing"), 430);
}

function setDetailMonth(kind, month, scrollToTop = true) {
  currentMonths[kind] = month;
  document.querySelectorAll(`[data-detail-month-switcher='${kind}'] button`).forEach((button) => {
    button.classList.toggle("active", button.dataset.month === month);
  });
  document.querySelectorAll(`[data-detail-month-view^='${kind}-']`).forEach((view) => {
    const active = view.dataset.detailMonthView === `${kind}-${month}`;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });
  if (scrollToTop && detailShell.classList.contains("is-open")) {
    detailShell.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function trailerUrl(videoId) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&playsinline=1`;
}

function setDetailFilm(programId) {
  const data = filmPrograms[programId];
  const view = document.querySelector(`[data-detail-month-view='film-${data?.month}']`);
  if (!data || !view) return;
  if (data.month === "september") currentFilmProgram = programId;
  if (data.month === "august") currentAugustFilm = programId;
  const iframe = view.querySelector("[data-program-trailer]");
  iframe.src = trailerUrl(data.trailer);
  iframe.title = `${data.plainTitle} fragmanı`;
  view.querySelector("[data-program-date]").textContent = data.date;
  view.querySelector("[data-program-title]").innerHTML = data.title;
  view.querySelector("[data-program-copy]").textContent = data.summary;
  replaceTags(view.querySelector("[data-program-tags]"), data.tags);
  view.querySelectorAll("[data-film-program]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filmProgram === programId);
  });
  setFilmCard(programId);
  view.querySelector(".detail-hero-section")?.animate(
    [{ opacity: 0.35, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }],
    { duration: 520, easing: "ease-out" }
  );
}

document.querySelectorAll("[data-card-month-switcher='book'] button").forEach((button) => {
  button.addEventListener("click", () => setBookCardMonth(button.dataset.month));
});

document.querySelectorAll("[data-card-month-switcher='film'] button").forEach((button) => {
  button.addEventListener("click", () => setFilmCard(button.dataset.month === "august" ? currentAugustFilm : currentFilmProgram));
});

document.querySelectorAll("[data-detail-month-switcher] button").forEach((button) => {
  button.addEventListener("click", () => {
    const kind = button.closest("[data-detail-month-switcher]").dataset.detailMonthSwitcher;
    setDetailMonth(kind, button.dataset.month);
    if (kind === "book") setBookCardMonth(button.dataset.month);
    if (kind === "film") {
      const programId = button.dataset.month === "august" ? currentAugustFilm : currentFilmProgram;
      setFilmCard(programId);
      setDetailFilm(programId);
    }
  });
});

document.querySelectorAll("[data-film-program]").forEach((button) => {
  button.addEventListener("click", () => setDetailFilm(button.dataset.filmProgram));
});

function showSlide(nextIndex) {
  activeIndex = Math.max(0, Math.min(panels.length - 1, nextIndex));
  track.style.transform = `translate3d(-${activeIndex * 100}%, 0, 0)`;

  panels.forEach((panel, index) => {
    const isActive = index === activeIndex;
    panel.setAttribute("aria-hidden", String(!isActive));
    panel.inert = !isActive;
  });

  navItems.forEach((item) => {
    const isActive = Number(item.dataset.slide) === activeIndex;
    item.classList.toggle("active", isActive);
    if (isActive) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  const atLastPanel = activeIndex === panels.length - 1;
  const nextPanel = panels[activeIndex + 1] || panels[0];
  cue.querySelector("span").textContent = atLastPanel ? "Başa dön" : "Kaydır";
  cue.querySelector("i").textContent = atLastPanel ? "↺" : "→";
  cue.setAttribute("aria-label", atLastPanel ? "Anasayfa kartına dön" : `${nextPanel.id} kartına geç`);
  document.body.dataset.activePanel = panels[activeIndex].id;
}

slideLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showSlide(Number(item.dataset.slide));
  });
});

cue.addEventListener("click", () => {
  showSlide(activeIndex === panels.length - 1 ? 0 : activeIndex + 1);
});

slider.addEventListener("pointerdown", (event) => {
  if (event.target.closest("a, button, [contenteditable='true']")) return;
  pointerStartX = event.clientX;
  slider.setPointerCapture?.(event.pointerId);
});

slider.addEventListener("pointerup", (event) => {
  if (pointerStartX === null) return;
  const distance = event.clientX - pointerStartX;
  pointerStartX = null;
  slider.releasePointerCapture?.(event.pointerId);

  if (distance < -44) showSlide(activeIndex + 1);
  if (distance > 44) showSlide(activeIndex - 1);
});

slider.addEventListener("pointercancel", () => {
  pointerStartX = null;
});

function getCardColor(card) {
  return getComputedStyle(card).getPropertyValue("--card-solid").trim() || "#315f58";
}

function cardClip(card) {
  const rect = card.getBoundingClientRect();
  const top = Math.max(0, rect.top);
  const right = Math.max(0, window.innerWidth - rect.right);
  const bottom = Math.max(0, window.innerHeight - rect.bottom);
  const left = Math.max(0, rect.left);
  const radius = parseFloat(getComputedStyle(card).borderTopLeftRadius) || 28;
  return `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`;
}

function createWipe(color, clipPath) {
  const wipe = document.createElement("div");
  wipe.className = "transition-wipe";
  wipe.style.background = color;
  wipe.style.clipPath = clipPath;
  wipe.innerHTML = "<i></i><i></i><b>✦</b>";
  document.body.append(wipe);
  return wipe;
}

function setDetailPage(name, color) {
  detailPages.forEach((page) => {
    const isActive = page.dataset.detailPage === name;
    page.classList.toggle("is-active", isActive);
    page.setAttribute("aria-hidden", String(!isActive));
    page.inert = !isActive;
  });
  detailShell.style.setProperty("--detail-color", color);
  if (name === "kitap") setDetailMonth("book", currentMonths.book, false);
  if (name === "film") {
    setDetailMonth("film", currentMonths.film, false);
    setDetailFilm(currentMonths.film === "september" ? currentFilmProgram : currentAugustFilm);
  }
}

async function openDetail(name, trigger) {
  if (transitionInProgress || detailShell.classList.contains("is-open")) return;
  transitionInProgress = true;
  detailCard = trigger.closest(".book-card");
  const color = getCardColor(detailCard);
  const startClip = cardClip(detailCard);
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wipe = createWipe(color, startClip);

  document.body.classList.add("detail-open");
  setDetailPage(name, color);
  detailShell.scrollTop = 0;

  if (!reducedMotion) {
    const animation = wipe.animate(
      [
        { clipPath: startClip },
        { clipPath: "inset(0 0 0 0 round 0px)" }
      ],
      { duration: 760, easing: "cubic-bezier(.2,.82,.2,1)", fill: "forwards" }
    );
    await animation.finished.catch(() => {});
  }

  detailShell.classList.add("is-open");
  detailShell.setAttribute("aria-hidden", "false");
  wipe.remove();
  transitionInProgress = false;
  backToCards.focus({ preventScroll: true });
}

async function closeDetail() {
  if (transitionInProgress || !detailShell.classList.contains("is-open")) return;
  transitionInProgress = true;
  const color = getCardColor(detailCard || panels[activeIndex]);
  const endClip = cardClip(detailCard || panels[activeIndex]);
  const fullClip = "inset(0 0 0 0 round 0px)";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wipe = createWipe(color, fullClip);

  detailShell.classList.remove("is-open");
  detailShell.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-open");

  if (!reducedMotion) {
    const animation = wipe.animate(
      [
        { clipPath: fullClip },
        { clipPath: endClip }
      ],
      { duration: 720, easing: "cubic-bezier(.7,0,.24,1)", fill: "forwards" }
    );
    await animation.finished.catch(() => {});
  }

  wipe.remove();
  transitionInProgress = false;
  detailCard?.querySelector("[data-detail]")?.focus({ preventScroll: true });
}

detailButtons.forEach((button) => {
  button.addEventListener("click", () => openDetail(button.dataset.detail, button));
});

backToCards.addEventListener("click", closeDetail);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
  },
  { root: detailShell, threshold: 0.18 }
);

document.querySelectorAll(".reveal-on-scroll").forEach((element) => revealObserver.observe(element));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && detailShell.classList.contains("is-open")) {
    closeDetail();
    return;
  }
  if (detailShell.classList.contains("is-open")) return;
  if (event.key === "ArrowRight") showSlide(activeIndex + 1);
  if (event.key === "ArrowLeft") showSlide(activeIndex - 1);
});

showSlide(1);
