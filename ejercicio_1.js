//Declaracion de variables
let base, altura, area, perimetro;

//Aqui se piden datos de entrada al usuario
base = prompt("Ingrese el valor de la base: ");
altura = prompt("Ingrese el valor de la altura: ");

//Aqui hacemos la conversion de las variables para que sean de tipo numerico, en este caso de tipo float
base = parseFloat(base);
altura = parseFloat(altura);

//En las dos siguientes lineas se realizan las operaciones, para dar el resultado del area y perimetro del terreno
area = base * altura;
perimetro = 2 * (base + altura);

//Aqui se imprimen los resultados con un mensaje y haciendo uso de las variables creadas para almacenar los resultados de las operaciones
alert("El area del terreno rectangular es de: " + area);
alert("El perimetro del terreno rectangular es de: " + perimetro);