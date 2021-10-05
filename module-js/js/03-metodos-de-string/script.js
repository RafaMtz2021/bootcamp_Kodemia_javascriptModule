//Ejercicios

//Nombre a mayusculas y minusculas
// let nombre = prompt("Escribe tu nombre y apellidos:");
// let nameD = nombre.split(" ");

// nomMinusculas = nameD[0].toLowerCase();

// nomMayusculas = nameD[1].toUpperCase();

// console.log(`Resultado: ${nomMinusculas} ${nomMayusculas}`);


//Pide nombre e indica caracteres
// let nombre = prompt("Escribe tu nombre completo:");
// let letra;
// let cuenta = 0;

// for (let i = 0; i < nombre.length; i++) {
//     letra = nombre.charAt(i);
//     if(letra != " "){
//         cuenta = cuenta + 1
//     }
//  }
//  console.log(`Tu nombre tiene ${cuenta} caracteres`);



////Contar vocales y consonantes
   let myString = prompt("Escribe tu nombre completo:");

    vowels = ['a','e','i','o','u','á','é','í','ó','ú'];
    let counterVowels = 0;
    let counterConsonants = 0;

    for(let i=0;i<myString.length;i++){
        let caracter = myString.charAt(i);
        //console.log(caracter);
        if (vowels.includes(caracter)) {
            //console.log(`${caracter} es vocal`);
            counterVowels ++
        } else if(caracter === " ") {
            continue
        }else{
            //console.log(`${caracter} es consonante`);
            counterConsonants ++
        }
    }
    console.log(`Tu nombre tiene ${counterVowels} vocales y ${counterConsonants} consonantes / sin contar espacios`);



//Reemplazar palabras
// const leyenda = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado.";

// let coincidencias = leyenda.search('estudiante') - 1;
// let reemplazar = leyenda.replaceAll('estudiante','Koder');

// console.log(`Estudiante aparece ${coincidencias} veces y la leyenda nueva es: ${reemplazar}`);

// //Palabra más larga
// let palabra = prompt("Escribe dos palabras:");
// let partir = palabra.split(" ");
// let parte1 = partir[0].length;
// let parte2 = partir[1].length;

// if (parte1 > parte2){
//     console.log(`La palabra más larga es ${partir[0]} porque tiene ${parte1} caracteres`);
// }else{
//     console.log(`La palabra más larga es ${partir[1]} porque tiene ${parte2} caracteres`);
// }
