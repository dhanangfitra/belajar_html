// script.js

// Dapatkan elemen-elemen DOM yang diperlukan
const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.querySelector('.close-btn');
const popupContainer = document.getElementById('popup-container');

// Fungsi untuk membuka pop-up
function openPopup() {
    popupContainer.classList.add('active');
}

// Fungsi untuk menutup pop-up
function closePopup() {
    popupContainer.classList.remove('active');
}

// Tambahkan event listener untuk tombol buka
openPopupBtn.addEventListener('click', openPopup);

// Tambahkan event listener untuk tombol tutup
closePopupBtn.addEventListener('click', closePopup);

// Tutup pop-up jika pengguna mengklik di luar konten pop-up
window.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        closePopup();
    }
});
