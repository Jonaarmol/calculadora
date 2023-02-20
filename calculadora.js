let operaciónDeseada = prompt(
  "Elegí la operación que querés hacer: 1-sumar <br> 2-restar <br> 3-multiplicar <br> 4-dividir <br> 5-potenciar <br> 6-resto"
);
if (operaciónDeseada == 1) {
  let numeroUno = parseInt(prompt("ingresá el primer número"));
  let numeroDos = parseInt(prompt("ingresá el segundo número"));
  alert(numeroUno + numeroDos);
} else if (operaciónDeseada == 2) {
  let numeroUno = parseInt(prompt("ingresá el primer número"));
  let numeroDos = parseInt(prompt("ingresá el segundo número"));
  alert(numeroUno - numeroDos);
} else if (operaciónDeseada == 3) {
  let numeroUno = parseInt(prompt("ingresá el primer número"));
  let numeroDos = parseInt(prompt("ingresá el segundo número"));
  alert(numeroUno * numeroDos);
} else if (operaciónDeseada == 4) {
  let numeroUno = parseInt(prompt("ingresá el primer número"));
  let numeroDos = parseInt(prompt("ingresá el segundo número"));
  alert(numeroUno / numeroDos);
} else if (operaciónDeseada == 5) {
  let numeroUno = parseInt(prompt("ingresá el número"));
  let numeroDos = parseInt(prompt("ingresá la potencia"));
  alert(numeroUno ** numeroDos);
} else if (operaciónDeseada == 6) {
  let numeroUno = parseInt(prompt("ingresá el primer número"));
  let numeroDos = parseInt(prompt("ingresá el segundo número"));
  alert(numeroUno % numeroDos);
} else {
  alert("ERROR! Esa operación no existe(aún); metele F5");
}
