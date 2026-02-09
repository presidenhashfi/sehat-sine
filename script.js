/* =========================================
   FILE: script.js
   FUNGSI: Logika Analisa, Riwayat Klik, & Interaksi
   ========================================= */

let currentResultData = null;

// --- NAVIGASI ---
function navTo(pageId, element) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if(element) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        element.classList.add('active');
    }
    if (pageId === 'page-history') loadHistory();
}

// --- BUKA ARTIKEL ---
function openArticle(id) {
    if (typeof articleDatabase === 'undefined') return alert("Database belum dimuat!");
    const art = articleDatabase[id];
    if(!art) return;
    document.getElementById('artContent').innerHTML = `
        <h2 class="art-full-title">${art.title}</h2>
        <span class="art-full-tag">${art.category}</span>
        <div class="art-full-body">${art.content}</div>`;
    document.getElementById('articleModal').classList.add('active');
}
function closeArticle() { document.getElementById('articleModal').classList.remove('active'); }

// --- TOGGLE INPUT ---
function toggleInputs() {
    const type = document.getElementById('testType').value;
    document.querySelectorAll('.input-group').forEach(div => div.classList.add('hidden'));
    
    // Umur wajib visible untuk Tensi & BMI
    if(type === 'bp' || type === 'bmi') document.getElementById('input-age-group').classList.remove('hidden');
    else document.getElementById('input-age-group').classList.add('hidden');

    if(type === 'bp') document.getElementById('input-bp').classList.remove('hidden');
    else if(type === 'sugar') document.getElementById('input-sugar').classList.remove('hidden');
    else if(type === 'uric') document.getElementById('input-uric').classList.remove('hidden');
    else if(type === 'cholesterol') document.getElementById('input-cholesterol').classList.remove('hidden');
    else if(type === 'bmi') document.getElementById('input-bmi').classList.remove('hidden');
}

// --- ANALISA KESEHATAN ---
function analyzeHealth() {
    const name = document.getElementById('nameVal').value;
    if(!name) return alert("Mohon isi NAMA WARGA terlebih dahulu!");

    const type = document.getElementById('testType').value;
    const ageVal = document.getElementById('ageVal').value;
    let key = "", valDisplay = "";
    let userAge = ageVal ? parseInt(ageVal) : 0;
    let dynamicTargetText = ""; 

    if (typeof medicalDatabase === 'undefined') return alert("Database medis error!");

    // 1. TENSI
    if (type === 'bp') {
        if(!ageVal) return alert("Untuk Tensi, WAJIB isi UMUR!");
        const s = parseInt(document.getElementById('bpSys').value);
        const d = parseInt(document.getElementById('bpDia').value);
        if(!s || !d) return alert("Isi angka Tensi!");
        valDisplay = `${s}/${d} mmHg`;

        let isElderly = userAge >= 60;
        dynamicTargetText = isElderly ? "Target Lansia: < 150/90" : "Target Dewasa: < 140/90";

        if (s < 90 || d < 60) key = "bp_hypo";
        else if (s >= 160 || d >= 100) key = "bp_stage2";
        else if ( (isElderly && (s >= 150 || d >= 90)) || (!isElderly && (s >= 140 || d >= 90)) ) key = "bp_stage1";
        else if ( (isElderly && (s >= 140 || d >= 90)) || (!isElderly && (s >= 120 || d >= 80)) ) key = "bp_pre";
        else key = "bp_normal";
    }
    // 2. BMI
    else if (type === 'bmi') {
        if(!ageVal) return alert("Isi UMUR!");
        const w = parseFloat(document.getElementById('weightVal').value);
        const h = parseFloat(document.getElementById('heightVal').value);
        if(!w || !h) return alert("Isi Berat & Tinggi!");
        const bmi = w / ((h/100)*(h/100));
        valDisplay = `BMI: ${bmi.toFixed(1)}`;
        if (bmi < 18.5) key = "bmi_under";
        else if (bmi < 23.0) key = "bmi_normal";
        else if (bmi < 25.0) key = "bmi_over";
        else key = "bmi_obese";
        dynamicTargetText = "Ideal Asia: 18.5 - 22.9";
    }
    // 3. GULA
    else if (type === 'sugar') {
        const v = parseInt(document.getElementById('sugarVal').value);
        if(!v) return alert("Isi nilai Gula!");
        valDisplay = `${v} mg/dL`;
        if (v < 70) key = "sugar_low";
        else if (v < 140) key = "sugar_normal";
        else if (v < 200) key = "sugar_pre";
        else key = "sugar_high";
        dynamicTargetText = "Normal: < 140 mg/dL";
    }
    // 4. ASAM URAT
    else if (type === 'uric') {
        const v = parseFloat(document.getElementById('uricVal').value);
        const g = document.getElementById('gender').value;
        if(!v) return alert("Isi nilai Asam Urat!");
        valDisplay = `${v} mg/dL`;
        let limit = (g === 'male') ? 7.0 : 6.0;
        key = (v > limit) ? "uric_high" : "uric_normal";
        dynamicTargetText = (g === 'male') ? "Normal Pria: < 7.0" : "Normal Wanita: < 6.0";
    }
    // 5. KOLESTEROL
    else if (type === 'cholesterol') {
        const v = parseInt(document.getElementById('cholVal').value);
        if(!v) return alert("Isi nilai Kolesterol!");
        valDisplay = `${v} mg/dL`;
        if (v < 200) key = "chol_normal";
        else if (v < 240) key = "chol_border";
        else key = "chol_high";
        dynamicTargetText = "Normal: < 200 mg/dL";
    }

    // Panggil render (Mode Analisa Baru -> Tombol Simpan Muncul)
    renderFullReport(key, valDisplay, type, userAge, name, dynamicTargetText, true);
}

// --- RENDER MODAL UTAMA ---
function renderFullReport(key, valDisplay, type, age, name, dynamicTargetText, showSaveButton) {
    const data = medicalDatabase[key] || medicalDatabase['bp_normal'];
    
    // TEXT FINAL
    const finalRefText = dynamicTargetText || data.ref_text;

    // --- FITUR BARU: FORMAT WA ALA "STRUK DIGITAL" ---
    // Menggunakan kode: *Tebal*, _Miring_, ```Monospace``` (Kotak)
    
    const currentDate = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    let adviceList = data.diet.avoid.join(", ");
    
    // Desain Struk WA
    const strukWa = 
`*LAPORAN SEHAT SINE* 🏥
_KKN Kelompok 4 UMPKU_
──────────────────
📅 ${currentDate}
👤 *${name}* (${age} Th)
──────────────────
Jenis Cek : ${getTestName(type)}
Hasil     : *${valDisplay}*
Normal    : ${finalRefText}

📊 Status : *${data.title.toUpperCase()}*
──────────────────
💡 *SARAN & PANTANGAN:*
${data.action}

⛔ *HINDARI:*
${adviceList}
──────────────────
_Simpan pesan ini sebagai riwayat._
_Cek mandiri di: www.sehatsine.site_`;

    // SIMPAN DATA
    currentResultData = {
        resultKey: key, 
        refText: finalRefText,
        name: name, type: type, value: valDisplay, age: age,
        status: data.title, color: getKeyColor(data.theme), level: data.level,
        date: new Date().toLocaleDateString('id-ID'), timestamp: Date.now(),
        wa_text: strukWa // <--- Pakai format baru
    };

    // --- UPDATE UI (Sama seperti sebelumnya) ---
    const header = document.getElementById('resHeader');
    header.className = `report-header bg-${data.theme}`;
    document.getElementById('resTitle').innerText = data.title;
    document.getElementById('resValue').innerText = valDisplay;
    
    const refEl = document.getElementById('resRef');
    if(refEl) refEl.innerText = finalRefText; 
    
    document.getElementById('resLevel').innerText = data.level;

    const meter = document.getElementById('urgencyFill');
    let width = "25%";
    if(data.urgency == 2) width = "50%"; 
    else if(data.urgency == 3) width = "75%"; 
    else if(data.urgency == 4) width = "100%";
    meter.style.width = width;
    meter.className = `meter-fill fill-${data.theme}`;

    const renderList = (id, arr) => {
        const el = document.getElementById(id); el.innerHTML = "";
        if(arr) arr.forEach(x => el.innerHTML += `<li>${x}</li>`);
    };
    renderList('resSymptoms', data.symptoms);
    renderList('resCauses', data.causes);

    document.getElementById('resExplain').innerText = data.info; // Fix: Pakai data.info (sesuai data.js kamu)
    document.getElementById('resRisk').innerText = data.risk_future || "-";
    document.getElementById('resAction').innerText = data.action;
    
    document.getElementById('resDiet').innerHTML = `
        <div class="diet-col good"><strong><i class="fa-solid fa-check"></i> Dianjurkan:</strong><p>${data.diet.eat.join(", ")}</p></div>
        <div class="diet-col bad"><strong><i class="fa-solid fa-xmark"></i> Pantangan:</strong><p>${data.diet.avoid.join(", ")}</p></div>`;

    const btnSave = document.querySelector('.btn-save');
    if(btnSave) btnSave.style.display = showSaveButton ? 'flex' : 'none';

    document.getElementById('resultModal').classList.add('active');
}

// Helper kecil untuk nama tes (Taruh di bawah renderFullReport atau di mana saja)
function getTestName(t) {
    if(t==='bp') return "Tensi Darah";
    if(t==='sugar') return "Gula Darah";
    if(t==='uric') return "Asam Urat";
    if(t==='cholesterol') return "Kolesterol";
    if(t==='bmi') return "Cek Gizi/BMI";
    return "Kesehatan";
}

// --- BUKA DARI RIWAYAT (KLIK KARTU) ---
function openHistory(index) {
    let history = JSON.parse(localStorage.getItem('kknHealthHistory')) || [];
    let item = history[index];
    if (!item) return;

    // Ambil Key dari data tersimpan, atau fallback jika data lama kosong
    let dbKey = item.resultKey || 'bp_normal'; 
    let savedRefText = item.refText || "Target Normal";

    // Panggil Render dengan flag showSaveButton = FALSE (Hide tombol simpan)
    renderFullReport(dbKey, item.value, item.type, item.age, item.name, savedRefText, false);
    
    // Override currentResultData dengan item history (supaya tombol WA isinya benar)
    currentResultData = item;
}

// --- UTILS ---
function shareToWa() {
    if(!currentResultData) return;
    window.open(`https://wa.me/?text=${encodeURIComponent(currentResultData.wa_text)}`, '_blank');
}
function getKeyColor(t) {
    if(t==='success') return '#27ae60'; if(t==='warning') return '#f39c12';
    if(t==='danger') return '#c0392b'; return '#8e44ad';
}
function closeModal() { document.getElementById('resultModal').classList.remove('active'); }

// --- MANAJEMEN RIWAYAT ---
function saveResult() {
    if (!currentResultData) return;
    let h = JSON.parse(localStorage.getItem('kknHealthHistory')) || [];
    h.unshift(currentResultData);
    localStorage.setItem('kknHealthHistory', JSON.stringify(h));
    alert("Data berhasil disimpan!");
    closeModal();
    navTo('page-history', document.querySelectorAll('.nav-item')[2]);
}

function loadHistory() {
    const list = document.getElementById('historyList');
    const filterType = document.getElementById('historyFilter').value; // Ambil nilai filter
    
    list.innerHTML = "";
    
    let allHistory = JSON.parse(localStorage.getItem('kknHealthHistory')) || [];
    let displayHistory = [];

    // Logika Filter
    if (filterType === 'all') {
        displayHistory = allHistory;
    } else {
        // Ambil hanya yang tipe-nya cocok
        displayHistory = allHistory.filter(item => item.type === filterType);
    }

    // Cek Kosong
    if (displayHistory.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding:40px; color:#bdc3c7;">
                <i class="fa-solid fa-filter-circle-xmark" style="font-size:40px; margin-bottom:10px;"></i><br>
                Tidak ada data untuk kategori ini.
            </div>`;
        return;
    }

    // Render Loop
    displayHistory.forEach((item, index) => {
        // Cari index asli di array utama untuk fungsi openHistory
        // (Penting supaya kalau diklik yang kebuka beneran data itu, bukan data orang lain)
        let originalIndex = allHistory.indexOf(item); 

        let tName = "";
        if(item.type === 'bp') tName = "Tensi";
        else if(item.type === 'sugar') tName = "Gula Darah";
        else if(item.type === 'uric') tName = "Asam Urat";
        else if(item.type === 'cholesterol') tName = "Kolesterol";
        else if(item.type === 'bmi') tName = "Status Gizi/BMI";

        let ageInfo = (item.age && item.age !== "-") ? `(${item.age} Th)` : "";
        
        list.innerHTML += `
            <div class="history-card" style="border-left-color: ${item.color}" onclick="openHistory(${originalIndex})">
                <div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                        <span class="h-date">${item.date}</span>
                        <span class="h-date" style="color:#2c3e50; font-weight:bold;">
                            <i class="fa-solid fa-user"></i> ${item.name} ${ageInfo}
                        </span>
                    </div>
                    <div class="h-title">${tName}: ${item.value}</div>
                    <span class="h-status" style="color:${item.color}">${item.status}</span>
                </div>
            </div>`;
    });
}

function clearHistory() { if(confirm("Hapus semua riwayat?")) { localStorage.removeItem('kknHealthHistory'); loadHistory(); } }
