// const persona = {
//     nombre: 'Freddy'
// };

//console.log(persona.nombre);

//notación de corchetes
//console.log(persona['nombre']);

// persona.apellido = 'Kruger';
// console.log(persona);

// persona['apellido'] = 'Kruger';
// //console.log(persona);

// persona.edad = 15;
// //console.log(persona);

// persona.saludar = function(nombre){
//     console.log(`Hola ${nombre}`);
// };

// //persona.saludar('Rafita');


// const {nombre, saludar, apellido} = persona;

// console.log(apellido,'destructuring');

// const personajes = ['item1', 'item2','item3'];

// const [] = personajes;


//CON OBJETOS
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
                    let dividedName = nameKoder.split(' ');
                    let first = dividedName[0].charAt(0).toUpperCase();
                    let second = dividedName[1].charAt(0).toUpperCase();
                    let buildData = {
                        id:i, 
                        nombre:dividedName[0],
                        apellidos:dividedName[1],
                        iniciales:`(${first}${second})`
                    };
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