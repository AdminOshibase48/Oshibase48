import { supabase } from './supabaseClient.js'

let galeriData = []

async function loadGaleri() {
  const { data, error } = await supabase
    .from('galeri')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Gagal fetch galeri:', error.message)
    return
  }

  galeriData = data
  renderGaleri(galeriData)
}

function renderGaleri(data) {
  const container = document.getElementById('galeri-container')
  container.innerHTML = ''

  data.forEach(item => {
    const div = document.createElement('div')
    div.classList.add('galeri-item')
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.image_url ? `<img src="${item.image_url}" alt="${item.title}">` : ''}
    `
    container.appendChild(div)
  })
}

document.getElementById('searchInput')?.addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase()
  const filtered = galeriData.filter(item =>
    item.title.toLowerCase().includes(keyword)
  )
  renderGaleri(filtered)
})

loadGaleri()
