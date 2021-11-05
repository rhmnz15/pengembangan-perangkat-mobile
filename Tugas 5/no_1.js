/*
Rahman Zulkarnaen
20190040003
Program Array
*/


let fruits = new Array ("Apel", "Pisang", "Jambu", "Anggur", "Pepaya", "Duku", "Durian", "Jeruk", "Mangga", "Manggis");
let boxA = []
let boxP = []
let boxJ = []
let boxD = []
let boxM = []
for(let i = 0; i< fruits.length; i++){
    let hurufAwal = fruits[i].substring(0,1);

    if (hurufAwal == "A") {
        boxA.push(fruits[i]);
    }else if (hurufAwal == "P" ) {
        boxP.push(fruits[i])
    }else if (hurufAwal == "J") {
        boxJ.push(fruits[i])
    }else if (hurufAwal == "D") {
        boxD.push(fruits[i])
    }else if (hurufAwal == "M") {
        boxM.push(fruits[i])
    }else{
        console.log("Tidak Ada Data");
    }
}

console.log(boxA);
console.log(boxP);
console.log(boxJ);
console.log(boxD);
console.log(boxM);