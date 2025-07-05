import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://nuvfnnxuxtthbryesliu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dmZubnh1eHR0aGJyeWVzbGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1Mzk1NTYsImV4cCI6MjA2NzExNTU1Nn0.Om73FRiKvdlWpZS-hIXCIKznjkQ3A3X3k1n2IzGzRes'
);

// Galeri Preview
async function loadGaleriPreview() {
  const { data, error } = await supabase.from('galeri').select('*').order('created_at', { ascending: false }).limit(6);
  const container = document.getElementById('galeri-preview');
  if (error) return (container.innerHTML = "<p>Gagal memuat galeri.</p>");

  container.innerHTML = data.map(item => `
    <div class="card">
      <img src="${item.image_url}" alt="${item.title}" />
      <p>${item.title}</p>
    </div>
  `).join('');
}

// Berita Preview
async function loadBeritaPreview() {
  const { data, error } = await supabase.from('berita').select('*').order('created_at', { ascending: false }).limit(3);
  const container = document.getElementById('berita-preview');
  if (error) return (container.innerHTML = "<p>Gagal memuat berita.</p>");

  container.innerHTML = data.map(item => `
    <div class="card">
      <h4>${item.title}</h4>
      <p>${item.content.substring(0, 100)}...</p>
    </div>
  `).join('');
}

// Jadwal Preview
async function loadJadwalPreview() {
  const { data, error } = await supabase.from('jadwal').select('*').order('tanggal', { ascending: true }).limit(5);
  const container = document.getElementById('jadwal-preview');
  if (error) return (container.innerHTML = "<p>Gagal memuat jadwal.</p>");

  container.innerHTML = data.map(item => `
    <div class="card">
      <h4>${item.nama_kegiatan}</h4>
      <p>${new Date(item.tanggal).toLocaleDateString()}</p>
    </div>
  `).join('');
}

// Load semua
loadGaleriPreview();
loadBeritaPreview();
loadJadwalPreview();
