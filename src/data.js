/**
 * SAYANGNYA, AKU — DATA FILE
 * ------------------------------------------------
 * Semua isi teks, tanggal, kenangan, dan surat
 * diatur dalam file ini.
 */

export const siteData = {

  // ─────────────────────────────────────────────────────────────
  // METADATA
  // ─────────────────────────────────────────────────────────────
  authorName: "Hilya",
  bgmTrack: "./assets/audio/MENCINTAIMU - MAHALINI (Lirik Lagu).mp3",

  // ─────────────────────────────────────────────────────────────
  // INTRO — Teks typewriter pada layar pembuka
  // ─────────────────────────────────────────────────────────────
  introLines: [
    { text: "Ada hal yang sudah lama ingin kusampaikan.", pause: 1800 },
    { text: "Tapi aku nggak selalu bisa bicara langsung.", pause: 1500 },
    { text: "Jadi aku tuliskan di sini.", pause: 1200 },
  ],

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 01 — AWAL CERITA KITA
  // Tujuan emosional: bagaimana semuanya bermula, secara jujur
  // ─────────────────────────────────────────────────────────────
  chapter1: {
    sectionLabel: "AWAL CERITA KITA",
    intro: "Bukan awal yang dramatis. Tapi aku masih ingat rasanya.",
    timeline: [
      {
        id: "T-001",
        date: "13 April 2026",
        title: "Pertama Kali Ketemu",
        story: "Hari pertama magang. Aku nggak menyangka orang yang duduk di ruangan yang sama itu akan jadi seseorang yang paling sering ada di pikiranku.",
        note: "Waktu itu aku cuma diam. Tapi aku memperhatikan."
      },
      {
        id: "T-002",
        date: "17 April 2026",
        title: "Momen Jumat Menanam",
        story: "Setelah Jumat Menanam, kamu mulai duluan. Kamu yang pertama kali ngobrol, dan dari situ rasanya nyambung begitu saja. Dari situlah semuanya mulai.",
        note: "Kamu yang memulai. Aku yang nggak mau berhenti."
      },
      {
        id: "T-003",
        date: "29 April 2026",
        title: "Malam Truth or Dare",
        story: "Ada game Truth or Dare malam itu. Di situ kita semakin nyaman — bicara hal-hal yang biasanya nggak mudah diucapkan. Aku ingat merasa seperti menemukan orang yang bisa aku ajak jujur.",
        note: "Malam itu aku tahu kamu bukan orang biasa."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 02 — PERMINTAAN MAAF
  // Tujuan emosional: mengakui kesalahan secara jujur dan tulus
  // ─────────────────────────────────────────────────────────────
  chapter2: {
    sectionLabel: "HAL YANG INGIN AKU AKUI",
    intro: "Ada beberapa hal yang ingin aku sampaikan — bukan sebagai pembelaan, tapi sebagai kejujuran.",
    apologies: [
      {
        id: "S-001",
        title: "Rasa insecure yang aku bawa",
        body: "Aku sering membiarkan rasa insecure mengendalikan sikapku. Aku tahu itu melelahkan — untuk kamu, dan juga untuk kita. Aku minta maaf sudah terlalu sering membutuhkan kepastian yang harusnya bisa aku cari dari dalam diri sendiri."
      },
      {
        id: "S-002",
        title: "Kebiasaan membawa masa lalu",
        body: "Aku masih sering membahas hal-hal yang sudah berlalu. Seharusnya masa lalu bukan jadi sesuatu yang terus-terusan aku angkat ke permukaan. Itu nggak adil untuk kamu, dan aku sadar itu."
      },
      {
        id: "S-003",
        title: "Kata-kata yang salah",
        body: "Pernah ada saatnya aku bilang sesuatu yang menyuruh kamu bersama orang lain — kata-kata yang keluar dari rasa frustrasi, bukan dari apa yang sebenarnya aku rasakan. Itu salah. Dan aku menyesal sudah mengucapkannya."
      },
      {
        id: "S-004",
        title: "Gengsi yang menghalangi",
        body: "Ada momen di mana aku lebih memilih diam daripada mengakui bahwa aku salah atau sedang butuh kamu. Gengsi itu bukan kekuatan. Aku sedang belajar untuk lebih jujur dan terbuka."
      },
      {
        id: "S-005",
        title: "Kurang memahami kondisimu",
        body: "Aku nggak selalu hadir di saat yang tepat, dan nggak selalu memahami apa yang kamu butuhkan. Aku seharusnya lebih peka — lebih mendengarkan, bukan cuma menunggu giliran bicara."
      }
    ],
    closing: "Aku nggak meminta pengampunan sekarang. Aku hanya ingin kamu tahu bahwa aku mau berubah — bukan karena diminta, tapi karena aku ingin lebih baik, untuk kamu dan untuk kita."
  },

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 03 — KETULUSAN DAN KENANGAN
  // Tujuan emosional: hal nyata yang dilihat, ingat, dan disimpan
  // ─────────────────────────────────────────────────────────────
  chapter3: {
    sectionLabel: "YANG AKU LIHAT DAN INGAT",
    intro: "Bukan hal besar. Hanya hal-hal kecil yang diam-diam aku perhatikan.",
    observations: [
      { id: "O-001", text: "Cara kamu bicara saat sedang serius — ekspresimu beda, dan aku selalu memperhatikan itu." },
      { id: "O-002", text: "Cara kamu tetap mencoba meski lagi capek. Itu bukan hal kecil bagiku." },
      { id: "O-003", text: "Cara kamu diam ketika nggak ingin memperumit situasi — padahal mungkin kamu yang paling berhak marah." },
      { id: "O-004", text: "Cara kamu ada, bahkan di hari-hari yang biasa saja." },
      { id: "O-005", text: "Cara kamu nggak pernah menghakimi hal yang aku ceritakan, sebodoh apapun itu." },
      { id: "O-006", text: "Cara kamu masih mau membalas pesan, bahkan di saat kamu mungkin sedang lelah." }
    ],
    photos: [
      {
        id: "P-001",
        number: "FOTO #001",
        image: "assets/images/evidence_blur.jpg",
        note: "Nggak tahu persis kapan ini diambil. Tapi aku ingat rasanya ada di sana."
      },
      {
        id: "P-002",
        number: "FOTO #002",
        image: "assets/images/evidence_ordinary.jpg",
        note: "Hari biasa. Tapi aku senang pernah ada di sana, bersamamu."
      },
      {
        id: "P-003",
        number: "FOTO #003",
        image: "assets/images/evidence_laugh.jpg",
        note: "Aku sudah lupa kita lagi ketawa soal apa. Yang aku ingat cuma ekspresimu."
      },
      {
        id: "P-004",
        number: "FOTO #004",
        image: "assets/images/evidence_shadow.jpg",
        note: "Dua orang. Nggak ada yang perlu tahu itu kita."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // BAGIAN 04 — PENUTUP / SURAT AKHIR
  // Tujuan emosional: menutup dengan ketulusan dan harapan
  // ─────────────────────────────────────────────────────────────
  chapter4: {
    sectionLabel: "SATU HAL TERAKHIR",
    teaser: [
      "Kalau kamu sampai di sini, berarti kamu sudah membaca semuanya.",
      "Ada satu hal terakhir yang ingin kusampaikan."
    ],
    letter: {
      salutation: "Untuk kamu, sayang —",
      paragraphs: [
        "Aku tahu kita lagi nggak baik-baik saja. Dan aku tahu sebagian besar itu karena aku.",
        "Aku nggak sempurna. Aku sering terlalu banyak mikir, terlalu mudah cemas, dan terlalu lambat mengakui kalau aku salah. Tapi aku juga tahu satu hal: aku nggak mau kehilanganmu.",
        "Surat ini bukan untuk meminta kamu kembali, atau meminta maaf supaya semuanya langsung baik-baik saja. Aku hanya ingin kamu tahu bahwa aku serius — serius ingin berubah, serius ingin lebih baik.",
        "Kamu berhak atas seseorang yang bisa hadir sepenuhnya, yang nggak mudah goyah oleh rasa insecure, yang bisa mendengar tanpa menghakimi. Dan aku sedang berusaha menjadi orang itu.",
        "Apapun yang terjadi, aku bersyukur pernah mengenalmu — sejak 13 April itu, sejak kamu memulai percakapan pertama, sejak malam Truth or Dare yang bikin aku yakin kamu bukan orang biasa.",
        "Terima kasih sudah ada, meski sebentar."
      ],
      closing: "Dengan sepenuh hati,",
      sender: "Hilya 🤍"
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ENDING SCREEN
  // ─────────────────────────────────────────────────────────────
  ending: {
    line1: "Aku nggak tahu bagaimana ini akan berakhir.",
    line2: "Tapi aku tahu aku sudah bicara jujur.",
    final: "Itu yang paling penting."
  }

};
