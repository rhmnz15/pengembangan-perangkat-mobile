/*
Nama : Rahman Zulkarnaen
NIM :20190040003
Kelas : TI19A
*/

const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Password Generator");

rl.question("Masukkan Password : ", (password) => {
  const abjadUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const abjadLow = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const angka = [1,2,3,4,5,6,7,8,9];
  let generator = '';
  for(let i = 0 ; i < password.length ; i++){
    let huruf = password.charAt(i);
    if( huruf == 'e' || huruf == 'E'){
      generator += '3'
      continue;
    }
    if( huruf == huruf.toUpperCase()){
      generator += abjadUp[abjadUp.indexOf(huruf)+1];
      generator += abjadLow[abjadLow.indexOf(huruf.toLowerCase())+1];
    }
    if( huruf == huruf.toLowerCase()){
      generator += abjadUp[abjadUp.indexOf(huruf.toUpperCase())+1];
    }
  }
  console.log(generator)
  rl.close();
});