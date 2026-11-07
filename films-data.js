// Film programı verisi: ay, tarih, afiş, sahneler ve özet bilgileri.
// home-slider.js bu dosyadan okunur; yeni film eklemek için yalnızca burayı düzenle.
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

// Kasım filmi: Klaus (2019). Eksik alanlar (IMDb, süre, fotoğraflar) sonradan doldurulabilir.
filmPrograms.klaus = {
  month: "november", badge: "KASIM FİLMİ · 01", date: "9–15 KASIM 2026",
  title: "<em>Klaus</em>", plainTitle: "Klaus",
  author: "Sergio Pablos · 2019", image: "assets/klaus-hero.svg", trailer: "",
  summary: "Ücra bir kutupta posta teşkilatına yollanan genç Jesper ile yalnız bir oyuncak yapımcısı Klaus’un hikâyesi; bir dostluk ve umut masalı.",
  tags: ["Dostluk", "Umut", "Masal"], question: "Bir kötülük, bir iyilikle<br>nasıl değişir?"
};
filmProgramDetails.klaus = {
  start: "2026-11-09T00:00:00+03:00", end: "2026-11-15T23:59:59+03:00",
  genre: "Animasyon", accent: "#B8323A", accent2: "#E2C28A", heroImage: "assets/klaus-hero.svg",
  imdb: "—", runtime: "—", cast: "Jason Schwartzman · J.K. Simmons · Rashida Jones", director: "Sergio Pablos", directorInitials: "SP", directorPhoto: "",
  castList: [{ name: "Jason Schwartzman" }, { name: "J.K. Simmons" }, { name: "Rashida Jones" }],
  storyTitle: "Bir mektup,<br><em>bir dostluk.</em>",
  story: "Kutupta bir posta teşkilatına gönderilen Jesper, kimsenin yaşamadığı bir kasabada tek başına kalır. Kasabanın tek oyuncak yapımcısı Klaus ile kurduğu bağ, kasabanın kaderini değiştirir.",
  directorCopy: "Sergio Pablos, klasik el çizimi animasyonun sıcaklığını modern bir masalla birleştirir.",
  scenes: [["assets/klaus-hero.svg", "Kutup kasabası", "Kar, sessizlik ve yalnız bir gelen kutusu."]]
};

Object.entries(filmProgramDetails).forEach(([id, details]) => Object.assign(filmPrograms[id], details));
