import { supabase } from './supabaseClient.js'

async function loadGaleri() {
  const { data, error } = await supabase
    .from('galeri')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Gagal fetch galeri:', error.message)
    return
  }

  const container = document.getElementById('galeri-container')
  data.forEach(item => {
    const div = document.createElement('div')
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.image_url ? `<img src="${item.image_url}" width="300"/>` : ''}
      <hr/>
    `
    container.appendChild(div)
  })
}

loadGaleri()
