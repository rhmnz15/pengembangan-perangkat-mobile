/*
Rahman Zulkarnaen
20190040003
UTS - Pemrograman Perangkat Mobile
*/

const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("input : ", (data) => {
  let vokal = ['A','I','U','E','O'];
  let kata = data.toUpperCase().split('');
  let status_vokal = false;
  let output2 = [];
  let output3 = [];

  kata.map((e) => {
    if(vokal.indexOf(e) >= 0){
      status_vokal = true;
    }
  })
  
  if(status_vokal){
    kata.map((e) => {
      if(kata.indexOf('C') >= 0){
        kata[kata.indexOf('C')] = 'Z';
      }
    })
    console.log(`Output Langkah 1 : ${kata.join('')}`)

    kata.map((e) => {
      if(vokal.indexOf(e) < 0){
        output2.push(e)
      }
    })
    console.log(`Output Langkah 2 : ${output2.join('')}`)

    output2.map((e,i) => {
      if(e == 'S'){
        output2[i] = 'B';
      }
      if(e == 'B'){
        output2[i] = 'S';
      }
    })
    console.log(`Output akhir langkah 3 : ${output2.join('')}`)

  }else{
    console.log(`Output langkah 1 : ${kata.join('')}`)
    console.log(`Output langkah 2 : ${kata.join('')}`)
    console.log(`Output akhir langkah 3 : ${kata.join('')}`)
  }
  
  rl.close();
});