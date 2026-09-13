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
const detailNavItems = [...document.querySelectorAll("[data-detail-nav]")];

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
  },
  { root: detailShell, threshold: 0.18 }
);

function observeReveals(root) {
  root.querySelectorAll(".reveal-on-scroll").forEach((element) => revealObserver.observe(element));
}

let activeIndex = 1;
let pointerStartX = null;
let detailPointerStartX = null;
let detailPointerStartY = null;
let detailCard = null;
let transitionInProgress = false;
let activeDetailIndex = 0;
let pageTransitionLock = false;
const detailOrder = ["anasayfa", "kitap", "takvim", "film"];
const detailColors = {
  anasayfa: "#315f58",
  kitap: "#071827",
  takvim: "#9d4f43",
  film: "#20284f"
};
const currentMonths = { book: "september", film: "august" };
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
    people: [{ name: "Steve Stewart-Williams", photo: null }],
    summary: "İnsan zihni nasıl evrimleşti? Kültürümüz bizi doğadan ne kadar uzaklaştırdı? Bu ay kendimize biraz dışarıdan bakıyoruz.",
    tags: ["İnsan", "Evrim", "Kültür"],
    question: "Bizi insan<br>yapan nedir?"
  },
  september: {
    badge: "DOSYA 002",
    number: "09",
    month: "EYLÜL",
    kicker: "EYLÜL OKUMA TAKVİMİ",
    title: "Maymun'dan<br><em>Hamlet'e</em>",
    author: "Steve Stewart-Williams / William Shakespeare",
    people: [
      { name: "Steve Stewart-Williams", photo: null },
      { name: "William Shakespeare", photo: "assets/author-shakespeare.jpg" }
    ],
    summary: "Evreni Anlayan Maymun 15 Eylül'de tamamlanıyor. Aynı gün Hamlet'e geçiyor ve 30 Eylül'e kadar birlikte okuyoruz.",
    tags: ["1-15 Eylül", "15-30 Eylül", "Geçiş"],
    question: "İnsan kendisini<br>hangi aynada görür?",
    visual: "september"
  },
  october: {
    badge: "DOSYA 003",
    number: "10",
    month: "EKİM",
    kicker: "EKİM: TRAGEDYA AYI",
    title: "Tragedya<br><em>Ayı</em>",
    author: "Aiskhylos · Sophokles · Euripides · Shakespeare",
    people: [
      { name: "Aiskhylos", photo: "assets/author-aiskhylos.jpg" },
      { name: "Sophokles", photo: "assets/author-sophokles.jpg" },
      { name: "Euripides", photo: "assets/author-euripides.jpg" },
      { name: "William Shakespeare", photo: "assets/author-shakespeare.jpg" }
    ],
    summary: "Antik sahneden Shakespeare'e uzanan metinlerle kaderi, iktidarı, vicdanı ve insanın seçimlerini birlikte okuyacağız.",
    tags: ["Tiyatro", "Kader", "Adalet"],
    question: "Kader mi,<br>yoksa seçim mi?",
    visual: "tragedy"
  },
  november: {
    badge: "DOSYA 004",
    number: "11",
    month: "KASIM",
    kicker: "KASIM: JUNG AYI",
    title: "Jung'un<br><em>Gölgesinde</em>",
    author: "Kitap seçimi yakında",
    people: [{ name: "Carl Gustav Jung", photo: "assets/author-jung.jpg" }],
    summary: "Carl Gustav Jung'un gölge, arketip, kolektif bilinçdışı ve bireyleşme kavramlarına yaklaşacağız. Okunacak kitap henüz seçilmedi.",
    tags: ["Gölge", "Arketip", "Bilinçdışı"],
    question: "İçimizdeki gölge<br>bize ne söyler?",
    visual: "jung"
  }
};

const filmPrograms = {
  "in-time": {
    month: "august", badge: "AYIN FİLMİ · 01", date: "17–23 AĞUSTOS 2026",
    title: "Zamana<br><em>Karşı</em>", plainTitle: "Zamana Karşı",
    author: "Andrew Niccol · 2011", image: "assets/in-time-official-poster.jpg", trailer: "xhYUaR5QiUs",
    summary: "Yaşam süresinin para olduğu bir gelecekte, bir gün daha yaşamak bile sınıfsal bir ayrıcalığa dönüşüyor.",
    tags: ["Zaman", "Eşitsizlik", "Özgürlük"], question: "Bir saatin<br>gerçek bedeli nedir?"
  },
  interstellar: {
    month: "august", badge: "AYIN FİLMİ · 02", date: "24–30 AĞUSTOS 2026",
    title: "Yıldızlar<br><em>Arasında</em>", plainTitle: "Yıldızlar Arasında",
    author: "Christopher Nolan · 2014", image: "assets/interstellar-official-poster.jpg", trailer: "R8teZZ-loaI",
    summary: "Zamanın büküldüğü, sevginin mesafeleri aştığı ve insanın bilinmeyene doğru yürüdüğü büyük bir yolculuk.",
    tags: ["Zaman", "Uzay", "İnsan"], question: "Zaman geçer mi,<br>yoksa biz mi geçeriz?"
  },
  truman: {
    month: "september", badge: "EYLÜL FİLMİ · 03", date: "31 AĞUSTOS–6 EYLÜL",
    title: "Truman<br><em>Show</em>", plainTitle: "Truman Show",
    author: "Peter Weir · 1998", image: "assets/truman-official-poster.jpg", trailer: "NkZM2oWcleM",
    summary: "Kusursuz görünen hayatının başkaları tarafından yazıldığını fark eden bir adamın gerçekliğe doğru yürüyüşü.",
    tags: ["Gerçeklik", "Gözetim", "Özgürlük"], question: "Gerçek olanı<br>kim belirler?"
  },
  marty: {
    month: "september", badge: "EYLÜL FİLMİ · 04", date: "7–13 EYLÜL 2026",
    title: "Marty<br><em>Supreme</em>", plainTitle: "Marty Supreme",
    author: "Josh Safdie · 2025", image: "assets/marty-official-poster.jpg", trailer: "s9gSuKaKcqM",
    summary: "Görünür olma arzusu ile kendini kanıtlama hırsı arasında giderek hızlanan bir karakter yolculuğu.",
    tags: ["Hırs", "Oyun", "Görünürlük"], question: "Kazanmak için<br>ne kaybedilir?"
  },
  father: {
    month: "september", badge: "EYLÜL FİLMİ · 05", date: "14–20 EYLÜL 2026",
    title: "The<br><em>Father</em>", plainTitle: "The Father",
    author: "Florian Zeller · 2020", image: "assets/father-official-poster.jpg", trailer: "4TZb7YfK-JI",
    summary: "Mekânların, yüzlerin ve zamanın yer değiştirdiği; hafızanın içinden anlatılan sarsıcı bir kimlik hikâyesi.",
    tags: ["Hafıza", "Kimlik", "Aile"], question: "Hatırlamak bizi<br>biz yapar mı?"
  },
  banshees: {
    month: "september", badge: "EYLÜL FİLMİ · 06", date: "21–27 EYLÜL 2026",
    title: "The Banshees of<br><em>Inisherin</em>", plainTitle: "The Banshees of Inisherin",
    author: "Martin McDonagh · 2022", image: "assets/banshees-official-poster.jpg", trailer: "uRu3zLOJN2c",
    summary: "Uzak bir adada ansızın biten dostluğun sessiz bir kırgınlıktan geri dönüşsüz bir çatışmaya dönüşmesi.",
    tags: ["Dostluk", "Yalnızlık", "İnat"], question: "Bir dostluk<br>nasıl biter?"
  },
  duvar: {
    month: "september", badge: "EYLÜL–EKİM · 07", date: "28 EYLÜL–4 EKİM 2026",
    title: "<em>Duvar</em>", plainTitle: "Duvar",
    author: "Yılmaz Güney · 1983", image: "assets/duvar-official-poster.png", trailer: "upCZb3xLUl4",
    summary: "Bir cezaevinin çocuklar koğuşunda büyüyen baskının, dayanışmanın ve özgürlük arzusunun sert hikâyesi.",
    tags: ["İsyan", "Adalet", "Özgürlük"], question: "Bir duvar yalnızca<br>neyi içeride tutar?"
  }
};

const filmProgramDetails = {
  "in-time": {
    start: "2026-08-17T00:00:00+03:00", end: "2026-08-23T23:59:59+03:00",
    genre: "Bilim Kurgu", accent: "#3E6B8A", accent2: "#B08D3D", heroImage: "assets/in-time-horizontal-poster.jpg",
    imdb: "6.7", runtime: "1 sa 49 dk", cast: "Justin Timberlake · Amanda Seyfried · Cillian Murphy", director: "Andrew Niccol", directorInitials: "AN", directorPhoto: "assets/director-niccol.jpg",
    castList: [
      { name: "Justin Timberlake", photo: "assets/actor-timberlake.jpg" },
      { name: "Amanda Seyfried", photo: "assets/actor-seyfried.jpg" },
      { name: "Cillian Murphy", photo: "assets/actor-murphy.jpg" }
    ],
    storyTitle: "Zaman para olduğunda,<br><em>hayat kimin olur?</em>",
    story: "İnsanların 25 yaşından sonra yaşlanmadığı, fakat kalan ömürlerini çalışarak kazanmak zorunda olduğu bir gelecekte Will Salas, kendisine bırakılan büyük zaman mirasıyla sistemin hedefi olur. Film; zamanı sınıf, emek ve iktidar üzerinden kuran hızlı bir distopyadır.",
    directorCopy: "Gattaca ve The Truman Show’un senaristi Andrew Niccol, yüksek kavramlı bilimkurguyu gündelik eşitsizliklerle buluşturur. Zamana Karşı’da görünmez ekonomik sınırları, insanların kollarında geri sayan somut bir saate dönüştürür.",
    scenes: [
      ["assets/in-time-01.jpg", "Geri sayan hayat", "Will’in dünyasında herkes ne kadar yaşayacağını kolunda taşır."],
      ["assets/in-time-04.jpg", "Zamanı riske atmak", "Masaya konan para değil, doğrudan yaşam süresidir."],
      ["assets/in-time-05.jpg", "Ölümsüzlerin bölgesi", "Zenginlik, tükenmeyen yarınlar biçiminde görünür."],
      ["assets/in-time-06.jpg", "Konforun dışı", "Sylvia ilk kez zamanın gerçek bedeliyle yüzleşir."],
      ["assets/in-time-08.jpg", "Sistemin peşinde", "Zaman muhafızları düzenin değişmesine izin vermek istemez."],
      ["assets/in-time-10.jpg", "Birlikte kaçmak", "Will ve Sylvia için özgürlük, zamanı yeniden paylaşmaktır."]
    ]
  },
  interstellar: {
    start: "2026-08-24T00:00:00+03:00", end: "2026-08-30T23:59:59+03:00",
    genre: "Bilim Kurgu", accent: "#3B5B8C", accent2: "#C9A227", heroImage: "assets/interstellar-horizontal-poster.jpg",
    imdb: "8.7", runtime: "2 sa 49 dk", cast: "Matthew McConaughey · Anne Hathaway · Jessica Chastain", director: "Christopher Nolan", directorInitials: "CN", directorPhoto: "assets/director-nolan.jpg",
    castList: [
      { name: "Matthew McConaughey", photo: "assets/actor-mcconaughey.jpg" },
      { name: "Anne Hathaway", photo: "assets/actor-hathaway.jpg" },
      { name: "Jessica Chastain", photo: "assets/actor-chastain.jpg" }
    ],
    storyTitle: "Zaman bir ölçü değil,<br><em>bir bağdır.</em>",
    story: "Dünya yaşanamaz hâle gelirken eski pilot Cooper, insanlık için yeni bir yuva arayan göreve katılır. Solucan deliğinin ötesindeki yolculukta her karar, Dünya’da yıllara dönüşen bir zaman kaybı ve geride bıraktığı ailesiyle arasındaki bağ anlamına gelir.",
    directorCopy: "Christopher Nolan, bilimsel ölçeği kişisel bir ayrılık hikâyesinin kalbine yerleştirir. Görelilik, kara delikler ve gezegenler arası keşif; Cooper ile Murph arasındaki yarım kalmış konuşmanın duygusal yörüngesinde birleşir.",
    scenes: [
      ["assets/interstellar-earth.jpg", "Geride kalan dünya", "Toz ve kıtlık insanlığı gökyüzüne bakmaya zorlar."],
      ["assets/interstellar-water.jpg", "Bir saat, yıllar", "Miller gezegenindeki dakikalar Dünya’da yıllara dönüşür."],
      ["assets/interstellar-gargantua.jpg", "Gargantua", "Bilinmeyenin eşiği aynı anda bilimsel ve insani bir karardır."],
      ["assets/interstellar-tesseract.jpg", "Mesafenin ötesi", "Cooper zamanın içinde Murph’e ulaşmanın yolunu arar."],
      ["assets/interstellar-06.jpg", "Endurance", "Kırılgan bir araç insanlığın son umudunu taşır."],
      ["assets/interstellar-09.jpg", "Eve dönme arzusu", "Her keşfin merkezinde geride bırakılan bir ev vardır."]
    ]
  },
  truman: {
    start: "2026-08-31T00:00:00+03:00", end: "2026-09-06T23:59:59+03:00",
    genre: "Dram", accent: "#65BCE8", accent2: "#F4D35E", heroImage: "assets/truman-hero.jpg",
    imdb: "8.2", runtime: "1 sa 43 dk", cast: "Jim Carrey · Ed Harris · Laura Linney", director: "Peter Weir", directorInitials: "PW", directorPhoto: "assets/director-weir.jpg",
    castList: [
      { name: "Jim Carrey", photo: "assets/actor-carrey.jpg" },
      { name: "Ed Harris", photo: "assets/actor-harris.jpg" },
      { name: "Laura Linney", photo: "assets/actor-linney.jpg" }
    ],
    storyTitle: "Kusursuz hayatın<br><em>duvarları çatlıyor.</em>",
    story: "Truman Burbank, doğumundan beri dev bir televizyon stüdyosunda yaşadığını bilmez. Çevresindeki küçük hatalar çoğaldıkça güvenli görünen hayatıyla gerçek özgürlük arasında seçim yapmak zorunda kalır.",
    directorCopy: "Peter Weir, hiciv ile duygusal dramı dengelerken seyircinin bakışını da hikâyenin parçası yapar. Film, gözetlenmenin yalnızca kameralarla değil, güvenli ve tanıdık olana duyulan bağımlılıkla da kurulduğunu gösterir.",
    scenes: [1,2,3,4,5,6].map((n) => [`assets/truman-0${n}.jpg`, `Seahaven · 0${n}`, "Kusursuz görünen dünyanın içindeki küçük çatlaklar büyüyor."])
  },
  marty: {
    start: "2026-09-07T00:00:00+03:00", end: "2026-09-13T23:59:59+03:00",
    genre: "Dram", accent: "#D83A2E", accent2: "#F0A830", heroImage: "assets/marty-hero.jpg",
    imdb: "7.6", runtime: "2 sa 29 dk", cast: "Timothée Chalamet · Gwyneth Paltrow · Odessa A’zion", director: "Josh Safdie", directorInitials: "JS", directorPhoto: "assets/director-safdie.jpg",
    castList: [
      { name: "Timothée Chalamet", photo: "assets/actor-chalamet.jpg" },
      { name: "Gwyneth Paltrow", photo: "assets/actor-paltrow.jpg" },
      { name: "Odessa A’zion", photo: "assets/actor-azion.jpg" }
    ],
    storyTitle: "Hayalini kimse ciddiye<br><em>almıyorsa ne yaparsın?</em>",
    story: "Marty Mauser, kimsenin önemsemediği masa tenisi tutkusunu büyüklük arzusuna dönüştürür. Başarıya giden yolda enerjisi, zekâsı ve gözü karalığı kadar geride bıraktığı ilişkiler de belirleyici olur.",
    directorCopy: "Josh Safdie, durmaksızın ileri fırlayan karakterleri ve baskı altında sıkışan şehir enerjisiyle tanınır. Burada spor filminin yükseliş anlatısını hırs, görünürlük ve kendini icat etme hikâyesiyle karıştırır.",
    scenes: [1,2,3,4,5,6].map((n) => [`assets/marty-0${n}.${n === 6 ? "png" : "jpg"}`, `Marty · 0${n}`, "Oyunun hızıyla hayatın bedeli aynı karede buluşuyor."])
  },
  father: {
    start: "2026-09-14T00:00:00+03:00", end: "2026-09-20T23:59:59+03:00",
    genre: "Dram", accent: "#264653", accent2: "#8FA8A3", heroImage: "assets/father-hero.jpg",
    imdb: "8.2", runtime: "1 sa 37 dk", cast: "Anthony Hopkins · Olivia Colman · Mark Gatiss", director: "Florian Zeller", directorInitials: "FZ", directorPhoto: "assets/director-zeller.jpg",
    castList: [
      { name: "Anthony Hopkins", photo: "assets/actor-hopkins.jpg" },
      { name: "Olivia Colman", photo: "assets/actor-colman.jpg" },
      { name: "Mark Gatiss", photo: "assets/actor-gatiss.jpg" }
    ],
    storyTitle: "Bir oda değişince<br><em>gerçeklik de değişir.</em>",
    story: "Anthony yaşlandıkça tanıdığı yüzler, yaşadığı ev ve güvendiği anılar yer değiştirir. Film seyirciyi dışarıdan gözlemleyen konumdan çıkarıp parçalanan hafızanın içine yerleştirir.",
    directorCopy: "Florian Zeller kendi oyununu sinemaya uyarlarken dekoru ve oyuncu değişimlerini anlatının dili hâline getirir. Böylece bellek kaybını açıklamak yerine, seyirciye mekânsal ve duygusal olarak yaşatır.",
    scenes: [1,2,3,4,5,6].map((n) => [`assets/father-0${n}.jpg`, `Hafıza · 0${n}`, "Tanıdık ayrıntılar değiştikçe Anthony’nin dayandığı zemin çözülüyor."])
  },
  banshees: {
    start: "2026-09-21T00:00:00+03:00", end: "2026-09-27T23:59:59+03:00",
    genre: "Dram · Kara Komedi", accent: "#607744", accent2: "#C18C46", heroImage: "assets/banshees-hero.jpg",
    imdb: "7.6", runtime: "1 sa 54 dk", cast: "Colin Farrell · Brendan Gleeson · Kerry Condon", director: "Martin McDonagh", directorInitials: "MM", directorPhoto: "assets/director-mcdonagh.jpg",
    castList: [
      { name: "Colin Farrell", photo: "assets/actor-farrell.jpg" },
      { name: "Brendan Gleeson", photo: "assets/actor-gleeson.jpg" },
      { name: "Kerry Condon", photo: "assets/actor-condon.jpg" }
    ],
    storyTitle: "Bir dostluk biterse<br><em>adada ne kalır?</em>",
    story: "Pádraic’in en yakın dostu Colm hiçbir açıklama yapmadan arkadaşlıklarını bitirir. Küçük bir adada başlayan kişisel kırgınlık, inat ve yalnızlığın beslediği geri dönüşsüz bir çatışmaya dönüşür.",
    directorCopy: "Martin McDonagh kara mizahı, keskin diyalogları ve trajediye yaklaşan gündelik çatışmalarıyla kurar. Inisherin’in dar dünyası, anlamlı bir hayat bırakma arzusu ile iyi bir insan olma isteğini karşı karşıya getirir.",
    scenes: [1,2,3,4,5,6].map((n) => [`assets/banshees-0${n}.jpg`, `Inisherin · 0${n}`, "Adanın sessizliği, dostluğun içindeki kırılmayı daha görünür kılıyor."])
  },
  duvar: {
    start: "2026-09-28T00:00:00+03:00", end: "2026-10-04T23:59:59+03:00",
    genre: "Dram", accent: "#7A2525", accent2: "#292929", heroImage: "https://img.youtube.com/vi/upCZb3xLUl4/hqdefault.jpg",
    imdb: "7.9", runtime: "1 sa 57 dk", cast: "Tuncel Kurtiz · Ayşe Emel Mesçi · Malik Berrichi", director: "Yılmaz Güney", directorInitials: "YG", directorPhoto: "assets/director-guney.jpg",
    castList: [
      { name: "Tuncel Kurtiz", photo: null },
      { name: "Ayşe Emel Mesçi", photo: null },
      { name: "Malik Berrichi", photo: null }
    ],
    storyTitle: "Duvar yalnızca<br><em>neyi içeride tutar?</em>",
    story: "Bir cezaevinin çocuklar koğuşundaki ağır koşullar, şiddet ve baskı karşısında genç mahkûmların dayanışması giderek açık bir başkaldırıya dönüşür.",
    directorCopy: "Yılmaz Güney, sürgünde çektiği Duvar’da kapatılmayı yalnızca fiziksel mekânla değil, kurumların ve korkunun kurduğu bir düzen olarak anlatır. Film sert gerçekçiliğini dayanışma ve özgürlük arzusuyla yan yana taşır.",
    scenes: ["maxresdefault","0","1","2","3","hqdefault"].map((frame, index) => [`https://img.youtube.com/vi/upCZb3xLUl4/${frame}.jpg`, `Duvar · 0${index + 1}`, "Baskının içindeki dayanışma ve özgürlük arzusu büyüyor."])
  }
};

Object.entries(filmProgramDetails).forEach(([id, details]) => Object.assign(filmPrograms[id], details));

function currentScheduledFilm(now = Date.now()) {
  const schedule = Object.entries(filmPrograms).sort((a, b) => Date.parse(a[1].start) - Date.parse(b[1].start));
  const active = schedule.find(([, film]) => now >= Date.parse(film.start) && now <= Date.parse(film.end));
  if (active) return active[0];
  const past = schedule.filter(([, film]) => now > Date.parse(film.end));
  return past.at(-1)?.[0] || schedule[0][0];
}

function replaceTags(container, tags) {
  const existing = [...container.querySelectorAll("span")];
  tags.forEach((tag, index) => {
    const span = existing[index] || document.createElement("span");
    span.textContent = tag;
    if (!span.parentElement) container.append(span);
  });
  existing.slice(tags.length).forEach((span) => span.remove());
}

function plainTitle(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.textContent.replace(/\s+/g, " ").trim();
}

function personRowMarkup(people) {
  if (!people || !people.length) return "";
  return `<div class="person-row" aria-label="Yazar">${people
    .map(
      (person) => `
    <button type="button" class="person-chip" data-person="${person.name}">
      <span class="person-avatar">${personAvatarHtml(person)}</span>
      <span class="person-name">${person.name}</span>
    </button>`
    )
    .join("")}</div>`;
}

function castSectionMarkup(cast) {
  if (!cast || !cast.length) return "";
  return `<div class="cast-section" aria-label="Oyuncular">
    <p class="cast-label">OYUNCULAR</p>
    <div class="cast-row">${cast
      .map(
        (person) => `
      <button type="button" class="cast-chip" data-person="${person.name}">
        <span class="cast-avatar">${personAvatarHtml(person)}</span>
        <span class="cast-name">${person.name}</span>
      </button>`
      )
      .join("")}</div>
  </div>`;
}

function briefMarkup({ kicker, title, author, summary, tags, people, cast }) {
  return `
    <div class="detail-card-brief">
      <small>${kicker}</small>
      <b>${title}</b>
      <em>${author}</em>
      ${personRowMarkup(people)}
      <p>${summary}</p>
      <span>${tags.map((tag) => `<i>${tag}</i>`).join("")}</span>
      ${castSectionMarkup(cast)}
    </div>`;
}

function replaceHeroBrief(copy, data) {
  if (!copy) return;
  copy.querySelector(".detail-card-summary")?.remove();
  const existing = copy.querySelector(".detail-card-brief");
  const html = briefMarkup(data);
  if (existing) existing.outerHTML = html;
  else copy.insertAdjacentHTML("afterbegin", html);
}

function setupStaticHeroBriefs() {
  replaceHeroBrief(document.querySelector(".home-detail .detail-hero-section .detail-copy"), {
    kicker: "GÖKÇEN · EREN · BÜŞRA",
    title: "Metinler Arası",
    author: "Merak edenlerin kulübü",
    summary: "Bir kitap açılır, bir film başlar. Hikâyeler, sorular ve iyi sohbet aynı masanın etrafında buluşur.",
    tags: ["Kitap", "Film", "Buluşma"]
  });

  replaceHeroBrief(document.querySelector(".calendar-detail .detail-hero-section .detail-copy"), {
    kicker: "AYLAR ARASINDA BİR YOLCULUK",
    title: "Eylül Okumaları",
    author: "Ay ortasında yeni bir metne geçiyoruz",
    summary: "Evreni Anlayan Maymun 15 Eylül'de sona eriyor. Hamlet okuması 15 Eylül'de başlayıp 30 Eylül'de tamamlanıyor.",
    tags: ["Okuma", "Film", "Buluşma"]
  });
}

function updateBookDetailBrief(month) {
  const data = bookMonths[month];
  const copy = document.querySelector(`[data-detail-month-view='book-${month}'] .detail-hero-section .detail-copy`);
  if (!data || !copy) return;
  replaceHeroBrief(copy, {
    kicker: data.kicker,
    title: plainTitle(data.title),
    author: data.author,
    summary: data.summary,
    tags: data.tags,
    people: data.people
  });
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toLocaleUpperCase("tr-TR");
}

function personAvatarHtml(person) {
  return person.photo
    ? `<img src="${person.photo}" alt="${person.name}" loading="lazy" />`
    : initials(person.name);
}

function renderPersonRow(container, people) {
  if (!container) return;
  container.innerHTML = (people || [])
    .map(
      (person) => `
    <button type="button" class="person-chip" data-person="${person.name}">
      <span class="person-avatar">${personAvatarHtml(person)}</span>
      <span class="person-name">${person.name}</span>
    </button>`
    )
    .join("");
}

function renderCast(container, cast) {
  if (!container) return;
  container.innerHTML = (cast || [])
    .map(
      (person) => `
    <button type="button" class="cast-chip" data-person="${person.name}">
      <span class="cast-avatar">${personAvatarHtml(person)}</span>
      <span class="cast-name">${person.name}</span>
    </button>`
    )
    .join("");
}

document.addEventListener("click", (event) => {
  const chip = event.target.closest(".person-chip, .cast-chip");
  if (!chip) return;
  const name = chip.dataset.person;
  if (!name) return;
  window.open(`https://www.google.com/search?q=${encodeURIComponent(name)}`, "_blank", "noopener");
});

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
  renderPersonRow(card.querySelector("[data-book-people]"), data.people);
  card.querySelector("[data-book-summary]").textContent = data.summary;
  replaceTags(card.querySelector("[data-book-tags]"), data.tags);
  card.querySelector("[data-book-question] b").innerHTML = data.question;
  card.querySelector(".book-month-cover").hidden = month !== "august";
  card.querySelector(".september-reading-stack").hidden = month !== "september";
  card.querySelector(".tragedy-stack").hidden = month !== "october";
  card.querySelector(".jung-mystery-card").hidden = month !== "november";
  card.querySelectorAll("[data-card-month-switcher='book'] button").forEach((button) => {
    button.classList.toggle("active", button.dataset.month === month);
  });
  window.setTimeout(() => card.classList.remove("is-month-changing"), 430);
  updateBookDetailBrief(month);
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
  renderPersonRow(card.querySelector("[data-film-people]"), [{ name: data.director, photo: data.directorPhoto }]);
  renderCast(card.querySelector("[data-film-cast]"), data.castList);
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

function prefersReducedMotion() {
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    detailShell.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" });
  }
}

function trailerUrl(videoId) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&playsinline=1`;
}

function setDetailFilm(programId, loadTrailer = true) {
  const data = filmPrograms[programId];
  const view = document.querySelector(`[data-detail-month-view='film-${data?.month}']`);
  if (!data || !view) return;
  if (data.month === "september") currentFilmProgram = programId;
  if (data.month === "august") currentAugustFilm = programId;
  const iframe = view.querySelector("[data-program-trailer]");
  const nextTrailerUrl = trailerUrl(data.trailer);
  if (loadTrailer && iframe.src !== nextTrailerUrl) iframe.src = nextTrailerUrl;
  iframe.title = `${data.plainTitle} fragmanı`;
  view.querySelector("[data-program-date]").textContent = data.date;
  view.querySelector("[data-program-title]").innerHTML = data.title;
  const summary = view.querySelector("[data-program-summary]");
  if (summary) summary.textContent = data.summary;
  replaceHeroBrief(view.querySelector(".detail-hero-section .detail-copy"), {
    kicker: data.date,
    title: data.plainTitle,
    author: data.author,
    summary: data.summary,
    tags: data.tags,
    people: [{ name: data.director, photo: data.directorPhoto }],
    cast: data.castList
  });
  view.querySelector("[data-program-copy]").textContent = data.summary;
  replaceTags(view.querySelector("[data-program-tags]"), data.tags);
  const questionSticker = view.querySelector("[data-program-question]");
  if (questionSticker) questionSticker.querySelector("b").innerHTML = data.question;

  const storySection = view.querySelector(".detail-story-section");
  if (storySection) {
    storySection.querySelector(".detail-kicker").textContent = "FİLMİN KONUSU";
    storySection.querySelector("h3").innerHTML = data.storyTitle;
    storySection.querySelector(".detail-section-copy > p:last-child").textContent = data.story;
  }

  let authorSection = view.querySelector(".detail-author-section");
  if (!authorSection) {
    authorSection = document.createElement("section");
    authorSection.className = "detail-scroll-section detail-author-section";
    authorSection.innerHTML = `<div class="author-orbit reveal-on-scroll"><img alt="" /></div><div class="detail-section-copy reveal-on-scroll"><p class="detail-kicker">YÖNETMEN</p><h3></h3><p></p></div>`;
    storySection.after(authorSection);
    observeReveals(authorSection);
  }
  const directorPhoto = authorSection.querySelector(".author-orbit img");
  directorPhoto.src = data.directorPhoto;
  directorPhoto.alt = `${data.director} portresi`;
  authorSection.querySelector("h3").innerHTML = data.director.replace(/\s+(?=[^\s]+$)/, "<br><em>") + "</em>";
  authorSection.querySelector(".detail-section-copy > p:last-child").textContent = data.directorCopy;

  const sceneSection = view.querySelector(".detail-scenes-section");
  const sceneRail = sceneSection?.querySelector(".film-scene-rail");
  if (sceneSection && sceneRail) {
    sceneSection.querySelector(".detail-kicker").textContent = `${data.plainTitle.toLocaleUpperCase("tr-TR")} KARELERİ`;
    sceneSection.querySelector("h3").innerHTML = `Yalnızca bu filmin<br><em>içinde kal</em>`;
    sceneRail.classList.remove("film-program-rail");
    sceneRail.innerHTML = data.scenes.map(([image, title, copy]) => `
      <figure><img src="${image}" alt="${data.plainTitle}: ${title}" loading="lazy"><figcaption><b>${title}</b><span>${copy}</span></figcaption></figure>`).join("");
  }

  view.querySelectorAll("[data-film-program]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filmProgram === programId);
  });
  setFilmStackByProgram(programId);
  setFilmCard(programId);
  view.querySelector(".detail-hero-section")?.animate(
    [{ opacity: 0.35, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }],
    { duration: 520, easing: "ease-out" }
  );
}

const filmGalleryOrder = Object.keys(filmPrograms).sort((a, b) => Date.parse(filmPrograms[a].start) - Date.parse(filmPrograms[b].start));

function filmGalleryCardHtml(programId) {
  const data = filmPrograms[programId];
  return `
    <article class="film-gallery-card" data-film-program="${programId}">
      <img class="film-gallery-image" src="${data.heroImage}" alt="${data.plainTitle} filminden bir görsel" loading="lazy" />
      <div class="film-gallery-scrim" aria-hidden="true"></div>
      <div class="film-gallery-copy">
        <p class="film-gallery-date">${data.date}</p>
        <h3 class="film-gallery-title">${data.plainTitle}</h3>
        <p class="film-gallery-meta">${data.genre} · IMDb ${data.imdb}</p>
        <button type="button" class="film-gallery-cta" data-film-explore="${programId}"><span class="film-gallery-cta-label">Filmi keşfet</span><span>→</span></button>
      </div>
    </article>`;
}

const FILM_STACK_FRAME_OFFSET = -30;
const FILM_STACK_FRAMES_VISIBLE = 3;
const FILM_STACK_SCALE_STEP = 0.08;

let filmStackIndex = 0;
let filmStackContainer = null;

function updateFilmStackTransforms() {
  if (!filmStackContainer) return;
  const cards = [...filmStackContainer.querySelectorAll(".film-gallery-card")];
  const total = cards.length;
  const reducedMotion = prefersReducedMotion();
  cards.forEach((card, i) => {
    const offset = i - filmStackIndex;
    const isActive = i === filmStackIndex;
    const isPast = i < filmStackIndex;
    card.classList.toggle("is-active", isActive);
    card.style.zIndex = String(total - i);
    card.style.opacity = isPast ? "0" : "1";
    card.style.pointerEvents = isActive ? "auto" : "none";
    if (reducedMotion) {
      card.style.transform = "translate(-50%, -50%)";
    } else {
      const scale = Math.min(Math.max(1 - offset * FILM_STACK_SCALE_STEP, 0.08), 2);
      const y = Math.max(offset * FILM_STACK_FRAME_OFFSET, FILM_STACK_FRAME_OFFSET * FILM_STACK_FRAMES_VISIBLE);
      card.style.transform = `translate(-50%, calc(-50% + ${y}px)) scale(${scale})`;
    }
  });
  filmStackContainer.parentElement.querySelectorAll("[data-stack-dot]").forEach((dot, i) => {
    dot.classList.toggle("active", i === filmStackIndex);
  });
}

function goToFilmStackIndex(index) {
  if (!filmStackContainer) return;
  const total = filmStackContainer.querySelectorAll(".film-gallery-card").length;
  filmStackIndex = Math.min(Math.max(index, 0), total - 1);
  updateFilmStackTransforms();
}

function setFilmStackByProgram(programId) {
  const index = filmGalleryOrder.indexOf(programId);
  if (index !== -1) goToFilmStackIndex(index);
}

function renderFilmGallery() {
  const container = document.querySelector("[data-film-gallery]");
  const dotsContainer = document.querySelector("[data-film-stack-dots]");
  if (!container) return;
  filmStackContainer = container;
  container.innerHTML = filmGalleryOrder.map((id) => filmGalleryCardHtml(id)).join("");
  const cards = [...container.querySelectorAll(".film-gallery-card")];
  cards.forEach((card) => {
    const data = filmPrograms[card.dataset.filmProgram];
    card.style.setProperty("--film-accent", data.accent);
    card.style.setProperty("--film-accent-2", data.accent2);
    card.querySelector("[data-film-explore]")?.addEventListener("click", (event) => {
      event.stopPropagation();
      const programId = card.dataset.filmProgram;
      setDetailMonth("film", filmPrograms[programId].month, false);
      setDetailFilm(programId);
      const filmDetail = card.closest(".film-detail");
      if (filmDetail) filmDetail.dataset.filmStage = "detail";
      detailShell.scrollTo({ top: 0, behavior: "instant" });
      syncFilmExitButton();
    });
  });

  if (dotsContainer) {
    dotsContainer.innerHTML = cards
      .map((_, i) => `<button type="button" class="film-stack-dot" data-stack-dot="${i}" aria-label="${i + 1}. filme git" role="tab"></button>`)
      .join("");
    dotsContainer.querySelectorAll("[data-stack-dot]").forEach((dot) => {
      dot.addEventListener("click", () => goToFilmStackIndex(Number(dot.dataset.stackDot)));
    });
  }

  updateFilmStackTransforms();

  let wheelLock = false;
  container.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      if (wheelLock || Math.abs(event.deltaY) < 12) return;
      wheelLock = true;
      goToFilmStackIndex(filmStackIndex + (event.deltaY > 0 ? 1 : -1));
      window.setTimeout(() => {
        wheelLock = false;
      }, 320);
    },
    { passive: false }
  );

  let touchStartY = null;
  container.addEventListener("pointerdown", (event) => {
    touchStartY = event.clientY;
  });
  container.addEventListener("pointerup", (event) => {
    if (touchStartY === null) return;
    const delta = touchStartY - event.clientY;
    touchStartY = null;
    if (Math.abs(delta) < 40) return;
    goToFilmStackIndex(filmStackIndex + (delta > 0 ? 1 : -1));
  });
  container.addEventListener("pointercancel", () => {
    touchStartY = null;
  });

  container.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      goToFilmStackIndex(filmStackIndex + 1);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      goToFilmStackIndex(filmStackIndex - 1);
    }
  });
}

renderFilmGallery();

function syncFilmExitButton() {
  const filmDetail = document.querySelector(".film-detail");
  const show = document.body.dataset.activeDetail === "film" && filmDetail?.dataset.filmStage === "detail";
  detailShell.classList.toggle("film-detail-open", !!show);
}

document.querySelectorAll("[data-film-back]").forEach((button) => {
  button.addEventListener("click", () => {
    const filmDetail = document.querySelector(".film-detail");
    if (filmDetail) filmDetail.dataset.filmStage = "gallery";
    detailShell.scrollTo({ top: 0, behavior: "instant" });
    syncFilmExitButton();
  });
});

const tragedyBooks = [
  {
    id: "oedipus", title: "Kral Oidipus", author: "Sophokles", image: "assets/tragedy-oedipus.jpg", period: "MÖ 429 civarı", theme: "Hakikat · Kehanet · Körlük",
    synopsis: "Thebai’yi saran salgının nedenini araştıran Kral Oidipus, şehrin eski kralının katilini bulmaya çalışırken kendi geçmişine yaklaşır. Hakikati öğrenme kararlılığı, onu kaçtığı kehanetin tam merkezine götürür.",
    authorBio: "Sophokles, karakterlerin ahlaki seçimlerini ve bilginin bedelini tragedyanın merkezine taşır. Oidipus anlatısında kahramanın düşüşünü yalnızca kaderle değil, hakikati sonuna kadar arama iradesiyle kurar.",
    question: "Hakikati bilmek her zaman özgürleştirir mi?"
  },
  {
    id: "kolonos", title: "Oidipus Kolonos’ta", author: "Sophokles", image: "assets/tragedy-kolonos-original.jpg", period: "MÖ 401", theme: "Sürgün · Bağışlanma · Son durak",
    synopsis: "Yaşlı ve sürgündeki Oidipus, kızı Antigone’yle Kolonos’a ulaşır. Bir zamanların lanetli kralı artık ölümünün gömüldüğü yere güç kazandıracağı düşünülen kutsal bir figürdür.",
    authorBio: "Sophokles’in yaşamının sonunda yazdığı oyun, Kral Oidipus’un yıkımını daha dingin ama siyasal bir kapanışa bağlar. Şair, suç, sorumluluk ve huzura kavuşma ihtimalini birlikte düşünür.",
    question: "Bir insan geçmişinin hükmünden kurtulabilir mi?"
  },
  {
    id: "antigone", title: "Antigone", author: "Sophokles", image: "assets/tragedy-antigone.jpg", period: "MÖ 441 civarı", theme: "Vicdan · Yasa · Yas",
    synopsis: "Kreon’un yasağına rağmen kardeşini gömmek isteyen Antigone, devletin buyruğuyla kişisel vicdanı karşı karşıya getirir. İki tarafın da geri çekilmemesi, bütün haneyi sarsan bir felakete dönüşür.",
    authorBio: "Sophokles, çatışmayı haklı ile haksız arasında değil, iki güçlü haklılık iddiası arasında kurar. Böylece Antigone yüzyıllardır hukuk, itaatsizlik ve vicdan tartışmalarının temel metinlerinden biridir.",
    question: "Yasa ile vicdan çatıştığında hangisine uyarız?"
  },
  {
    id: "agamemnon", title: "Agamemnon", author: "Aiskhylos", image: "assets/tragedy-agamemnon-original.jpg", period: "MÖ 458", theme: "İktidar · İntikam · Adalet",
    synopsis: "Troya’dan zaferle dönen Agamemnon, sarayında Klytaimnestra’nın yıllardır büyüttüğü intikamla karşılaşır. Geçmişte dökülen kan, yeni bir suçun gerekçesi hâline gelir.",
    authorBio: "Aiskhylos, Oresteia üçlemesinin ilk oyununda aile içi intikamı toplumsal adalet sorununa doğru genişletir. Koro, geçmiş suçların sesini sahnede sürekli canlı tutar.",
    question: "Adalet ile intikam arasındaki sınır nerede başlar?"
  },
  {
    id: "elektra", title: "Elektra", author: "Sophokles", image: "assets/tragedy-elektra.jpg", period: "MÖ 5. yüzyıl", theme: "Yas · Hafıza · İntikam",
    synopsis: "Elektra, babası Agamemnon’un öldürülmesini unutmayı reddeder ve kardeşi Orestes’in dönüşünü bekler. Yas, zamanla onun kimliğini ve adalet anlayışını bütünüyle kuşatır.",
    authorBio: "Sophokles, Elektra’nın bitmeyen yasını güçlü bir psikolojik gerilime dönüştürür. Kahramanın kararlılığı hem direnmenin gücü hem de intikamın insanı daraltan yüzü olarak okunabilir.",
    question: "Bir kaybı unutmamak ne zaman insanı esir alır?"
  },
  {
    id: "orestes", title: "Orestes", author: "Euripides", image: "assets/tragedy-orestes-original.jpg", period: "MÖ 408", theme: "Suç · Çözülme · Toplum",
    synopsis: "Annesini öldürdükten sonra suçluluk ve delilik nöbetleri yaşayan Orestes, Argos halkının vereceği ölüm kararını bekler. Kurtuluş arayışı giderek yeni bir şiddet planına dönüşür.",
    authorBio: "Euripides, mitolojik kahramanları kırılgan, çelişkili ve siyasal baskı altındaki insanlar olarak gösterir. Orestes’te kahramanlık dili çözülür; geriye korku, pazarlık ve çıkışsızlık kalır.",
    question: "Şiddetle kurulan bir adalet şiddeti sona erdirebilir mi?"
  }
];

function setupTragedyBookProfiles() {
  const view = document.querySelector("[data-detail-month-view='book-october']");
  if (!view || view.querySelector(".book-selection-section")) return;
  const section = document.createElement("section");
  section.className = "detail-scroll-section book-selection-section";
  section.innerHTML = `
    <header class="detail-section-copy reveal-on-scroll"><p class="detail-kicker">EKİM SEÇKİSİ</p><h3>Bir tragedyayı seç,<br><em>ayrıntısına gir.</em></h3><p>Kapaklar arasında gezerek her oyunun konusunu, yazarını ve masaya getirdiği soruyu ayrı ayrı görebilirsin.</p></header>
    <nav class="book-selection-tabs" aria-label="Ekim tragedyaları"></nav>
    <article class="book-selection-profile reveal-on-scroll" aria-live="polite">
      <div class="book-profile-cover"><img data-selected-book-image alt=""></div>
      <div class="book-profile-copy"><p class="detail-kicker" data-selected-book-meta></p><h4 data-selected-book-title></h4><p class="book-profile-theme" data-selected-book-theme></p><h5>KİTABIN KONUSU</h5><p data-selected-book-synopsis></p><h5>YAZAR HAKKINDA</h5><p data-selected-book-author></p><blockquote data-selected-book-question></blockquote></div>
    </article>`;
  const notes = view.querySelector(".detail-notes-section");
  notes.before(section);
  const tabs = section.querySelector(".book-selection-tabs");
  tabs.innerHTML = tragedyBooks.map((book, index) => `<button type="button" data-selected-book="${book.id}" class="${index === 0 ? "active" : ""}"><img src="${book.image}" alt=""><span><small>${book.author}</small>${book.title}</span></button>`).join("");
  let activeBookIndex = 0;
  let rotationTimer;
  const renderBook = (index, animate = true) => {
    activeBookIndex = (index + tragedyBooks.length) % tragedyBooks.length;
    const book = tragedyBooks[activeBookIndex];
    section.querySelector("[data-selected-book-image]").src = book.image;
    section.querySelector("[data-selected-book-image]").alt = `${book.title} kapağı`;
    section.querySelector("[data-selected-book-meta]").textContent = `${book.author.toLocaleUpperCase("tr-TR")} · ${book.period}`;
    section.querySelector("[data-selected-book-title]").textContent = book.title;
    section.querySelector("[data-selected-book-theme]").textContent = book.theme;
    section.querySelector("[data-selected-book-synopsis]").textContent = book.synopsis;
    section.querySelector("[data-selected-book-author]").textContent = book.authorBio;
    section.querySelector("[data-selected-book-question]").textContent = `“${book.question}”`;
    tabs.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.selectedBook === book.id));
    if (animate) section.querySelector(".book-selection-profile").animate([{opacity:.25, transform:"translateY(18px) scale(.985)"},{opacity:1, transform:"none"}], {duration:520, easing:"cubic-bezier(.2,.8,.2,1)"});
  };
  const startRotation = () => {
    clearInterval(rotationTimer);
    rotationTimer = setInterval(() => renderBook(activeBookIndex + 1), 6500);
  };
  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-selected-book]");
    if (!button) return;
    renderBook(tragedyBooks.findIndex((book) => book.id === button.dataset.selectedBook));
    startRotation();
  });
  section.addEventListener("mouseenter", () => clearInterval(rotationTimer));
  section.addEventListener("mouseleave", startRotation);
  section.addEventListener("focusin", () => clearInterval(rotationTimer));
  section.addEventListener("focusout", startRotation);
  renderBook(0, false);
  startRotation();
}

function setupCalendarCountdown() {
  const copy = document.querySelector(".calendar-detail .detail-hero-section .detail-copy");
  if (!copy || copy.querySelector(".event-countdown")) return;
  const countdown = document.createElement("div");
  countdown.className = "event-countdown";
  countdown.innerHTML = `<small>HAMLET OKUMASINA</small><strong data-event-countdown>hesaplanıyor…</strong><span data-turkey-time></span>`;
  copy.querySelector(".detail-down-cue").before(countdown);
  const target = Date.parse("2026-09-15T00:00:00+03:00");
  const hamletEnd = Date.parse("2026-09-30T23:59:59+03:00");
  const turkeyClock = new Intl.DateTimeFormat("tr-TR", { timeZone: "Europe/Istanbul", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const update = () => {
    const now = Date.now();
    const difference = target - now;
    const output = countdown.querySelector("[data-event-countdown]");
    countdown.querySelector("[data-turkey-time]").textContent = `Türkiye saati · ${turkeyClock.format(now)}`;
    if (difference <= 0) {
      output.textContent = now <= hamletEnd ? "Hamlet okuması başladı" : "Hamlet okuması tamamlandı";
      return;
    }
    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);
    output.textContent = `${days} gün · ${hours} sa · ${minutes} dk · ${seconds} sn`;
  };
  update();
  setInterval(update, 1000);
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

function setDetailPage(name, color = detailColors[name] || "#315f58", scrollToTop = true) {
  activeDetailIndex = Math.max(0, detailOrder.indexOf(name));
  detailPages.forEach((page) => {
    const isActive = page.dataset.detailPage === name;
    page.classList.toggle("is-active", isActive);
    page.setAttribute("aria-hidden", String(!isActive));
    page.inert = !isActive;
  });
  detailNavItems.forEach((item) => {
    const active = item.dataset.detailNav === name;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  detailShell.style.setProperty("--detail-color", color);
  document.body.dataset.activeDetail = name;
  if (name === "kitap") setDetailMonth("book", currentMonths.book, false);
  if (name === "film") {
    setDetailMonth("film", currentMonths.film, false);
    setDetailFilm(currentMonths.film === "september" ? currentFilmProgram : currentAugustFilm);
  }
  if (scrollToTop) detailShell.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" });
  syncFilmExitButton();
}

function showDetailByIndex(nextIndex, animate = true, direction = 0) {
  if (nextIndex < 0 || nextIndex >= detailOrder.length) return;
  if (animate) {
    transitionDetailPage(nextIndex, direction || Math.sign(nextIndex - activeDetailIndex) || 1);
    return;
  }
  setDetailPage(detailOrder[nextIndex], detailColors[detailOrder[nextIndex]]);
}

async function transitionDetailPage(nextIndex, direction) {
  if (pageTransitionLock || nextIndex === activeDetailIndex) return;
  pageTransitionLock = true;
  const reducedMotion = prefersReducedMotion();
  const currentPage = detailPages[activeDetailIndex];
  const nextName = detailOrder[nextIndex];
  const travel = direction > 0 ? "-5%" : "5%";
  const enterTravel = direction > 0 ? "6%" : "-6%";

  detailShell.classList.add("is-page-turning");
  if (currentPage && !reducedMotion) {
    await currentPage.animate(
      [
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
        { opacity: 0.28, transform: `translate3d(0, ${travel}, 0)` }
      ],
      { duration: 240, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "forwards" }
    ).finished.catch(() => {});
  }

  detailShell.scrollTo({ top: 0, behavior: "instant" });
  setDetailPage(nextName, detailColors[nextName], false);
  detailShell.scrollTo({ top: 0, behavior: "instant" });
  detailNavItems.find((item) => item.dataset.detailNav === nextName)?.focus({ preventScroll: true });
  const nextPage = detailPages[nextIndex];

  if (nextPage && !reducedMotion) {
    await nextPage.animate(
      [
        { opacity: 0, transform: `translate3d(0, ${enterTravel}, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" }
      ],
      { duration: 500, easing: "cubic-bezier(0.32, 0.72, 0, 1)", fill: "both" }
    ).finished.catch(() => {});
  }

  currentPage?.getAnimations().forEach((animation) => animation.cancel());
  nextPage?.getAnimations().forEach((animation) => animation.cancel());
  detailShell.classList.remove("is-page-turning");
  window.setTimeout(() => {
    pageTransitionLock = false;
  }, 80);
}

async function openDetail(name, trigger) {
  if (transitionInProgress || detailShell.classList.contains("is-open")) return;
  transitionInProgress = true;
  detailCard = trigger.closest(".book-card");
  const color = getCardColor(detailCard);
  const startClip = cardClip(detailCard);
  const reducedMotion = prefersReducedMotion();
  const wipe = createWipe(color, startClip);

  document.body.classList.add("detail-open");
  setDetailPage(name, color, false);
  detailShell.scrollTo({ top: 0, behavior: "instant" });

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
  const reducedMotion = prefersReducedMotion();
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

backToCards?.addEventListener("click", closeDetail);

detailNavItems.forEach((button) => {
  button.addEventListener("click", () => {
    const nextIndex = detailOrder.indexOf(button.dataset.detailNav);
    if (nextIndex === -1) return;
    showDetailByIndex(nextIndex, true, nextIndex > activeDetailIndex ? 1 : -1);
  });
});

detailShell.addEventListener("pointerdown", (event) => {
  if (event.target.closest("a, button, iframe, [contenteditable='true']")) return;
  detailPointerStartX = event.clientX;
  detailPointerStartY = event.clientY;
  detailShell.setPointerCapture?.(event.pointerId);
});

detailShell.addEventListener("pointerup", (event) => {
  if (detailPointerStartX === null || detailPointerStartY === null) return;
  const distance = event.clientX - detailPointerStartX;
  const verticalDistance = event.clientY - detailPointerStartY;
  detailPointerStartX = null;
  detailPointerStartY = null;
  detailShell.releasePointerCapture?.(event.pointerId);
  if (Math.abs(distance) > 54 && Math.abs(distance) > Math.abs(verticalDistance)) {
    showDetailByIndex(activeDetailIndex + (distance < 0 ? 1 : -1), true, distance < 0 ? 1 : -1);
  }
});

detailShell.addEventListener("pointercancel", () => {
  detailPointerStartX = null;
  detailPointerStartY = null;
});

setupTragedyBookProfiles();
setupCalendarCountdown();
setupStaticHeroBriefs();
Object.keys(bookMonths).forEach(updateBookDetailBrief);
setBookCardMonth(currentMonths.book);
const automaticFilmProgram = currentScheduledFilm();
currentMonths.film = filmPrograms[automaticFilmProgram].month;
setFilmCard(automaticFilmProgram);
setDetailMonth("film", filmPrograms[automaticFilmProgram].month, false);
setDetailFilm(automaticFilmProgram, false);

observeReveals(document);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") showDetailByIndex(activeDetailIndex + 1);
  if (event.key === "ArrowLeft") showDetailByIndex(activeDetailIndex - 1);
});

showSlide(1);
document.body.classList.add("detail-open", "direct-detail-mode");
detailShell.classList.add("is-open");
detailShell.setAttribute("aria-hidden", "false");
setDetailPage("anasayfa", detailColors.anasayfa, false);
