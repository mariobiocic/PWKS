
/* zad.1. 

function delayedGreeting(tekstPozdrava,vrijemekasnjenja) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(tekstPozdrava);
            resolve(); 
        }, vrijemekasnjenja);
    });
}


delayedGreeting("Pozdrav", 3000).then(function(){
    console.log("Pozdrav je ispisan nakon odgode.");
}).catch(function(error){
    console.error("Greška:", error);
});

*/

/* zad.2.  

function checkWeather(grad) {
    return new Promise(function(resolve, reject) {
        
        setTimeout(function() {
           
            const random = Math.random();
            
            if (random < 1) {
                resolve(`Vrijeme je sunčano u ${grad}`);
            } else {
                reject(`Vrijeme nije sunčano u  ${grad}`);
            }
        }, 3000); 
    });
}


checkWeather("Zagreb")
    .then(function(message) {
        console.log(message);
    })
    .catch(function(errorMessage) {
        console.error(errorMessage);
    });

*/ 

/* zad.5. 

function calculateAndPrintSum(a, b) {
    return new Promise(resolve => setTimeout(() => {
        const sum = a + b;
        console.log("Zbroj je: ", sum);
        resolve(sum);
    }, 2000)); 
}

async function calculateSum() {
    console.log('Prije čekanja');
    const rezultat = await calculateAndPrintSum(2, 3); 
    console.log("rezultat je: ", rezultat);
}

calculateSum();
*/

/* zad.6. 

function checkNumber(broj) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (broj % 2 === 0) {
                resolve("Broj je paran.");
            } else {
                reject("Broj je neparan.");
            }
        }, 2000); 
    });
}


checkNumber(23)
    .then(function(poruka) {
        console.log(poruka);
    })
    .catch(function(poruka) {
        console.log(poruka);
    });
*/
