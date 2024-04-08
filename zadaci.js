/* zad.1. 

function aritmeticka_sredina(a,b,c)
{
    if (a <= 0 || b <= 0 || c <= 0)
    {
        console.log("Nisu svi brojevi prirodni");
    }
    
    else
    {
        var rez=(a+b+c)/3;
        console.log("rezultat je ");
        console.log(rez);
    }
    
}

var a=Number(prompt("unesi broj: "));
var b=Number(prompt("unesi broj: "));
var c=Number(prompt("unesi broj: "));
aritmeticka_sredina(a,b,c);
*/

/* zad.2. 

function cetiri_rac_operacije(a,b)
{
    var zbrajanje;
    var oduzimanje;
    var umnozak;
    var kolicnik;
    if (a==0||b==0)
    {
        console.log("neke operacije su besmislene i neizvedive.");
    }
    else{
        zbrajanje=a+b;
        console.log("rezultat zbrajanja je " + zbrajanje);
        oduzimanje=a-b;
        console.log("rezultat oduzimanja je " + oduzimanje);
        umnozak=a*b;
        console.log("rezultat umnoska je " + umnozak);
        kolicnik=a/b;
        console.log("rezultat dijeljenja je " + kolicnik);
    }
  
}




var a= Number(prompt("unesi broj: "));
var b= Number(prompt("unesi broj: "));
cetiri_rac_operacije(a,b);
*/

/* zad.5. 

function provjera(a,b)
{
    var count=0;
    var znamenka;
    if(a<=0 || b<0 || b>9)
    {
        console.log("uneseni broj nije prirodan");
    }

    else{

        while (a>0)
        {
            znamenka=a%10;
            if(znamenka===b)
            {
                count+=1;
            }
            a=Math.floor(a/10);
        }
        console.log("broj ponavljanja znamenke unutar broja je " + count);
    }
}

var a= Number(prompt("unesi broj: ")); //mora biti prirodan broj
var b= Number(prompt("unesi broj za provjeru ponavljanja: "));
provjera(a,b);
*/

/* zad.4.

function mjeseci(a)
{
    switch(a)
    {
        case ('1.'):
        case ('1'):
        case ('2.'):
        case ('2'):
        case ('3.'):
        case ('3'):
            alert("zima");
            break;
        case ('4.'):
        case ('4'):   
        case ('5.'):
        case ('5'): 
        case ('6.'):
        case ('6'):
            alert("proljeće");
            break;
        case ('7.'):
        case ('7'):
        case ('8.'):
        case ('8'):
        case ('9.'):
        case ('9'): 
            alert("ljeto");
            break;
        case ('10.'):
        case ('10'): 
        case ('11.'):
        case ('11'):     
        case ('12.'):
        case ('12'): 
            alert("jesen");
            break;
        default:
            alert("krivi unos");      
    }
}



var a=prompt("unesi neki mjesec: ");
mjeseci(a);
*/

/* zad.3. 


function prva_znamenka(b)
{
   
    while(b>=10)
    {
        b=Math.floor(b/10);
    }
    return b;
    
}


var a=Number(prompt("unesi deseteroznamenkasti broj: "));
var b=a;
var duzina= a.toString();
var duzina_org=duzina.length;
if(duzina_org<10)
{
    console.log("duzina broja nije dobra");
}
else{
    var rez=prva_znamenka(b);
    console.log("prva znamenka je "+ rez);
}

*/