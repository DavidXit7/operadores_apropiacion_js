//Aqui se declaran las variables a usar
let nota_1, nota_2, nota_3, promedio_notas;


//Aqui se le pide al usuario ingresar valores de entrada para luego usarlos en la operacion
nota_1 = prompt("Ingrese el valor de la nota 1: ")
nota_2 = prompt("Ingrese el valor de la nota 2: ")
nota_3 = prompt("Ingrese el valor de la nota 3: ")

//Aqui se hace la conversion de las variables a tipo float 
nota_1 = parseFloat(nota_1)
nota_2 = parseFloat(nota_2)
nota_3 = parseFloat(nota_3)

//Aqui se realiza la operacion para determinar el promedio de las notas
promedio_notas = (nota_1 + nota_2 + nota_3) / 3;

//Aqui se imprime el resultado del promedio total junto con un mensaje
alert("El promedio de las notas del o la estudiante es de: " + promedio_notas);