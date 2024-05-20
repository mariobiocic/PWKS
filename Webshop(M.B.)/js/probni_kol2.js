/* zad.1. */


class Banka
{
    constructor(iznos=0)
    {
        this.iznos=iznos;
    }
    getBalance(){
        console.log(`Trenutno stanje računa je ${this.iznos} eura`);
    }
    deposit(broj){
        this.iznos+=broj;
    }
    withDraw(broj2){
        if(broj2<this.iznos)
        {
            this.iznos-=broj2;
            console.log(`Uspješno ste podigli eure sa računa.`)
        }
        else{
            console.log("Raspoloživo stanje na računu je manje od iznosa kojeg želite podignuti!")
        }
    }
}

class Kamata extends Banka{
    constructor(iznos){
        super(iznos)
    }

    kamata(broj3){
        this.iznos += this.iznos *(broj3/100);
    }

}


const obj1 = new Banka();
obj1.deposit(20);
obj1.getBalance();
obj1.withDraw(10);
obj1.getBalance();

const obj2= new Kamata();
obj2.deposit(200);
obj2.getBalance();
obj2.kamata(20);
obj2.getBalance();



/* zad.3. */

function opsegTrokuta(a,b,c){
    return new Promise(function(resolve,reject){
        if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number' )
        {
            resolve(`opseg je : ${a+b+c}`);
        }
        else {
            reject(`krivi unos neke od stranica`);
        }

    })
}

opsegTrokuta(1,2,123).then(function(ok){console.log(ok);}).catch(function(err){console.log(err);});

opsegTrokuta(1,"afa",123).then(function(ok){console.log(ok);}).catch(function(err){console.log(err);});