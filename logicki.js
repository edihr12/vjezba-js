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
