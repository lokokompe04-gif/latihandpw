const form = document.getElementById("formkontak");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Nomor WhatsApp: pakai kode negara tanpa tanda '+'
  const nomorWhatsApp = "6281246374420";

  // Ambil nilai dari input — PERBAIKI penulisan getElementById
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const telepon = document.getElementById("telepon").value;
  const minat = document.getElementById("minat").value;
  const pesan = document.getElementById("pesan").value;

  // Susun pesan — pastikan tanda kutip & baris benar
  const isiPesan = `Halo, saya menghubungi melalui website CV.
Nama Lengkap : ${nama}
Email        : ${email}
No.telepon   : ${telepon}
Bidang Minat : ${minat}
Pesan         : ${pesan}`;

  // Encode pesan agar aman dikirim lewat URL
  const pesanEncoded = encodeURIComponent(isiPesan);

  // Susun link WhatsApp
  const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

  // Buka di tab baru
  window.open(urlWhatsApp, "_blank");
});