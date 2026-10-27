/**
 * ARSIP KECIL TENTANG KITA - CENTRALIZED DATA FILE
 * ------------------------------------------------
 * Semua isi teks, tanggal, foto, lagu, lokasi, kenangan, pesan rahasia,
 * dan surat diatur dalam file ini.
 *
 * Edit file ini untuk mempersonalisasi seluruh isi website.
 */

export const relationshipData = {

  // ─────────────────────────────────────────────────────────────
  // IDENTITAS & METADATA
  // ─────────────────────────────────────────────────────────────
  boyfriendName: "[NAMA DIA]",
  nickname: "[PANGGILAN DIA]",
  startDate: "14 Oktober 2022",
  archiveDate: "9 Agustus 2026",
  archiveNumber: "ARSIP #001",

  // Audio latar belakang opsional (isi dengan path file .mp3 atau URL)
  bgmTrack: "",

  // ─────────────────────────────────────────────────────────────
  // INTRO — Teks typewriter pada layar pembuka
  // ─────────────────────────────────────────────────────────────
  introLines: [
    { text: "Aku sebenarnya bingung harus mulai dari mana.", pause: 1800 },
    { text: "Karena ternyata...", pause: 1200 },
    { text: "ada terlalu banyak hal tentang kamu yang ingin kusimpan.", pause: 2000 },
    { text: "Jadi, aku membuat tempat kecil ini.", pause: 1500 },
  ],

  // ─────────────────────────────────────────────────────────────
  // 01. SEBUAH KENANGAN — Arsip file kenangan (click to open)
  // ─────────────────────────────────────────────────────────────
  memories: [
    {
      id: "MEM-001",
      number: "001",
      date: "14 Oktober 2022",
      title: "Hari Pertama Jalan Tanpa Rencana",
      location: "Warung Kopi Pinggir Jalan",
      image: "assets/images/memory_night_walk.jpg",
      story: "Sebenarnya hari itu kita nggak punya rencana apa-apa. Cuma muter-muter kota sampai malam, terus berhenti di tempat kopi yang biasa banget. Tapi entah kenapa, obrolan dua jam di sana rasanya singkat sekali.",
      note: "Di situ aku sadar, aku nyaman banget sama kamu."
    },
    {
      id: "MEM-002",
      number: "002",
      date: "28 November 2023",
      title: "Kehujanan di Tengah Jalan Pulang",
      location: "Jalanan Kota Malam Hari",
      image: "assets/images/memory_rain_city.jpg",
      story: "Langit mendadak gelap dan hujan turun deras. Kita berteduh di teras toko yang sudah tutup sambil ketawa ngeliat baju yang basah kuyup. Nggak ada yang complain.",
      note: "Hujannya dingin, tapi waktu itu rasanya hangat sekali."
    },
    {
      id: "MEM-003",
      number: "003",
      date: "15 Mei 2024",
      title: "Duduk Berdua Tanpa Suara",
      location: "Kedai Kopi Langganan",
      image: "assets/images/memory_coffee_cups.jpg",
      story: "Kamu lagi fokus sibuk sama laptopmu, aku lagi baca buku. Nggak ada yang banyak bicara selama hampir satu jam, tapi nggak ada rasa canggung sama sekali.",
      note: "Hening yang paling menenangkan yang pernah aku rasakan."
    },
    {
      id: "MEM-004",
      number: "004",
      date: "02 Februari 2025",
      title: "Perjalanan Pulang Senja Itu",
      location: "Jembatan Pinggir Kota",
      image: "assets/images/memory_sunset_walk.jpg",
      story: "Kamu sempat menghentikan motor sebentar cuma buat tunjukin langit sore yang warnanya keunguan. Momennya cuma beberapa menit, tapi aku masih ingat garis senyum kamu waktu itu.",
      note: "Hal sekecil itu pun kamu bagikan sama aku."
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // 02. KAMU MUNGKIN SUDAH LUPA INI — Blur reveal memories
  // ─────────────────────────────────────────────────────────────
  blurMemories: [
    {
      id: "LUPA-001",
      image: "assets/images/memory_coffee_cups.jpg",
      hint: "sebuah sore bersama",
      date: "suatu hari di antara semua hari",
      revealTitle: "Momen Yang Mungkin Lewat Begitu Saja",
      story: "Aku masih ingat kamu waktu itu. Ngomong sesuatu yang kamu anggap sepele, tapi ternyata melekat terus di kepalaku.",
      note: "Kadang hal yang nggak terasa penting malah yang paling lama bertahan."
    },
    {
      id: "LUPA-002",
      image: "assets/images/memory_night_walk.jpg",
      hint: "malam yang panjang",
      date: "suatu malam",
      revealTitle: "Percakapan Sampai Larut",
      story: "Kamu bilang sesuatu yang waktu itu aku cuma senyum dengernya. Padahal dalam hati aku mikir, 'kok bisa ada orang yang ngerti banget cara berpikirku?'",
      note: "Kamu mungkin sudah lupa. Aku belum."
    },
    {
      id: "LUPA-003",
      image: "assets/images/memory_sunset_walk.jpg",
      hint: "waktu kita jalan",
      date: "entah hari apa",
      revealTitle: "Diam Yang Nggak Canggung",
      story: "Ada momen kita diam berdua dan nggak ada yang merasa perlu mengisi keheningan itu. Rasanya aneh tapi justru nyaman.",
      note: "Itu waktu aku tahu kita sudah sampai di level tertentu."
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // 03. KEBIASAAN KECILMU — Numbered click-to-reveal
  // ─────────────────────────────────────────────────────────────
  habits: [
    {
      id: "KEB-001",
      number: "01",
      title: "Cara Kamu Bilang 'Iya' Saat Lagi Capek",
      description: "Aku tahu kamu sedang capek dari cara kamu mengetik. Ada jeda sedikit lebih panjang. Ada kata-kata yang biasanya kamu pakai tapi tiba-tiba nggak ada. Aku hafal."
    },
    {
      id: "KEB-002",
      number: "02",
      title: "Cara Kamu Bilang 'Nggak Apa-Apa'",
      description: "Kamu sering bilang 'nggak apa-apa' dengan intonasi tertentu yang justru memberitahu aku sebaliknya. Aku sudah nggak perlu ditanya balik lagi untuk tahu."
    },
    {
      id: "KEB-003",
      number: "03",
      title: "Cara Kamu Tertawa Saat Benar-Benar Lucu",
      description: "Kalau cuma lucu biasa, kamu cuma tersenyum atau ketawa pelan. Tapi kalau benar-benar kocak, kamu sampai agak menahan napas dan merem sebentar. Itu yang paling aku suka."
    },
    {
      id: "KEB-004",
      number: "04",
      title: "Cara Kamu Membaca Pesan Dulu Sebelum Balas",
      description: "Kamu jarang langsung balas. Biasanya kamu baca dulu, mikir sebentar, baru nulis balasan yang lebih rapi dari yang kamu pikirkan. Aku sudah hafal jeda waktunya."
    },
    {
      id: "KEB-005",
      number: "05",
      title: "Kamu Tahu Kapan Harus Diam",
      description: "Di saat kebanyakan orang mencoba mengisi keheningan dengan kata-kata, kamu tahu kapan cukup diam saja. Dan somehow, diamnya kamu itu justru lebih menenangkan."
    },
    {
      id: "KEB-006",
      number: "06",
      title: "Cara Kamu Mengingat Hal Yang Aku Suka",
      description: "Kamu kelihatan cuek sama detail, tapi tiba-tiba kamu muncul dengan hal yang persis seperti yang aku suka. Tanpa bilang apapun dulu. Aku selalu kaget setiap kali itu terjadi."
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // 04. HAL-HAL KECIL YANG AKU SUKA — Non-romantic observations
  // ─────────────────────────────────────────────────────────────
  smallLoves: [
    { id: "SL-001", text: "Cara kamu serius ketika menjelaskan sesuatu yang kamu suka. Ekspresimu beda." },
    { id: "SL-002", text: "Cara kamu tiba-tiba cerita panjang kalau sudah nyaman sama orang." },
    { id: "SL-003", text: "Cara kamu tetap mencoba meskipun lagi capek dan sebenarnya ingin berhenti." },
    { id: "SL-004", text: "Cara kamu bikin hal biasa jadi lucu tanpa berusaha terlalu keras." },
    { id: "SL-005", text: "Cara kamu bilang sesuatu dengan yakin, padahal kamu juga masih ragu di dalam." },
    { id: "SL-006", text: "Cara kamu nggak pernah menghakimi hal yang aku ceritakan, sebodoh apapun itu." },
    { id: "SL-007", text: "Cara kamu tertawa di hal yang nggak lucu-lucu amat tapi tetap ketawa karena emang lucu bagimu." },
    { id: "SL-008", text: "Cara kamu ada, bahkan di hari-hari yang nggak spesial sama sekali." },
  ],

  // ─────────────────────────────────────────────────────────────
  // 05. SUARA YANG KUKENAL — Audio sound objects
  // ─────────────────────────────────────────────────────────────
  sounds: [
    {
      id: "SND-001",
      label: "SUARA KETAWA",
      icon: "◯",
      audioUrl: "",
      reason: "Suara yang paling aku suka dengar dari kamu. Terutama yang lepas banget, yang keluar kalau kamu benar-benar tertawa."
    },
    {
      id: "SND-002",
      label: "VOICE NOTE MALAM HARI",
      icon: "◯",
      audioUrl: "",
      reason: "Nada suaramu berubah kalau sudah malam dan sudah mengantuk. Lebih pelan, lebih jujur. Aku suka."
    },
    {
      id: "SND-003",
      label: "LAGU YANG MENGINGATKAN AKU PADAMU",
      icon: "◯",
      audioUrl: "",
      reason: "Lagu ini bukan lagu kita. Tapi setiap kali aku dengar, pikiranku langsung ke kamu. Entah kenapa."
    },
    {
      id: "SND-004",
      label: "REKAMAN PERJALANAN",
      icon: "◯",
      audioUrl: "",
      reason: "Suara latar dari salah satu perjalanan kita. Nggak ada yang ngomong. Cuma suara jalanan dan angin."
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // 06. TEMPAT-TEMPAT KITA — Leaflet memory map
  // ─────────────────────────────────────────────────────────────
  places: [
    {
      id: "TMP-001",
      name: "Tempat Pertama Kali Bertemu",
      category: "Awal Cerita",
      lat: -6.2088,
      lng: 106.8456,
      date: "14 Oktober 2022",
      story: "Di tempat ini pertama kali kita duduk berhadapan. Masih agak malu-malu dan bingung mau buka topik apa.",
      whySpecial: "Titik di mana perjalanan kecil ini dimulai."
    },
    {
      id: "TMP-002",
      name: "Kedai Kopi Langganan",
      category: "Favorit Kita",
      lat: -6.2297,
      lng: 106.8167,
      date: "Hampir setiap akhir pekan",
      story: "Sudah tak terhitung berapa gelas kopi dan berapa banyak cerita yang kita habiskan di sini.",
      whySpecial: "Saksi bisu kalau kita bisa nyaman hanya dengan menjadi diri sendiri."
    },
    {
      id: "TMP-003",
      name: "Taman Tempat Bicara Jujur",
      category: "Momen Penting",
      lat: -6.2383,
      lng: 106.8311,
      date: "19 Agustus 2023",
      story: "Malam itu kita saling menceritakan hal-hal yang belum pernah diceritakan ke orang lain.",
      whySpecial: "Kalau tempat ini bisa bicara, dia tahu terlalu banyak tentang kita."
    },
    {
      id: "TMP-004",
      name: "Sudut Kota Tempat Kita Nyasar",
      category: "Kejadian Lucu",
      lat: -6.1751,
      lng: 106.8272,
      date: "05 November 2023",
      story: "Gara-gara keasyikan ngobrol, kita sampai kelupaan tujuan awal dan akhirnya nyasar. Tapi nggak ada yang ngeluh.",
      whySpecial: "Salah satu malam paling seru yang tak pernah direncanakan."
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // 07. BUKTI-BUKTI KECIL — Scattered photographs
  // ─────────────────────────────────────────────────────────────
  evidence: [
    {
      id: "BKT-001",
      number: "BUKTI #001",
      title: "Foto Yang Agak Buram",
      image: "assets/images/evidence_blur.jpg",
      note: "Bukan foto terbaik kita dari segi estetika. Tapi justru ini yang paling banyak aku lihat."
    },
    {
      id: "BKT-002",
      number: "BUKTI #017",
      title: "Hari Tanpa Cerita Besar",
      image: "assets/images/evidence_ordinary.jpg",
      note: "Nggak ada perayaan apa-apa. Aku senang pernah ada di sana, duduk bersamamu."
    },
    {
      id: "BKT-003",
      number: "BUKTI #032",
      title: "Menertawakan Hal Yang Sudah Kulupa",
      image: "assets/images/evidence_laugh.jpg",
      note: "Aku bahkan sudah lupa waktu itu kita lagi menertawakan apa. Yang aku ingat cuma ekspresi bahagiamu yang lepas."
    },
    {
      id: "BKT-004",
      number: "BUKTI #045",
      title: "Bayangan Dua Orang",
      image: "assets/images/evidence_shadow.jpg",
      note: "Hanya bayangan dua orang yang berjalan berdampingan. Aku suka foto ini karena nggak ada yang tahu itu kita."
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // 08. HARI-HARI YANG BIASA — Ordinary days
  // ─────────────────────────────────────────────────────────────
  ordinaryDays: [
    {
      id: "HB-001",
      text: "Makan bareng nggak di tempat yang spesial. Cuma warung biasa di pinggir jalan.",
      note: "Tapi nggak ada yang mau buru-buru pulang."
    },
    {
      id: "HB-002",
      text: "Duduk berdua diam-diam, masing-masing sibuk sama hal sendiri.",
      note: "Nggak ada yang merasa harus ngomong sesuatu."
    },
    {
      id: "HB-003",
      text: "Chat sampai larut malam tentang hal yang nggak jelas dan nggak penting.",
      note: "Tapi nggak ada yang lebih dulu mau nutup HP."
    },
    {
      id: "HB-004",
      text: "Menunggu bareng di tempat yang agak membosankan.",
      note: "Tapi dengan kamu, nunggu jadi nggak terasa lama."
    },
    {
      id: "HB-005",
      text: "Hari biasa yang nggak ada yang spesial sama sekali.",
      note: "Dan ternyata aku ingat hari itu juga."
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // 09. STATISTIK ARSIP — Personalized counters
  // ─────────────────────────────────────────────────────────────
  archiveStats: [
    { label: "KENANGAN DISIMPAN", value: "014", numeric: 14, animated: true },
    { label: "FOTO YANG MASIH KUSUKA", value: "032", numeric: 32, animated: true },
    { label: "TEMPAT YANG PERNAH KITA DATANGI", value: "009", numeric: 9, animated: true },
    { label: "VOICE NOTE YANG MASIH ADA", value: "014", numeric: 14, animated: true },
    { label: "ALASAN UNTUK TETAP MEMILIH KAMU", value: "∞", animated: false },
  ],

  // ─────────────────────────────────────────────────────────────
  // 10. ABSURD TAPI KITA — Inside jokes & humor
  // ─────────────────────────────────────────────────────────────
  insideJokes: [
    {
      id: "JK-001",
      title: "Teori Kode 'Kopi Dingin'",
      story: "Ingat nggak waktu kita bikin kode rahasia kalau lagi di acara yang ngebosenin dan ingin cepat-cepat pergi dari sana?"
    },
    {
      id: "JK-002",
      title: "Perdebatan Makanan Yang Nggak Pernah Selesai",
      story: "Sampai hari ini kita masih sering meributkan hal yang sama. Dan masing-masing masih sama-sama merasa benar."
    },
    {
      id: "JK-003",
      title: "Panggilan Yang Asal Muncul",
      story: "Sebutan asal-asalan yang tiba-tiba muncul di chat satu hari. Entah kenapa malah jadi keterusan."
    },
    {
      id: "JK-004",
      title: "Momen Paling Absurd Yang Pernah Kita Alami",
      story: "Kalau aku ceritain ke orang lain, nggak akan ada yang percaya. Tapi kamu ada di sana."
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // 12. UNTUK KITA DI MASA DEPAN — Time capsule letter
  // ─────────────────────────────────────────────────────────────
  futureLetter: {
    title: "Surat Untuk Masa Depan Kita",
    sealText: "Buka Jika Kamu Menemukan Ini Lagi",
    paragraphs: [
      "Kalau kamu membaca ini beberapa tahun dari sekarang, aku berharap kita masih punya banyak hal kecil yang cuma kita berdua yang mengerti.",
      "Semoga kita masih bisa menertawakan hal-hal bodoh yang sama. Masih suka jalan-jalan tanpa tujuan jelas. Dan kamu masih menjadi orang pertama yang ingin aku ceritakan setiap kali ada kabar baru.",
      "Kalaupun perjalanan hidup ternyata membawa banyak perubahan pada kita...",
      "Semoga kita tetap memilih untuk belajar dan tumbuh bersama."
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 13. SATU HAL TERAKHIR — Final personal letter
  // ─────────────────────────────────────────────────────────────
  finalLetter: {
    paragraphs: [
      "Kalau sampai di sini, berarti kamu sudah melihat terlalu banyak.",
      "Aku mungkin nggak selalu pandai menyampaikan perasaan secara langsung. Ada hari-hari di mana aku terlalu sibuk dengan pikiranku sendiri, atau lupa mengucapkan hal-hal yang sebenarnya penting.",
      "Tapi ada satu hal yang ingin kamu tahu: aku memperhatikanmu.",
      "Aku perhatikan hal-hal yang mungkin kamu anggap biasa. Aku ingat hal-hal yang mungkin kamu sudah lupa. Aku hafal cara-caramu yang mungkin nggak pernah kamu sadari jadi kebiasaan.",
      "Mencintaimu bukan tentang momen besar yang selalu ada di foto. Mencintaimu adalah tentang rasa tenang karena tahu ada seseorang yang mengerti caraku berpikir tanpa perlu penjelasan panjang.",
      "Terima kasih sudah memilih untuk berjalan bersamaku.",
      "Terima kasih sudah jadi tempat yang aman bagi semua ceritaku.",
      "Arsip ini kubuat bukan karena takut lupa. Aku cuma nggak mau hal-hal kecil tentang kita hilang begitu saja."
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECRET ARCHIVE — Hidden room (triggered by hidden element)
  // ─────────────────────────────────────────────────────────────
  secretArchive: {
    password: "1410",
    hint: "Tanggal penting kita (format DDMM)",
    discoveryLines: [
      "Oh.",
      "Kamu nemu.",
      "Padahal aku sengaja menyembunyikannya."
    ],
    revealTitle: "Ini bagian yang sebenarnya paling ingin kusampaikan.",
    message: [
      "Kamu ternyata ketemu juga sama bagian ini.",
      "Ada satu hal yang jarang banget aku ucapkan langsung: di saat-saat aku merasa paling ragu atau cemas dengan apapun, membayangkan ada kamu di sampingku selalu berhasil membuat ketakutan itu jadi lebih ringan.",
      "Kamu adalah keputusan terbaik yang pernah aku amini."
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ENDING STATS (shown in final ending screen)
  // ─────────────────────────────────────────────────────────────
  endingStats: {
    memoriesCount: "14+",
    photosCount: "30+",
    placesCount: "9",
    soundsCount: "5",
    laughsCount: "∞",
    line1: "Masih ada tempat yang belum kita datangi.",
    line2: "Masih ada foto yang belum kita ambil.",
    line3: "Masih ada cerita yang belum kita tahu.",
    line4: "Sampai nanti."
  }

};
