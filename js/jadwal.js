import { supabase } from './supabaseClient.js'

async function loadJadwal() {
  const { data, error } = await supabase
    .from('jadwal')
    .select('*')
    .order('tanggal', { ascending: true })

  if (error) {
    console.error('Gagal fetch jadwal:', error.message)
    return
  }

  const list = document.getElementById('jadwal-list')
  data.forEach(item => {
    const li = document.createElement('li')
    li.innerHTML = `
      <strong>${item.kegiatan}</strong> - ${item.tanggal} @ ${item.lokasi}
    `
    list.appendChild(li)
  })
}

loadJadwal()
