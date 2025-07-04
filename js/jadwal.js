import { supabase } from './supabaseClient.js'

let jadwalData = []

async function loadJadwal() {
  const { data, error } = await supabase.from('jadwal').select('*').order('tanggal', { ascending: true })
  if (error) return console.error('Gagal fetch jadwal:', error)
  jadwalData = data
  renderJadwal(jadwalData)
}

function renderJadwal(data) {
  const list = document.getElementById('jadwal-list')
  list.innerHTML = ''
  data.forEach(item => {
    const li = document.createElement('li')
    li.innerHTML = `<strong>${item.kegiatan}</strong><br/>📅 ${item.tanggal} — 📍${item.lokasi}`
    list.appendChild(li)
  })
}

document.getElementById('filterInput').addEventListener('input', e => {
  const filtered = jadwalData.filter(j => j.tanggal.startsWith(e.target.value))
  renderJadwal(filtered)
})

loadJadwal()
