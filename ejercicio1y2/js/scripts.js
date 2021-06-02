/* 1 */
const perimetro= (r) => 2*Math.PI*r;
const area= (r) => Math.PI*(r*r);

let r = prompt("Ingrese para calcular")

alert('El perímetro de '+r+' es '+perimetro(r))
alert('El área de '+r+' es '+area(r))

/* 2 */
const calcula= () => {
    let r= +document.getElementById("valor").value;
    document.getElementById("resultado").innerHTML = 'El perímetro de '+r+' es: '+perimetro(r)+'.<br>Y su área: '+area(r);
}
