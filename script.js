let namaGlobal = '';

function goToIdentitas() {
  const nama = document.getElementById('nama').value;
  const kode = document.getElementById('kode').value;
  if (nama && kode) {
    namaGlobal = nama;
    document.getElementById('data-nama').innerText = `Nama: ${nama}`;
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
  } else {
    alert('Harap isi nama dan kode.');
  }
}

function goToKelulusan() {
  document.getElementById('page2').classList.remove('active');
  document.getElementById('page3').classList.add('active');
  document.getElementById('pesanLulus').innerHTML = `
    Assalamu'alaikum wr.wb,<br><br>
    Selamat <strong>${namaGlobal}</strong>, Anda dinyatakan <strong>Lulus</strong> dari <strong>MTs Unggulan Minhajut Tholabah Angkatan 2025</strong>.<br><br>
    Perjalanan belum usai, rangkaian cerita indah baru saja di mulai.<br>
    Semoga selalu sukses di masa depan.
  `;
  showKembangApi();
}

function showKembangApi() {
  const canvas = document.getElementById('kembangApi');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;
    let radius = Math.random() * 2 + 1;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
    ctx.fill();
  }
}