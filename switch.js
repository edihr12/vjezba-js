/* Proslijedi artikl iz trgovine da program procijeni što je taj artikl */

var article = process.argv[2] || 'naranca';

console.log(article);

// if (article === 'banana' || article === 'naranca' || article === 'jagoda') {
//   console.log('Voće!');
// } else if (
//   article === 'bosiljak' ||
//   article === 'ruzmarin' ||
//   article === 'papar'
// ) {
//   console.log('Začin!');
// } else if (article === 'pivo' || article === 'vino' || article === 'kola') {
//   console.log('Pice!');
// } else {
//   console.log('Ne znam o čemu se radi!');
// }

debugger;

switch (article) {
  case 'naranca':
  case 'banana':
  case 'jagoda':
    console.log('Voće!');
    break;
  case 'pivo':
  case 'vino':
  case 'kola':
    console.log('Pice!');
    break;
  case 'bosiljak':
  case 'ruzmarin':
  case 'papar':
    console.log('Zacin!');
    break;
  default:
    console.log('Ne znam o čemu se radi!');
}
