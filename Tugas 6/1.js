let dataSiswa = [
    {
        nama: "Budi Sastro",
        nilai: {
            "Programming": 90,
            "Database" : 60
        }
    },
    {
        nama: "Raden Rahmad",
        nilai: {
            "Programming": 60,
            "Database" : 80
        }
    },
    {
        nama: "Ahmad Latif",
        nilai: {
            "Programming": 75,
            "Database" : 90
        }
    },
];

let program = []
let data = []
let lulus_pro = "'Lulus Programming :'"
let lulus_dat = "'Lulus Database :'"
for (let i=0; i<dataSiswa.length; i++){
    let lulus_pro = dataSiswa[i].nilai["Programming"];
    let lulus_dat = dataSiswa[i].nilai["Database"];
    
    if (lulus_pro > 70) {
        program.push(dataSiswa[i].nama)

    }if (lulus_dat > 70) {
        data.push(dataSiswa[i].nama)
    }
    else{
      
    }
}
console.log(lulus_pro, program);
console.log(lulus_dat, data);