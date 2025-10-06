//Declaro la constante operacion
const operacion = (20 + 10) / 5 + 3 * 2 - 4 * (20 + 10) / 5 + 3 * 2 - 4 * (20 + 10) / 5 + 3 * 2 - 4;


//Primero se evalúan las operaciones dentro de los paréntesis: (20 + 10)
//Luego, se realizan las divisiones y multiplicaciones, que tienen mayor precedencia que suma y resta, dentro de esto se evalúan en orden de izquierda a derecha
//Después, se realizan las sumas y restas, también de izquierda a derecha
//Por ultimo, se obtiene el resultado final de la expresión y se asigna a la variable 'operacion'

console.log("El resultado de la operacion es de: " + operacion);