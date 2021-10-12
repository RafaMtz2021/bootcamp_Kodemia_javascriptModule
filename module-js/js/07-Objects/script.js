let songsData = [
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    }
  },
  {
    name: "Nikita",
    band: "Elton John",
    releaseYear: "1980",
    statistics: {
      likes: 9409483256,
      reproductions: 9843293,
    }
  },
  {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    }
  },
  {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
      likes: 25000,
      reproductions: 100000,
    }
  }, {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 95000,
    }
  }, {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
      likes: 128000,
      reproductions: 915000,
    }
  }, {
    name: "Daze",
    band: "Poets of the Fall",
    releaseYear: "2014",
    statistics: {
      likes: 3548413,
      reproductions: 87095138,
    }
  }, {
    name: "The Sweet Scape",
    band: "Poets of the fall",
    releaseYear: "2018",
    statistics: {
      likes: 26268856,
      reproductions: 2424568,
    }
  }
]

/*Tomando en cuenta el array songsData 

Ejercicio 1
input: 'The Cure'
output: {
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    }
  }
}
*/

input = 'Poets of the fall';

function searchBand(band) {
    for(let i=0;i<songsData.length;i++){
        if(songsData[i].band.toLowerCase() === band.toLowerCase()){
            let result = {
                name: songsData[i].name,
                band: songsData[i].band,
                releaseYear: songsData[i].releaseYear,
                statistics: {
                    likes: songsData[i].statistics.likes,
                    reproductions: songsData[i].statistics.reproductions
                }
                
            }
            console.log(result);
        }
        
    }
    
}
//searchBand(input);

/*
----------------------------
Ejercicio 2
-Generar el top 5 de las canciones mas escuchadas
-Mostrar la cancion mas reciente
-Mostrar el artista mas gustado a los fans
*/

//mas escuchada = reproductions
//mas reciente = release Year
//mas gustada = likes

function statistics() {
    top5();
    latest();
    loved();

function loved() {
    let love = [];
    
    for(let i=0;i<songsData.length;i++){
        const {statistics:{likes}} = songsData[i];
        love.push(likes);
    }
    love.sort(function (a,b){return b-a});
    
    for(let j=0;j<songsData.length;j++){
        const {name,statistics:{likes}} = songsData[j];

        if(love[0] === likes){
            console.log(`La canción: ${name} es la más gustada. Con ${likes} likes`);
        }
    }
}


function latest() {
    let top1 = [];
    
    for(let i=0;i<songsData.length;i++){
        const {releaseYear} = songsData[i];
        top1.push(releaseYear);
    }
    top1.sort(function (a,b){return b-a});
    
    for(let j=0;j<songsData.length;j++){
        const {name,releaseYear} = songsData[j];

        if(top1[0] === releaseYear){
            console.log(`La canción: ${name} es la más reciente. Del año ${releaseYear}`);
        }
    }
}


function top5() {
    let top5 = [];
    let counter = 1;

    for(let i=0;i<songsData.length;i++){
        const {statistics:{reproductions}} = songsData[i];
        top5.push(reproductions);
    }
    top5.sort(function (a,b){return b-a});
    console.log(`El top 5 de las canciones más reproducidas es: `);
    for(let i=0;i<5;i++){
     
        for(let j=0;j<songsData.length;j++){
            const {name,statistics:{reproductions}} = songsData[j];

            if(top5[i] === reproductions){
                
                console.log(`
                    número: ${counter}
                    canción: ${name}
                    reproducciones: ${reproductions}
                `);
                ++ counter;
            }

        }
    }
}
}
//statistics();


const cartShoppings = [
    {
        name: 'Coca lata 355ml',
        description: 'Coca lata 355ml',
        price: 11,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 1lt',
        description: 'Boing Mango 1lt',
        price: 18,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 3lt No Retornable',
        description: 'Coca-Cola 3lt No Retornable',
        price: 40,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 600ml',
        description: 'Coca-Cola 600ml',
        price: 14,
        type: 'drink'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      price: 27.5,
      type: 'chip'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      price: 25.5,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Jalapeño 100 g',
      description: 'Botanas Chips Papas Jalapeño 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Botana Paketaxo Quexo 215 g',
      description: 'Botana Paketaxo Quexo 215 g',
      price: 52.8,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Incógnita 64 g',
      description: 'Botana Doritos Incógnita 64 g',
      price: 18.15,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Sal y Limón 57 g',
      description: 'Botana Fritos Sal y Limón 57 g',
      price: 15.4,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 58 g',
      description: 'Botana Doritos Nacho 58 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Flamin Hot 62 g',
      description: 'Botana Doritos Flamin Hot 62 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Fuego Limón 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 42 g',
      description: 'Papas Sabritas Original 42 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Adobadas 42 g',
      description: 'Papas Sabritas Adobadas 42 g',
      price: 16.5,
      type: 'chip'
    },
    {
      name: 'Cacahuates Hot Nuts Multintenso 50 g',
      description: 'Cacahuates Hot Nuts Multintenso 50 g',
      price: 11,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Chorizo Chipotle 57 g',
      description: 'Botana Fritos Chorizo Chipotle 57 g',
      price: 15.95,
      type: 'chip'
    },
    {
      name: 'Botana Chips Sal de Mar Bolsa 170 g',
      description: 'Botana Chips Sal de Mar Bolsa 170 g',
      price: 49.5,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Poffs 100 g',
      description: 'Botana Cheetos Poffs 100 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Fritas Stax Cheddar 156 g',
      description: 'Papas Fritas Stax Cheddar 156 g',
      price: 47.85,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 240 g',
      description: 'Papas Sabritas Original 240 g',
      price: 75.35,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 370 g',
      description: 'Botana Doritos Nacho 370 g',
      price: 82.5,
      type: 'chip'
    },
    {
      name: 'Chicharrón de Cerdo Sabritas 115 g',
      description: 'Chicharrón de Cerdo Sabritas 115 g',
      price: 55,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Torciditos 150 g',
      description: 'Botana Cheetos Torciditos 150 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Ruffles Queso 290 G',
      description: 'Papas Ruffles Queso 290 G',
      price: 71.5,
      type: 'chip'
    },
    {
      name: 'Dip Tostitos Queso Suave 255 g',
      description: 'Dip Tostitos Queso Suave 255 g',
      price: 69.3,
      type: 'chip'
    }
  ]


  /*
 Práctica:
   - obtener los productos de tipo chips en un arreglo
   - obtener los productos de tipo drink en un arreglo
   - obtener todos los productos < a $50
    - obtener >= $50
   - obtener el inventario total en valor de todos los productos
   - obtener el inventario total en valor de los productos tipo chips
   - obtener el inventario total en valor de los productos tipo drink
*/
//=========================================================================================
//- obtener los productos de tipo chips en un arreglo
//- obtener los productos de tipo drink en un arreglo
const productType = (product) => {
    const products = [];

    cartShoppings.forEach((cartShoppingProduct) => {
        if(cartShoppingProduct.type === product){
            products.push(cartShoppingProduct)
        }
    });return products;
}

//console.log(('drinks:' , productType('drink')));
//console.log(('chips:' , productType('chip')));
//=====================================================================================
//- obtener todos los productos < a $50
//- obtener >= $50
const productPrice = (operator) => {
    let criteria;
    cartShoppings.forEach((cartShoppingProduct) =>{
       
        operator === '<' ? criteria = cartShoppingProduct.price < 50 :
                           criteria = cartShoppingProduct.price >= 50;

        if(criteria){
            console.log(cartShoppingProduct);
        }
    });return;
}
//productPrice('<')
//===========================================================================================
//- obtener el inventario total en valor de todos los productos
//- obtener el inventario total en valor de los productos tipo chips
//- obtener el inventario total en valor de los productos tipo drink

const productSum = (indicator) => {
    let counter = 0;
    cartShoppings.forEach((cartShoppingProduct) =>{
        indicator === 'chip'  ?  criteria = cartShoppingProduct.type === indicator:
        indicator === 'drink' ?  criteria = cartShoppingProduct.type === indicator:
                                 criteria = cartShoppingProduct.price > 0;
        if(criteria){
            counter += cartShoppingProduct.price;
        }
    });return console.log(`${indicator} : $ ${counter.toFixed(2)}`);
}
productSum('chip') //'all', 'chip', 'drink'