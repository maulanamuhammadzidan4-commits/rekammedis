const doctorList = [
    {nama : 'M. Zidan Maulana', pw : 'Kurumi'},
    {nama : 'Muhammad Nuryamin', pw : 'terserah-dwk'},
    {nama : 'Rafitra Z. A.', pw : 'skoteng-hiber'},
    {nama : 'Muhammad Abdul Fathir', pw : 'rias'},
    {nama : 'Nadzila Sakina', pw : 'hermione'}
];

function login(){
    let ngaran = document.querySelector('#doctorname').value;
    let pass = document.querySelector('#password').value;

    let user = doctorList.find(doctor => doctor.nama === ngaran && doctor.pw === pass);
    let notUser = !(doctorList.find(doctor => doctor.nama === ngaran && doctor.pw === pass));

    if (notUser){
        window.location.href = '../../index.html';
    } else if(user){
        window.location.href = 'rekam_medis.html';
        localStorage.setItem('namaDokter', ngaran);
        console.log(localStorage.getItem('namaDokter'));
    } else {
        console.log('lah');
    }
}