/**
 * SAYANGNYA, AKU — DATA FILE
 * Surat cinta digital personal dari Hilyatul Ashfiya untuk pasangannya.
 * Memuat cerita nyata, surat permintaan maaf yang mengalir,
 * dan 19 dokumentasi scrapbook personal dengan caption asli.
 */

export const siteData = {

  // ─────────────────────────────────────────────────────────────
  // METADATA & BGM
  // ─────────────────────────────────────────────────────────────
  authorName: "Hilya",
  bgmTrack: "./assets/audio/MENCINTAIMU - MAHALINI (Lirik Lagu).mp3",
  bgmTitle: "Mencintaimu",
  bgmArtist: "Mahalini",

  // ─────────────────────────────────────────────────────────────
  // INTRO — Layar pembuka yang lembut dan personal
  // ─────────────────────────────────────────────────────────────
  intro: {
    lines: [
      { text: "Ada hal yang sudah lama ingin kusampaikan kepadamu...", pause: 800 },
      { text: "Tentang kita, tentang maaf yang terlambat, dan tentang bagaimana perasaanku yang sebenarnya.", pause: 900 },
      { text: "Jadi aku tuliskan semuanya di sini.", pause: 600 }
    ],
    buttonText: "Buka Surat Ini"
  },

  // ─────────────────────────────────────────────────────────────
  // HERO
  // ─────────────────────────────────────────────────────────────
  hero: {
    title: "Sayangnya, Aku",
    subtitle: "Untuk kamu yang selalu punya tempat paling hangat di hatiku.",
    scrollPrompt: "gulir perlahan ke bawah"
  },

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 1 — DARI SEBUAH PERTEMUAN SEDERHANA
  // Fakta asli:
  // - 13 April 2026: Bertemu saat magang
  // - 17 April 2026: Mulai chat setelah Jumat Menanam saat keluar grup
  // - 29 April 2026: Semakin nyaman setelah Truth or Dare
  // ─────────────────────────────────────────────────────────────
  chapter1: {
    tag: "01",
    title: "Dari Sebuah Pertemuan Sederhana",
    subtitle: "Bukan awal yang rumit, hanya sebuah perjalanan kecil yang diam-diam mengubah segalanya.",
    timeline: [
      {
        date: "13 April 2026",
        title: "Hari Pertama, Di Ruangan yang Sama",
        description: "Hari pertama magang. Kita masih dua orang asing yang kebetulan duduk di ruangan yang sama. Waktu itu aku hanya diam dan memperhatikan, tanpa pernah menyangka bahwa orang yang duduk di sana kelak akan jadi seseorang yang paling sering hadir di pikiranku.",
        note: "Ada hal-hal yang bermula tanpa kita sadari artinya."
      },
      {
        date: "17 April 2026",
        title: "Pesan Pertama setelah Jumat Menanam",
        description: "Setelah kegiatan Jumat Menanam, ada satu hal kecil yang ternyata menjadi awal dari cerita kita. Waktu itu, kamu nggak ikut rombongan yang lanjut makan bersama di hutan. Lalu, kamu mengirim pesan untuk menanyakan aku ada di mana dan meminta tolong dibungkuskan nasi.\n\nSesederhana itu awalnya. Cuma obrolan kecil yang mungkin waktu itu nggak pernah kita sangka akan membawa kita sejauh ini. Tapi dari pesan itu, percakapan kita mulai mengalir, terasa nyambung, hangat, dan tanpa beban. Siapa sangka, dari urusan mencari lokasi dan nasi bungkus, kita justru menemukan awal dari sesuatu yang begitu berarti.",
        note: "Kamu yang memulai obrolan itu, dan aku yang diam-diam senang."
      },
      {
        date: "29 April 2026",
        title: "Malam Truth or Dare",
        description: "Malam itu, lewat permainan Truth or Dare, ada dinding yang perlahan runtuh di antara kita. Kita mulai bercerita lebih dalam, membicarakan hal-hal yang biasanya tidak mudah diucapkan ke orang lain. Di situ aku mulai merasa sangat nyaman, dan aku sadar kamu bukan orang biasa bagiku.",
        note: "Malam di mana aku tahu, aku bisa jujur bersamamu."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 2 — MAAF, KARENA AKU BELUM SELALU TAHU CARANYA
  // Inti website: Surat permintaan maaf yang mengalir, mendalam,
  // menyatu dalam satu surat utuh tanpa kartu-kartu terpisah.
  // ─────────────────────────────────────────────────────────────
  chapter2: {
    tag: "02",
    title: "Maaf, Karena Aku Belum Selalu Tahu Caranya",
    subtitle: "Ini adalah pengakuan jujur dari hatiku, tanpa pembelaan dan tanpa alasan.",
    paragraphs: [
      "Sayang, kalau boleh jujur dari lubuk hatiku yang paling dalam, ada banyak hal yang selama ini mengganjal dan ingin kuakui di depanmu. Surat ini kutulis bukan untuk membela diri, bukan untuk mencari pembenaran atas apa yang kulakukan, melainkan karena aku sadar bahwa sikap dan tindakanku telah menyakiti hatimu.",
      "Aku menyesal karena pernah membahas masa lalumu. Rasa insecure dan kebiasaanku membandingkan diri sering kali membuatku memikirkan hal-hal yang seharusnya tidak terus kubawa ke dalam hubungan kita. Itu tidak adil untukmu. Kamu hadir di hari ini untuk membangun cerita baru bersamaku, bukan untuk terus-menerus dihakimi oleh bayang-bayang masa lalu yang sudah selesai.",
      "Dan ada satu hal yang paling membuatku menyesal hingga hari ini—saat emosiku sedang kacau dan rasa takut menguasaiku, aku pernah menyuruhmu untuk bersama orang lain. Padahal demi Tuhan, itu sama sekali bukan yang kuinginkan. Kata-kata itu keluar dari rasa frustrasi dan ketakutanku kehilangan dirimu, tetapi aku tahu itu tetap salah dan sangat menyakitkan untuk didengar. Maafkan aku juga karena tidak selalu memanggilmu “sayang” seperti yang kamu sukai. Aku ingin belajar lebih peka terhadap hal-hal kecil yang membuatmu merasa dicintai dan diinginkan.",
      "Aku juga minta maaf karena sering kali kurang memahami saat kamu sedang lelah, punya banyak pikiran, atau membutuhkan dukungan. Aku terlalu sibuk dengan perasaanku sendiri, sampai lupa bahwa kamu juga punya batas kemampuan, punya hari-hari yang berat, dan punya beban yang harus kamu pikul sendiri. Kamu juga manusia biasa yang punya perasaan, yang berhak merasa capek, berhak didengarkan, dipahami, dan ditemani tanpa harus dituntut selalu ada untukku.",
      "Aku mengakui bahwa aku terkadang gengsi, keras kepala, dan terlalu mempertahankan ego. Ada momen di mana aku lebih memilih membela diri daripada benar-benar mendengarkan apa yang kamu rasakan. Aku juga menyesal ketika sulit menerima arahan atau nasihat darimu, padahal di balik itu kamu memiliki maksud yang baik. Kesalahpahaman saat kita sama-sama lelah akhirnya malah membuat kita saling melukai kata-kata.",
      "Aku ingin menjadi prioritas bagimu, tentu saja. Tetapi aku harus belajar memahami bahwa kamu juga memiliki tanggung jawab, pekerjaan, dan hal-hal lain dalam hidupmu. Aku ingin belajar menyampaikan apa yang kubutuhkan tanpa membuatmu merasa tertekan atau harus selalu memilih antara aku dan kewajibanmu.",
      "Aku sangat menghargai setiap waktu, perhatian, usaha, dan hal-hal yang telah kamu berikan untukku. Maaf jika rasa cemas dan insecure-ku membuatku tampak seperti orang yang tidak tahu berterima kasih. Aku sadar, sebuah hubungan tidak akan pernah sehat jika aku hanya berharap untuk selalu dimengerti. Aku juga perlu belajar mengerti, menghargai, mendukung, dan membuatmu merasa aman untuk mengungkapkan perasaanmu tanpa takut dihakimi."
    ],
    closingReflect: "Aku tahu meminta maaf tidak serta-merta menghapus luka yang terlanjur ada. Tapi aku ingin kamu tahu bahwa aku benar-benar menyadari kesalahanku, dan aku ingin berubah—bukan sekadar karena takut kehilanganmu, tapi karena kamu pantas diperlakukan dengan jauh lebih baik."
  },

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 3 — KALAU AKU MASIH BOLEH BELAJAR MENCINTAIMU
  // Memuat 19 dokumentasi scrapbook personal dengan pemetaan tepat.
  // ─────────────────────────────────────────────────────────────
  chapter3: {
    tag: "03",
    title: "Kalau Aku Masih Boleh Belajar Mencintaimu",
    subtitle: "Bukan tentang janji menjadi sempurna, tapi tentang kemauan untuk hadir dengan cara yang lebih baik.",
    paragraphs: [
      "Bagian ini bukan pengulangan kata maaf. Aku menulis ini karena di balik semua kekurangan dan kesalahanku, perasaanku kepadamu tidak pernah berkurang. Aku masih menyayangimu, dengan tulus dan dengan seluruh hatiku.",
      "Aku tidak ingin membuat janji manis bahwa aku akan tiba-tiba menjadi sosok yang sempurna atau tidak akan pernah berbuat salah lagi. Itu janji yang tidak realistis. Namun, yang bisa kupastikan adalah kemauanku untuk terus belajar dan bertanggung jawab atas sikapku.",
      "Aku ingin membuktikan perubahan ini melalui tindakan nyata yang konsisten: lebih sabar, lebih mau mendengarkan sebelum berbicara, lebih menghargai setiap usahamu, dan lebih mampu mendukungmu ketika harimu terasa berat. Aku ingin mencintaimu dengan cara yang membuatmu merasa tenang, bukan lelah."
    ],
    scrapbookTitle: "Scrapbook Kecil Tentang Kita",
    scrapbookSubtitle: "19 dokumentasi dan cerita yang selalu kupeluk dalam ingatan. Klik foto mana saja untuk membaca cerita lengkapnya.",
    memories: [
      {
        id: 1,
        image: "./assets/images/1.jpg",
        title: "Sebentar, tapi mengobati rindu",
        date: "22 Oktober 2026",
        caption: "Pertemuan terakhir kita sebelum LDR lagi. Di tengah semua urusanmu, kamu tetap menyempatkan diri menyelesaikannya dan menjemput aku. Memang sebentar, hani, tapi rasanya cukup untuk mengobati rindu yang selama ini aku tahan setiap hari."
      },
      {
        id: 2,
        image: "./assets/images/2.jpg",
        title: "Chat yang selalu kubaca dengan senyum",
        date: "6 Oktober 2026",
        caption: "Ada chat yang sederhana, tapi efeknya ke aku bisa sampai bikin bahagia, terharu, dan merasa dimanja sekaligus. Ini salah satunya. Makasih ya, sayang, sudah membuat aku merasa disayang lewat hal-hal kecil seperti ini."
      },
      {
        id: 3,
        image: "./assets/images/3.jpg",
        title: "Kamu mengusahakan untuk bertemu",
        date: "3 Oktober 2026",
        caption: "Hari ketika kamu datang sendiri ke rumah aku. Kamu meluangkan waktu dan mengumpulkan uang supaya kita bisa bertemu. Buat aku, usaha kamu itu berarti banget, karena aku tahu bertemu bukan selalu perkara mudah."
      },
      {
        id: 4,
        image: "./assets/images/4.jpg",
        title: "Celana kuning kesayanganku hehe",
        date: "14 September 2026",
        caption: "Biasanya kita suka scroll Shopee barengan, terus aku malah sibuk memilih barang-barang lucu buat kamu. Aku senang banget waktu checkout barang random ini, apalagi celana kuning itu. Sesederhana itu caraku ikut senang kalau bisa memberikan sesuatu buat kamu, hehe."
      },
      {
        id: 5,
        image: "./assets/images/5.jpg",
        title: "My hero after my dad",
        date: "23 Juli 2026",
        caption: "Saat tugas-tugasku terasa melelahkan dan aku mulai kewalahan, kamu selalu berusaha membantu aku. Kamu mungkin nggak sadar seberapa besar bantuanmu berarti buatku. But honestly, you're my hero after my dad. 🤍"
      },
      {
        id: 6,
        image: "./assets/images/6.jpg",
        title: "Ulang tahun yang ada kamunya",
        date: "6 September 2026",
        caption: "Waktu ulang tahunku di Jakarta, kamu mau datang dan memberikan hadiah yang sangat berharga buat aku. Itu juga pertama kalinya aku pergi ke Jakarta Selatan, dan aku senang bisa mengalaminya bareng kamu. Rasanya menyenangkan bisa melibatkan seseorang yang aku sayang dalam momen-momen penting di hidupku."
      },
      {
        id: 7,
        image: "./assets/images/7.jpg",
        title: "Hal sederhana yang bikin aku bangga",
        date: "28 Agustus 2026",
        caption: "Aku senang banget melihat kamu beres-beres rumah atau mengerjakan apa pun dengan tanganmu sendiri. Aku tahu kamu pekerja keras, dan aku bangga sama kamu. Di mataku, kemauanmu untuk tetap melakukan hal-hal itu adalah sesuatu yang berharga."
      },
      {
        id: 8,
        image: "./assets/images/8.jpg",
        title: "Teman ke rumah sakit, si ganteng rambut pendek",
        date: "11 Agustus 2026",
        caption: "Hari ketika kamu mengantar aku ke rumah sakit. Sekarang, kamu jadi salah satu orang yang menemani aku melewati momen-momen seperti ini. Dan ya ampun, ini juga pertama kalinya aku melihat kamu dengan rambut pendek. He's so handsome, ayang! Hehe."
      },
      {
        id: 9,
        image: "./assets/images/9.jpg",
        title: "Akhirnya punya waktu berdua",
        date: "28 Juli 2026",
        caption: "Setelah KKN selesai, akhirnya kita bisa menghabiskan waktu bersama sebagai pasangan. Rasanya senang bisa menikmati waktu berdua setelah semua kesibukan itu. Tapi ujung-ujungnya aku harus pulang juga, hiks. Belum puas sama ayang! 🥹"
      },
      {
        id: 10,
        image: "./assets/images/10.jpg",
        title: "Kamu tetap datang buat aku",
        date: "18 Juli 2026",
        caption: "Waktu aku lagi drop saat KKN di Ciamis, kamu tetap mengusahakan diri untuk datang meskipun uangmu terbatas. Aku tahu itu nggak mudah, dan justru karena itu usahamu terasa begitu berarti buat aku. Terima kasih karena sudah berusaha hadir saat aku sedang nggak baik-baik saja, sayang."
      },
      {
        id: 11,
        image: "./assets/images/11.jpg",
        title: "Hari ketika kita saling jujur",
        date: "14 Juni 2026",
        caption: "Ini hari ketika kamu menyampaikan perasaanmu, dan aku juga menyampaikan perasaanku kepadamu. Waktu itu aku belum langsung mengiyakan, karena masih banyak ketakutan yang aku simpan. Kalau mengingatnya sekarang, aku jadi ingat betapa banyak hal yang perlu aku pahami sebelum berani membuka hati."
      },
      {
        id: 12,
        image: "./assets/images/12.jpg",
        title: "Date di tempat elitis hihi",
        date: "3 Juni 2026",
        caption: "Pertama kalinya aku mengajak pacarku ke tempat yang katanya elitis. Seru ya, sayang, walaupun harganya lumayan bikin mikir, hehe. Ternyata mencoba tempat baru bareng kamu bisa jadi kenangan yang menyenangkan juga."
      },
      {
        id: 13,
        image: "./assets/images/13.jpg",
        title: "Aku ingin ada saat kamu lelah",
        date: "29 Juni 2026",
        caption: "Waktu kamu seminar KP, aku benar-benar mencari kesempatan supaya bisa datang ke Bandung dan memberikan kejutan buat kamu. Aku sudah berjanji akan datang, dan aku tahu saat itu kamu sedang capek banget. Aku cuma ingin menepati janjiku dan menemani ayang saat kamu membutuhkan aku."
      },
      {
        id: 14,
        image: "./assets/images/14.jpg",
        title: "Foto pertama kita hehe",
        date: "8 Mei 2026",
        caption: "Akhirnya punya foto bareng juga setelah beli kopi bersama Adi Kahfi. Terus kita malah dipaparazzi karena jalan sambil gandengan tangan, lalu fotonya dikirim ke anak-anak Istana. Malu-maluin, tapi kalau diingat sekarang malah lucu banget, ya, ayang? 😭"
      },
      {
        id: 15,
        image: "./assets/images/15.jpg",
        title: "Hadiah kecil untuk hari spesialmu",
        date: "29 Mei 2026",
        caption: "Waktu itu aku masih sungkan karena kita belum punya hubungan yang jelas. Tapi aku tetap ingin memberikan hadiah terbaik buat kamu, apalagi aku tahu kamu belum pernah merasakan ulang tahun yang dirayakan. Aku cuma ingin hari spesialmu terasa sedikit lebih istimewa, ayang. 🤍"
      },
      {
        id: 16,
        image: "./assets/images/16.jpg",
        title: "Bahkan urusan rok pun dibantu",
        date: "16 Mei 2026",
        caption: "Waktu kamu mau mengantar aku ke acara wisuda temanku. Yang paling aku ingat, kamu ikut membantu aku memakai rok. Hal kecil seperti ini mungkin terlihat biasa, tapi justru momen sederhana bersamamu yang sering membuat aku senang."
      },
      {
        id: 17,
        image: "./assets/images/17.jpg",
        title: "Tidur yang bikin aku ikut tenang",
        date: "6 Mei 2026",
        caption: "Waktu ayang tidur dengan kepala di kakiku, aku senang banget melihat kamu bisa beristirahat dengan tenang. Rasanya ada kebahagiaan tersendiri saat melihat orang yang aku sayang bisa merasa nyaman. Andai kamu tahu betapa gemasnya aku waktu itu. 🤍"
      },
      {
        id: 18,
        image: "./assets/images/18.jpg",
        title: "Malam Truth or Dare",
        date: "29 April 2026",
        caption: "Malam ketika kita main Truth or Dare dan kamu rela meluangkan waktu buat aku, padahal biasanya kamu pergi ke Istana lalu pulang ke rumah. Untungnya waktu itu Ayah sama Ibu lagi nggak ada, ya, hihi. Siapa sangka malam sederhana itu jadi salah satu bagian dari cerita kita."
      },
      {
        id: 19,
        image: "./assets/images/19.jpg",
        title: "Terima kasih sudah mendengarkan aku",
        date: "28 April 2026",
        caption: "Waktu pikiranku lagi penuh tentang Ibu, kamu mengajakku ke curug. Aku senang banget karena saat itu kamu juga mau bercerita dan terbuka kepadaku. Rasanya menyenangkan ketika kita bisa saling berbagi isi kepala, bukan cuma menghabiskan waktu bersama."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 4 — AKU HANYA INGIN KAMU TAHU
  // Penutup sederhana, intim, tulus, tanpa paksaan.
  // ─────────────────────────────────────────────────────────────
  chapter4: {
    tag: "04",
    title: "Aku Hanya Ingin Kamu Tahu",
    subtitle: "Sebuah penutup tanpa tuntutan, hanya ruang untuk apa yang kamu rasakan.",
    paragraphs: [
      "Jika kamu sudah membaca sampai titik ini, terima kasih banyak sudah meluangkan waktu dan hatimu untuk mendengarku.",
      "Tolong jangan merasa terbebani oleh surat ini. Aku tidak menulis ini untuk menuntut jawaban, memaksamu memaafkanku detik ini juga, atau meminta keadaan harus segera kembali seperti sedia kala. Aku tidak ingin ada paksaan apa pun di antara kita.",
      "Aku hanya ingin kamu tahu: aku menyayangimu, aku sungguh-sungguh menyesali hal-hal yang menyakitimu, aku sangat menghargai kehadiranmu dalam hidupku, dan aku masih ada di sini—sedang belajar untuk menjadi seseorang yang lebih baik untukmu.",
      "Ambillah waktu sebanyak apa pun yang kamu butuhkan. Perasaanmu, ketenanganmu, dan ruang hatimu jauh lebih penting daripada apa pun."
    ],
    closingSalutation: "Dengan segenap cinta dan ketulusan,",
    signature: "— Hilya 🤍"
  },

  // ─────────────────────────────────────────────────────────────
  // FINAL CLOSING — THE LAST THING HE READS
  // Penutup emosional akhir, kalimat terakhir dari surat ini.
  // ─────────────────────────────────────────────────────────────
  finalClosing: {
    line1: "aku mencintai kamu, sungguh,",
    dedicatedTo: "Muhammad Rafli Al Kaylaniy",
    symbol: "♡"
  }
};
