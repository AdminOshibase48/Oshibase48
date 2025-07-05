async function loadJadwal() {
  const { data, error } = await supabase.from('jadwal').select('*').order('tanggal', { ascending: true }).limit(5);
  const container = document.getElementById("jadwal-content");
  if (error) return container.innerHTML = "<p>Gagal memuat jadwal.</p>";

  container.innerHTML = data.map(item => `
    <div class="card" data-aos="fade-up">
      <h4>${item.nama_kegiatan}</h4>
      <p>${new Date(item.tanggal).toLocaleDateString()}</p>
    </div>
  `).join('');
}

loadJadwal();
