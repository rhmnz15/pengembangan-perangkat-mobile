/*
Nama : Rahman Zulkarnaen
NIM :20190040003
Kelas : TI19A
*/

function angkaPalindrome(num) {
    let leftSide = 1;
    let rightSide = 2;
    
    while (leftSide !== rightSide) {
      num++
      let string = num.toString();
      leftSide = string.slice(0, Math.ceil(string.length/2));
      rightSide = string.slice(Math.floor(string.length/2), string.length).split('').reverse().join('');
    }
    return num;
  }
  
  console.log(angkaPalindrome(9));