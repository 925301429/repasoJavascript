// crear un funcion que reciba por parametro una lista y un alemento a encontrar retornar 
// si el elemento a encontrar retornar si el elemento fue encontrado o no

// JavaScript
function buscarElemento(lista, elemento) {
    return lista.includes(elemento);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'pera', 'uva', 'naranja'];

console.log(buscarElemento(numeros, 3)); // true
console.log(buscarElemento(numeros, 10)); // false
console.log(buscarElemento(frutas, 'pera')); // true
console.log(buscarElemento(frutas, 'banana')); // false

// Versión alternativa con bucle for (más control)
function buscarElementoManual(lista, elemento) {
    let mensaje=""
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            mensaje="elemento encontrado"
            return mensaje;
        }
    }
    mensaje="elemento encontrado"
    return mensaje;
}
let amigos=["Ashly","Alex","Angel","ana"]
console.log(busaElemento(amigos,"kcapa"))
