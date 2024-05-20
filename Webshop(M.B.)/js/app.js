/* zad.1. */
document.getElementById("prednosti").style.backgroundColor = "yellow";

/* zad.2. */
var odjeljci = document.getElementsByClassName("odjeljak");
for ( i = 0; i < odjeljci.length; i++) {
  odjeljci[i].style.fontSize = '16px';
}

/* zad.3. */
var promjeni_tekst = document.getElementById("prednosti");
promjeni_tekst.innerHTML = "Ova sekcija je promijenjena korištenjem DOM-a";

/* zad.4. */
var sek = document.getElementsByTagName("section");
for(i=0;i<sek.length;i++)
{
    sek[i].style.backgroundColor="blue";
}


/* zad.5. */
function promjeniBojuPozadine(){

    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    var boja = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  
    document.documentElement.style.backgroundColor = boja;
}

/* zad.6. */

function dodajuparagraf(){

    var paragraf = document.getElementsByTagName("p");

    for (i=0;paragraf.length;i++)
    {
        if (paragraf[i].innerHTML.trim() === "")
        {
            tekst=document.createTextNode("Ovo je tekst za prazan paragraf.")
            paragraf[i].appendChild(tekst);
        }
    }
}


/* zad.7. */
function promjeniSliku(){

    var putanja = "/images/voda.jpg";
    var slika = document.getElementsByTagName("img")[0];

    slika.src=putanja;
}


/*zad.8. */

function dodajParagraf(){

    var paragraf=document.createElement("p");
    var tekst = document.createTextNode("Ovo je novi paragraf");
    paragraf.appendChild(tekst);

    var dodaj = document.getElementById("paragrafi");
    dodaj.appendChild(paragraf);
}