// Crear tabla con el siguiente arreglo

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
                score:10
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            },
        ]
    },
  ]

  //Crea tabla, encabezados fijos
  const table = document.createElement('table');
  const header = document.createElement('tr');
  const thMentor = document.createElement('th');
  const textMentor = document.createTextNode('MENTOR');
  thMentor.appendChild(textMentor);
  header.appendChild(thMentor);
  //Llena encabezados con info de scores.signature
  const headerBySignatures = mentorsArray[0].scores.forEach(mentor => {
      const thBySignature = document.createElement('th');
      const txtBySignature = document.createTextNode(mentor.signature);
      thBySignature.appendChild(txtBySignature);
      header.appendChild(thBySignature);
  });
  //Pone encabezado fijo 'Average'
  const thAverage = document.createElement('th')
  const headerAverage = document.createTextNode('Average');
  thAverage.appendChild(headerAverage);
  header.appendChild(thAverage)
  table.appendChild(header);

  //Función que recorre primero por mentor.name y luego por signature.scores
  const inspectMentor = () =>{
      mentorsArray.forEach(mentor=>{
          const trMentor = document.createElement('tr');
          const tdMentor = document.createElement('th');
          const nameMentor = document.createTextNode(mentor.name);
          tdMentor.appendChild(nameMentor);
          trMentor.appendChild(tdMentor)

          const inspectSignatures = mentor.scores.map(signature=>{
              const tdSignature = document.createElement('td');
              const scoreBySignature = document.createTextNode(signature.score);
              tdSignature.appendChild(scoreBySignature);
              const arrayScoresByMentor = signature.score;
              trMentor.appendChild(tdSignature);
              return arrayScoresByMentor;
          });
          //Por fuera se obtiene el average con el arreglo que devuelve el map
          const averageByMentor = inspectSignatures.reduce((acum,item)=>acum+item/inspectSignatures.length,0);
          const thAverage = document.createElement('th');
          const textAverage = document.createTextNode(averageByMentor);
          thAverage.appendChild(textAverage);
          trMentor.appendChild(thAverage);
          
          table.appendChild(trMentor);
      })
  }
  inspectMentor();
  console.log(table);
  document.body.appendChild(table);