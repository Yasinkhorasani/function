
 function myFunction(){
    // ~~ bedeutet abrunden
    console.log('Ich bin eine Funktion', ~~(Math.random()*100));
}

myFunction();
myFunction();
myFunction();
/////////////////////////////
        // Übergebene Werte werden in sog. "Parametern" abgelegt
        // Die Argumente werden der Reihe nach an die Parameter gegeben
        function myFunction(zahl1, zahl2) {

            console.log(zahl1, zahl2);
            console.log(zahl1 * zahl2);
            console.log(' ');

        }

        // An eine Funktion übergene Werte werden "arguments" genannt
        myFunction(12, 23);
        myFunction(10, 20);
        myFunction(78, 96);
//////////////////////////////////////////
        function myFunction(zahl1, zahl2) {

            // return liefert einen Rückgabewert an den Aufruf
            return zahl1 * zahl2;

        }

        let produkt1 = myFunction(12, 23);
        let produkt2 = myFunction(10, 20);
        let produkt3 = myFunction(78, 96);

        console.log(produkt1, produkt2, produkt3);
////////////////////////////////////////////////
// Arrow-Funktion
        // Fat-Arrow-Function
        // Lambda-Funktion (nicht ganz korrekt, kommt aber gelegentlich vor)
        let myFunction = (zahl1, zahl2) => {

            // return liefert einen Rückgabewert an den Aufruf
            return zahl1 * zahl2;

        }

        let produkt1 = myFunction(12, 23);
        let produkt2 = myFunction(10, 20);
        let produkt3 = myFunction(78, 96);

        console.log(produkt1, produkt2, produkt3);
        //////////////////////////////////////////////
        
        // this soll eigentlich immer eine Rweferenz auf ein Bezugssystem enthalten
        // Da das aber nicht immer perfekt funktioniert, wird zunehmend versucht, ohne this zu programieren
        console.log(this);
        
        function myFunction(){
            // Jede klassische Funktion erhält ihr "eigenes this", das standardmäßig leer bleibt.
            // Das Bezugssystem (siehe oben) geht verloren
            console.log(this);            
        }


        let myArrow = () => {
            console.log(this);
        }

        myFunction();
        myArrow();
//////////////////////////////////////////////////////

        // In der Kurzsyntax ist das Ergebnis der Operation automatisch der Rückgabewert der Funktion
        let myFunction = (zahl1, zahl2) => zahl1 * zahl2;


        let produkt1 = myFunction(12, 23);
        let produkt2 = myFunction(10, 20);
        let produkt3 = myFunction(78, 96);

        console.log(produkt1, produkt2, produkt3);
///////////////////////////////////////////////////////

        // 4*6, 3*2.5, 3.2*4.3
        // Berechnung der Fläche eines Zimmers
        let flaeche = (laenge, breite) => laenge * breite;

        let gesamt = flaeche(4, 6) + flaeche(3, 2.5) + flaeche(3.2, 4.3);
        
        // let gesamt = flaeche(4, 6) + flaeche(3, 2.5) + flaeche(3.2, 4.3);
        // let gesamt = 24 + flaeche(3, 2.5) + flaeche(3.2, 4.3);
        // let gesamt = 24 + 7.5 + flaeche(3.2, 4.3);
        // let gesamt = 24 + 7.5 + 13.76;
        // let gesamt = 45.26;

        console.log(gesamt);
///////////////////////////////////////////////////


        // Die Technik des Hoisting wird in moderner Programmierung NICHT mehr eingesetzt
        // WIRKLICH GAR NICHT!

        // Beim Hoisting kann eine Funktion aufgerufen werden, bevor sie angelegt worden ist
        // Diese Technik ist veraltet und sollt enicht mehr verwendet werden
        myFunction();

        function myFunction() {
            console.log('Ich bin eine Funktion');
        }
        ///////////////////////////////////////////////////
        
        const myFunction = () => {
            console.log('Ausgabe: ', ~~(Math.random()*100));
        }

        // myFunction soll verzögert aufgerufen werden
        // setTimeout(myFunction, 2000);

        // myFunction soll alle 2 Sekunden aufgerufen werden
        setInterval(myFunction, 2000);

