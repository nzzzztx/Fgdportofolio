
document.addEventListener('DOMContentLoaded', getJson());

async function getJson() {
  await fetch('https://indonesia-public-static-api.vercel.app/api/heroes')
    .then(heroes => heroes.json())
    .then(hero => {
      new DataTable('#table_heroes', {
        data: hero,
        columns: [
          { data: 'name', title: 'Nama' },
          { data: 'birth_year', title: 'Tahun Lahir' },
          { data: 'death_year', title: 'Tahun Wafat' },
          { data: 'description', title: 'Deskripsi' },
          { data: 'ascension_year', title: 'Tahun Pengangkatan' }
          ],
      })
    })
    .catch(err => console.log(err));
}

