const nama = "Aldi";
let age = 10;

let data = document.getElementById('data')

function getInfoUmur(){
let status;
    if(age >= 20){
        status = "Tua";
    } else {
        status = "Bocil FF";
    }
return status
}

data.innerHTML = `Nama saya ${nama} dan usia saya ${age} tahun, saya tergolong ${getInfoUmur()}`;

