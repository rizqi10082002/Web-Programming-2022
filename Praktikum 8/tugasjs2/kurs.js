function ubahdollar(){
    let harga = 14650;
    let kurs = document.getElementById("kurs").value;
    let cara = harga * kurs;
    let hasil = document.getElementById("rp").value = String("RP. " + cara);
}
