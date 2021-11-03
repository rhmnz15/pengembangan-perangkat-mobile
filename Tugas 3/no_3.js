//Nama : M.Azri Riyandi
//NIM :20190040022
//Kelas : TI19A
let angka = 98;

if (angka % 2 == 0) {
  if (angka >= 50 && angka <= 100) {
    console.log("berhak dipilih menjdi captain");
  } else {
    console.log("TARGET ATTACKER");
  }
} else if (angka % 3 == 0 && angka % 5 == 0) {
  console.log("KEEPER");
} else if (angka % 2 !== 0) {
  if (angka > 90) {
    if (nilai > 90) {
      console.log("PLAYMAKER");
    }
  } else {
    console.log("DEFENDER");
  }
} else {
  console.log("POSISI TIDAK DITEMUKAN");
}

console.log(angka);
