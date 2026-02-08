/* =========================================
   FILE: data.js
   FUNGSI: Database Artikel & Standar Medis (WHO/JNC 8)
   ========================================= */

// 1. DATABASE ARTIKEL EDUKASI (EDISI "DAGING" & MERAKYAT)
const articleDatabase = {
    // =============================================
    // ZONA PRODUKTIF (15 - 50 TAHUN)
    // =============================================
    
    "prod_boyok": {
        title: "Boyok'en & Saraf Kejepit: Bukan Sekadar Pegal Biasa",
        category: "Tulang & Otot",
        content: `
            <p>Sering merasa pinggang panas, nyeri menjalar sampai ke bokong/kaki, atau kesemutan terus-menerus? Hati-hati, itu bukan sekadar "kecetit" biasa, tapi gejala awal <strong>HNP (Hernia Nukleus Pulposus)</strong> atau Saraf Kejepit.</p>
            
            <h4 style="color:#c0392b;">❌ Kesalahan Fatal Petani/Pekerja:</h4>
            <ul>
                <li><strong>Posisi Cangkul:</strong> Membungkuk terlalu ekstrem dalam waktu lama (lebih dari 1 jam tanpa jeda).</li>
                <li><strong>Angkat Gabah:</strong> Langsung menarik karung berat dari posisi membungkuk. Ini membebankan 100% berat ke tulang belakang.</li>
                <li><strong>Dompet Tebal:</strong> Duduk lama dengan dompet tebal di saku belakang (bikin tulang panggul miring).</li>
            </ul>

            <h4 style="color:#27ae60;">✅ Teknik Angkat Beban yang Benar:</h4>
            <ol>
                <li><strong>Dekati Beban:</strong> Jangan angkat barang yang jauh dari badan.</li>
                <li><strong>Jongkok Dulu:</strong> Tekuk lutut, punggung tetap tegak lurus.</li>
                <li><strong>Peluk & Angkat:</strong> Gunakan kekuatan <strong>OTOT PAHA</strong> untuk berdiri, bukan pinggang.</li>
            </ol>
            
            <p><strong>Tips Hemat:</strong> Jika pinggang nyeri, jangan langsung dipijat keras! Kompres dengan botol kaca berisi air hangat (dilapis kain) selama 15 menit setiap sore untuk melancarkan darah.</p>
        `
    },

    "prod_maag": {
        title: "Asam Lambung (GERD): Akibat Telat Makan & Kopi",
        category: "Pencernaan",
        content: `
            <p>Anak muda jaman sekarang sering menyepelekan sarapan. "Ah, nanti saja sekalian siang," pikirnya. Padahal lambung ibarat mesin yang terus bekerja memproduksi asam sejak bangun tidur.</p>
            
            <h4 style="color:#c0392b;">⚠️ Lingkaran Setan GERD:</h4>
            <p>Kombinasi maut: <strong>Perut Kosong + Kopi Hitam + Rokok</strong>. Ini akan mengikis dinding lambung (Gastritis). Jika dibiarkan, asam akan naik ke kerongkongan (GERD) menyebabkan:</p>
            <ul>
                <li>Dada terasa panas terbakar (Heartburn).</li>
                <li>Mulut terasa pahit/asam.</li>
                <li>Sesak napas yang sering dikira serangan jantung.</li>
            </ul>

            <h4 style="color:#27ae60;">✅ Pertolongan Pertama (Tanpa Obat Warung):</h4>
            <ul>
                <li><strong>Air Tajin:</strong> Minum air rebusan beras yang kental hangat-hangat sebelum makan. Ini pelapis lambung alami terbaik.</li>
                <li><strong>Pati Garut (Irut):</strong> Seduh tepung pati garut dengan air panas dan gula aren. Teksturnya yang lembut menenangkan lambung luka.</li>
                <li><strong>Posisi Tidur:</strong> Saat kumat, tidur dengan bantal tinggi (setengah duduk) agar asam tidak naik.</li>
            </ul>
        `
    },

    "prod_rokok": {
        title: "Rokok + Begadang: Jalan Tol Menuju Serangan Jantung",
        category: "Jantung & Paru",
        content: `
            <p>Dulu penyakit jantung identik dengan orang tua usia 60+. Sekarang? Di usia 25-30 tahun sudah banyak yang pasang ring jantung di RS Pusat. Kenapa bisa begitu?</p>

            <h4 style="color:#c0392b;">💣 Apa yang Terjadi di Tubuh Anda?</h4>
            <p>Saat Anda begadang, tubuh memproduksi hormon stres (Adrenalin) yang menaikkan tensi. Lalu Anda merokok (Nikotin mempersempit pembuluh darah) dan minum Kopi (Kafein memacu detak jantung).</p>
            <p>Ibarat selang air yang dipencet (sempit) tapi kerannya dibuka full (jantung kencang). <strong>Jantung dipaksa lari maraton tanpa istirahat!</strong></p>

            <h4 style="color:#27ae60;">✅ Kenali Tanda Bahaya (Angina):</h4>
            <ul>
                <li>Nyeri dada kiri seperti ditindih benda berat (bukan tusuk-tusuk).</li>
                <li>Nyeri menjalar ke rahang, leher, atau lengan kiri.</li>
                <li>Keringat dingin sebesar biji jagung (padahal udara tidak panas).</li>
            </ul>
            <p><strong>Tantangan Sehat:</strong> Jika susah berhenti total, mulailah dengan: <strong>Puasa rokok 1 jam sebelum tidur & 1 jam setelah bangun.</strong> Beri paru-paru Anda napas.</p>
        `
    },

    "prod_gula": {
        title: "Bahaya Tersembunyi 'Es Teh Jumbo'",
        category: "Diabetes Dini",
        content: `
            <p>Siang hari panas terik memang paling enak minum Es Teh Jumbo. Murah, manis, segar. Tapi tahukah Anda? Satu gelas jumbo bisa berisi <strong>5-6 sendok makan gula cair</strong>.</p>

            <h4 style="color:#c0392b;">⚠️ Kenapa Gula Cair Lebih Jahat dari Nasi?</h4>
            <p>Nasi perlu dicerna dulu sebelum jadi gula darah. Tapi gula cair? Dia langsung "menyuntik" masuk ke darah dalam hitungan menit. Ini membuat pankreas bekerja rodi memompa insulin (Lonjakan Gula). Jika dilakukan tiap hari, pankreas akan rusak sebelum usia 40 tahun.</p>

            <h4 style="color:#27ae60;">✅ Cek Fisik Sendiri (Tanda Resistensi Insulin):</h4>
            <ul>
                <li><strong>Leher Belakang:</strong> Apakah ada garis hitam atau daki tebal yang digosok tidak bisa hilang? Itu <em>Acanthosis Nigricans</em>, tanda tubuh sudah keracunan gula.</li>
                <li><strong>Kutil Daging:</strong> Muncul banyak kutil kecil (skin tag) di leher/ketiak.</li>
                <li><strong>Ngantuk Berat:</strong> Selalu mengantuk hebat setelah makan siang.</li>
            </ul>
            <p><strong>Solusi:</strong> Pesan "Les Sugar" (Gula Sedikit), "Tawar", atau ganti manisnya dengan buah potong.</p>
        `
    },

    "prod_mental": {
        title: "Stres Cicilan, Pupuk, & Gagal Panen",
        category: "Kesehatan Mental",
        content: `
            <p>Sakit fisik seringkali asalnya dari pikiran (Psikosomatis). Memikirkan harga pupuk yang mahal, cicilan bank, atau gagal panen bisa memicu asam lambung naik drastis, tensi melonjak, dan imun tubuh anjlok.</p>

            <h4 style="color:#27ae60;">✅ Cara 'Healing' Gratis ala Orang Desa:</h4>
            <ul>
                <li><strong>Grounding (Nyeker):</strong> Berjalan telanjang kaki di tanah atau rumput yang berembun pagi hari selama 15 menit. Ini terbukti menetralkan ion tubuh dan meredakan peradangan.</li>
                <li><strong>Teknik Napas 4-7-8:</strong> Tarik napas lewat hidung 4 detik, Tahan napas 7 detik, Hembuskan lewat mulut pelan-pelan 8 detik. Lakukan 5 kali saat kepala mau pecah memikirkan masalah.</li>
                <li><strong>Sosialisasi Pos Ronda:</strong> Jangan mengurung diri di kamar. Ngobrol (Jagongan) dengan tetangga, tertawa, dan berbagi cerita terbukti menurunkan hormon stres kortisol.</li>
            </ul>
        `
    },

    // =============================================
    // ZONA LANSIA (50+ TAHUN)
    // =============================================

    "lansia_darah": {
        title: "Hipertensi: Mengapa Disebut 'Silent Killer'?",
        category: "Jantung Lansia",
        content: `
            <p>Banyak Simbah bilang: <em>"Aku gak pusing kok, leherku gak kaku, berarti tensiku aman."</em> <strong>INI SALAH BESAR.</strong> Hipertensi seringkali tidak bergejala sama sekali sampai pembuluh darah di otak pecah (Stroke) atau jantung berhenti mendadak.</p>

            <h4 style="color:#c0392b;">⚠️ Mitos vs Fakta Obat Tensi:</h4>
            <p><strong>Mitos:</strong> "Kalau sering minum obat kimia nanti ginjalnya rusak."<br>
            <strong>Fakta:</strong> Justru Darah Tinggi yang <strong>TIDAK DIOBATI</strong> yang akan menjebol saringan ginjal (Gagal Ginjal & Cuci Darah). Obat tensi dosis rendah aman untuk jangka panjang.</p>

            <h4 style="color:#27ae60;">✅ Pantangan Mutlak:</h4>
            <ul>
                <li>Ikan Asin & Telur Asin (Musuh Nomor 1).</li>
                <li>Kuah santan yang dipanaskan berulang-ulang (Blondo/Areh).</li>
                <li>Kerupuk (Ingat, kerupuk itu rasanya asin karena garam!).</li>
                <li>Penyedap rasa (Micin/Royco) berlebihan.</li>
            </ul>
        `
    },

    "lansia_sendi": {
        title: "Linu-linu, Rematik, & Asam Urat",
        category: "Tulang & Sendi",
        content: `
            <p>Asam urat itu bukan sekadar pegal linu biasa karena capek. Itu adalah penumpukan zat purin yang menjadi kristal tajam (seperti pecahan kaca) yang menusuk sendi dari dalam.</p>

            <h4 style="color:#c0392b;">❌ Makanan Sehat yang Ternyata Bahaya:</h4>
            <p>Banyak lansia menghindari daging, tapi malah makan ini berlebihan:</p>
            <ul>
                <li><strong>Sayuran Hijau Tertentu:</strong> Kangkung, Bayam, Daun Singkong, Kembang Kol (Tinggi Purin).</li>
                <li><strong>Kacang-kacangan:</strong> Melinjo (Emping), Kacang Tanah goreng, Tahu/Tempe (jika berlebihan).</li>
                <li><strong>Jeroan:</strong> Usus, Hati, Ampela, Paru (Stop total).</li>
            </ul>

            <h4 style="color:#27ae60;">✅ Solusi Murah Meriah:</h4>
            <p><strong>Minum Air Putih!</strong> Asam urat dikeluarkan lewat air seni. Jika kurang minum, kristal akan menumpuk. Bantu dengan membalurkan parutan jahe merah hangat di sendi yang sakit.</p>
        `
    },

    "lansia_pusing": {
        title: "Bahaya Jatuh di Kamar Mandi (Pusing Bangun Tidur)",
        category: "Keselamatan",
        content: `
            <p>Sering terjadi: Lansia bangun tidur karena kebelet pipis, buru-buru berdiri, lalu jatuh pingsan di kamar mandi. Kenapa? Ini disebut <em>Hipotensi Ortostatik</em> (Darah telat naik ke otak saat perubahan posisi).</p>

            <h4 style="color:#27ae60;">✅ Rumus Bangun Tidur Aman (3 Menit):</h4>
            <ol>
                <li><strong>Menit 1:</strong> Melek mata, berdoa, gerakkan jari tangan dan kaki di kasur (pemanasan).</li>
                <li><strong>Menit 2:</strong> Miringkan badan, lalu duduk perlahan di tepi kasur. <strong>JANGAN BERDIRI DULU!</strong> Ayun-ayunkan kaki.</li>
                <li><strong>Menit 3:</strong> Jika kepala terasa enteng dan tidak berkunang-kunang, baru berdiri pelan dan jalan.</li>
            </ol>
            <p><strong>Wajib:</strong> Pasang pegangan besi di dinding kamar mandi dan gunakan alas kaki karet yang tidak licin.</p>
        `
    },

    "lansia_makan": {
        title: "Menu Makanan Empuk tapi Bergizi",
        category: "Gizi Lansia",
        content: `
            <p>Gigi sudah banyak yang tanggal bukan alasan makan sembarangan (cuma kuah santan atau bubur instan). Lansia sangat butuh protein agar otot tidak menyusut (Sarcopenia) dan tidak mudah jatuh.</p>

            <h4 style="color:#27ae60;">✅ Ide Masakan Ramah Lansia:</h4>
            <ul>
                <li><strong>Pepes Tahu Telur:</strong> Kukus tahu putih yang dihancurkan, campur telur ayam dan kemangi. Teksturnya lembut, wangi, dan bergizi tinggi.</li>
                <li><strong>Sup Labu Kuning (Waluh):</strong> Rebus labu kuning sampai hancur. Bagus untuk mata dan melancarkan pencernaan (serat lembut).</li>
                <li><strong>Ikan Pindang Presto:</strong> Masak ikan sampai durinya lunak. Sumber kalsium terbaik untuk tulang keropos.</li>
                <li><strong>Telur Rebus:</strong> Makanan termurah dan terbaik. Makan 1 butir setiap hari.</li>
            </ul>
        `
    },

    "lansia_stroke": {
        title: "Kenali Tanda STROKE Sejak Dini",
        category: "Gawat Darurat",
        content: `
            <p>Stroke ada periode emas (Golden Period) <strong>4,5 jam</strong>. Jika telat dibawa ke RS, risiko kematian atau cacat permanen sangat tinggi.</p>

            <h4 style="color:#c0392b;">🚨 Hafalkan Slogan "SeGeRa Ke RS":</h4>
            <ul>
                <li><strong>Se (Senyum):</strong> Minta senyum. Apakah wajah miring sebelah/perot?</li>
                <li><strong>Ge (Gerak):</strong> Minta angkat kedua tangan. Apakah satu tangan lemah/jatuh?</li>
                <li><strong>Ra (Bicara):</strong> Ajak bicara kalimat simpel. Apakah suaranya pelo/tidak jelas/tidak nyambung?</li>
            </ul>
            
            <div style="background:#ffebee; padding:15px; border-radius:8px; margin-top:15px; border-left:5px solid #c0392b;">
                <strong>⚠️ PERINGATAN KERAS:</strong><br>
                Jika ada tanda di atas, <span style="color:red; font-weight:bold;">JANGAN TUSUK JARUM KE JARI!</span> Itu mitos berbahaya, tidak ada gunanya, dan hanya membuang waktu berharga. Segera bawa pasien ke IGD Rumah Sakit terdekat.
            </div>
        `
    }
};

/* =========================================
   2. DATABASE MEDIS (STANDAR JNC 7/8 & WHO)
   ========================================= */
const medicalDatabase = {
    // --- TENSI KATEGORI LENGKAP ---
    
    // 1. HIPOTENSI
    "bp_hypo": {
        title: "Hipotensi (Darah Rendah)", 
        ref_text: "Target Normal", 
        level: "Rendah", theme: "warning", urgency: 2,
        symptoms: ["Pusing saat berdiri (berkunang-kunang)", "Pandangan gelap sesaat", "Badan lemas/lesu", "Wajah pucat", "Ujung tangan dingin"],
        causes: ["Dehidrasi (Kurang minum)", "Kurang tidur/begadang", "Anemia (Kurang darah)", "Telat makan"],
        info: "Tekanan darah di bawah 90/60 mmHg. Suplai oksigen dan darah ke otak tidak maksimal, menyebabkan rasa pusing mendadak.",
        risk_future: "Risiko tinggi pingsan mendadak yang bisa menyebabkan cedera kepala atau patah tulang akibat jatuh.",
        diet: { eat: ["Sate Kambing (Wajar)", "Sayur Bayam/Katuk", "Hati Ayam", "Minum Air Putih 2L"], avoid: ["Begadang", "Diet terlalu ketat"] },
        action: "Segera duduk/baring jika pusing. Minum teh manis hangat dan makan makanan bergizi."
    },

    // 2. NORMAL
    "bp_normal": {
        title: "Tensi Normal (Optimal)", 
        ref_text: "Target Normal",
        level: "Sehat", theme: "success", urgency: 1,
        symptoms: ["Tubuh terasa ringan", "Napas lega", "Fokus terjaga", "Tidur nyenyak"],
        causes: ["Pola hidup sehat", "Rajin gerak/tani", "Manajemen stres baik"],
        info: "Tekanan darah dalam batas aman. Jantung memompa darah dengan ritme sempurna tanpa beban berlebih.",
        risk_future: "Sangat rendah risiko terkena penyakit jantung dan stroke di masa depan.",
        diet: { eat: ["Sayuran Hijau", "Buah-buahan (Pisang/Pepaya)", "Ikan Segar"], avoid: ["Rokok", "Alkohol", "Makanan Pengawet"] },
        action: "Pertahankan pola hidup sehat ini! Cek rutin bulan depan."
    },

    // 3. PRA-HIPERTENSI
    "bp_pre": { 
        title: "Pra-Hipertensi (Waspada)", 
        ref_text: "Target Normal",
        level: "Waspada", theme: "warning", urgency: 2,
        symptoms: ["Leher belakang (tengkuk) kaku", "Kadang sakit kepala ringan", "Mudah lelah saat aktivitas"],
        causes: ["Terlalu banyak garam/micin", "Kurang olahraga", "Stres pikiran", "Sering makan gorengan"],
        info: "Tekanan darah mulai merangkak naik di atas normal. Ini adalah fase 'Lampu Kuning' peringatan dari tubuh.",
        risk_future: "Berpotensi besar menjadi Darah Tinggi Permanen dalam 1-2 tahun jika pola makan tidak diubah.",
        diet: { eat: ["Mentimun", "Seledri", "Jus Belimbing", "Pisang"], avoid: ["Ikan Asin", "Kerupuk (Asin)", "Kopi Berlebih"] },
        action: "Kurangi garam dapur 50%. Tidur minimal 7 jam. Rutin jalan pagi."
    },

    // 4. HIPERTENSI TAHAP 1
    "bp_stage1": {
        title: "Hipertensi Tahap 1", 
        ref_text: "Target Normal",
        level: "Bahaya", theme: "danger", urgency: 3,
        symptoms: ["Tengkuk terasa berat/kencang", "Jantung berdebar", "Telinga berdenging", "Emosi tidak stabil"],
        causes: ["Faktor usia (pembuluh kaku)", "Obesitas", "Konsumsi garam berlebih menahun", "Keturunan"],
        info: "Tekanan darah tinggi tingkat awal. Jantung bekerja terlalu keras memompa darah, dinding pembuluh darah mulai menebal.",
        risk_future: "Risiko Stroke ringan, Kerusakan Ginjal, dan Pembengkakan Jantung.",
        diet: { eat: ["Labu Siam Rebus", "Pepaya", "Air Kelapa Muda"], avoid: ["GARAM MEJA", "Santan Kental", "Daging Kambing", "Jeroan"] },
        action: "Segera konsultasi ke Bidan/Dokter Desa. Mungkin perlu obat penurun tensi dosis ringan."
    },

    // 5. HIPERTENSI TAHAP 2 (TERMASUK KRISIS)
    "bp_stage2": {
        title: "Hipertensi Tahap 2 (Bahaya)", 
        ref_text: "Target Normal",
        level: "Sangat Bahaya", theme: "critical", urgency: 4,
        symptoms: ["Sakit kepala hebat", "Nyeri dada", "Sesak napas", "Pandangan kabur", "Mimisan", "Mual muntah"],
        causes: ["Tidak minum obat rutin", "Stres ekstrem", "Komplikasi organ lain"],
        info: "Tekanan darah SANGAT TINGGI. Pembuluh darah menanggung beban ekstrem dan bisa pecah sewaktu-waktu.",
        risk_future: "SERANGAN JANTUNG mendadak, STROKE Pendarahan Otak, Gagal Ginjal Akut.",
        diet: { eat: ["Air Putih Saja", "Makanan Rebus Tanpa Rasa"], avoid: ["SEMUA MAKANAN BERBUMBU", "Stres/Kaget"] },
        action: "KONDISI GAWAT! Minta antar keluarga ke IGD / Puskesmas SEKARANG JUGA!"
    },

    // ------------------------------------------
    // B. GULA DARAH SEWAKTU (WHO/PERKENI)
    // ------------------------------------------
    "sugar_low": { 
        title: "Hipoglikemia (Gula Drop)", ref_text: "Normal: 70 - 140", level: "Drop", theme: "warning", urgency: 2, 
        symptoms: ["Gemetar (Tremor)", "Keringat dingin", "Lapar luar biasa", "Linglung/Bingung", "Bicara melantur"], 
        causes: ["Telat makan", "Dosis obat gula terlalu tinggi", "Aktivitas fisik berlebih tanpa makan"], 
        info: "Gula darah < 70 mg/dL. Otak kekurangan bahan bakar energi utama.", 
        risk_future: "Pingsan hingga Koma Hipoglikemia (Kehilangan kesadaran).", 
        diet: { eat: ["Teh Manis Hangat (Segera)", "Roti", "Permen", "Pisang"], avoid: ["Diet karbohidrat ekstrem"] }, 
        action: "Segera minum TEH MANIS atau makan permen sekarang! Jangan tunda." 
    },
    "sugar_normal": { 
        title: "Gula Darah Normal", ref_text: "Normal: < 140", level: "Sehat", theme: "success", urgency: 1, 
        symptoms: ["Energi stabil", "Tidak mudah haus", "Luka cepat sembuh"], 
        causes: ["Pola makan seimbang", "Metabolisme tubuh bagus"], 
        info: "Gula darah sewaktu < 140 mg/dL. Sistem insulin tubuh bekerja dengan baik.", 
        risk_future: "Aman dari Diabetes Melitus.", 
        diet: { eat: ["Nasi Merah", "Sayur Bayam", "Kacang-kacangan"], avoid: ["Minuman Kemasan", "Soda", "Kue Tart"] }, 
        action: "Jaga berat badan ideal & rajin gerak." 
    },
    "sugar_pre": { 
        title: "Pre-Diabetes (Waspada)", ref_text: "Normal: < 140", level: "Hati-hati", theme: "warning", urgency: 2, 
        symptoms: ["Mudah ngantuk habis makan", "Sering haus", "Sering pipis malam", "Luka agak lama sembuh"], 
        causes: ["Sering minum manis", "Kurang gerak (Sedentary)", "Berat badan naik"], 
        info: "Gula darah 140-199 mg/dL. Ini fase 'Lampu Kuning'. Belum diabetes, tapi selangkah lagi jadi permanen.", 
        risk_future: "Diabetes Tipe 2 dalam 1-2 tahun jika pola hidup tidak diubah.", 
        diet: { eat: ["Ubi Rebus", "Jagung", "Sayur Bening"], avoid: ["Gula Pasir", "Teh Botolan", "Sirup"] }, 
        action: "Kurangi porsi nasi & gula 50%. Cek gula darah lagi minggu depan." 
    },
    "sugar_high": { 
        title: "Indikasi Diabetes", ref_text: "Normal: < 140", level: "Bahaya", theme: "danger", urgency: 3, 
        symptoms: ["Sering pipis malam (Poliuria)", "Haus terus (Polidipsi)", "BB turun drastis tanpa sebab", "Kaki kesemutan"], 
        causes: ["Resistensi Insulin", "Keturunan", "Gaya hidup tidak sehat menahun"], 
        info: "Gula darah ≥ 200 mg/dL. Darah menjadi kental seperti sirup, merusak pembuluh darah kecil.", 
        risk_future: "Kebutaan (Retinopati), Gagal Ginjal (Cuci Darah), Luka membusuk (Gangren).", 
        diet: { eat: ["Pare", "Buncis", "Ikan Gabus", "Beras Merah"], avoid: ["Gula Pasir", "Kecap Manis", "Durian", "Mangga Manis"] }, 
        action: "Wajib periksa ke Dokter untuk cek HbA1c dan obat gula rutin." 
    },

    // ------------------------------------------
    // C. ASAM URAT (Gender Specific)
    // ------------------------------------------
    "uric_normal": { 
        title: "Asam Urat Aman", ref_text: "Pria <7, Wanita <6", level: "Sehat", theme: "success", urgency: 1, 
        symptoms: ["Sendi terasa nyaman", "Gerak leluasa"], 
        causes: ["Ginjal sehat", "Minum air cukup"], 
        info: "Kadar asam urat dalam batas aman. Ginjal berhasil membuang purin.", 
        risk_future: "Aman dari radang sendi.", 
        diet: { eat: ["Buah-buahan (Vitamin C)", "Tahu Tempe (Wajar)"], avoid: ["Alkohol"] }, 
        action: "Minum air putih minimal 8 gelas sehari." 
    },
    "uric_high": { 
        title: "Asam Urat Tinggi", ref_text: "Pria >7, Wanita >6", level: "Nyeri", theme: "danger", urgency: 3, 
        symptoms: ["Nyeri tajam di jempol kaki/lutut", "Bengkak kemerahan", "Sendi terasa panas", "Sulit jalan"], 
        causes: ["Terlalu banyak makan jeroan/emping", "Kurang minum air", "Obesitas"], 
        info: "Kadar asam urat tinggi membentuk kristal tajam yang menumpuk di persendian.", 
        risk_future: "Kerusakan sendi permanen (Bengkok), Batu Ginjal.", 
        diet: { eat: ["Sirsak", "Labu Siam", "Pisang", "Ceri"], avoid: ["JEROAN (Usus/Hati)", "Emping Melinjo", "Daging Merah", "Seafood"] }, 
        action: "Stop total makan jeroan. Minum obat pereda nyeri jika perlu." 
    },

    // ------------------------------------------
    // D. KOLESTEROL TOTAL (NCEP ATP III)
    // ------------------------------------------
    "chol_normal": { 
        title: "Kolesterol Aman", ref_text: "< 200 mg/dL", level: "Sehat", theme: "success", urgency: 1, 
        symptoms: ["Tubuh fit", "Tidak mudah pegal"], 
        causes: ["Pola makan sehat", "Rutin olahraga"], 
        info: "Total kolesterol < 200 mg/dL. Pembuluh darah bersih dari tumpukan lemak.", 
        risk_future: "Jantung aman.", 
        diet: { eat: ["Oatmeal", "Ikan", "Minyak Zaitun"], avoid: ["Lemak Jenuh"] }, 
        action: "Lanjutkan olahraga teratur 30 menit sehari." 
    },
    "chol_border": { 
        title: "Kolesterol Ambang Batas", ref_text: "< 200 mg/dL", level: "Waspada", theme: "warning", urgency: 2, 
        symptoms: ["Pegal bahu/tengkuk", "Mudah lelah", "Sering mengantuk"], 
        causes: ["Suka makan gorengan", "Kurang gerak", "Sering makan santan"], 
        info: "Total kolesterol 200-239 mg/dL. Lemak mulai menumpuk di dinding pembuluh darah (Plak).", 
        risk_future: "Penyempitan pembuluh darah (Aterosklerosis).", 
        diet: { eat: ["Alpukat", "Bawang Putih", "Ikan Rebus"], avoid: ["Kulit Ayam", "Gorengan", "Kuning Telur"] }, 
        action: "Kurangi minyak & santan. Mulai rutin olahraga." 
    },
    "chol_high": { 
        title: "Kolesterol Tinggi", ref_text: "< 200 mg/dL", level: "Bahaya", theme: "danger", urgency: 3, 
        symptoms: ["Leher belakang berat", "Sering kesemutan", "Dada kiri nyeri tumpul", "Ada gumpalan kuning di kelopak mata"], 
        causes: ["Pola makan buruk menahun", "Malas olahraga", "Merokok"], 
        info: "Total kolesterol ≥ 240 mg/dL. Plak lemak sudah tebal, aliran darah terganggu.", 
        risk_future: "Penyumbatan total yang memicu SERANGAN JANTUNG atau STROKE.", 
        diet: { eat: ["Ikan Rebus/Pepes", "Buah-buahan", "Sayur Rebus"], avoid: ["GORENGAN", "Santan Kental", "Jeroan", "Mentega"] }, 
        action: "Segera cek profil lemak lengkap (LDL/HDL) di Lab." 
    },

    // ------------------------------------------
    // E. BMI (WHO ASIA-PACIFIC STANDARD)
    // ------------------------------------------
    "bmi_under": { 
        title: "Kurus (Underweight)", ref_text: "Ideal: 18.5 - 22.9", level: "Kurang Gizi", theme: "warning", urgency: 2, 
        symptoms: ["Mudah lelah", "Tulang menonjol", "Imun lemah (gampang sakit)", "Rambut rontok"], 
        causes: ["Kurang asupan kalori/protein", "Penyakit kronis (TBC/Tiroid)", "Stres"], 
        info: "BMI < 18.5. Tubuh kekurangan cadangan energi dan massa otot.", 
        risk_future: "Osteoporosis (Tulang Keropos), Anemia, Masalah Kesuburan.", 
        diet: { eat: ["Telur (2 butir/hari)", "Daging", "Susu Full Cream", "Nasi Tambah Porsi"], avoid: ["Begadang", "Rokok", "Kopi (Penahan lapar)"] }, 
        action: "Tambah porsi makan. Perbanyak protein (telur/tahu/tempe)." 
    },
    "bmi_normal": { 
        title: "Berat Ideal (Normal)", ref_text: "Ideal: 18.5 - 22.9", level: "Sehat", theme: "success", urgency: 1, 
        symptoms: ["Tubuh proporsional", "Gesit", "Napas panjang"], 
        causes: ["Gizi seimbang", "Rutin gerak"], 
        info: "BMI 18.5 - 22.9 (Standar Asia). Berat badan sesuai tinggi badan. Metabolisme optimal.", 
        risk_future: "Rendah risiko penyakit metabolik.", 
        diet: { eat: ["Sayur", "Buah", "Protein Cukup"], avoid: ["Junk Food", "Makanan Instan"] }, 
        action: "Pertahankan! Lanjutkan olahraga rutin." 
    },
    "bmi_over": { 
        title: "Gemuk (Overweight)", ref_text: "Ideal: 18.5 - 22.9", level: "Waspada", theme: "warning", urgency: 2, 
        symptoms: ["Baju terasa sesak", "Napas agak berat", "Perut buncit"], 
        causes: ["Kebanyakan karbohidrat (Nasi/Tepung)", "Kurang gerak", "Sering ngemil"], 
        info: "BMI 23.0 - 24.9. Mulai ada penumpukan lemak viseral (lemak perut).", 
        risk_future: "Diabetes Tipe 2, Kolesterol Tinggi, Hipertensi.", 
        diet: { eat: ["Sayur Rebus", "Buah Potong", "Air Putih (Sebelum makan)"], avoid: ["Gorengan", "Minuman Manis", "Nasi Tambah"] }, 
        action: "Kurangi nasi 1/4 porsi. Jalan kaki 30 menit sehari." 
    },
    "bmi_obese": { 
        title: "Obesitas (Kegemukan)", ref_text: "Ideal: 18.5 - 22.9", level: "Bahaya", theme: "danger", urgency: 3, 
        symptoms: ["Mudah ngos-ngosan", "Nyeri lutut/pinggang", "Mendengkur keras (Ngorok)", "Cepat gerah"], 
        causes: ["Pola makan buruk menahun", "Genetik", "Malas gerak (Sedentary)"], 
        info: "BMI ≥ 25.0 (Standar Asia). Penumpukan lemak berlebih yang membebani jantung dan sendi.", 
        risk_future: "Penyakit Jantung Koroner, Diabetes Akut, Stroke, Sendi Rusak (Osteoarthritis).", 
        diet: { eat: ["Beras Merah/Jagung", "Sayur Bening", "Dada Ayam Rebus"], avoid: ["SEMUA GORENGAN", "Santan", "Makanan/Minuman Manis"] }, 
        action: "Wajib Diet Defisit Kalori. Konsultasi ahli gizi jika perlu." 
    }
};