/* Flags
/g - globale suche, wird nach jedem Treffer fortgesetzt
/i - ignoriert gross und kleinschreibung
/m - multiline; behandelt den Suchkontext als Mehrfachzeilen, 
     d.h. Anfang- und Endeanker (^ und $) entsprechen dem Anfang bzw. 
     Ende jeder einzelnen Zeile (begrenzt durch \n oder \r), nicht nur 
     dem Anfang und Ende der gesamten zu durchsuchenden Zeichenkette.
*/

let myRegEx = /Frank Menzel/g;                   // literal wenn Regex unverändert bleibt
let my2RegEx = new RegExp("a" , "i"); // Object wenn sich Regex zur Laufzeit ändert oder nicht bekannt ist und erst
                                      // zur Laufzeit ermittelt wird

let sourceStr = "Ich bin der Frank Menzel und wurde am 10.10.1963 geboren. " +
                "Meine E-Mail Adresse ist menzelfrank@gmail.com. " + 
                "Meine Handynummer ist +49 151 58223899 oder 0157 84876799";

//console.log(sourceStr);

x = sourceStr.match(myRegEx);
console.log(x);
