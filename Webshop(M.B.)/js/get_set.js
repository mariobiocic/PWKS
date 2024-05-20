
// konstruktor funkcija 
/*
function Automobil(ime,prezime,marka,boja,tablice,prijasnji_vlasnik="nitko",kilometri,potroseno_gorivo)
{
   
    this.marka=marka;
    this.boja=boja;
    this.kilometri=kilometri;
    this.potroseno_gorivo=potroseno_gorivo;


    let izracun_potrosenog_goriva=()=>{
        let rezultat = this.kilometri/this.potroseno_gorivo;
        return rezultat;
    }

    this.GetIme=()=>{
        return ime;
    }

    this.GetPrezime = () => {
        return prezime;
    }

    this.GetTablice = () => {
        return tablice;
    }
    this.GetPrijasnjiVlasnik = () => {
        return prijasnji_vlasnik;
    }
    this.info = () => {
        console.log(`Vlasnik ${this.GetIme()} ${this.GetPrezime()} posjeduje ${this.marka}. Boja auta je ${this.boja}.`);
    }

    this.info2 = () =>  {
        console.log(`Tablica auta glasi: ${this.GetTablice()}`);
    }
    this.izracun=()=>{
        console.log(`Potrošnja goriva po kilometrima: ${izracun_potrosenog_goriva()}`);
    }


};



//prvi objekt

const objekt1 = new Automobil("Ivan","Klasnic","Mercedes","crna", "IM-1956-ZZ","Mate Boban",350,50);
objekt1.info();
objekt1.info2();
console.log(`Prethodni vlasnik bio je ${objekt1.GetPrijasnjiVlasnik()}.`);
objekt1.izracun();

console.log();

//drugi objekt

const objekt2 = new Automobil("Koljn", "Drekaj","Audi","bijela","DU-1986-GG",undefined,300,64)
objekt2.info();
objekt2.info2();
console.log(`Prethodni vlasnik bio je ${objekt2.GetPrijasnjiVlasnik()}.`);
objekt2.izracun();

// class metoda

class Automobil2
{
    constructor(ime,prezime,marka,boja,tablice,prijasnji_vlasnik="nitko",kilometri,potroseno_gorivo)
    {
        let vlasnik_ime=ime;
        let vlasnik_prezime=prezime;
        let vlasnik_tablice=tablice;
        let pr_vl=prijasnji_vlasnik;
        this.marka=marka;
        this.boja=boja;
        this.kilometri=kilometri;
        this.potroseno_gorivo=potroseno_gorivo;
        
        let rac = () =>
        {
            let rez=this.kilometri/this.potroseno_gorivo;
            return rez;
        }

        this.GetPrVla = () =>
        {
            return pr_vl;
        }

        this.GetVlIme=()=>
        {
            return vlasnik_ime;
        }

        this.GetVlPr=()=>
        {
            return vlasnik_prezime;
        }

        this.GetVlTab=()=>
        {
            return vlasnik_tablice;
        }

        this.izracun_potrosnje=()=>
        {
            console.log(`Potrošnja goriva po kilometrima: ${rac()}`);
        }

        this.informacije = () => 
        {
            console.log(`Vlasnik ${this.GetVlIme()} ${this.GetVlPr()} posjeduje ${this.marka}. Boja auta je ${this.boja}.`);      
        }

        this.informacije2 = () => 
        {
            console.log(`Tablica auta glasi: ${this.GetVlTab()}`);
        }


    }
};

// class objekt
console.log();

const objekt3 = new Automobil2("Stjepan", "Spajic","BMW","zelena","ZG-2000-CZ",undefined,600,123);
objekt3.informacije();
objekt3.informacije2();
console.log(`Prethodni vlasnik bio je ${objekt3.GetPrVla()}.`);
objekt3.izracun_potrosnje();
*/