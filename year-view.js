(() => {
  const pendingBook = (theme) => ({
    pending: true,
    title: "Kitaplar henüz seçilmedi",
    theme,
  });
  const pendingFilms = () =>
    Array.from({ length: 4 }, (_, index) => ({
      pending: true,
      title: `${index + 1}. film henüz seçilmedi`,
    }));

  const inTime = {
    title: "Zamana Karşı",
    original: "In Time · 2011",
    image: "assets/in-time-horizontal-poster.jpg",
    summary:
      "Zamanın para birimine dönüştüğü bir gelecekte Will Salas, herkesin yaşam süresini belirleyen düzene karşı koşmaya başlar.",
    idea: "Yaşamın değeri, sınıf eşitsizliği ve zaman üzerindeki iktidar.",
    theme: "Zaman · Eşitsizlik · Özgürlük",
    imdb: "6.7 / 10",
    director: "Andrew Niccol",
    cast: "Justin Timberlake · Amanda Seyfried · Cillian Murphy",
    scenes: [
      ["assets/in-time-04.jpg", "ZAMANI RİSKE ATMAK", "Will masaya para değil, doğrudan yaşamını koyar."],
      ["assets/in-time-05.jpg", "ÖLÜMSÜZLERİN BÖLGESİ", "Zenginlik burada gösteriş değil; tükenmeyen yarınlardır."],
      ["assets/in-time-06.jpg", "KONFORUN DIŞINA BAKMAK", "Sylvia, sahip olduğu zamanın başkalarının kaybı olduğunu görür."],
      ["assets/in-time-07.jpg", "İKİ AYRI DÜNYA", "Yakınlaşmaları sınıf sınırlarını silmez; görünür kılar."],
      ["assets/in-time-08.jpg", "HER SANİYE BİR KARAR", "Hareket etmek yalnızca kaçmak değil, sistemi reddetmektir."],
      ["assets/in-time-09.jpg", "GÜVENİN BEDELİ", "Zamanın satıldığı düzende güven, ölçülemeyen son değer olarak kalır."],
    ],
  };

  const interstellar = {
    title: "Yıldızlar Arasında",
    original: "Interstellar · 2014",
    image: "assets/interstellar-horizontal-poster.jpg",
    summary:
      "Dünya yaşanamaz hâle gelirken Cooper, insanlık için yeni bir yuva bulmak üzere yıldızların ötesine geçer.",
    idea: "Zamanın göreliliği, sevginin mesafeyi aşması ve insanlığın devamı için fedakârlık.",
    theme: "Uzay · Zaman · Sevgi · Fedakârlık",
    imdb: "8.7 / 10",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey · Anne Hathaway · Jessica Chastain",
    scenes: [
      ["assets/interstellar-earth.jpg", "EV", "Her yolculuk bir vedayla başlar."],
      ["assets/interstellar-water.png", "BİR SAAT, YEDİ YIL", "Yerçekimi zamanı büker; kısa bir keşif geri alınamayacak yıllara dönüşür."],
      ["assets/interstellar-gargantua.jpg", "GARGANTUA", "Işığın bile kaçamadığı eşikte zaman ve mekân yeniden yazılır."],
      ["assets/interstellar-tesseract.jpg", "GEÇMİŞE DOKUNMAK", "Cooper için en güçlü koordinat, Murph’e ulaşma iradesidir."],
      ["assets/interstellar-07.jpg", "KENETLENME", "Bir anlık uyum, bütün görevin kaderini değiştirir."],
      ["assets/interstellar-09.jpg", "BAŞLANGIÇ", "Bütün kozmik hikâyenin merkezinde bir baba ve kızı vardır."],
    ],
  };

  const month = (id, name, short, state, words, theme) => ({
    id,
    name,
    short,
    year: 2026,
    state,
    words,
    book: pendingBook(theme),
    films: pendingFilms(),
  });

  const months = [
    month("01", "OCAK", "Oca", "past", ["BAŞLANGIÇ", "NİYET", "SAYFA", "YOL"], "Yeni başlangıçlar"),
    month("02", "ŞUBAT", "Şub", "past", ["YAKINLIK", "AŞK", "MESAFE", "SES"], "Aşkın halleri"),
    month("03", "MART", "Mar", "past", ["SES", "HAFIZA", "KİMLİK", "DİRENİŞ"], "Kadınların sesi"),
    month("04", "NİSAN", "Nis", "past", ["DOĞA", "YEŞİL", "UYANIŞ", "İZ"], "Doğa uyanırken"),
    month("05", "MAYIS", "May", "past", ["KENT", "SOKAK", "İNSAN", "RİTİM"], "Kent ve insan"),
    month("06", "HAZİRAN", "Haz", "past", ["YOL", "ARAYIŞ", "HARİTA", "UFUK"], "Yolculuklar"),
    month("07", "TEMMUZ", "Tem", "past", ["MASA", "DİYALOG", "SORU", "BİRLİKTE"], "Birlikte okuma"),
    {
      id: "08",
      name: "AĞUSTOS",
      short: "Ağu",
      year: 2026,
      state: "current",
      words: ["MERAK", "SAAT", "SORU", "KEŞİF"],
      book: {
        title: "Evreni Anlayan Maymun",
        author: "Steve Stewart-Williams",
        image: "assets/evreni-anlayan-maymun-kapak.jpg",
        backCover:
          "Dünyadaki en tuhaf hayvanın hikâyesi: düşünen, konuşan, kültür kuran ve içinde yaşadığı evreni anlamaya çalışan insan.",
        subject:
          "İnsan davranışının, zihnin ve kültürün biyolojik evrimle birlikte nasıl biçimlendiğine dışarıdan bir gözle bakıyor.",
        theme: "Merak · İnsan · Evrim · Anlam",
      },
      films: [inTime, ...pendingFilms().slice(1)],
    },
    {
      id: "09",
      name: "EYLÜL",
      short: "Eyl",
      year: 2026,
      state: "future",
      words: ["SAHNE", "KORO", "KADER", "UZAK"],
      book: {
        title: "Seçilen Altı Tragedya",
        author: "Aiskhylos · Sophokles · Euripides",
        collection: [
          ["Kral Oidipus", "Sophokles", "assets/tragedy-oedipus.jpg"],
          ["Oidipus Kolonos'ta", "Sophokles", "assets/tragedy-kolonos-original.jpg"],
          ["Antigone", "Sophokles", "assets/tragedy-antigone.jpg"],
          ["Agamemnon", "Aiskhylos", "assets/tragedy-agamemnon-original.jpg"],
          ["Elektra", "Sophokles", "assets/tragedy-elektra.jpg"],
          ["Orestes", "Euripides", "assets/tragedy-orestes-original.jpg"],
        ],
        backCover:
          "Bir hanedanın suçları, kehanetleri ve susmayan vicdanı altı ayrı sahnede birbirine bağlanıyor.",
        subject:
          "Oidipus ailesinden Atreus hanedanına uzanan seçki; kader, iktidar, yas, adalet ve intikamın kuşaklar boyunca nasıl tekrarlandığını izliyor.",
        theme: "Antik Yunan · Tiyatro · Kader · Uzaklık",
      },
      films: [interstellar, ...pendingFilms().slice(1)],
    },
    month("10", "EKİM", "Eki", "future", ["GÖLGE", "GECE", "SES", "EŞİK"], "Karanlık anlatılar"),
    month("11", "KASIM", "Kas", "future", ["HAFIZA", "ODA", "İZ", "KAYIP"], "Hafıza odaları"),
    month("12", "ARALIK", "Ara", "future", ["BİTİŞ", "ZAMAN", "KIŞ", "CÜMLE"], "Yılın son cümlesi"),
  ];

  const periodSize = 6;
  const periodLabels = ["OCAK — HAZİRAN 2026", "TEMMUZ — ARALIK 2026"];
  const monthRail = document.querySelector(".web-months");
  const periodLabel = document.querySelector(".period-label");
  const previousPeriod = document.querySelector(".period-prev");
  const nextPeriod = document.querySelector(".period-next");
  const stage = document.querySelector(".feature-stage");
  const visual = document.querySelector(".feature-visual");
  const copy = document.querySelector(".feature-copy");
  const status = document.querySelector(".global-month-status");
  let activePeriod = 1;
  let activeMonth = months[7];
  let activeContent = "book";
  let sceneObserver;

  const escapeText = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  const stateLabel = (state) =>
    state === "current" ? "BU AY" : state === "past" ? "GEÇMİŞ" : "YAKINDA";

  function renderPeriod(selectFirst = false) {
    const visibleMonths = months.slice(
      activePeriod * periodSize,
      activePeriod * periodSize + periodSize,
    );
    if (selectFirst && !visibleMonths.includes(activeMonth)) {
      activeMonth = visibleMonths[0];
      activeContent = "book";
      renderMonth(activeMonth);
    }
    periodLabel.textContent = periodLabels[activePeriod];
    previousPeriod.disabled = activePeriod === 0;
    nextPeriod.disabled = activePeriod === periodLabels.length - 1;
    monthRail.innerHTML = visibleMonths
      .map(
        (item) => `<button class="${item === activeMonth ? "selected" : ""}" data-month-key="${item.id}" aria-pressed="${item === activeMonth}">
          <small>${stateLabel(item.state)}</small><b>${item.id}</b><span>${item.short}</span>
        </button>`,
      )
      .join("");
    monthRail.querySelectorAll("button").forEach((button) =>
      button.addEventListener("click", () => {
        const item = months.find((candidate) => candidate.id === button.dataset.monthKey);
        if (item) {
          activeMonth = item;
          activeContent = "book";
          renderPeriod();
          renderMonth(item);
        }
      }),
    );
  }

  function pendingVisual(type, title) {
    return `<div class="pending-visual"><small>${type} DOSYASI</small><b>HENÜZ<br>SEÇİLMEDİ</b><p>${escapeText(title)}</p></div>`;
  }

  function bookVisual(book) {
    if (book.pending) return pendingVisual("KİTAP", book.title);
    if (book.collection) {
      return `<div class="collection-visual" aria-label="Eylül için seçilen altı tragedya">
        <div class="collection-heading"><small>EYLÜL 2026 · SEÇKİ TAMAMLANDI</small><b>6 TRAGEDYA</b></div>
        <div class="collection-grid">${book.collection
          .map(
            (item, index) => `<figure style="--order:${index}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <img src="${item[2]}" alt="${escapeText(item[0])} orijinal kitap kapağı">
              <figcaption><b>${escapeText(item[0])}</b><small>${escapeText(item[1])}</small></figcaption>
            </figure>`,
          )
          .join("")}</div>
      </div>`;
    }
    return `<div class="single-book-visual">
      <div class="book-spine">METİNLERARASI · ${activeMonth.id}</div>
      <img src="${book.image}" alt="${escapeText(book.title)} kitap kapağı">
      <span>AYIN KİTABI · ${escapeText(book.author)}</span>
    </div>`;
  }

  function filmExperience(film, slot) {
    if (film.pending) {
      return `<div class="pending-film-experience">${pendingVisual(`${slot + 1}. FİLM`, film.title)}<p>Bu ayın ${slot + 1}. film seçimi açıklandığında afişi, bilgileri ve sahne akışı burada gösterilecek.</p></div>`;
    }
    return `<article class="film-experience">
      <section class="film-cinema-hero">
        <img src="${film.image}" alt="${escapeText(film.title)} yatay film afişi">
        <div class="film-cinema-copy">
          <small>${slot + 1}. FİLM · ${activeMonth.name} ${activeMonth.year} · ${escapeText(film.original)}</small>
          <h2>${escapeText(film.title)}</h2>
          <p>${escapeText(film.summary)}</p>
          <div class="film-facts">
            <span><b>IMDb</b>${escapeText(film.imdb)}</span>
            <span><b>YÖNETMEN</b>${escapeText(film.director)}</span>
            <span><b>OYUNCULAR</b>${escapeText(film.cast)}</span>
          </div>
          <blockquote><b>ANA FİKRİ</b>${escapeText(film.idea)}</blockquote>
          <em>${escapeText(film.theme)}</em>
        </div>
        <div class="film-scroll-cue">SAHNELER İÇİN KAYDIR ↓</div>
      </section>
      <section class="film-scene-stack" aria-label="${escapeText(film.title)} filminden sahneler">
        ${film.scenes
          .map(
            (scene, index) => `<figure class="film-scene" style="--scene-index:${index}">
              <img src="${scene[0]}" alt="${escapeText(film.title)} filminden ${index + 1}. sahne">
              <figcaption><small>SAHNE ${String(index + 1).padStart(2, "0")}</small><h3>${escapeText(scene[1])}</h3><p>${escapeText(scene[2])}</p></figcaption>
            </figure>`,
          )
          .join("")}
      </section>
    </article>`;
  }

  function detail(title, value, wide = false) {
    return `<div class="${wide ? "wide" : ""}"><dt>${title}</dt><dd>${escapeText(value)}</dd></div>`;
  }

  function bindSceneMotion() {
    sceneObserver?.disconnect();
    const scenes = document.querySelectorAll(".film-scene");
    sceneObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.target.classList.toggle("in-view", entry.isIntersecting)),
      { threshold: 0.28 },
    );
    scenes.forEach((scene) => sceneObserver.observe(scene));
  }

  function renderContent() {
    const isBook = activeContent === "book";
    const filmSlot = isBook ? -1 : Number(activeContent.split("-")[1]);
    const item = isBook ? activeMonth.book : activeMonth.films[filmSlot];
    const pending = item.pending;
    stage.dataset.content = isBook ? "book" : "film";
    stage.classList.toggle("film-mode", !isBook);
    stage.classList.toggle("is-collection", Boolean(isBook && item.collection));
    stage.classList.toggle("is-pending", Boolean(pending));
    visual.innerHTML = isBook ? bookVisual(item) : filmExperience(item, filmSlot);

    document.querySelectorAll("[data-content-tab]").forEach((button) => {
      const selected = button.dataset.contentTab === activeContent;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    if (!isBook) {
      document.querySelector(".chosen-stamp").style.display = "none";
      bindSceneMotion();
      return;
    }

    sceneObserver?.disconnect();
    document.querySelector(".chosen-stamp").style.display = "grid";
    copy.querySelector(".eyebrow").textContent = `${activeMonth.name.charAt(0)}${activeMonth.name.slice(1).toLocaleLowerCase("tr-TR")} ${activeMonth.year} · Ayın kitabı`;
    copy.querySelector("h2").textContent = item.title;
    copy.querySelector(".feature-summary").textContent = pending
      ? `${activeMonth.name.charAt(0)}${activeMonth.name.slice(1).toLocaleLowerCase("tr-TR")} ayının kitapları henüz seçilmedi.`
      : item.backCover;
    copy.querySelector(".feature-details").innerHTML = pending
      ? detail("DURUM", "Seçim bekleniyor", true) + detail("AYIN TEMASI", item.theme, true)
      : detail("ARKA KAPAKTAN", item.backCover, true) +
        detail("KONUSU", item.subject, true) +
        detail("TEMASI", item.theme, true);
    document.querySelector(".chosen-stamp").innerHTML = pending
      ? "KİTAP<br>BEKLENİYOR"
      : activeMonth.state === "current"
        ? "BU AY<br>SEÇİLDİ"
        : "SEÇİM<br>TAMAMLANDI";
  }

  function renderMonth(item) {
    document.body.dataset.month = item.state;
    document.body.dataset.monthId = item.id;
    document.body.style.setProperty("--month-number", `"${item.id}"`);
    document.querySelector(".month-no").textContent = item.id;
    document.querySelector(".august-index div b").textContent = item.name;
    document.querySelector(".august-index div small").textContent =
      `${item.year} · ${item.state === "current" ? "GÜNCEL DOSYA" : item.state === "past" ? "ARŞİV" : "PLANLANIYOR"}`;
    document.querySelector(".august-index>em").textContent =
      item.state === "current" ? "Bu ay buradayız" : item.state === "past" ? "Geçmiş program" : "Yaklaşan program";
    document.querySelector(".august-index").setAttribute("aria-label", `${item.name} ${item.year}`);
    if (status) {
      status.className = `global-month-status ${item.state}`;
      status.innerHTML = `<b>${stateLabel(item.state)} · ${item.name} ${item.year}</b><span>${item.state === "current" ? "Güncel programı görüntülüyorsun" : item.state === "past" ? "Arşivlenmiş programı görüntülüyorsun" : "Bu program henüz başlamadı"}</span>`;
    }
    document.querySelectorAll(".cosmos-word").forEach((word, index) => (word.textContent = item.words[index]));
    document.querySelectorAll(".vertical-marquee span").forEach(
      (line) => (line.textContent = `${item.book.title.toLocaleUpperCase("tr-TR")} · ${item.name} ${item.year} · `),
    );
    renderContent();
  }

  previousPeriod.addEventListener("click", () => {
    if (activePeriod > 0) {
      activePeriod -= 1;
      renderPeriod(true);
    }
  });
  nextPeriod.addEventListener("click", () => {
    if (activePeriod < periodLabels.length - 1) {
      activePeriod += 1;
      renderPeriod(true);
    }
  });
  document.querySelectorAll("[data-content-tab]").forEach((button) =>
    button.addEventListener("click", () => {
      activeContent = button.dataset.contentTab;
      renderContent();
    }),
  );

  renderPeriod();
  renderMonth(activeMonth);
})();
