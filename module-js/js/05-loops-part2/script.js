function convertToUpperCase() {
    let outPutString = '';
    inputString = (prompt('Ingresa alguna frase: ')).toLowerCase();

    for(let i=0;i<inputString.length;i++){
        character = inputString.charAt(i);
        
        if(i%2 === 0){
            outPutString += character.toUpperCase();
        }else{
            outPutString += character.toLowerCase();
        }
    }
console.log(outPutString);
}

//convertToUpperCase();

function convertToUpperCase() {
    let outputString = [];
    inputString = (prompt('Ingresa alguna frase: ')).toLowerCase();

    for(let i=0;i<inputString.length;i++){
        character = inputString.charAt(i);
        
        if(i%2 === 0){
            outputString.push(character.toUpperCase());
        }else{
            outputString.push(character.toLowerCase());
        }
    }
    console.log(outputString.join(''));
}

//convertToUpperCase();

/*
Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.

Ejemplo:
input   
   - Freddy Krueger
   - Michael Myers
   - Jason Vorhees

output: 
    koder 1: Freddy Krueger
    koder 2: Michael Myers
    koder 3: Jason Vorhees
*/

function newKoders() {
    let exitFlag = false;
    let dbKoders =[];
    let numKoders = 0;

    do{ 
        let initialData = prompt('¿Cuántos koders guardarás?: \n X para salir');

        if (initialData === 'X' || initialData === 'x') {
            console.log('¡Hasta pronto!');
            exitFlag = true;
        }else{
            numKoders = Number(initialData);
            if(numKoders > 10){
                console.log(`¡${numKoders}!. Debes estar bromeando, intenta nuevamente...`);
            }else if(numKoders > 5 && numKoders <=10){
                console.log(`¡${numKoders}!. Aún es demasiado, intenta con 5 o menos...`);
            }else if(numKoders >=1 && numKoders <= 5){
                for(let i=1;i<=numKoders;i++){
                    const nameKoder = prompt('Ingresa el nombre completo del Koder: ' + i).trim();
                    let buildData = `koder ${i}: ${nameKoder}`;
                    dbKoders.push(buildData);
                }
                exitFlag = true;           
            }else{
                console.log(`Datos inválidos, intenta nuevamente...`);
            }
        }

    }while(exitFlag != true);
   
    if(dbKoders.length === 0){
        return `Sin datos de salida`;
    }else{
        return dbKoders;
    }
}
console.log(newKoders());