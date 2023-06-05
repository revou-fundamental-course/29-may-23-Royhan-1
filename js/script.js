var nama = prompt("Masukkan nama kamu");
    document.getElementById("nama").innerText = nama;

// Fix fungsi dibawah agar tidak reload saat submit
function validateForm() {
    var namaDepan = document.forms["message-form"]["nama-depan"].value;
    var namaBelakang = document.forms["message-form"]["nama-belakang"].value;
    var tanggalLahir = document.forms["message-form"]["tanggal"].value;
    var genderKamu = document.forms["message-form"]["gender"].value;
    var pesanKamu = document.forms["message-form"]["pesan"].value;

    if (namaDepan == "" || namaBelakang == "" || tanggalLahir == "" || genderKamu == "" || pesanKamu == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    };

    document.getElementById('sender-nama-depan').innerText = namaDepan;
    document.getElementById('sender-nama-belakang').innerText = namaBelakang;
    document.getElementById('sender-nama-tanggal-lahir').innerText = tanggalLahir;
    document.getElementById('sender-gender').innerText = genderKamu;
    document.getElementById('sender-pesan').innerText = pesanKamu;
    return false;
}