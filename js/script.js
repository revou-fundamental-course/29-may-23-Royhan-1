var nama = prompt("Masukkan nama kamu");
document.getElementById("nama").innerText = nama;

var form = document.getElementById("messageform");
function handleForm(event) {
    event.preventDefault();
};
form.addEventListener("submit", handleForm);