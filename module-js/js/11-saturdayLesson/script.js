// Ordenar los libros en orden alfabetico
// realizar filtrado dinamico por genero,
// realizar busqueda por titulo, encontrar coincidencias
// obtener top 3 de los libros mas rankeados
// obtener los 3 libros mas baratos
// obtener el libro con fecha de publicacion mas reciente,
// obtener los libros fuera de stock

const bookList = [
    {
        name : "The Lightning Thief",
        author : "Rick Riordan",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 5,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "Old Possum's Book of Practical Cats",
        author : "T. S. Eliot",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 3,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "The Everything Book of Cats and Kittens",
        author : "DK",
        genre_s : "Suspense",
        inStock : true,
        pages : 120,
        ratingCount: 2,
        price: {
            amount:5.99,
            currencyCode:"USD"
        },
        publishedDate:"2018-06-12",
        tags :[
            "Best Seller","Popular"
        ]
    },
    {
        name : "There are Cats in this Book",
        author : "Viviane Schwarz",
        genre_s : "Didactic",
        inStock : true,
        pages : 220,
        ratingCount: 4,
        price: {
            amount:17.99,
            currencyCode:"USD"
        },
        publishedDate:"2008-06-12",
        tags :[
            "Cats","Animals"
        ]
    },
    {
        name : "Don Quijote",
        author : "Miguel de Cervantes",
        genre_s : "Literature",
        inStock : false,
        pages : 520,
        ratingCount: 7,
        price: {
            amount:47.99,
            currencyCode:"USD"
        },
        publishedDate:"1990-06-12",
        tags :[
            "Best Seller","Reference"
        ]
    },
    {
        name : "The lord of the rings",
        author : "J.R.R. Tolkien",
        genre_s : "fantasy",
        inStock : false,
        pages : 620,
        ratingCount: 9,
        price: {
            amount:59.99,
            currencyCode:"USD"
        },
        publishedDate:"2001-06-12",
        tags :[
            "Swords","Golum"
        ]
    },
    {
        name : "Harry Potter and the Philosopher's Stone",
        author : "J.K. Rowling.",
        genre_s : "fantasy",
        inStock : true,
        pages : 820,
        ratingCount: 10,
        price: {
            amount:99.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Magician","Harry Potter"
        ]
    },
    {
        name : "The Hobbit",
        author : "J.R.R. Tolkien.",
        genre_s : "fantasy",
        inStock : true,
        pages : 1220,
        ratingCount: 8,
        price: {
            amount:69.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Golum",
            "Dragons",
            "Best Seller"
        ]
    },
];


// Obtener todos los tags que existen
// [
//     'tag1', 
//     'tag2',
// ]

// Crear una funcion
// Iterar el arreglo bookList
// obtener la propiedad de tags
// iterar el arreglo de tags
// Crear variable para guardar los tags
// comparar si existe en mi variable
// veo si lo agrego o no 



const getTags = () => {
    let tags = [];
    console.log(bookList.length)
    bookList.forEach((item) => {
        console.log(item.tags)
        item.tags.forEach((tag) =>{
            if(!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    });
    return tags;
};


// -Ordenar los libros en orden alfabetico tomando el nombre
// crar la funcion 
// irterar el arreglo de libros
// tomar el nombre de cada libro 
// usar el metodo sort para ordenarlos 
// returnar el arreglo ordenado 

const orderBooks = () => {
    return bookList.sort(function (book, otherBook) {

        if (book.name > otherBook.name) {
          return 1;
        }
        if (book.name < otherBook.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })

};

console.log(orderBooks())


// ['objeto del libro']

// realizar filtrado dinamico por genero,

// escribir funcion que reciba el genero como parametro 
// usar filter, reduce para iterar el arreglo
// retornar el arreglo filtado 

const getBooksByGenre = (genreToFilter) => {
    return bookList.filter((item) => item.genre_s === genreToFilter);
};
console.log(getBooksByGenre('fantasy'))






// realizar busqueda por titulo, encontrar coincidencias

// [
//     libros
// ]

// generar la fncion que reciba que parametro el nombre la palabra a buscar
// crar un arreglo vacio donde guarademos los libros con coincidencias
// usar un filter usando de condicion un a expresion regular o usando includes
// retornar el arreglo con los libros con coincidencias



const getBookByTitle = (search) => {
    return bookList.filter((book) => {
        return book.name.includes(search);
        // const regex = new RegExp(search, 'g');
        // console.log(regex)
        // return book.name.match(regex)
    });
};

console.log(getBookByTitle('Cats'))


// obtener top 3 de los libros mas rankeados
//crear funcion
//recorrer arreglo y extraer los libros ordenar por ratingCount en descendente
//extraer los 3 primeros

const getRatingBookTop3 = () =>{
    return bookList.sort(function (book, otherBook) {

        if (book.ratingCount > otherBook.ratingCount) {
          return -1;
        }
        if (book.ratingCount < otherBook.ratingCount) {
          return 1;
        }
        // a must be equal to b
        return 0;
      })
}
console.log(getRatingBookTop3().slice(0,3));

//// obtener los 3 libros mas baratos
const getCheapestBookTop3 = () =>{
    return bookList.sort(function (book, otherBook) {

        if (book.price.amount > otherBook.price.amount) {
          return 1;
        }
        if (book.price.amount < otherBook.price.amount) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
}
console.log(getCheapestBookTop3().slice(0,3));

// obtener el libro con fecha de publicacion mas reciente,

const getLatestBookTop3 = () =>{
    return bookList.sort(function (book, otherBook) {

        if (book.publishedDate > otherBook.publishedDate) {
          return -1;
        }
        if (book.publishedDate < otherBook.publishedDate) {
          return 1;
        }
        // a must be equal to b
        return 0;
      })
}
console.log(getLatestBookTop3().slice(0,3));

// obtener los libros fuera de stock
const outOfStock = bookList.filter(book=>book.inStock === false);
console.log(outOfStock);



// Fucnion declarativa 

// [1,2].forEach(() => {});

// function name(params) {
//     return
// };

// const numbers = [1, 2,4];


// const getResult = (array, callback) => {
//     console.log(array)
// };

// const promediar = () => {
// console.log('funcion prodemdiar')
// };

// getResult(numbers, promediar )


// // Funcion de expresion 