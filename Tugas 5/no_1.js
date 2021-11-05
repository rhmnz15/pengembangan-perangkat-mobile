/*
Rahman Zulkarnaen
20190040003
Program Array
*/


//menyusun array berdasarkan abjad
let Fruits = [ 'Apel', 'Pisang', 'Jambu', 'Anggur', 'Pepaya', 'Duku', 'Durian', 'Jeruk', 'Mangga', 'Manggis'];
let buah =[]

for(let i=0;< Fruits.length;i++){
    let hurufAwal = Fruits[i].substring(0,1);
    if(hurufAwal=="A"){
        buah.push(Fruits[i]);
    }
}

console.log(buah);