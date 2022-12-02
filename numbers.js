// prvi
var mojeGodine = 41;
console.log('Moje pseće godine su: ', mojeGodine / 7);
//drugi
var mojeIme = 'Edi';
var mojePrezime = 'Čelar';
var mojePunoIme = mojeIme + ' ' + mojePrezime;
console.log(mojePunoIme);
//treci
var prviBroj = Math.floor(Math.random() * 20 + 1);
var drugiBroj = Math.floor(Math.random() * 20 + 1);
console.log('Ostatak pri djeljenu dva random broja je:', prviBroj % drugiBroj);
//cetvrti
var brojPolaznika = 22;
console.log('Trenutni broj polaznika je:', brojPolaznika);
var brojPolaznika = brojPolaznika + 2;
console.log('Trenutni broj polaznika je:', brojPolaznika);
var brojPolaznika = brojPolaznika - 3;
console.log('Trenutni broj polaznika je:', brojPolaznika);
var brojPolaznika = brojPolaznika + 5;
console.log('Trenutni broj polaznika je:', brojPolaznika);
//(peti)
console.log('3' + 3); //Ispisat će 33 jer gleda prvi unos koji je string i drugog pretvara u string te konkatenira ih
console.log(5 + 12); // 17 jer su brojevi pa će ih zbrojit
console.log(5 + '4'); // Isto ko i kod prvoga pogledat će prvi je broj ali drugi je string pa će oba pretvorit u string 54
console.log('My points: ' + 4 + 9); //Ispisat će Mypoints: 49 jer će gledat to kao jedan veliki niz stringova
console.log(2 + 2); /4
console.log('11' + '14'); // 1114
//šesti

var mojeIme='Edi Čelar'
console.log(mojeIme);
var velikoIme =mojeIme.toUpperCase();
console.log(velikoIme);
var opetMalo= velikoIme.toLocaleLowerCase();
console.log(opetMalo);

//sedmi

var provjera = mojeIme.length;
console.log(provjera)

