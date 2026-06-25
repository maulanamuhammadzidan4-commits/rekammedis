localStorage.getItem('Diagnosa');

let namaDokter = JSON.parse(localStorage.getItem('Diagnosa')).namaDokter;
let namaPasien = JSON.parse(localStorage.getItem('Diagnosa')).namaPasien;
let keluhan = JSON.parse(localStorage.getItem('Diagnosa')).keluhan;
let diagnosa = JSON.parse(localStorage.getItem('Diagnosa')).diagnosa;

document.querySelector('#doctor').textContent = `${namaDokter}`;
document.querySelector('#pasien').textContent = `${namaPasien}`;
document.querySelector('#keluhan').textContent = `${keluhan}`;
document.querySelector('#diagnosa').textContent = `${diagnosa}`;

function clearStorage() {
    localStorage.clear();
    alert('Data berhasil dihapus!');
    window.location.href = 'index.html';
}

function loadResult() {
    const doctor = localStorage.getItem('namaDokter') || 'Dokter tidak ditemukan';
    const rawDiagnosa = localStorage.getItem('Diagnosa');
    
    if (rawDiagnosa) {
        const data = JSON.parse(rawDiagnosa);
        document.querySelector('#doctor').textContent = data.namaDokter;
        document.querySelector('#pasien').textContent = data.namaPasien;
        document.querySelector('#keluhan').textContent = data.keluhan;
        document.querySelector('#diagnosa').textContent = data.diagnosa;
        document.querySelector('.card').style.display = 'block';
        document.querySelector('#loadResultBtn').style.display = 'none';
    } else {
        document.querySelector('#alertD').textContent = 'Data diagnosa belum ada.';
        document.querySelector('.card').style.display = 'none';
        document.querySelector('#loadResultBtn').style.display = 'none';
    }
}