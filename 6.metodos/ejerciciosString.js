/*
1 crear un programa,haciendo uso de una funcion debera recibir un texto y la bocal a buscar y retorna la cantidad de veces que se encuentra dicha vocal.
hacer uso de los metodos para string
*/
function contarVocal(texto, vocal) {
    texto = texto.toLowerCase();
    vocal = vocal.toLowerCase();
  
    let partes = texto.split(vocal);
    return partes.length - 1;
  }
  
  // Ejemplo de uso
  console.log(contarVocal("Hola Mundo", "o")); // 2
  console.log(contarVocal("Javascript", "a")); // 2
  

/**
 * 2.crear un programa que haciendo uso de una funcion pueda recibir una lista de amigos y que retorne otra lista pero con los nombres en mayuscula
 */
function nombresEnMayuscula(listaAmigos) {
    return listaAmigos.map(nombre => nombre.toUpperCase());
  }
  
  // Ejemplo de uso
  let amigos = ["ana", "carlos", "maría"];
  let amigosMayus = nombresEnMayuscula(amigos);
  
  console.log(amigosMayus); // ["ANA", "CARLOS", "MARÍA"]
  