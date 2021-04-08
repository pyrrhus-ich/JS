
// sucht nach einem + gefolgt von 2 Zeichen einem Leerzeichen(\s) und 3 weiteren Zeichen
let myReg = /\+..\s.../gi;

// sucht nach einem '+' gefolgt von genau {2} Zahlen gefolgt von einem Leerzeichen '\s'
// gefolgt von genau {3} Zahlen einem Leerzeichen '\s' gefolgt von genau {8} Zahlen
// oder '|' nach genau {4} Zahlen Leerzeichen '\s' 6 - 10 Zahlen {6,10} ACHTUNG
// Zahlen die länger als 10 Zeichen sind bleiben stehen Also lieber einen höheren Wert!!!
let my3Reg = /\+\d{2}\s\d{3}\s\d{8} | \d{4}\s\d{6,19}/gi;
let sourceStr = "Handy +49 151 58223899 oder 0157 123456789123456789";

//simple ersetzung 
numRpl = sourceStr.replace(my3Reg, " ************* ");
console.log(numRpl);







