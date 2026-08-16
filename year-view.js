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
    trailer: "s9wiOtYFZwk",
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
    trailer: "ePbKGoIGAXY",
    scenes: [
      ["assets/interstellar-earth.jpg", "EV", "Her yolculuk bir vedayla başlar."],
      ["assets/interstellar-water.png", "BİR SAAT, YEDİ YIL", "Yerçekimi zamanı büker; kısa bir keşif geri alınamayacak yıllara dönüşür."],
      ["assets/interstellar-gargantua.jpg", "GARGANTUA", "Işığın bile kaçamadığı eşikte zaman ve mekân yeniden yazılır."],
      ["assets/interstellar-tesseract.jpg", "GEÇMİŞE DOKUNMAK", "Cooper için en güçlü koordinat, Murph’e ulaşma iradesidir."],
      ["assets/interstellar-07.jpg", "KENETLENME", "Bir anlık uyum, bütün görevin kaderini değiştirir."],
      ["assets/interstellar-09.jpg", "BAŞLANGIÇ", "Bütün kozmik hikâyenin merkezinde bir baba ve kızı vardır."],
    ],
  };

  const trumanShow = {
    title: "Truman Show",
    original: "The Truman Show · 1998",
    image: "assets/truman-hero.jpg",
    summary:
      "Truman Burbank, kusursuz görünen kasabasındaki hayatının aslında milyonlarca kişinin izlediği dev bir televizyon yapımı olduğunu fark etmeye başlar.",
    idea: "Konforlu bir yanılsama ile özgür ve belirsiz bir hayat arasındaki seçimin insanı nasıl tanımladığı.",
    theme: "Gerçeklik · Gözetim · Özgür İrade · Medya",
    imdb: "8.2 / 10",
    director: "Peter Weir",
    cast: "Jim Carrey · Ed Harris · Laura Linney",
    trailer: "dlnmQbPGuls",
    scenes: [
      ["assets/truman-01.jpg", "KUSURSUZ SABAH", "Seahaven'da her şey olması gerektiği kadar düzenlidir; belki de gereğinden fazla."],
      ["assets/truman-02.jpg", "GÖKYÜZÜNDEKİ ÇATLAK", "Küçük bir aksaklık, Truman'ın bütün gerçekliğini sorgulamasına yeter."],
      ["assets/truman-03.jpg", "KORKUNUN ÖTESİ", "Özgürlük, kendisi için hazırlanmış en büyük korkunun içinden geçmeyi gerektirir."],
      ["assets/truman-04.jpg", "GÖRÜNMEYEN YÖNETMEN", "Christof yalnızca bir programı değil, başka bir insanın ufkunu da yönetmektedir."],
      ["assets/truman-05.jpg", "AYNADAKİ SEYİRCİ", "Truman ilk kez kendisine bakan gözlerin gerçekten kime ait olduğunu sezer."],
      ["assets/truman-06.jpg", "ÇIKIŞ", "Bildiği dünyanın sonundaki kapı, bilinmeyen ama gerçek bir hayata açılır."],
    ],
  };

  const martySupreme = {
    title: "Marty Supreme",
    original: "Marty Supreme · 2025",
    image: "assets/marty-hero.jpg",
    summary:
      "Kimsenin ciddiye almadığı bir hayalin peşindeki Marty Mauser, masa tenisi dünyasında büyüklüğe ulaşmak için sınırlarını ve çevresindeki herkesi zorlar.",
    idea: "Büyüklük arzusu insanı ileri taşıyabilir; fakat başarı tutkusu kimliğin ve ilişkilerin önüne geçtiğinde zaferin bedeli değişir.",
    theme: "Hırs · Rekabet · Şöhret · Amerikan Rüyası",
    imdb: "7.5 / 10",
    director: "Josh Safdie",
    cast: "Timothée Chalamet · Gwyneth Paltrow · Odessa A'zion",
    trailer: "s9gSuKaKcqM",
    scenes: [
      ["assets/marty-01.jpg", "BÜYÜK KONUŞMAK", "Marty'nin sesi, henüz kimsenin göremediği gelecekteki ününü çoktan anlatır."],
      ["assets/marty-02.jpg", "SAHNENİN ORTASI", "Kalabalığın içinde duruşu bile kazanmanın onun için bir inanç meselesi olduğunu söyler."],
      ["assets/marty-03.jpg", "BİR SAYI DAHA", "Masa küçüktür; Marty'nin ona yüklediği anlam ise bütün dünyayı kaplar."],
      ["assets/marty-04.jpg", "BAŞKA BİR OYUN", "Kay Stone'un dünyası, Marty'nin spor kadar insanları da kazanmak istediğini gösterir."],
      ["assets/marty-05.jpg", "YERALTI RİTMİ", "Dar bir salonda her vuruş, daha büyük bir hayata açılan kapı gibi yankılanır."],
      ["assets/marty-06.png", "SINIRDA", "Kazanma isteği ile tükenme arasındaki çizgi giderek görünmez olur."],
    ],
  };

  const theFather = {
    title: "The Father",
    original: "The Father · 2020",
    image: "assets/father-hero.jpg",
    summary:
      "Yardımı reddeden Anthony, değişen odalar, yüzler ve anılar arasında kendi gerçekliğine tutunmaya çalışırken kızı Anne de babasını yavaşça kaybetmenin acısıyla yüzleşir.",
    idea: "Hafıza çözülürken kimliğin, ev duygusunun ve sevginin hangi parçalarının insanda kalabildiği.",
    theme: "Hafıza · Kimlik · Yaşlılık · Sevgi",
    imdb: "8.2 / 10",
    director: "Florian Zeller",
    cast: "Anthony Hopkins · Olivia Colman · Mark Gatiss",
    trailer: "4TZb7YfK-JI",
    scenes: [
      ["assets/father-01.jpg", "YOLCULUK", "Tanıdık bir şehir bile anılar yer değiştirdiğinde yabancı bir manzaraya dönüşür."],
      ["assets/father-02.jpg", "PENCERENİN ÖTESİ", "Anthony, değişmeyen bir dış dünya ararken kendi zihnindeki odalar sessizce dönüşür."],
      ["assets/father-03.jpg", "EV Mİ, DEĞİL Mİ?", "Eşyalar aynı görünür; fakat onlara ait hikâyeler artık güvenilir değildir."],
      ["assets/father-04.jpg", "KIZI", "Anne'nin sevgisi sabittir, babasının onu tanıdığı gerçeklik ise sürekli değişir."],
      ["assets/father-05.jpg", "TEKRAR", "Aynı konuşma başka bir yüzle döndüğünde zaman düz bir çizgi olmaktan çıkar."],
      ["assets/father-06.jpg", "KIRILGAN GERÇEK", "Bir odadaki herkes aynı anı yaşamaz; film bizi Anthony'nin belirsizliğinde bırakır."],
    ],
  };

  const banshees = {
    title: "The Banshees of Inisherin",
    original: "The Banshees of Inisherin · 2022",
    image: "assets/banshees-hero.jpg",
    summary:
      "Uzak bir İrlanda adasında Colm'un yıllardır süren dostluklarını aniden bitirmesi, Pádraic'in anlamlandıramadığı ve giderek sertleşen bir çatışmayı başlatır.",
    idea: "Bir dostluğun bitişi üzerinden yalnızlık, gurur, sanatla iz bırakma arzusu ve anlamsız çatışmaların büyümesi.",
    theme: "Dostluk · Yalnızlık · Gurur · Absürtlük",
    imdb: "7.7 / 10",
    director: "Martin McDonagh",
    cast: "Colin Farrell · Brendan Gleeson · Kerry Condon",
    trailer: "uRu3zLOJN2c",
    scenes: [
      ["assets/banshees-01.jpg", "AYNI YOL", "Bir zamanlar yan yana gidilen yollar, tek bir kararla iki ayrı yöne ayrılır."],
      ["assets/banshees-02.jpg", "SON BİR EZGİ", "Colm, dostluktan vazgeçerek geride kalacak bir müziğe tutunmak ister."],
      ["assets/banshees-03.jpg", "SIOBHÁN'IN UFUK ÇİZGİSİ", "Ada Pádraic için bütün dünya, Siobhán içinse geride bırakılması gereken bir sınırdır."],
      ["assets/banshees-04.jpg", "PUBDAKİ SESSİZLİK", "Konuşmanın alışkanlık olduğu yerde susmak, en ağır reddedişe dönüşür."],
      ["assets/banshees-05.jpg", "JENNY", "İnsanların sertliğine karşı küçük bir dostluk, hikâyenin en saf yakınlığını taşır."],
      ["assets/banshees-06.jpg", "DOMINIC", "Adanın kenarında kalanlar, başkalarının çatışmalarından çok daha derin yalnızlıklar taşır."],
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
      films: [inTime, interstellar],
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
      films: [trumanShow, martySupreme, theFather, banshees],
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
      <section class="film-trailer" aria-label="${escapeText(film.title)} fragmanı">
        <div class="film-trailer-copy">
          <small>YOUTUBE · RESMÎ FRAGMAN</small>
          <h3>Hikâyeye<br>sesini aç.</h3>
          <p>${escapeText(film.title)} fragmanını sayfadan ayrılmadan izleyebilir veya YouTube'da açabilirsin.</p>
          <a href="https://www.youtube.com/watch?v=${film.trailer}" target="_blank" rel="noopener noreferrer">YouTube'da izle ↗</a>
        </div>
        <div class="film-trailer-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${film.trailer}?rel=0"
            title="${escapeText(film.title)} resmî fragmanı"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
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
    let isBook = activeContent === "book";
    let filmSlot = isBook ? -1 : Number(activeContent.split("-")[1]);
    if (!isBook && (!Number.isInteger(filmSlot) || filmSlot >= activeMonth.films.length)) {
      activeContent = "book";
      isBook = true;
      filmSlot = -1;
    }
    const contentTabs = document.querySelector(".content-tabs");
    contentTabs.style.setProperty("--content-count", activeMonth.films.length + 1);
    contentTabs.querySelectorAll("[data-content-tab^='film-']").forEach((button, index) => {
      const available = index < activeMonth.films.length;
      button.hidden = !available;
      button.disabled = !available;
    });
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

  function renderHashContent() {
    if (location.hash === "#film") {
      activeContent = "film-0";
      renderContent();
      document.querySelector(".feature-stage")?.scrollIntoView({ block: "start" });
    } else if (location.hash === "#book") {
      activeContent = "book";
      renderContent();
      document.querySelector(".feature-stage")?.scrollIntoView({ block: "start" });
    }
  }

  addEventListener("hashchange", renderHashContent);

  renderPeriod();
  renderMonth(activeMonth);
  renderHashContent();
})();
