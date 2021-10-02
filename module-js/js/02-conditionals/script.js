// const age = 18;

// if(age > 0 && age <=18){
//     console.log('No es adulto');
// }else if(age >18 && age <= 25 ){
//     console.log('Es adulto');
// }


// const caso = 10;

// switch(caso){
//     case 10:
//         console.log('Bien');
//         break;
    
//     case 22:
//         console.log('mal');
//         break
    
//     default:
//         console.log('Anyway');
//         break;
// }

// //Operador ternario
// const age = 18

// const resultado = age >= 18 ? 'Es adulto': 'no es adulto';
// console.log(resultado);




// //Numeros pares
// let numero = Number(prompt('Escribe un número del 1 al 100'));

// if (numero >= 1 && numero <= 100 ){
//     if (numero%2 == 0){
//         console.log('El número es par');
//     }else{
//         console.log('El número es impar');
//     }
// }else{
//     console.log('Número inválido');
// }

// //numero mayor
// let num1 = Number(prompt("Escribe número 1:"));

// let num2 = Number(prompt("Escribe número 2:"));

// if (num1 == num2){
//     console.log('Los números son iguales');
// }else if(num1 > num2){
//     console.log(`El número ${num1} es mayor que ${num2}`);
// }else{
//     console.log(`El número ${num2} es mayor que ${num1}`);
// }

// //Peso
// let name = (prompt("Escribe tu nombre:"));

// let peso = Number(prompt("Escribe tu peso:"));

// let pesoLuna = peso / 6

// console.log(`Tu peso en la luna sería de ${pesoLuna} kg`);


//calificaciones
let numero = Number(prompt("Escribe un número del 0 al 100:"));

if (numero >= 0 && numero <= 100 ){
    if(numero >= 90){
        console.log('A');
    }else if(numero >= 80 && numero < 90){
        console.log('B');
    }else if(numero >= 70 && numero < 80){
        console.log('C');
    }else if(numero >= 60 && numero < 70){
        console.log('D');
    }else if(numero >= 50 && numero < 60){
        console.log('E');
    }else{
        console.log('F');
    }

}else{
    console.log('Número inválido');
}