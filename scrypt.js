function insert(num) {
    document.form.textview.value = document.form.textview.value+num
}

function hasil() {
    var angka = document.form.textview.value
    if(angka){
        document.form.textview.value = eval(angka)
    }
}


function c(){
    document.form.textview.value = ""
}

function hapus() {
    var angka = document.form.textview.value
    document.form.textview.value = angka.substring(0,angka.length-1)
}