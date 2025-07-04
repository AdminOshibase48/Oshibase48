import { supabase } from './supabaseClient.js'

let beritaData = []

async function loadBerita() {
  const { data, error } = await supabase.from('berita').select('*').order('created_at', { ascending: false })
  if (error) return console.error('Gagal fetch berita:', error)
  beritaData = data
  renderBerita(beritaData)
}

function renderBerita(data) {
  const container = document.getElementById('berita-container')
  container.innerHTML = ''
  data.forEach(item => {
    const div = document.createElement('div')
    div.className = 'berita-item'
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.content}</p>
      ${item.image_url ? `<img src="${item.image_url}" alt="berita"/>` : ''}
    `
    container.appendChild(div)
  })
}

document.getElementById('searchInput').addEventListener('input', e => {
  const filtered = beritaData.filter(b => b.title.toLowerCase().includes(e.target.value.toLowerCase()))
  renderBerita(filtered)
})

loadBerita()
