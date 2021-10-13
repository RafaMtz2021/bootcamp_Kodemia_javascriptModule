const mentorsArray = [
    {
        name:"Ivan Diaz",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alan Medina",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Elvira Camarillo",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Alejandra Paez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
      name:"Alejandra Paez",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  }
  ]

  /* usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/

//-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

const getScore = subject => {
    let promedio = 0;
    let suma = 0;
    mentorsArray.forEach((mentor, index) => {
        mentor.scores.forEach(materia => { 
            if(materia.signature === subject){
                suma += materia.score;
                promedio = suma/(index + 1); 
            };
        });
    });
    return `El promedio de ${subject} es: ${promedio}`;
  }
  console.log(getScore('ReactJS')); //HTML, CSS, JS, ReactJS


/*-crear un array de strings con la siguiente forma:
"Mi nombre es {nombre} y mi promedio es de {promedio}"
*/
const getAllScores = () => {
    let suma = 0;
    let promedio= 0;
    let namePromedioArray = []
    mentorsArray.forEach(mentor => {
        mentor.scores.forEach((materia, index) => {
            suma += materia.score;
            promedio = suma/(index + 1);
        });
        namePromedioArray.push(`Mi nombre es ${mentor.name} y mi promedio es de ${promedio}`)
        suma = 0;
    });
    return console.log(namePromedioArray);
};
getAllScores();


//-Obtener el promedio individual de cada mentor
const getScoreByName = mentorName => {
    let suma = 0;
    let promedio= 0;
    mentorsArray.forEach(mentor => {
        if(mentor.name === mentorName){
            mentor.scores.forEach((materia, index) => {
                suma += materia.score;
                promedio = suma/(index + 1);
            });
            console.log(`Promedio individual de ${mentor.name} es de ${promedio}`);
        }
        suma = 0;
    });
  };
  getScoreByName('Alejandra Paez');


//-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
const selectedGroup = calif => {
    let suma = 0;
    let promedio= 0;
    mentorsArray.forEach(mentor => {
        mentor.scores.forEach((materia, index) => {
            suma += materia.score;
            promedio = suma/(index + 1);
        });
        if(promedio >= calif){
            console.log(`Soy ${mentor.name} y mi promedio de ${promedio} es mayor a ${calif}`);
        }
        suma = 0;
    });
};
selectedGroup(8);