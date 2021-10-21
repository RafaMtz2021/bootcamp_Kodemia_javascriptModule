/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

// [
//     'banda1',
//     'banda2',
// ];

/*
- Agrupar los nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/

//- Agrupar los nombres de la bandas, que no esten repetidas =======Solución 1
const singleBands = (bandArray) => {
    const setObj = new Set();
    return bandArray.reduce((acc,cur)=>{
        if(!setObj.has(cur.band)){
            setObj.add(cur.band); 
            acc.push(cur.band);
        }
        return acc;
    },[]);
}
//console.log(singleBands(songsData)+' Sol.1 ');

//- Agrupar los nombres de la bandas, que no esten repetidas =======Solución 2
const singleBands2 = (bandArray) => {
    const bands = bandArray.map(songs=> {
      return [songs.band,songs.band];
    });
    return [...new Map(bands).values()];
}
//console.log(singleBands2(songsData)+' Sol.2 ');

  //- Agrupar los nombres de la bandas, que no esten repetidas =======Solución 3
const nameBands = () => {
    const bands = songsData.map(song => song.band);
    const names = bands.filter((name, index) => bands.indexOf(name) === index);
    return names;
}
//console.log(nameBands()+' Sol.3 ')


//- Agrupar las canciones por banda
const songsByBand = (bandArray) => {
    let playlist = {};
    bandArray.map((band)=>{
        if(band.band in playlist){
            playlist[band.band] += `& ${band.name}  `;
        }else{
            playlist[band.band] = `* ${band.name} `;
        }
    })
    return console.log(playlist);
}
//songsByBand(songsData);

/*- La cancion con más reproducciones
- La cancion con más likes
*/
const mostReproductions = (bandArray)=>{
    const getMostReproduced = () => {
        const arrayReproductions = bandArray.map(songs=>songs.statistics.reproductions);
        const maxReproductions = Math.max(...arrayReproductions);
        const searchSongMostReproduced = bandArray.filter(songname => songname.statistics.reproductions === maxReproductions);
        const [{name}] = searchSongMostReproduced;
        return {
            song: name, 
            reproductions: maxReproductions
        };
    }
    
    const getMostLiked = () =>{
        const arrayLiked = bandArray.map(songs=>songs.statistics.likes);
        let maxLiked = Math.max(...arrayLiked);
        const searchSongMostLiked = bandArray.filter(songname => songname.statistics.likes === maxLiked);
        const [{name}] = searchSongMostLiked;
        return {
            song: name,
            likes: maxLiked
        }
    }

    return console.log(getMostLiked(),getMostReproduced());
}
//mostReproductions(songsData);


/*- La cancion con más reproducciones
- La cancion con más likes
*/
//Paramétrica
const statisticsByType = (bandArray,type)=>{  
    const mapPredicate = songs=>songs.statistics[type];
    const arrayAmountByType = bandArray.map(mapPredicate);
    const maxNumber= Math.max(...arrayAmountByType);
    const searchTopSong = bandArray.filter(songs=>songs.statistics[type] === maxNumber);
    const [{name}] = searchTopSong;
    return {
        criteria: type,
        song: name, 
        quantity: maxNumber
    };
}
//console.log(statisticsByType(songsData,'reproductions')); //'likes','reproductions'


let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron
- la edad promedio de todos los vacunados
- un array con aquellas personas que se vacunaron y que son menores a 30 años
- la edad promedio de los no vacunados
- el porcentaje de vacunados vs no vacunados
- el procentaje de mujeres que se vacunaron
- el porcentaje de los hombres que vacunarion
*/

//- Un array con aquellas personas que se vacunaron *** Al querer pasarlo a REDUCE no encuentro una forma más eficiente que con filter, ¿algún tip?
const vaccinatedPeople = arrayPersons.filter(person => person.vaccinated === true)
console.log(vaccinatedPeople);

//- la edad promedio de todos los vacunados
const avgAgeVaccinatedPeople = [...vaccinatedPeople].reduce((acum,person)=>{
    return acum+(person.age/vaccinatedPeople.length)
},0)
console.log(avgAgeVaccinatedPeople.toFixed(2)+' years');

//- un array con aquellas personas que se vacunaron y que son menores a 30 años   *** Al querer pasarlo a REDUCE no encuentro una forma más eficiente que con filter, ¿algún tip?
const vaccinatedPeopleUnder30 = [...vaccinatedPeople].filter(person=>person.age<30)
console.log(vaccinatedPeopleUnder30);

//- la edad promedio de los no vacunados  *** Algún tip para hacerlo sólo con reduce y menos código??
const avgAgeNotVaccinatedPeople = (people) =>{
    const personsFiltered = people.filter(person=>person.vaccinated === false)
    const avg = personsFiltered.reduce((acum, person)=>acum+(person.age/personsFiltered.length),0)
    return avg;
}
console.log(avgAgeNotVaccinatedPeople(arrayPersons).toFixed(2)+' years');

//- el porcentaje de vacunados vs no vacunados
vaccinatedVsNotVaccinated = (vaccinated,universe)=>{
    percentageVaccinated = (vaccinated.length/universe.length)*100
    percentageNotVaccinated = 100 - percentageVaccinated
    return{
        vaccinated: percentageVaccinated+' %',
        notVaccinated: percentageNotVaccinated+' %'
    }
}
console.log(vaccinatedVsNotVaccinated(vaccinatedPeople,arrayPersons));

//- el procentaje de mujeres que se vacunaron
const vaccinatedWomen = (vaccinated) =>{
    const numWoman = vaccinated.filter(woman=>woman.gender==='mujer');
    womenPercentage = ((numWoman.length/vaccinated.length)*100).toFixed(2)
    return `women: ${womenPercentage} %`
}
console.log(vaccinatedWomen(vaccinatedPeople));

//- el porcentaje de los hombres que vacunaron
const vaccinatedMen = (vaccinated) =>{
    const numMen = vaccinated.filter(men=>men.gender==='hombre');
    menPercentage = ((numMen.length/vaccinated.length)*100).toFixed(2)
    return `men: ${menPercentage} %`
}
console.log(vaccinatedMen(vaccinatedPeople));


//   1-recoger dos dias de tareas
//   2- convertur las duraciones de las tareas en horas, en lugar de minutos
//   3-Filtarar todo lo que tomo dos horas o mas
//   4-Sumar todo
//   5-Multiplica el resultado por una tarifa de hora para facturacion por dia
//   6- produce una cantidad formateada en dolares
//   7-encadenar todos los metodos


const monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
];

const tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 60
    },
    {
        'name'     : 'A whole lot of nothing',
        'duration'  : 242
    }
];

//   1-recoger dos dias de tareas
const taskArray = [...monday,...tuesday];
console.log(taskArray);

//2- convertur las duraciones de las tareas en horas, en lugar de minutos
const covMinToHourArray = taskArray.map(task=>{
    return{
        name:task.name,
        duration:task.duration/60
    }
});
console.log(covMinToHourArray);

//3-Filtarar todo lo que tomo dos horas o mas
const taskMoreThan2Hours = covMinToHourArray.filter(task=>task.duration>=2);
console.log(taskMoreThan2Hours);

//4-Sumar todo
const summation = covMinToHourArray.reduce((acc,time)=>acc+time.duration,0)
console.log(summation);

//5-Multiplica el resultado por una tarifa de hora para facturacion por dia
const calculateRates = (rate) => summation * rate;
console.log(calculateRates(25));

//6- produce una cantidad formateada en dolares
const formatToDollar = `$ ${Number(calculateRates(25).toFixed(2))} USD`
console.log(formatToDollar);

//=============7-encadenar todos los metodos======================//

const taskProcessing = (duration,rate) => {
//   1-recoger dos dias de tareas
const taskArray = [...monday,...tuesday];
console.log(taskArray);
//2- convertur las duraciones de las tareas en horas, en lugar de minutos
const covMinToHourArray = taskArray.map(task=>{
    return{
        name:task.name,
        duration:task.duration/60
    }
});
console.log(covMinToHourArray);
//3-Filtarar todo lo que tomo dos horas o mas
const taskMoreThan2Hours = covMinToHourArray.filter(task=>task.duration>=duration);
console.log(taskMoreThan2Hours);
//4-Sumar todo
const summation = covMinToHourArray.reduce((acc,time)=>acc+time.duration,0)
console.log(summation);
//5-Multiplica el resultado por una tarifa de hora para facturacion por dia
const calculateRates = (rate) => summation * rate;
console.log(calculateRates(rate));
//6- produce una cantidad formateada en dolares
const formatToDollar = `$ ${Number(calculateRates(rate).toFixed(2))} USD`
console.log(formatToDollar);
}
taskProcessing(1,30);



//Agrupar con reduce
filterByBootcamp2 = (orderedKoders) =>{
    const result = orderedKoders.reduce((acum,item) => {
      acum[item.bootcamp] = acum[item.bootcamp] || [];
      acum[item.bootcamp].push(item);
      return acum;
    },{});
    return result;
  }
  console.log(filterByBootcamp2(newKoders));
  
  
  
  const fruits = ['apples', 'apples', 'bananas', 'oranges', 'apples', 'oranges', 'bananas', 'grapes'];
  
  function countOccurrence(accumulator, currentFruit){
      const currentFruitCount = accumulator[currentFruit];
      // if the fruit exists as a key in the  object, increment its value, else add the fruit as a key to the object with a value of 1
      if(currentFruitCount) {
          accumulator[currentFruit] = currentFruitCount + 1;
      } else {
          accumulator[currentFruit] = 1
      }
      
      return accumulator;
  }
  const initialValue = {};
  const count = fruits.reduce(countOccurrence, initialValue);
  console.log(count);



  const some = (predicate, array) =>
  array.reduce((acc, value) => acc || predicate(value), false);
  
  const equals3 = (x) => x === 3;

  some(equals3, [3]); // true
  some(equals3, [3, 3, 3]); // true
  some(equals3, [1, 2, 3]); // true
  some(equals3, [2]); // false
  