/*
Rahman Zulkarnaen
20190040003
UTS - Pemrograman Perangkat Mobile
*/

let lahan =[
  ['P','','P','','P',''],
  ['P','','P','','P',''],
  ['P','','P','','P',''],
  ['P','','P','','P',''],
  ['P','','P','','P',''],
  ['P','','P','','P',''],
  ['P','','P','','P','']
]
let prodi = (data) => {
  let output = 0;
  for(let i in data){
    for(let j in data[i]){
      if(data[i][j] == 'P'){
        output += 1;
      }
    }
  }
  console.log('Lahan : ', data)
  console.log('Jumlah pohon pisang :', output);
}
prodi(lahan);