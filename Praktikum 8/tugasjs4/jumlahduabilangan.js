function jumlah(){
    let x = Number(document.getElementById("awal").value);
    let y = Number(document.getElementById("akhir").value);
    let z = x + y;

    document.getElementById("hasil").value = z;
}