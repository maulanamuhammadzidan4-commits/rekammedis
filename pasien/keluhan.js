localStorage.getItem('dataPasien');

let namaPasien = JSON.parse(localStorage.getItem('dataPasien')).nama;
let umurPasien = JSON.parse(localStorage.getItem('dataPasien')).umur;
let jenisKelaminPasien = JSON.parse(localStorage.getItem('dataPasien')).jenisKelamin;
let alamatPasien = JSON.parse(localStorage.getItem('dataPasien')).alamat;
let teleponPasien = JSON.parse(localStorage.getItem('dataPasien')).telepon;
let emailPasien = JSON.parse(localStorage.getItem('dataPasien')).email;

document.querySelector('#patient').textContent = `${namaPasien}`;

function send(){
    let keluhanPasien = document.querySelector('#keluhan').value;
    let keluhan = keluhanPasien.trim();

    if (keluhan === '') {
        document.querySelector('#alert').textContent = 'Keluhan tidak boleh kosong!';
        return;
    } else {
        document.querySelector('#alertK').textContent = 'Keluhan berhasil dikirim!';
    }

    let dataKeluhanPasien = {
        nama: namaPasien,
        umur: umurPasien,
        jenisKelamin: jenisKelaminPasien,
        alamat: alamatPasien,
        telepon: teleponPasien,
        email: emailPasien,
        keluhan: keluhan
    };
    localStorage.setItem('Keluhan', JSON.stringify(dataKeluhanPasien));
}
function look(){
    window.location.href = '../hasil.html';
}

console.log(localStorage.getItem('Keluhan'));