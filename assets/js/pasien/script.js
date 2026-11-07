let userGender = '';
const genderSelected = document.querySelectorAll('input[name="gender"]');
genderSelected.forEach(input => {
    input.addEventListener('change', (e) => {
        userGender = e.target.value;
        console.log('Gender diperbarui:', userGender);
    });
});

function masuk(){
    let name = document.querySelector('#user-name').value;
    let umur = document.querySelector('#user-age').value;

    let domisili = document.querySelector('#user-alamat').value;
    let hp = document.querySelector('#user-hp').value;
    let email = document.querySelector('#user-email').value;

    console.log("Data Pasien:", {
        nama: name,
        umur: umur,
        jenisKelamin: userGender,
        alamat: domisili,
        telepon: hp,
        email: email
    });

    let patientData = {
        nama: name,
        umur: umur,
        jenisKelamin: userGender,
        alamat: domisili,
        telepon: hp,
        email: email
    }
    localStorage.setItem('dataPasien', JSON.stringify(patientData));
    if (name === '' || umur === '' || userGender === '' || domisili === '' || hp === '' || email === ''){
        document.querySelector('#alert').textContent = 'Mohon masukkan Data yang benar.'
    } else {
        window.location.href = 'keluhan.html'
    }
}