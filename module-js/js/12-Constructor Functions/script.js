const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
  
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    }
  ];
  //console.log(koders)
  
  /*
  Ejercicio en clase:
  Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
  Prototipo de tipo koder
  Obtener la edad a partir de la fecha de nacimiento
  Obtener promedio de sus scores
  ---
  Colección de Koder que pertenezcan a JavaScript
  Colección de Koder que pertenezcan a Python
  {
    javascrip: [
      koder1
    ],
    python: [
      
    ]
  }
  */

const getAge =  (age) => {
  const currentYear = new Date().getFullYear();
  age = age.slice(0,4);
  return currentYear - parseInt(age.slice(0,4));
}
  
const getAverage = (scores) => {
  return scores.reduce((acum, next) => {
    return acum + next.score / scores.length;
  },0)
}
  
function Koder (name, lastName, age, generation, bootcamp, average) {
  this.name = name;
  this.lastName = lastName;
  this.age = getAge(age);
  this.generation = generation;
  this.bootcamp = bootcamp;
  this.average = parseInt(getAverage(average).toFixed(2));
}
  
const newKoders = koders.map(koder => {
    return new Koder(koder.name, koder.lastName, koder.birthday, koder.generation, koder.bootcamp, koder.scores);
});
console.log(newKoders);

const filterByBootcamp = (koders) =>{
  let outJS = []
  let outPy = []
  const xtractKoders = koders.map(koder=>{
      koder.bootcamp === 'JavaScript' ? outJS.push(koder): outPy.push(koder);
      return;
  });
  return{
    Javascript: outJS,
    Python:outPy
  };
}
console.log(filterByBootcamp(newKoders));

//Agrupar con reduce
filterByBootcamp2 = (orderedKoders) =>{
  const result = orderedKoders.reduce((acum,item) => {
    acum[item.bootcamp] = acum[item.bootcamp] || [];
    acum[item.bootcamp].push(item);
    return acum;
  },Object.create(null));
  return result;
}
console.log(filterByBootcamp2(newKoders));

