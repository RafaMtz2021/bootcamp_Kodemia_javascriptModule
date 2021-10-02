// let perro = {
//     nombre: 'huesos',
//     raza: 'galgo ingles'
// }

// console.log(perro.nombre);

// console.log(perro['raza']);

// let perros = [
//     {
//         nombre: 'huesos',
//         raza: 'galgo ingles'
//     },
//     {
//         nombre: 'solovino',
//         raza: 'galgo ingles',
//         apodos: ['apodo1', 'apodo2','apodo3',4]
//     }
// ]

// console.log(perros);
// console.log(perros[0]);
// console.log(perros[1]);

//declarar variable
// let nombre;

// //inicializar
// nombre = 'Rafa';
// console.log(window);

// //Error: Uncaught SyntaxError: Missing initializer in const declaration
// //const perro;
// const perro1 = 'huesos';
// console.log(perro1);

// const perro2 = {
//     nombre: 'huesos',
//     raza: 'galgo'
// }

// perro2.nombre = 'Mango'
// console.log(perro2);


// //SCOPE DE VARIABLES
// var primero = 'scope global';

// {
//     var scope = 'scope de bloque';
//     console.log(primero);
// }

// // console.log(scope);

// let primero = 'scope global';

// {
//     let scope = 'scope de bloque';
//     console.log(primero);
// }

// console.log(scope); //En este caso enviara error de que la variable no esta definida

// // Se pueden declarar afuera del bloque y tienen scope aun dentro del bloque
// let myVariable = 'prueba exterior';

// {
//     console.log(myVariable);
// }


// let num1 = 0, num2 = 0, suma = 0;

// num1 = 1;
// num2 = 0;
// suma = num1 + num2;


// if (suma >= 25){
//     console.log('Good')
// }else if(suma >= 10 && suma <= 24){
//     console.log('Medium');
// }else{
//     console.log('Bad');
// }

//asignacion suma
// let numero = 5;
// numero += 5;
// console.log(numero);

//asignacion multiplicacion
// let numero = 5;
// numero *= 5;
// console.log(numero);

//asignacion division
// let numero = 5;
// numero /= 5;
// console.log(numero);

// //asignacion potencia
// let numero = 5;
// numero **= 5;
// console.log(numero);

//Primero suma
// let numero = 5;
// ++numero
// console.log(numero);

//Suma despues
// let numero = 5;
// numero++
// console.log(numero);
