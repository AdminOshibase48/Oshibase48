import { supabase } from './supabaseClient.js'

async function loadHome() {
  const { data: berita } = await supabase.from('berita').select('*').order('created_at', { ascending: false }).limit(2)
  const { data: galeri } = await supabase.from('galeri').select('*').order('created_at', { ascending: false }).limit(2)

  const beritaContainer = document.getElementById('home-berita')
  berita.forEach(b => {
    beritaContainer.innerHTML += `<div class="item"><h3>${b.title}</h3><p>${b.content}</p></div>`
  })

  const galeriContainer = document.getElementById('home-galeri')
  galeri.forEach(g => {
    galeriContainer.innerHTML += `<div class="item"><h3>${g.title}</h3>${g.image_url ? `<img src="${g.image_url}"/>` : ''}</div>`
  })
}

loadHome()
