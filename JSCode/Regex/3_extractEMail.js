// jedes Zeichen ausser Weissraum'\S' in beliebiger Anzahl '+' gefolgt von einem '@' gefolgt von
// jedes Zeichen ausser Weissraum'\S' in beliebiger Anzahl gefolgt von einem dot '\.' (maskiert)
// gefolgt von jedes Zeichen ausser Weissraum'\S' in beliebiger Anzahl
let myReg = /\S+@\S+\.\S+/ig;
email = "meinemail@adresse.com oder pyrrhus@outlook.de";
let src = "E-Mail " + email + " sollte passen";
// gibt die Variable aus
console.log(src);
// speichert die Matches in einem Array 'result'
result = src.match(myReg);

// Definiert die Funktion zum ausgeben der Werte
function printResult(myArr){
    console.log("\nDas Ergebnis ist :");
for (i = 0; i < myArr.length; i++){
    console.log((i+1) + ". " + myArr[i]);
    }
    console.log("\n");
}

function prtResWForOf(myArr){
    for(el of myArr){
        console.log(el);
    }
}

// Gibt die Länge des Arrays aus
prtRes = (myArr) => (console.log("Anzahl der E-Mail Adressen " + myArr.length + "\n"));
prtEl = (myArr) => (myArr.forEach(el => {console.log(el)}) + console.log("\n"));

// ruft die Funktion auf
printResult(result);
prtRes(result);
prtEl(result);
prtResWForOf(result);
