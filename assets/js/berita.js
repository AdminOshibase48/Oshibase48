async function loadBerita() {
  const { data, error } = await supabase.from('berita').select('*').order('created_at', { ascending: false }).limit(3);
  const container = document.getElementById("berita-content");
  if (error) return container.innerHTML = "<p>Gagal memuat berita.</p>";

  container.innerHTML = data.map(item => `
    <div class="card" data-aos="fade-up">
      <h4>${item.title}</h4>
      <p>${item.content.substring(0, 100)}...</p>
    </div>
  `).join('');
}

loadBerita();
