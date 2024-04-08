/* zad.1. 

var niz = [1, 2, 3, 56, -23, 1000, 46];
console.log("Pocetni niz je:");
for (var i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

console.log("dodavanje na pocetak niza element (npr. 300)");
niz.unshift(300);
console.log("Niz nakon dodavanja elementa na pocetak:");
for (var i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

console.log("dodavanje na kraj niza element (npr. -600)");
niz.push(-600);
for (var i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

var a=niz;
var duljina=a.length;
var predzadnji = duljina -1;
console.log("dodavanje na predzanje mjesto element (npr. 44): ");
niz.splice(predzadnji,0,44);
console.log(a);

var novi=a;
console.log("brisanje drugog elemnta niza: ");
novi.splice(1,1);
console.log(novi);

var n=novi;
console.log("brisanje zadnjeg elemnta niza: ");
novi.splice(n.length-1,1)
console.log(n);

var izmjena=n;
console.log("izmjena drugog elementa na (npr. 13): ");
izmjena.splice(1,1,13);
console.log(izmjena);

var sum=0;
console.log("zbroj svih trenutačnih elemenata je: ")
for (i of izmjena)
{
    sum+=i;
}
console.log(sum);

console.log("konacni niz je: ")
for (i of izmjena)
{
    console.log(i);
}

*/

/* zad.2. 

var trgovina=[

     {naziv_proizvoda : "Laptop", godina_proizvodnje : 2009, cijena : 200 , kolicina: 50, popust : "25%"},
     {naziv_proizvoda : "Slušalice", godina_proizvodnje : 1999, cijena : 5 , kolicina: 5, popust : "0%"},
     {naziv_proizvoda : "Konzola", godina_proizvodnje : 2010, cijena : 150 , kolicina: 12, popust : "50%"},
     {naziv_proizvoda : "Peć", godina_proizvodnje : 2020, cijena : 50 , kolicina: 23, popust : "0%"},
     {naziv_proizvoda : "Toster", godina_proizvodnje : 1900, cijena : 2 , kolicina: 3, popust : "0%"},
     
];

var cijena_manja_od_50 = [];
trgovina.filter(function(a) {
    if(a.cijena<50)
    {
        cijena_manja_od_50.push(a.naziv_proizvoda);
    }
})

console.log(cijena_manja_od_50);
*/


/* zad.3. 

var trgovina=[

    {naziv_proizvoda : "Laptop", godina_proizvodnje : 2009, cijena : 200 , kolicina: 50, popust : "25%"},
    {naziv_proizvoda : "Slušalice", godina_proizvodnje : 1999, cijena : 5 , kolicina: 5, popust : "0%"},
    {naziv_proizvoda : "Konzola", godina_proizvodnje : 2010, cijena : 150 , kolicina: 12, popust : "50%"},
    {naziv_proizvoda : "Peć", godina_proizvodnje : 2020, cijena : 50 , kolicina: 23, popust : "0%"},
    {naziv_proizvoda : "Toster", godina_proizvodnje : 1900, cijena : 2 , kolicina: 3, popust : "0%"},
    
];
var kolicina = trgovina.map(function(a){
    return a.kolicina;
})
var sum = kolicina.reduce(function(accumulator, trenutna_vrijednost) {
    return accumulator + trenutna_vrijednost;
}, 0);

console.log("Ukupna suma:", sum);
*/

/* zad.5. 
var poz_ili_neg = (a) => a>=0?true:false;
var a = Number(prompt("Unesi broj: "));
var rez = poz_ili_neg(a);
console.log(rez);

var b=Number(prompt("Unesi broj: "));
var paran_ili_nep = (b) => b%2==0?"Pozitivan":"Negativan";
var rez2=paran_ili_nep(b);
console.log(rez2);

var c=Number(prompt("Unesi broj za kub: "));
var kub = (c) => {return c*c*c;}
var rez3=kub(c);
console.log("Rezultat kuba je: " + rez3); 


var ispis = () => console.log("Hello World!");
var rez4 = ispis();
*/

/* zad.4. 

var trgovina=[

    {naziv_trgovine: "Lexus", naziv_proizvoda : "Laptop", godina_proizvodnje : 2009, cijena : 200 , kolicina: 50, popust : "25%"},
    {naziv_trgovine: "Studenac", naziv_proizvoda : "Slušalice", godina_proizvodnje : 1999, cijena : 5 , kolicina: 5, popust : "0%"},
    {naziv_trgovine: "Tommy", naziv_proizvoda : "Konzola", godina_proizvodnje : 2010, cijena : 150 , kolicina: 12, popust : "50%"},
    {naziv_trgovine: "Konzum", naziv_proizvoda : "Peć", godina_proizvodnje : 2020, cijena : 50 , kolicina: 23, popust : "0%"},
    {naziv_trgovine: "Kaufland", naziv_proizvoda : "Toster", godina_proizvodnje : 1900, cijena : 2 , kolicina: 3, popust : "0%"},
    
];

var rez = trgovina.map(function(a){
    return a.naziv_trgovine;
});

console.log(rez);
*/
