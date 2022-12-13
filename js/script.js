
let tekst = 'Akademia108';

function tekstToArray (tekst)
{
const myArray=tekst.split('');
let sortuj = myArray.sort();
return (sortuj.join(""));
}

console.log(tekstToArray(tekst));



