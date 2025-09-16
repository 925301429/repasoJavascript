# taller de repaso de javascript
> [!warning] observacion: Quokka se debe ejecutar en cada archivo
> [!TIP] Quokka detecta que es nuestro proyecto tenemos nodejs y lo ejecuta para poder ver la consola en vivo

## 1. tipos de datos
 En javascript  se clasifican en dos grandes grupos
 >[!tip] javascript  tiene funciones predeterminadas por ejemplo para mostrar un mensaje por consola `console,log()`
  ### Primitivos
 son datos que siempre existiran
 1. numericos
   - enteros positivos
   - enteros negativos
   - decimal positivo
   - decimal negativo
   -  NaN 
1. texto
   - caracteres                -10001001 - 97 -A
   - caracteres especiales     - 01001001 010100101 -256 - @
   - string
2. booleanos
   -true - 1
   - false - 0
 ### Estructurados
 1. array (lista)
   - array de tipo numerico
   - array de tip sytring
   - array de tipo mixto
   - como estructura un array es javascript
   ![alt text](assets/image.png)
2. objetos (diccionario)
   son similares alas listas con la unaica diferencia que en vez de tener valor e indice sus elementos
   trabajan con la clave:valor
   -como esta estructurado un obvjeto de javascript
## 2. variable(enlaces,brinding)
es la tecnica que se usa para poder apuntar a una direccion en memoria y 
alvalor o dato relacionado o  que se encuentre almacenado en ese momento.
tenemos dos pasos para crear una variable
1. primero declarar variable/costante
2. segundo inicializar variable/constante
**Observacion**
para crear  una variable primero tenemos que crear el enlace luego darle elnombre de la variable/constante;para 
variavles tenemos las bpalabrasreservadas`keyword`-`let`,`var`
**RECOMENDACIONES**
- `let`usar cuando el valor tendra que variar
- `const`usar cuando elvalor sera elmismo siempre
- `var`evitar usar
`let`,`var` ambos nos permite crear  variables su unica diferencia es el alcanse ambito o`scope`averiguar
## 3. OPERADORES.
su clasificacion general se divide en tres.
1. OPERADORES UNARIOS.
   Los operadores unarios son aquellos que estan ubicados a la izquierda del valor y que retornan un nuevo valor.
   - operacion de negacion
2. OPERADORES BINARIOS.
   los operadores binarios son aquellos que estan en medio de dos valores y retornan un unico valor.
   - operaciones aritmeticos.
   - operadores de compracion.
   - operadores logicos.
3. OPERADORES TERNARIOS.
   los operadores ternarios son aquellos que evaluan tres valores y que retornan un solo valor.
   - operador condicional.
## 4. CONTROLES DE FLUJO.
nuestros progrmas en javascript contienen mas de una sentencia y las sentencias son ejecutadas una a una como si
fuera una historia, de arriba havia abajo como un camino recto.
javascript nos permite crear caminos alternativos en nuestros programas dependiendo de una decision a esto se le 
conoce como caminos o ejecucion condicional, que ejecutara una sentencia u otras teniendo encuenta la condicion
asi podemos crear multiples caminos u opciones en nuestro programas.
si tenemos una condicion verdadera se ejecutara una sentencia si tenemos una condicion false se ejecutara otra
sentencia totalmente distinta.
*OBSERVACION* la ejecucion condicional rompe el flujo normal de un programa.
### 1.CONTROLES DE DECISION(IF-ELSE)
tarea con sus ejemplos
### 2.BLUCLES(FOR)
### 3.BLUCLES(WHILE)

## 5.FUNCIONES.
la funciones en javascrip son bloques de codigo que se ejecutan de manera independiente, podemos decir tambien que 
son programas que toman datos como entra y retornan otros datos como salida.
las funcione son fundamentales para el correcto ordenamiento denuestro codigo ademas que nos permkiten separar de una
manera mas ordenada muestra logica y evitar repartir el codigo muchas veces.
### TIPOS DE FUNCIONES:
#### 1. FUNCIONES POR DECLARACION
este tipo de funcion es la mas conocida y mas usada su estructura es la siguiente:

### TAREA:
### FUNCIONES POR EXPRESION:
Una función por expresión es una función que se define como una expresión y se asigna a una variable. Se utiliza la palabra clave function seguida de los parámetros y el cuerpo de la función.
const suma = function(a, b) {
  return a + b;
};

console.log(suma(2, 3)); // Salida: 5
### FUNCIONES DE FECHA (ARROW FUNCTION)
Las funciones de flecha son una forma más concisa de definir funciones en JavaScript. Utilizan la sintaxis => para separar los parámetros del cuerpo de la función.
const suma = (a, b) => {
  return a + b;
};

console.log(suma(2, 3)); // Salida: 5
Si la función solo tiene una línea de código, puedes omitir las llaves y la palabra clave return:
const suma = (a, b) => a + b;

console.log(suma(2, 3)); // Salida: 5
Las funciones de flecha también tienen algunas diferencias en cuanto al contexto de this, que puede ser beneficioso en ciertas situaciones.
## 6. METODOS PAARA TRABAJAR CON DATOS ESTRUCTURADOS
los metodos son funciones que dan funcionalidades extras a los tipos de datos en los cuales se aplican, un metodo es antesedido
por un tipo de dato y un punto.
*ejemplo*
el ejemplo mas claro de un metodo es el .lengt - este metodo nos permite o nos retorna la cantidad de caracteres de un string
o la cantidad de elementos de una lista.
js
"hola".length //4
[2,5,4,6,7].length //5

>[!TIP] los metodos en su mayoria solo se aplican a tipo de datos string, listas y objetos, en su gran parte son aplicadospara listas.
### 6.1 METODOS PARA STRING - CADENAS DE TEXTO
#### LENGTH
devuelve la longitud de una cadena
js
let mensaje="hola como estas"
console.log(mensaje.lenght)
//retorna -> 15

#### TOLOWERCASE
devuelve una cadena en minuscula
js
let texto="hola"
console.log(texto.tolowercase())
// retorna -> hola

#### TOUPPERCASE
devuelve una  cadena en mayusculas
js
let texto="hola"
console.log(texto.toUpperCase())
// retorna -> HOLA

#### CONCAT 
combina el texto de dos o mas cadenas
```js
let nombre="kcapa"
let saludo="hola"
//let concatenado=nombre+saludo
console.log(saludo.concat(nombre))

let cad1="oh "
let cad2="me "
let cad3="vengo"
console.log(cad1.concat(cad2,cad3))
//retorna -> oh me vengo
```
### TRIM
este metodo elimina los espacios que existen al inicio o final de una cadena o texto.
```js
let texto="   hola"
let nuevotexto=texto.trim() //hola
let otrotexto="hola   "
let nuevoOtrotexto=otrotexto.trim()//hola
```

#### slice - corte
este metodo  nos permite extaraer partes de una cadena, espesificando sus indices, donde comensar y asta donde mostarar 
```js
let parrafo= "hola soy ronny"
//solo quiero que mew muuestre ronny 
let nombre=parrafo.slice(9)//ronny
let soy=parrafo(5,8) // soy
```
### split -divide
este metodo retorna una lista basandose en un separador que se le indique
```js
let parrafo="solo se que nada se"
parrafo.split("")//["solo","se","que","nada","se"]
let url="google.com/search?=gatitos"
let gatito=url.split("=")//["google.com/search?","gatitos"]
console.log(gatito[1])//gatitos
let lista de frutras="manzana,tomate,pera,naranja"
lista de frutas,split(",")
```


### 6.2 METODOS PARA LISTA - ARRAYS
### ACCEDER
### MODIFICAR
### CREAR 
### INSERTAR
### ELIMINAR
### ORDENAR 
### 6.2 METODOS PARA OBJETOS.
## 7. DOM