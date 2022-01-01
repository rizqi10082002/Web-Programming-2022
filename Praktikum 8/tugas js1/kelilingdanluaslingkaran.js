function rumuskeliling(){
    const phi = 3.14;
    let jari = document.getElementById("jarijari").value;
    let keliling = 2 * phi * jari;
    let hasil = document.getElementById("hasil").value = keliling;
}

function rumusluas(){
    const phi = 3.14;
    let jari = document.getElementById("jr").value;
    let luas = phi * jari * jari;
    let hasil = document.getElementById("jawaban").value = luas;
}