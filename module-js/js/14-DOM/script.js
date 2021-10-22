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
      mentorsArray.forEach((mentor,index)=>{
          const trMentor = document.createElement('tr');
          trMentor.className = 'R' + index;
          const tdMentor = document.createElement('th');
          const nameMentor = document.createTextNode(mentor.name);
          tdMentor.appendChild(nameMentor);
          trMentor.appendChild(tdMentor)

          const inspectSignatures = mentor.scores.map(signature=>{
              const tdSignature = document.createElement('td');
              tdSignature.className = 'C' + index;
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

          //Crear botón de bootstrap
          const btnMentor = document.createElement('button');
          btnMentor.type='button'
          btnMentor.className='btn btn-primary btn-lg'
          btnMentor.textContent = 'Delete'
          btnMentor.id='B' + index
          trMentor.appendChild(btnMentor);
          
          table.appendChild(trMentor);
      })
  }

  inspectMentor();
  console.log(table);
  document.body.appendChild(table);


  //Buttons

  btn0 = document.querySelector("#B0")
  btn0.addEventListener('click',()=>{
      console.log('click en boton 0');
      alert('¿Estás seguro de borrar el registro?')
      const item0 = document.querySelector('.R0')
      item0.remove()
      getAverageBySignature();
  })

  btn1 = document.querySelector("#B1")
  btn1.addEventListener('click',()=>{
      console.log('click en boton 1');
      alert('¿Estás seguro de borrar el registro?')
      const item1 = document.querySelector('.R1')
      item1.remove()
      getAverageBySignature();
  })

  btn2 = document.querySelector("#B2")
  btn2.addEventListener('click',()=>{
      console.log('click en boton 2');
      alert('¿Estás seguro de borrar el registro?')
      const item2 = document.querySelector('.R2')
      item2.remove()
      getAverageBySignature();
  })

  btn3 = document.querySelector("#B3")
  btn3.addEventListener('click',()=>{
      console.log('click en boton 3');
      alert('¿Estás seguro de borrar el registro?')
      const item3 = document.querySelector('.R3')
      item3.remove()
      getAverageBySignature();
  })


    //Footer
    const rowTableFooter = document.createElement('tr');
    const thFooter = document.createElement('th');
    const textFooter = document.createTextNode('Averages');
    thFooter.appendChild(textFooter);
    rowTableFooter.appendChild(thFooter);
 



// const pater = document.querySelector('.R3')
// console.log(pater.firstChild.nextSibling.textContent);

const getAverageBySignature = ()=>{
    let arrTmp = [];
    for(let i=0;i<4;i++){
        const html = document.querySelector('.C' + i)
        arrTmp.push(Number(html.textContent))
    }
    const tdHtml = document.createElement('th');
    const avgHtml = document.createTextNode(arrTmp.reduce((acum,item)=>acum + item / arrTmp.length ,0))
    tdHtml.appendChild(avgHtml)
    rowTableFooter.appendChild(tdHtml);

    arrTmp = [];
    for(let i=0;i<4;i++){
        const css = document.querySelector('.C' + i)
        arrTmp.push(Number(css.nextSibling.textContent))
    }
    const tdCss = document.createElement('th');
    const avgCss = document.createTextNode(arrTmp.reduce((acum,item)=>acum + item / arrTmp.length ,0))
    tdCss.appendChild(avgCss)
    rowTableFooter.appendChild(tdCss);

    arrTmp = [];
    for(let i=0;i<4;i++){
        const js = document.querySelector('.C' + i)
        arrTmp.push(Number(js.nextSibling.nextSibling.textContent))
    }
    const tdJs = document.createElement('th');
    const avgJs = document.createTextNode(arrTmp.reduce((acum,item)=>acum + item / arrTmp.length ,0))
    tdJs.appendChild(avgJs)
    rowTableFooter.appendChild(tdJs);

    arrTmp = [];
    for(let i=0;i<4;i++){
        const reactJs = document.querySelector('.C' + i)
        arrTmp.push(Number(reactJs.nextSibling.nextSibling.nextSibling.textContent))
    }
    const tdReactJs = document.createElement('th');
    const avgReactJs = document.createTextNode(arrTmp.reduce((acum,item)=>acum + item / arrTmp.length ,0))
    tdReactJs.appendChild(avgReactJs)
    rowTableFooter.appendChild(tdReactJs);

    arrTmp = [];
    for(let i=0;i<4;i++){
        const totalAvg = document.querySelector('.C' + i)
        arrTmp.push(Number(totalAvg.nextSibling.nextSibling.nextSibling.nextSibling.textContent))
    }
    const tdtotalAvg = document.createElement('th');
    const avgtotalAvg = document.createTextNode(arrTmp.reduce((acum,item)=>acum + item / arrTmp.length ,0))
    tdtotalAvg.appendChild(avgtotalAvg)
    rowTableFooter.appendChild(tdtotalAvg);

}
getAverageBySignature();


table.appendChild(rowTableFooter);