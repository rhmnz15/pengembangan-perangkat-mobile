let dataSiswa = [
	{
		nama : "Budi Santoso",
		nilai : {
			"programming" : 90,
			"database" : 60
		}
	},
	{
		nama : "Raden Rahmad",
		nilai : {
			"programming" : 60,
			"database" : 80
		}
	},
	{
		nama : "Ahmad Latif",
		nilai : {
			"programming" : 75,
			"database" : 90
		}
	},
];

let programming = []
let database = []

for (let i=0; i<dataSiswa.length; i++){
    let lulus_pro = dataSiswa[i].nilai["programming"];
    let lulus_dat = dataSiswa[i].nilai["database"];
    
    if (lulus_pro > 70) {
        programming.push(dataSiswa[i].nama)
    }
    if (lulus_dat > 70) {
        database.push(dataSiswa[i].nama)
    }
}
let hasil = {
	"lulus programming" : programming,
	"lulus database" : database
}

console.log(hasil);