//Nama : M.Azri Riyandi
//NIM :20190040022
//Kelas : TI19A
let waktuLari = 20;
let waktuPushup = 45;
let waktuPlank = 20;

const lari = 60 / 5;
const pushup = 200 / 30;
const plank = 5 / 1;

let aktivitas1 = "lari";
let aktivitas2 = "pushup";
let aktivitas3 = "plank";

let kaloriAwal = 1000;
let kaloriAkhir;
let kaloriYangDibakar = 0;

if (aktivitas1 == "lari") {
  kaloriYangDibakar = kaloriYangDibakar + waktuLari * lari;
}

if (aktivitas2 == "pushup") {
  kaloriYangDibakar = kaloriYangDibakar + waktuPushup * pushup;
}

if (aktivitas3 == "plank") {
  kaloriYangDibakar = kaloriYangDibakar + waktuPlank * plank;
} else {
}

if (aktivitas1 == "lari" && aktivitas2 == "pushup") {
  kaloriYangDibakar = waktuLari * lari + waktuPushup * pushup;
} else if (aktivitas2 == "pushup" && aktivitas3 == "plank") {
  kaloriYangDibakar = waktuPushup * pushup + waktuPlank * plank;
} else if (aktivitas1 == "lari" && aktivitas3 == "plank") {
  kaloriYangDibakar = waktuLari * lari + waktuPlank * plank;
} else if (aktivitas1 == "lari" && aktivitas2 == "pushup" && aktivitas3 == "plank") {
  kaloriYangDibakar = waktuLari * lari + waktuPushup * pushup + waktuPlank * plank;
} else {
  console.log("Tidak diketahui");
}

console.log(`Kalori Awal : ${kaloriAwal}`);
console.log(`Kalori yang dibakar : ${kaloriYangDibakar}`);
console.log(`Kalori Akhir : ${kaloriAwal - kaloriYangDibakar}`);
