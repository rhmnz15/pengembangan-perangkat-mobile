/*
Rahman Zulkarnaen
20190040003
UTS - Pemrograman Perangkat Mobile
*/

let dosenPengampu =[
  {
    nama: 'Syahid Abdullah',
    jabatan: 'Sekretaris Prodi',
    matkul: ['Aljabar Linear', 'Dasar Pemrograman', 'Basis Data']
  },
  {
    nama: 'Alun Sujjada',
    jabatan: 'Dosen',
    matkul: ['Dasar Pemrograman', 'Pemrograman Mobile', 'PBO']
  },
  {
    nama: 'Anggun Ferigna',
    jabatan: 'Ketua Prodi',
    matkul: ['Basis Data', 'RPL', 'Dasar Pemrograman']
  }
]
let prodi = (data) => {
  let dasar_pemrograman = [];
  let basis_data =[];
  let pbo = [];

  for(let i in data){
    for(let j in data[i].matkul){
      if(data[i].matkul[j] == 'Dasar Pemrograman'){
        dasar_pemrograman.push(data[i].nama.split(' ')[0].toString())
      }
      if(data[i].matkul[j] == 'Basis Data'){
        basis_data.push(data[i].nama.split(' ')[0].toString())
      }
      if(data[i].matkul[j] == 'PBO'){
        pbo.push(data[i].nama.split(' ')[0].toString())
      }
    }
  }
  let output = {
    'Pengampu Dasar Pemrograman': dasar_pemrograman,
    'Pengampu Basis Data': basis_data,
    'Pengampu PBO': pbo
  }
  console.log(output);
}
prodi(dosenPengampu);