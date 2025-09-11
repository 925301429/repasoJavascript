// estructura de  una condicion
//1.palabra recervada if
//2.la condicion o exprecion a evaluar (que debera ser siempre un tipode dato booleano), la exprecion y condicio de ve de estar entre()
//3.el cuerpo , que contendra el codigo a ejecutar en caso la condicion sea verdadera

//4.palabra recervada else
//5.cuerpo que contendra el codigo a ejecutar en caso la condicion sea falso

if(true){
    let suma=24+45
    let divi=45/3
    console.log(suma,divi)
}else{
    console.log("me ejecuto por que soy falso")
}
console.log(dici)}15
//crear un programa que evalue si un numero es mayor al otro y si este numero es ala vez un numero par
let firtsNumber=25
let secondNumber=30
if (firtsNumber>secondNumber){
    if (firtsNumber%2==0){
        console.log("el numero es mayor y par")'el numero es mayor y par'
    }else{
        confirm.log("elnumero es mayor pero es impar")
    }
}else{
    console.log("el numero es menor")
}
// crear un programa que me muestre el numero en texto
let numero = 3; // Puedes cambiar este número del 0 al 9

let texto;

switch (numero) {
  case 0:
    texto = "cero";
    break;
  case 1:
    texto = "uno";
    break;
  case 2:
    texto = "dos";
    break;
  case 3:
    texto = "tres";
    break;
  case 4:
    texto = "cuatro";
    break;
  case 5:
    texto = "cinco";
    break;
  case 6:
    texto = "seis";
    break;
  case 7:
    texto = "siete";
    break;
  case 8:
    texto = "ocho";
    break;
  case 9:
    texto = "nueve";
    break;
  default:
    texto = "Número fuera de rango";
}

console.log("El número en texto es:", texto);
