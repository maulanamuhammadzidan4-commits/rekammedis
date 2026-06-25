let dokter = localStorage.getItem('namaDokter');
let namaPasien = JSON.parse(localStorage.getItem('dataPasien')).nama;
let keluhan = JSON.parse(localStorage.getItem('Keluhan')).keluhan;

document.querySelector('#doctor').textContent = `${dokter}`;
document.querySelector('#output').innerHTML = `<tr><td>${namaPasien}</td><td>${keluhan}</td></tr>`;

function diagnosa() {
    window.location.href = 'diagnosa.html';
}