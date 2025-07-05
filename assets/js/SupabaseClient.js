import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://nuvfnnxuxtthbryesliu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dmZubnh1eHR0aGJyeWVzbGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1Mzk1NTYsImV4cCI6MjA2NzExNTU1Nn0.Om73FRiKvdlWpZS-hIXCIKznjkQ3A3X3k1n2IzGzRes' // dari API settings Supabase
);

const container = document.getElementById('galeri-preview');

async function loadGaleriPreview() {
  const { data, error } = await supabase
    .from('galeri')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) {
    console.error(error);
    container.innerHTML = '<p>Gagal memuat galeri.</p>';
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="card">
      <img src="${item.image_url}" alt="${item.title}" />
      <p>${item.title}</p>
    </div>
  `).join('');
}

loadGaleriPreview();
