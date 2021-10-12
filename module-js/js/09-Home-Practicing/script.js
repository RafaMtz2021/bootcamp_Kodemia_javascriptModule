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
const avgScoreBySignature = (signature) =>{
    const filteredArray = mentorsArray.map(mentor => mentor.scores.filter(scores => scores.signature === signature));
    const extractScores = filteredArray.map(subject => subject.map(scores => scores.score));
    const listFound = extractScores.reduce((suma,score) => (Number(suma) + Number(score)),0)
    return console.log(`El promedio de ${signature} es ${listFound/extractScores.length}`);
};
avgScoreBySignature('ReactJS'); //'HTML', 'CSS', 'JS', 'ReactJS'


//-Obtener el promedio individual de cada mentor
const avgScoreByMentor = (mentor) =>{
    const filteredArray = mentorsArray.filter(mentors => mentors.name === mentor);
    const extractScores = filteredArray.map(subject => subject.scores.map(scores => scores.score));
    const [listFound] = extractScores;
    const reducerFunction = listFound.reduce((suma,score)=>suma + score,0);
    return console.log(`El promedio de ${mentor} es ${reducerFunction/listFound.length}`);
};
avgScoreByMentor('Elvira Camarillo');

//-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
const avgGreatestByMentor = (reference) =>{
    const getAvg = mentorsArray.map((mentor)=>{
        const getScore = mentor.scores.map(scores => scores.score);
        const getSummation = getScore.reduce((suma,score)=>suma + score,0);
        let avg = getSummation/getScore.length;
        if(avg > reference){ return console.log(`El mentor ${mentor.name} tiene un promedio de ${avg} el cual es mayor a ${reference}`)};
    });
}
avgGreatestByMentor(9);

/*-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/
const createArrayScore = () =>{
    let arrMentors = [];
    const getAvg = mentorsArray.map((mentor)=>{
        const getScore = mentor.scores.map(scores => scores.score);
        const getSummation = getScore.reduce((suma,score)=>suma + score,0);
        let avg = getSummation/getScore.length;
        arrMentors.push(`Mi nombre es ${mentor.name} y mi promedio es de ${avg}`);
        
    });return console.log(arrMentors);
}
createArrayScore();