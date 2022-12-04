/* 
Deklariraj varijablu broj i pridodijeli joj neki broj.
Ako je broj 3 ili 7 ispisi: Broj je 3 ili 7
Ako je manji od 3 ispisi: manji od 3
Ako je broj veci od 3 a manji od 7 ispisi: Izmedu 3 i 7
Ako je broj veci od 7 ispisi: Veci od 7
*/

var nekiBroj = 2;

if (nekiBroj === 7 || nekiBroj === 3) {
  console.log('Broj je 3 ili 7');
} else if (nekiBroj > 3 && nekiBroj < 7) {
  console.log('Broj je između 3 i 7');
} else if (nekiBroj < 3) {
  console.log('Broj je manji od 3');
} else if (nekiBroj > 7) {
  console.log('Broj je  veći od 7');
}

/* 
Deklariraj varijablu broj i pridodijeli joj neki broj.
Ako je broj djeljiv s 3 ispisi Fizz
Ako je djeljiv s 4 ispisi Buzz
Ako je djeljiv s 3 i 4 ispisi Fizz Buzz
Ako nije djeljiv ni s 3 ni 4  ispisi taj broj
*/

var broj = 12;

if (broj % 3 === 0 && broj % 4 === 0) {
  console.log('Fizz Buzz');
} else if (broj % 3 === 0) {
  console.log('Fizz');
} else if (broj % 4 === 0) {
  console.log('Buzz');
} else {
  console.log(broj);
}

/* 
Deklariraj varijablu myString i spremi u nju neki string.
Uzmi posljednjih 5 znakova stringa i ispisi ih u sljedecem stringu:
Posljednjih 5 znakova stringa je ____ 
*/

var myString = 'Pink Panter Elite';
var result = myString.substring(myString.length - 5, myString.length);
console.log(result);

/* 
Deklariraj varijablu myString i spremi u nju neki string.
Uzmi sve znakove od 5. znaka pa do 10. znaka ne ukljucujuci 10. znak.
Ako je duljina stringa manja od 5. ispisi: Krace od 5!
Ako je string prazan ispisi: Prazan string!
Ako je duljina stringa 5 ispisi te znakove
*/

var myString = 'Otorinolaringologija';
var cutString = myString.substring(4, 9);

if (cutString.length < 5) {
  console.log('Krace od 5!');
} else if (cutString.length === 0) {
  console.log('Prazan string!');
} else if (cutString.length === 5) {
  console.log(cutString);
}

// Zadatak 1.
// Napisi program koji ovisno o varijabli time mogucih vrijednosti ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, PREDVECER, NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. Unos time varijable neka bude preko konzole, te ako korisnik nije unio ni jednu od mogucnosti neka ispis bude: Koje je to doba dana? Program napisi uz pomoc if-a i switch case-a.

var time = process.argv[2];

if (time === 'ZORA' || time === 'JUTRO') {
  console.log('Dobro Jutro!');
} else if (
  time === 'PRIJEPODNE' ||
  time === 'POSLIJEPODNE' ||
  time === 'POPODNE'
) {
  console.log('Dobar dan!');
} else if (time === 'PREDVECER' || time === 'NOC') {
  console.log('Dobra večer!');
} else {
  console.log('Koje je to doba dana?');
}

switch (time) {
  case 'ZORA':
  case 'JUTRO':
    console.log('Dobro Jutro!');
    break;
  case 'PRIJEPODNE':
  case 'POSLIJEPODNE':
  case 'POPODNE':
    console.log('Dobar dan!');
    break;
  case 'PREDVECER':
  case 'NOC':
    console.log('Dobra večer!');
    break;
  default:
    console.log('Koje je to doba dana?');
}

// Zadatak 2.
// Napisi program koji omogucava unos proizvoljnog broja godina preko konzole, te napisi ternarni izraz koji bira vrijednosti MALOLJETAN i PUNOLJETAN. Potom za MALOLJETAN ispisi "Korisnik je maloljentan", a za punoljetan "Korisnik je punoljetan". Ako korisnik nije unio broj napisi "Pogresan unos!".

var godine = +process.argv[2];
var punoljetnost = godine >= 18 ? 'PUNOLJETAN' : 'MALOLJETAN';
if (!isNaN(godine)) {
  if (punoljetnost == 'PUNOLJETAN') {
    console.log('Korisnik je punoljentan');
  } else if (punoljetnost == 'MALOLJETAN') {
    console.log('Korisnik je maloljetan');
  }
} else {
  console.log('Pogresan unos!');
}

// Zadatak 3.
// Napisi program u kojem korisnik unosi broj preko konzole. Ako korisnik nije unio broj, program racuna da je korisnik unio broj 7. Program zatim ispisuje "Tvoj sretni broj je ___" i potom preko Math.random funkcije izvlaci cijeli broj od 0 do 9. Ukoliko je izvuceni broj identican korisnikovom sretnom broju ispisi "Jackpot!", a u suprotnom "Vise srece drugi put!".
// Napomena: Ukoliko ne znate koristiti Math.random pokusajte guglati kako se koristi.

var broj = +process.argv[2];
var broj = 5;
if (isNaN(broj)) {
  broj = 7;
}

console.log('Tvoj sretni broj je', broj);

var drugiBroj = Math.floor(Math.random() * 10);
console.log('sretni broj je', drugiBroj);
if (broj === drugiBroj) {
  console.log('Jackpot!');
} else {
  console.log('Vise srece drugi put!');
}
