/*
Nama : Rahman Zulkarnaen
NIM :20190040003
Kelas : TI19A
*/

function reverse(param){
	var x = param.length, y = '';
	while(x > 0){
		y += param[x - 1];
		x--;
	}
	return y;
}
var word = "katak";
if(word === reverse(word)){
	console.log("Kata `"+word+"` termasuk kata Palindrome.");
}
else{
	console.log("Kata `"+word+"` termasuk bukan kata Palindrome.");
}