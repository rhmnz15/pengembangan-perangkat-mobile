/*
Rahman Zulkarnaen
20190040003
Program Array
*/

const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Jual Tahu ");

rl.question("input : ", (inputHarga) => {
  let rak = [
    ['#','##','#','##','#'],
    ['#','##','#','##','#'],
    ['#','##','#','##','#'],
    ['#','##','#','##','#'],
    ['#','##','#','##','#']
  ];
  let output;
  let tahu = 0;
  if(inputHarga >= 2000){
    for(let i = 0 ; i < 5 ; i++){
      for(let j = 0 ; j < 5 ; j++){
        if(inputHarga >= 2000){
          if((j%2) == 0){
            inputHarga = parseInt(inputHarga) - 2000;
            rak[i][j] = '';
            tahu += 1;
          }else if((j%2) == 1){
            if(inputHarga >= 4000){
              inputHarga = parseInt(inputHarga) - 4000;
              rak[i][j] = '';
              tahu += 2;
            }else if(inputHarga >= 2000){
              inputHarga = parseInt(inputHarga) - 2000;
              rak[i][j] = '#'
              tahu += 1;
            }
          }
          output = inputHarga == 0 || tahu == 35? `Anda Mendapat ${tahu} tahu` : `Anda Mendapat ${tahu} tahu, uang kembalian ${inputHarga}`;
        }
      }
    }
  }else{
    output = 'Maaf harga tahu 2000, uang anda tidak cukup'
  }
  
  console.log(`output :`, output);
  console.log(`output rak :`)
  console.log(rak)
  rl.close();
});
