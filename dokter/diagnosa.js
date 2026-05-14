let namaDokter = localStorage.getItem('namaDokter');
let dataPasien = JSON.parse(localStorage.getItem('Keluhan')) || '[]';


document.querySelector('#doctor').textContent = `${namaDokter}`;
document.querySelector('#pasien').textContent = `${dataPasien.nama}`;
document.querySelector('#keluhan').textContent = `${dataPasien.keluhan}`;


function sendDiagnosa() {
    let diagnosa = document.querySelector('#diagnosa').value;

    let dataDiagnosa = {
    namaDokter: namaDokter,
    namaPasien: dataPasien.nama,
    keluhan: dataPasien.keluhan,
    diagnosa: diagnosa
    };

    localStorage.setItem('Diagnosa', JSON.stringify(dataDiagnosa));

    console.log("Data Diagnosa:", dataDiagnosa);
}

function lookDiagnosa(){
    window.location.href = '../hasil.html';
}