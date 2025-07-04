import { supabase } from './supabaseClient.js'

async function loadBerita() {
  const { data, error } = await supabase
    .from('berita')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Gagal fetch berita:', error.message)
    return
  }

  const container = document.getElementById('berita-container')
  data.forEach(item => {
    const div = document.createElement('div')
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.content}</p>
      ${item.image_url ? `<img src="${item.image_url}" width="300"/>` : ''}
      <hr/>
    `
    container.appendChild(div)
  })
}

loadBerita()
