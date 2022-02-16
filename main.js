/*operadores de asignacion  */
///// operador de igualdad /////
let valor = "luis"; // asigna mi nombre ala variable valor
let nombre;        // se asigna un variable vacia
nombre=valor;     // se le asigna mi nombre a valor todo por =
                 // = es la manera de decir que es igual o que equivale 
console.log(nombre,valor);

/* operador de entrada input  con ventana emergente */
let x = prompt("numero 1 = x","solo numeros");
let y = prompt("numero 2 = y","solo numeros");
/* asignacion y operadores arimeticos  */

let suma;
let resta;
let multiplicacion;
let divicion;
let exponente;
let residuo;

suma=new Number (x)+new Number (y); // el operador de suma hay que tener en cuenta el new Number para que no pegue los numeros 
resta=x-y;
multiplicacion=x*y;
divicion=x/y;
exponente=x**y; // exponente es ** y no con (^)
residuo=x%y; // sobrante de una division

console.log(`%c Respuestas:`,"color:green; font-size:15px");
console.log(`datos son x=${x} & y=${y}

suma= ${suma}
resta= ${resta}
multiplicacion= ${multiplicacion}
divicion= ${divicion}
residuo= ${residuo}
exponente= ${exponente}`);