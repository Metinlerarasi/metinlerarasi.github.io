(() => {
  const months = [
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
      film: {
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
      },
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
          [
            "Oidipus Kolonos'ta",
            "Sophokles",
            "assets/tragedy-kolonos.svg",
          ],
          ["Antigone", "Sophokles", "assets/tragedy-antigone.jpg"],
          ["Agamemnon", "Aiskhylos", "assets/tragedy-agamemnon.svg"],
          ["Elektra", "Sophokles", "assets/tragedy-elektra.jpg"],
          ["Orestes", "Euripides", "assets/tragedy-orestes.svg"],
        ],
        backCover:
          "Bir hanedanın suçları, kehanetleri ve susmayan vicdanı altı ayrı sahnede birbirine bağlanıyor.",
        subject:
          "Oidipus ailesinden Atreus hanedanına uzanan seçki; kader, iktidar, yas, adalet ve intikamın kuşaklar boyunca nasıl tekrarlandığını izliyor.",
        theme: "Antik Yunan · Tiyatro · Kader · Uzaklık",
      },
      film: {
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
      },
    },
    {
      id: "10",
      name: "EKİM",
      short: "Eki",
      year: 2026,
      state: "future",
      words: ["GÖLGE", "GECE", "SES", "EŞİK"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Karanlık anlatılar" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "11",
      name: "KASIM",
      short: "Kas",
      year: 2026,
      state: "future",
      words: ["HAFIZA", "ODA", "İZ", "KAYIP"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Hafıza odaları" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "12",
      name: "ARALIK",
      short: "Ara",
      year: 2026,
      state: "future",
      words: ["BİTİŞ", "ZAMAN", "KIŞ", "CÜMLE"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Yılın son cümlesi" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "01",
      name: "OCAK",
      short: "Oca",
      year: 2027,
      state: "future",
      words: ["BAŞLANGIÇ", "NİYET", "SAYFA", "YOL"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Yeni başlangıçlar" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "02",
      name: "ŞUBAT",
      short: "Şub",
      year: 2027,
      state: "future",
      words: ["YAKINLIK", "AŞK", "MESAFE", "SES"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Aşkın halleri" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "03",
      name: "MART",
      short: "Mar",
      year: 2027,
      state: "future",
      words: ["SES", "HAFIZA", "KİMLİK", "DİRENİŞ"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Kadınların sesi" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "04",
      name: "NİSAN",
      short: "Nis",
      year: 2027,
      state: "future",
      words: ["DOĞA", "YEŞİL", "UYANIŞ", "İZ"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Doğa uyanırken" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "05",
      name: "MAYIS",
      short: "May",
      year: 2027,
      state: "future",
      words: ["KENT", "SOKAK", "İNSAN", "RİTİM"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Kent ve insan" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "06",
      name: "HAZİRAN",
      short: "Haz",
      year: 2027,
      state: "future",
      words: ["YOL", "ARAYIŞ", "HARİTA", "UFKUN"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Yolculuklar" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
    {
      id: "07",
      name: "TEMMUZ",
      short: "Tem",
      year: 2027,
      state: "future",
      words: ["MASA", "DİYALOG", "SORU", "BİRLİKTE"],
      book: { pending: true, title: "Kitaplar henüz seçilmedi", theme: "Birlikte okuma" },
      film: { pending: true, title: "Film henüz seçilmedi" },
    },
  ];

  const periodSize = 6;
  const periodLabels = ["AĞU 2026 — OCA 2027", "ŞUB 2027 — TEM 2027"];
  const monthRail = document.querySelector(".web-months");
  const periodLabel = document.querySelector(".period-label");
  const previousPeriod = document.querySelector(".period-prev");
  const nextPeriod = document.querySelector(".period-next");
  const stage = document.querySelector(".feature-stage");
  const visual = document.querySelector(".feature-visual");
  const copy = document.querySelector(".feature-copy");
  const status = document.querySelector(".global-month-status");
  let activePeriod = 0;
  let activeMonth = months[0];
  let activeContent = "book";

  const escapeText = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  function renderPeriod(selectFirst = false) {
    const visibleMonths = months.slice(
      activePeriod * periodSize,
      activePeriod * periodSize + periodSize,
    );
    if (selectFirst && !visibleMonths.includes(activeMonth)) {
      activeMonth = visibleMonths[0];
      renderMonth(activeMonth);
    }
    periodLabel.textContent = periodLabels[activePeriod];
    previousPeriod.disabled = activePeriod === 0;
    nextPeriod.disabled = activePeriod === periodLabels.length - 1;
    monthRail.innerHTML = visibleMonths
      .map(
        (month) => `<button class="${month === activeMonth ? "selected" : ""}" data-month-key="${month.year}-${month.id}" aria-pressed="${month === activeMonth}">
          <small>${month.state === "current" ? "BU AY" : "YAKINDA"}</small>
          <b>${month.id}</b><span>${month.short}</span>
        </button>`,
      )
      .join("");
    monthRail.querySelectorAll("button").forEach((button) =>
      button.addEventListener("click", () => {
        const [year, id] = button.dataset.monthKey.split("-");
        const month = months.find(
          (item) => item.id === id && item.year === Number(year),
        );
        if (month) {
          activeMonth = month;
          renderPeriod();
          renderMonth(month);
        }
      }),
    );
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
              <img src="${item[2]}" alt="${escapeText(item[0])} kitap kapağı">
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

  function filmVisual(film) {
    if (film.pending) return pendingVisual("FİLM", film.title);
    return `<div class="same-page-film">
      <img src="${film.image}" alt="${escapeText(film.title)} yatay film afişi">
      <div><small>${escapeText(film.original)}</small><b>${escapeText(film.title)}</b><span>AYIN FİLMİ</span></div>
    </div>`;
  }

  function pendingVisual(type, title) {
    return `<div class="pending-visual"><small>${type} DOSYASI</small><b>HENÜZ<br>SEÇİLMEDİ</b><p>${escapeText(title)}</p></div>`;
  }

  function detail(title, value, wide = false) {
    return `<div class="${wide ? "wide" : ""}"><dt>${title}</dt><dd>${escapeText(value)}</dd></div>`;
  }

  function renderContent() {
    const item = activeMonth[activeContent];
    const isBook = activeContent === "book";
    const pending = item.pending;
    stage.dataset.content = activeContent;
    stage.classList.toggle("is-collection", Boolean(item.collection));
    stage.classList.toggle("is-pending", Boolean(pending));
    visual.innerHTML = isBook ? bookVisual(item) : filmVisual(item);

    document.querySelectorAll("[data-content-tab]").forEach((button) => {
      const selected = button.dataset.contentTab === activeContent;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    const label = isBook ? "Ayın kitabı" : "Ayın filmi";
    copy.querySelector(".eyebrow").textContent = `${activeMonth.name.charAt(0)}${activeMonth.name.slice(1).toLocaleLowerCase("tr-TR")} ${activeMonth.year} · ${label}`;
    copy.querySelector("h2").textContent = item.title;
    copy.querySelector(".feature-summary").textContent = pending
      ? `${activeMonth.name.charAt(0)}${activeMonth.name.slice(1).toLocaleLowerCase("tr-TR")} ayının ${isBook ? "kitapları" : "filmi"} henüz seçilmedi. Açıklandığında bütün ayrıntılar burada yer alacak.`
      : isBook
        ? item.backCover
        : item.summary;

    const details = copy.querySelector(".feature-details");
    details.innerHTML = pending
      ? detail("DURUM", "Seçim bekleniyor", true) +
        detail("AYIN TEMASI", item.theme || "Daha sonra açıklanacak", true)
      : isBook
        ? detail("ARKA KAPAKTAN", item.backCover, true) +
          detail("KONUSU", item.subject, true) +
          detail("TEMASI", item.theme, true)
        : detail("KONUSU", item.summary, true) +
          detail("ANA FİKRİ", item.idea, true) +
          detail("TEMASI", item.theme, true) +
          detail("IMDB", item.imdb) +
          detail("YÖNETMEN", item.director) +
          detail("OYUNCULAR", item.cast, true);

    document.querySelector(".chosen-stamp").innerHTML = pending
      ? `${isBook ? "KİTAP" : "FİLM"}<br>BEKLENİYOR`
      : activeMonth.state === "current"
        ? "BU AY<br>SEÇİLDİ"
        : "SEÇİM<br>TAMAMLANDI";
  }

  function renderMonth(month) {
    document.body.dataset.month = month.state;
    document.body.dataset.monthId = month.id;
    document.body.style.setProperty("--month-number", `"${month.id}"`);
    document.querySelector(".month-no").textContent = month.id;
    document.querySelector(".august-index div b").textContent = month.name;
    document.querySelector(".august-index div small").textContent =
      `${month.year} · ${month.state === "current" ? "GÜNCEL DOSYA" : "PLANLANIYOR"}`;
    document.querySelector(".august-index>em").textContent =
      month.state === "current" ? "Bu ay buradayız" : "Yaklaşan program";
    document.querySelector(".august-index").setAttribute(
      "aria-label",
      `${month.name} ${month.year}`,
    );
    if (status) {
      status.className = `global-month-status ${month.state}`;
      status.innerHTML = `<b>${month.state === "current" ? "BU AY" : "YAKINDA"} · ${month.name} ${month.year}</b><span>${month.state === "current" ? "Güncel programı görüntülüyorsun" : "Bu program henüz başlamadı"}</span>`;
    }
    document
      .querySelectorAll(".cosmos-word")
      .forEach((word, index) => (word.textContent = month.words[index]));
    document.querySelectorAll(".vertical-marquee span").forEach(
      (line) =>
        (line.textContent = `${month.book.title.toLocaleUpperCase("tr-TR")} · ${month.name} ${month.year} · `),
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
