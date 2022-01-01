function hargaParkir(){
    let jamMasuk = document.getElementById("masuk").value;
    let jamKeluar = document.getElementById("keluar").value;
    let selisih = jamKeluar - jamMasuk;
    let tambahanPerJam = selisih - 2;
    const biayaAwal = 3000;
    const biayaPerJam = 1000;
    if (selisih == 2){
        biaya = biayaAwal;
    }
    else{
        biaya = (biayaPerJam * tambahanPerJam) + biayaAwal;
    }
    let tarif = document.getElementById("biaya");
    tarif.innerHTML = "= RP . " + biaya;
}