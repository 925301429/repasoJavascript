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
**OBSERVACION**
- `let`usar cuando el valor tendra que variar
- `const`usar cuando elvalor sera elmismo siempre
- `var`evitar usar
`let`,`var` ambos nos permite crear  variables su unica diferencia es el alcanse ambito o`scope`
averiguar

## 1.🔹 Tipos de ámbito o scope:
Ámbito global (Global scope)

La variable se declara fuera de cualquier función o bloque.

Se puede acceder desde cualquier parte del código.
## 2. Ámbito local (Local scope)

La variable se declara dentro de una función.

Solo se puede usar dentro de esa función.
## 3. operadores
## 4. controles de flujo
nuetros programas en javascript contienen mas de una sentencia y las sentencias son ejecutadas 
una a una como si fuera una historia, de arriba hacia abajo como un camino recto.
### 1. control de decicion(if-else)
javascrip nos permite cear caminos alternativos en nuetros programas dependiendo de una decicion a esto se le conoce como caminos o 
ejecucion condicional que ej3ecutara una sentencia
## 4.funciones
## 5. metodos para trabajar con datos estructurados
## 1.🔍 Acceder
- lista[indice] → Accede a un elemento de una lista.

- diccionario['clave'] → Accede a un valor por su clave.

- df['columna'] (en pandas) → Accede a una columna del DataFrame.

- df.loc[fila, columna] o df.iloc[indice_fila, indice_col] → Accede a celdas específicas.

## 2.✏️ Modificar
- lista[indice] = nuevo_valor

- diccionario['clave'] = nuevo_valor

- df.at[indice, 'columna'] = nuevo_valor → Cambia un valor específico.

- df['columna'] = df['columna'] * 2 → Modifica toda una columna.
## 3. 🆕 Crear
- lista = [] → Crea una lista vacía.

- diccionario = {} → Crea un diccionario.

- df = pd.DataFrame(datos) → Crea un DataFrame.

- df['nueva_columna'] = valores → Crea una nueva columna.

## 4. ➕ Insertar
- lista.append(valor) → Añade al final.

- lista.insert(indice, valor) → Inserta en posición específica.

- diccionario['nueva_clave'] = valor → Inserta nuevo par clave-valor.

- df.loc[nuevo_indice] = valores → Inserta una nueva fila.

## 5. ❌ Eliminar
- lista.remove(valor)

- lista.pop(indice)

- del diccionario['clave']

- df.drop('columna', axis=1) → Elimina columna.

- df.drop(indice, axis=0) → Elimina fila.

## 6. 🔃 Ordenar
- lista.sort() o sorted(lista)

- df.sort_values(by='columna')

- df.sort_index() → Ordena por índice.



