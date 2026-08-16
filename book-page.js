(() => {
  const params = new URLSearchParams(location.search);
  const isSeptember = params.get("ay") === "eylul";

  const previousMonth = document.querySelector("[data-book-month-prev]");
  const nextMonth = document.querySelector("[data-book-month-next]");

  const setDisabled = (link, disabled) => {
    link.classList.toggle("is-disabled", disabled);
    link.setAttribute("aria-disabled", String(disabled));
    link.tabIndex = disabled ? -1 : 0;
    if (disabled) link.setAttribute("href", "#");
  };

  document.querySelectorAll(".book-month-link").forEach((link) =>
    link.addEventListener("click", (event) => {
      if (link.getAttribute("aria-disabled") === "true") event.preventDefault();
    }),
  );

  if (isSeptember) {
    document.body.dataset.bookMonth = "09";
    document.title = "Seçilen Altı Tragedya — Metinlerarası";
    document.querySelector(".book-cover-meta span:first-child").textContent = "EYLÜL 2026";
    document.querySelector(".book-cover-meta span:last-child").textContent = "AYIN KİTAPLARI · DOSYA 002";
    document.querySelector(".book-cover-number").textContent = "09";

    const coverObject = document.querySelector(".book-cover-object");
    coverObject.classList.add("collection");
    coverObject.innerHTML = `<div class="book-cover-collection">
      <img src="assets/tragedy-oedipus.jpg" alt="Kral Oidipus kitap kapağı">
      <img src="assets/tragedy-kolonos-original.jpg" alt="Oidipus Kolonos'ta kitap kapağı">
      <img src="assets/tragedy-antigone.jpg" alt="Antigone kitap kapağı">
      <img src="assets/tragedy-agamemnon-original.jpg" alt="Agamemnon kitap kapağı">
      <img src="assets/tragedy-elektra.jpg" alt="Elektra kitap kapağı">
      <img src="assets/tragedy-orestes-original.jpg" alt="Orestes kitap kapağı">
    </div><figcaption>AISKHYLOS · SOPHOKLES · EURIPIDES</figcaption>`;

    document.querySelector(".book-story-heading p").textContent = "KİTAP SAYFASI · EYLÜL 2026";
    document.querySelector(".book-story-heading h1").innerHTML = "Seçilen Altı<br>Tragedya";
    document.querySelector(".book-story-heading > span").textContent = "Aiskhylos · Sophokles · Euripides";
    document.querySelector(".book-back-cover > p").textContent =
      "Bir hanedanın suçları, kehanetleri ve susmayan vicdanı altı ayrı sahnede birbirine bağlanıyor. Kral Oidipus'tan Orestes'e uzanan seçki, insanın kader karşısındaki iradesini ve adalet arayışını sahneye taşıyor.";
    document.querySelector(".book-theme-block h2").innerHTML = "Kader sahnede,<br>insan kararın eşiğinde.";
    document.querySelector(".book-theme-tags").innerHTML =
      "<span>ANTİK YUNAN</span><span>TİYATRO</span><span>KADER</span><span>ADALET</span>";
    document.querySelector(".book-short-copy > p").textContent =
      "Kral Oidipus, Oidipus Kolonos'ta, Antigone, Agamemnon, Elektra ve Orestes; iki lanetli hanedanın kuşaklara yayılan hikâyesini oluşturuyor. Altı eser boyunca iktidar, aile, yas, intikam ve vicdanın değişen yüzlerini birlikte okuyacağız.";

    const septemberReviews = [
      ["SEÇKİ NOTU · 01", "“Altı oyun, kaderi değişmez bir sonuçtan çok insanın her kararıyla yeniden kurduğu bir sahneye dönüştürüyor.”", "İlk soru: Kehanet mi, seçim mi trajediyi başlatır?"],
      ["OKUR NOTU · 02", "“Oidipus ailesinde hakikati aramak, onu öğrenmenin bedelini de kabul etmek anlamına geliyor.”", "Altı çizilen izlek: Bilmek, görmek ve körlük."],
      ["TARTIŞMA KARTI · 03", "“Antigone ile Elektra'nın sesi, yas tutmanın kişisel olduğu kadar siyasal bir eylem olduğunu hatırlatıyor.”", "Masa notu: Vicdan ile yasa çatıştığında hangisi konuşur?"],
      ["KAPANIŞ NOTU · 04", "“Agamemnon'dan Orestes'e uzanan kan zinciri, adalet ile intikam arasındaki sınırı sürekli yerinden oynatıyor.”", "Kapanış sorusu: Bir suç döngüsü nerede sona erer?"],
    ];
    document.querySelectorAll(".book-review-card").forEach((card, index) => {
      card.querySelector("small").textContent = septemberReviews[index][0];
      card.querySelector("blockquote").textContent = septemberReviews[index][1];
      card.querySelector("p").textContent = septemberReviews[index][2];
    });
    document.querySelector(".book-page-footer span:last-child").textContent = "EYLÜL · KİTAP DOSYASI 002";

    previousMonth.href = "kitap.html";
    previousMonth.querySelector("small").textContent = "ÖNCEKİ AY";
    previousMonth.querySelector("b").textContent = "Ağustos 2026";
    previousMonth.querySelector("em").textContent = "Evreni Anlayan Maymun";
    setDisabled(previousMonth, false);

    nextMonth.querySelector("small").textContent = "SONRAKİ AY";
    nextMonth.querySelector("b").textContent = "Ekim 2026";
    nextMonth.querySelector("em").textContent = "Kitap henüz seçilmedi";
    setDisabled(nextMonth, true);
  }

  const carousel = document.querySelector(".book-review-carousel");
  if (!carousel) return;

  const cards = [...carousel.querySelectorAll(".book-review-card")];
  const dots = [...carousel.querySelectorAll(".book-review-dots i")];
  const toggleLabel = carousel.querySelector(".book-review-toggle");
  const stateLabel = document.querySelector(".review-motion-state");
  const progress = carousel.querySelector(".book-review-progress i");
  let activeIndex = 0;
  let paused = false;
  let timer;

  const restartProgress = () => {
    progress.style.animation = "none";
    progress.offsetWidth;
    progress.style.animation = "";
    progress.style.animationPlayState = paused ? "paused" : "running";
  };

  const render = () => {
    cards.forEach((card, index) => card.classList.toggle("active", index === activeIndex));
    dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
    restartProgress();
  };

  const start = () => {
    clearInterval(timer);
    if (paused) return;
    timer = setInterval(() => {
      activeIndex = (activeIndex + 1) % cards.length;
      render();
    }, 3000);
  };

  const toggle = () => {
    paused = !paused;
    carousel.classList.toggle("paused", paused);
    carousel.setAttribute("aria-pressed", String(paused));
    toggleLabel.textContent = paused ? "DEVAM ETMEK İÇİN TIKLA" : "DURDURMAK İÇİN TIKLA";
    stateLabel.textContent = paused ? "Geçiş durduruldu" : "Otomatik geçiş · 3 sn";
    if (paused) clearInterval(timer);
    else start();
    progress.style.animationPlayState = paused ? "paused" : "running";
  };

  carousel.addEventListener("click", toggle);
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });

  render();
  start();
})();
