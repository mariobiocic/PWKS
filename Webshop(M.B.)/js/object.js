
/*zad.1.

function ocjena(k1, k2, sem){
    //𝑂𝑐𝑗𝑒𝑛𝑎(%) = 0,42*kol1 + 0,42*kol2 + 0,16*semi
    return k1*0.42 + k2*0.42 + sem*0.16;
    }
    console.log(`Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`);

// arrow funkcija

const ocjena_arrow = (k1,k2,sem) => {return k1*0.42 + k2*0.42 + sem*0.16;}  

console.log(`Postotak ostvaren na kolegiju ${ocjena_arrow(50, 80, 80)}`);


//currying
const ocjena_currying = (k1) => (k2) => (sem) => {
    return k1*0.42 + k2*0.42 + sem*0.16;
}


console.log(`Postotak ostvaren na kolegiju ${ocjena_currying(50)(80)(80)}`);
*/


/* zad.3.

const mnozi = (a) => (b) => {
    const jeParni=(broj)=>{return broj%2==0;}
    const mnozenje = (x,y) =>{return jeParni(x) && jeParni(y)?x*y:x}
    return (c) => {
        if(c==undefined)
        {
            return a;
        }
        else{
            return mnozi(mnozenje(a,b))(c);
        }
    }

    
}

console.log(`Primjer: ${mnozi(2)(5)(13)(10)(14)(177)(4)(0)()}`);
console.log(`Primjer: ${mnozi(2)(5)(13)(10)(14)(177)(0)()}`);

 */

/* zad.2. 

// arrow

const rez_a = (kolegij, bod1, bod2) => {

    var bodovi= (bod1/bod2)*100;
    const format_broj=bodovi.toFixed(2);
    console.log(`Iz kolegija ${kolegij} ostvarili ste ${format_broj}%.`);
} 

rez_a("PWKS",25,35);

//currying

const rez_b = (kolegij) => (os_br_bod) => (ukupan_br) =>{

    var ukupan=(os_br_bod/ukupan_br)*100;
    const formatirani = ukupan.toFixed(2);
    console.log(`Iz kolegija ${kolegij} ostvarili ste ${formatirani}%.`);
}

rez_b("PWKS")(25)(35);

*/

/* zad.4. 

function Kolegij(godina,semestar,kol1,kol2,ocjena_rez)
{
    this.godina=godina;
    this.semestar=semestar;
    this.kol1=kol1;
    this.kol2=kol2;
    this.ocjena_rez=ocjena_rez;
    this.info = function (){
        console.log(`Student na PWKS,${this.godina} godina, ${this.semestar} semestar, osvario je ${this.ocjena_rez} `);
    }
    this.ocjena = ()=>{
        return this.kol1*0.5+this.kol2*0.5;
    }
}

const rezultat1 = new Kolegij("1","2",34,35,4);
rezultat1.info();
console.log("Postotak riješenosti ",rezultat1.ocjena());
const rezultat2 = new Kolegij("1","2",14,15,3);
rezultat2.info();
console.log("Postotak riješenosti ",rezultat2.ocjena());


// ili this.ocjena_rez = this.kol1 * 0.5 + ... pa pozvati nju u funkciji ocjena ako ocjena_rez nije parametar koj ise unese.

*/

/* zad.5. 
function Kolegij(godina,semestar,kol1,kol2,ocjena_rez, ime, prezime, status)
{
    this.godina=godina;
    this.semestar=semestar;
    this.kol1=kol1;
    this.kol2=kol2;
    this.ocjena_rez=ocjena_rez;
    this.ime=ime;
    this.prezime=prezime;
    this.status=status;
    this.info = function (){
        console.log(`Student na PWKS,${this.godina} godina, ${this.semestar} semestar, osvario je ${this.ocjena_rez} `);
    }
    this.ocjena = ()=>{
        return this.kol1*0.5+this.kol2*0.5;
    }
   
}
//const rezultat1 = new Kolegij("1","2",34,35,4);
//rezultat1.info();
//console.log("Postotak riješenosti ",rezultat1.ocjena());
//const rezultat2 = new Kolegij("1","2",14,15,3);
//rezultat2.info();
//console.log("Postotak riješenosti ",rezultat2.ocjena());
const rezultat3 = new Kolegij("1","2",13,20,6)
rezultat3.ime="Mario";
rezultat3.prezime="Biočić";
rezultat3.status=rezultat3.ocjena();
console.log(`Student ${rezultat3.ime} ${rezultat3.prezime} ima ${rezultat3.status}%`);
*/


/* zad.6. 

function Kolegij(godina,semestar,kol1,kol2,ocjena_rez, ime, prezime, status)
{
    this.godina=godina;
    this.semestar=semestar;
    this.kol1=kol1;
    this.kol2=kol2;
    this.ocjena_rez=ocjena_rez;
    this.ime=ime;
    this.prezime=prezime;
    this.status=status;
    this.info = function (){
        console.log(`Student na PWKS,${this.godina} godina, ${this.semestar} semestar, osvario je ${this.ocjena_rez} `);
    }
    this.ocjena = ()=>{
        return this.kol1*0.5+this.kol2*0.5;
    }
   
}
//const rezultat1 = new Kolegij("1","2",34,35,4);
//rezultat1.info();
//console.log("Postotak riješenosti ",rezultat1.ocjena());
//const rezultat2 = new Kolegij("1","2",14,15,3);
//rezultat2.info();
//console.log("Postotak riješenosti ",rezultat2.ocjena());
const rezultat3 = new Kolegij("1","2",13,20,6)
rezultat3.ime="Mario";
rezultat3.prezime="Biočić";
rezultat3.status=rezultat3.ocjena();
console.log(rezultat3);

delete rezultat3.ime;
delete rezultat3.prezime;
delete rezultat3.status;

console.log(rezultat3);
*/