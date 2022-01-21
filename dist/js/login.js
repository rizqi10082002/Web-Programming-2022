function Login() {
    event.preventDefault();

    var uname = document.getElementById("username").value,
        pass = document.getElementById("password").value;
        
    if (uname ==  "admin" && pass == "admin") {
        location.replace("index.html");
        alert("Login berhasil");
    } else {
        alert("Login gagal")
    }
}

function RegisterUser() {
    event.preventDefault();

    location.replace("login.html");
    alert("Registrasi Berhasil");
}

function RegisterKendaraan() {
    event.preventDefault();

    location.replace("data kendaraan .html");
    alert("Pendaftaraan Berhasil");
}
function Daftar(){
    event.preventDefault();

    location.replace("data parkir.html");
    alert("Mulai Pendaftaran");
}

$(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip({htmml:true});
})