/* zad.3. 



function ispis()
{
    let a="Programirati nije teško.";
    return function ()
    {
        console.log(a);
    }
       
}

let rez=ispis();
rez();
*/

/* zad.4. 
function sum(a){  --> zapis closure funkcije
    return (b, c) => { --> unutarnja funkcija u arrow obliku (prima dva argumenta)
    return a * b * c --> umnožak(sadržaj)
    }
    }
    let x = sum(10);
    console.log(x(3,12)); --> ispis rezultata u dva koraka, prvo za vanjsku se navodi argument, zatim za unutarnju dva, kako je i definirano
    // ili
    console.log(sum(10)(3,12)); --> ispis rezultata u jednom koraku, ispisiva se 360 u oba slučaja ispisa
    --> dohvaćaju se varijable u prostoru iznad unutarnje funckije, ako tu nisu navedene, gleda se iznad prostor.
    */


/*zad.2. 

function sum(){
    var sump = 0;
    var sumn = 0;
    
    return () => {
        let a;
        while(true) {
            a = Number(prompt("Unesite broj (unesite 0 za kraj): "));
            if (a === 0) {
                console.log("Suma parnih brojeva:", sump);
                console.log("Suma neparnih brojeva:", sumn);
                break;
            }
            if (a % 2 === 0) {
                sump += a;
            } else {
                sumn += a;
            }
        }
    }
}

const rezultat = sum();
rezultat();
 */


/* zad.1. 
var niz=[];
for(var i=0;i<10;i++)
{
    niz[i]=Math.floor(Math.random()*101)+100;
}
niz.sort(); //ili .sort((a,b) => return a-b);
console.log(niz);
*/

/* zad.5. 
const multiplyNumbers = (a) => {
    const inner = (acc) => {
        const multiply = (b) => {
            if (b === undefined) {
                return acc;
            }
            if (b === 0 || b >= 20) {
                return inner(acc); 
            }
            return inner(acc * b);
        };
        return multiply;
    };

    if (a === undefined || a === 0 || a >= 20) {
        return inner(1); 
    } else {
        return inner(a);
    }
};

console.log(multiplyNumbers(2)(3)(4)()); 
console.log(multiplyNumbers(2)(3)(4)(5)(6)()); 
console.log(multiplyNumbers(2)(3)(4)(5)(21)(6)()); 
console.log(multiplyNumbers(0)(3)(4)()); 
console.log(multiplyNumbers(20)(3)(4)());
*/
