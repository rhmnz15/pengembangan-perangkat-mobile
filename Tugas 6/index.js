let datasiswa = [
    {
        nama:"Budi Sastro",
        nilai: {
                "programming" :90,
                "database" : 60
        }
    },
    {
        nama:"Raden Rahmad",
        nilai: {
                "programming" :60,
                "database" : 80
        }
    },
    {
        nama:"Ahmad Latif",
        nilai: {
                "programming" :75,
                "database" : 90
        }
    }
];

let lulus_pro = datasiswa.filter((v) => {
                return v.nilai.programming > 70
})

let lulus_dat = datasiswa.filter((v) => {
    return v.nilai.database > 70
})

let arr_pro = [];
let arr_dat = [];

for(let i in lulus_pro){
arr_pro.push(lulus_pro[i].nama)
}

for(let i in lulus_dat){
arr_dat.push(lulus_dat[i].nama)
}

let lulus = {
 "Lulus Programming" : arr_pro,
 "Lulus Database" : arr_dat
}

console.log(lulus)