const links = document.querySelectorAll('.nav a');
const views = document.querySelectorAll('.view');

// Tampilkan halaman sesuai menu yang diklik
function tampilkan(nama) {
  const target = document.getElementById('view-' + nama) ? nama : 'home';
  views.forEach(v => v.hidden = (v.id !== 'view-' + target));
  links.forEach(a => a.classList.toggle('active', a.dataset.view === target));
}

// Semua link ber-atribut data-view (menu nav + "Lihat Dokumen")
document.querySelectorAll('[data-view]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const nama = el.dataset.view;
    history.replaceState(null, '', '#' + nama);
    tampilkan(nama);
  });
});

// Tombol "Masuk Lagi" setelah Sign Out
document.getElementById('masuk-lagi').addEventListener('click', () => {
  history.replaceState(null, '', '#home');
  tampilkan('home');
});

// Kolom pencarian
document.getElementById('cari').addEventListener('input', e => {
  const kata = e.target.value.toLowerCase();
  document.querySelectorAll('.cari-item').forEach(item => {
    item.classList.toggle('sembunyi', !item.textContent.toLowerCase().includes(kata));
  });
});

// Buka halaman sesuai alamat (#nama) saat dimuat
tampilkan(location.hash.replace('#', '') || 'home');