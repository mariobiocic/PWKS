/* zad.1. 


function Automobil(marka,model,god_proizvodnje,trenutna_brzina=0)
{
    this.marka=marka;
    this.model=model;
    this.god_proizvodnje=god_proizvodnje;
    this.trenutna_brzina=trenutna_brzina;


 

}
Automobil.prototype.dodajBrzinu = function (broj){
        this.trenutna_brzina+=broj;
    }
   
Automobil.prototype.ispisiBrzinu = function(){
        console.log(`trenutna brzina je ${this.trenutna_brzina} km/h.`);
    }


const obj1 = new Automobil( "Toyota", "Camry", 2015, 60);
obj1.dodajBrzinu(20);
obj1.ispisiBrzinu();

const obj2 = new Automobil("Mercedes","S klasa",2024,undefined)
obj2.dodajBrzinu(150);
obj2.ispisiBrzinu();
*/


/*zad. 2. 

function Vozilo(marka,godinaProizvodnje)
{
    this.marka=marka;
    this.godinaProizvodnje=godinaProizvodnje;
}

Vozilo.prototype.vozi=function(){
    console.log(`Vozim ${this.marka} vozila godište ${this.godinaProizvodnje}`);
}

function Automobil(marka,godinaProizvodnje,boja,brojVrata){
    
    Vozilo.call(this,marka,godinaProizvodnje)
    this.boja=boja;
    this.brojVrata=brojVrata;
}

Automobil.prototype=Object.create(Vozilo.prototype);
Automobil.prototype.constructor=Automobil;
Automobil.prototype.parkiraj = function(){
    console.log(`Automobil ${this.marka}, ${this.boja} boje je parkiran!`);
}

function Motocikl(marka, godinaProizvodnje, tip) {
    Automobil.call(this, marka, godinaProizvodnje);
    this.tip = tip;
}

Motocikl.prototype = Object.create(Automobil.prototype);
Motocikl.prototype.constructor = Motocikl;
Motocikl.prototype.voziBrzo = function() {
    console.log(`Vozim motocikl tipa ${this.tip}, marke ${this.marka} i godište ${this.godinaProizvodnje} brzo!`)
}

let auto = new Automobil("BMW", 2022, "crna", 5);
auto.vozi(); 
auto.parkiraj(); 

let moto = new Motocikl("Honda", 2020, "sportski");
moto.vozi(); 
moto.voziBrzo();
*/

/* zad.3. 


class Zaposlenik {
    constructor(ime, prezime, email, ocjena_sposobnosti) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.ocjena_sposobnosti = ocjena_sposobnosti;
    }

    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}`);
    }

    ocijeniSposobnost(ocjena) {
        this.ocjena_sposobnosti = ocjena;
        console.log(`Ocjena sposobnosti zaposlenika je ${this.ocjena_sposobnosti}.`);
    }
}

class Programer extends Zaposlenik {
    constructor(ime, prezime, email, programski_jezik) {
        super(ime, prezime, email); //inicijalizacija njih samih od roditeljske klase 
        this.programski_jezik = programski_jezik;
    }

    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}, programski jezik: ${this.programski_jezik}`);
    }
}

class Dizajner extends Zaposlenik {
    constructor(ime, prezime, email, softver) {
        super(ime, prezime, email);
        this.softver = softver;
    }

    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}, softver: ${this.softver}`);
    }
}

const zaposlenik1 = new Zaposlenik('Pero', 'Perić', 'pero.peric@example.com', 4);
zaposlenik1.ispisi();
zaposlenik1.ocijeniSposobnost(4);

const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com', 'JavaScript');
programer1.ispisi();

const dizajner1 = new Dizajner('Ana', 'Anić', 'ana.anic@example.com', 'Adobe Photoshop');
dizajner1.ispisi();


programer1.ocijeniSposobnost(5);
dizajner1.ocijeniSposobnost(2);
*/





