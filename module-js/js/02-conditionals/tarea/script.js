let option = 0;
let valido = true;
let cantidad = 0;
let resultado = 0;
let salida = 0;
const euro = 0.042;
const usDollar = 0.049;
const coronaCheca = 1.07;
const francoSuizo = 0.046;


function convUSA(cantidad){
    resultado = (cantidad * usDollar).toFixed(2);
    return resultado;
}

function convEuro(cantidad){
    resultado = (cantidad * euro).toFixed(2);
    return resultado;
}

function convCheca(cantidad){
    resultado = (cantidad * coronaCheca).toFixed(2);
    return resultado;
}

function convFranSuizo(cantidad){
    resultado = (cantidad * francoSuizo).toFixed(2);
    return resultado;
}

do{
    cantidad = Number(prompt("***Casa de Cambio***: ¿Que cantidad en MXN deseas convertir ?"));

    if(isNaN(cantidad)|| cantidad === 0){
        valido = false;
        console.log('Cantidad inválida, intenta nuevamente');
    }

    if(valido === true){
        option = Number(prompt("***Casa de Cambio***: ¿A que pais vas a viajar?: 1) EEUU 2)Unión Europea 3)República Checa 4)Suiza 5)Salir"));

        if(isNaN(option)){
            console.log('Opción inválida, intenta nuevamente');
        }else{
            switch(option){
                case 1:
                    resultado = convUSA(cantidad);
                    console.log(`$${cantidad} MXN equivale a $${resultado} USD`);
                    break;
                case 2:
                    resultado = convEuro(cantidad);
                    console.log(`$${cantidad} MXN equivale a $${resultado} EURO`);
                    break;
                case 3:
                    resultado = convCheca(cantidad);
                    console.log(`$${cantidad} MXN equivale a $${resultado} CORONAS CHECAS`);
                    break;
                case 4:
                    resultado = convFranSuizo(cantidad);
                    console.log(`$${cantidad} MXN equivale a $${resultado} FRANCOS SUIZOS`);
                    break;
                case 5:
                    console.log('Gracias por usar nuestro servicio, vuelva pronto...');
                    break;
                default:
                    console.log('Opción no encontrada, intente nuevamente...');
                    break;
            }

        }
    }

    if(option != 5){
        salida = Number(prompt("Deseas realizar otra operación: Sí?: click enter / NO?: click 5"));
        if(salida === 5){
            console.log('Gracias por usar nuestro servicio, vuelva pronto...');
            option = 5;
        }
    }

    valido = true;
}
while (option != 5)