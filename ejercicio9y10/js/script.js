var nombre = prompt("Tu nombre por favor");
var numero = prompt("Introduce numero para averiguar si es primo.")

/* números primos */
if (numero%2!=0 && numero%7!=0 && numero%3!=0 && numero/5 !=0){
    adivina(true);
} else adivina(false);

/* 9 */
function adivina(prim){
   if (prim){
   console.log(nombre+", el número "+numero+" es primo.");
    } else {
        console.log(nombre+", el número "+numero+" no es primo.");
    }
}

/* 10 */
function adivina(prim){
   if (prim){
   document.getElementById("primo").innerHTML= nombre+", el número "+numero+" es primo.";
    } else {
        document.getElementById("noPrimo").innerHTML= nombre+", el número "+numero+" no es primo.";
    }
}