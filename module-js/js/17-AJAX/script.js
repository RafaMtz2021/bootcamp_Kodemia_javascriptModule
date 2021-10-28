//Seleccionar tabla de resultados.
const table = document.querySelector('.table');
//Seleccionar botón que agrega mentor.
const button = document.getElementById('saveMentor');
//Seleccionar todos los inouts de calificación.
const inputs = document.querySelectorAll('input')
//Crear tbody
const tBody = document.createElement('tbody');

//Función que extrae los mentores con Object.values y los muestra en el DOM
const renderUsers = (users) => {
    const newArray = Object.entries(users);
    console.log(newArray);
    newArray.forEach((mentor)=>{
        console.log(mentor);
        const row = document.createElement('tr');
        const name = document.createElement('th');
        name.scope = 'row'
        const html = document.createElement('td');
        const css = document.createElement('td');
        const js = document.createElement('td');
        const react = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-primary';
        removeButton.type = 'button';
        removeButton.setAttribute('data-person', mentor[0])

        name.textContent = mentor[1].mentor.name;
        html.textContent = mentor[1].mentor.html;
        css.textContent = mentor[1].mentor.css;
        js.textContent = mentor[1].mentor.js;
        react.textContent = mentor[1].mentor.reactjs;

        removeButton.textContent = 'Delete';
        row.appendChild(name);
        row.appendChild(html);
        row.appendChild(css);
        row.appendChild(js);
        row.appendChild(react);
        row.appendChild(removeButton);
        tBody.appendChild(row)
        table.appendChild(tBody);

        removeButton.addEventListener('click', (event) => {
          removeButton.closest('tr').remove();
          const personIndex = event.target.dataset.person;
          deleteUsers(personIndex);
        });
    });
 };

//Función que obtiene los mentores de la DB mediante una petición GET.
const getUsers = () => {
    // instanciamos la clase XMLHttpRequest
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    //console.log(xhr.readyState)
      if(xhr.readyState === 4 && xhr.status === 200) {
        //   JSON.parse()   este metodo te convierte de JSON > tipo de dato primitivo
        //   JSON.stringify()   este metodo te convierte de tipo de dato primitivo > JSON 
        console.log(xhr)
        const response = JSON.parse(xhr.responseText);
        renderUsers(response);
                
      }else if(xhr.status>200) {
          console.log('Hubo un error')
          console.log(xhr.status)
      }
    //console.log(xhr);
  });
// Declaramos el endpoint
  const URL = "https://js-14va-default-rtdb.firebaseio.com/rafamtz/.json";
  //console.log(xhr);

  xhr.open("GET", URL, true);
  xhr.send()
};
getUsers();

//Función que crea un mentor en la DB mediante una petición POST.
const createMentor = () => {
    const mentor = {
        name:'',
        html:'',
        css:'',
        js:'',
        reactjs:''
    }
    inputs.forEach((input) => {
        mentor[input.name] = input.value
        input.value = '';
    });

    const postUsers = (mentor) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            console.log(xhr.readyState)
            if(xhr.readyState === 4 && xhr.status === 200) {
              console.log(xhr);
            }
        });
        const URL = "https://js-14va-default-rtdb.firebaseio.com/rafamtz/.json";
        console.log(xhr);
    
        xhr.open("POST", URL, true);
        xhr.send(JSON.stringify({ mentor }));
    };
    postUsers(mentor);
};

const deleteUsers = (userId) =>{
  const xhr = new XMLHttpRequest();
  const URL = `https://js-14va-default-rtdb.firebaseio.com/rafamtz/${userId}/.json`;
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        alert('El registro fue borrado exitosamente!')
      }
    }
  });
  xhr.open("DELETE", URL, true);
  xhr.send();
}

//Validación rústica para que no se vayan vacíos los campos.
const validation = document.querySelector('.validation');
const check1 = document.querySelector('.check1');
const check2 = document.querySelector('.check2');
const check3 = document.querySelector('.check3');
const check4 = document.querySelector('.check4');

//Listener que llama a la función para crear mentor en la DB y refresca la página.
button.addEventListener('click', (e)=> {
    if(validation.value && check1.value && check2.value && check3.value && check4.value){
      createMentor();
      location.reload();
      alert('¡Registro exitoso!')
    }else{
      alert('Faltan Datos')
    }
});

document.body.appendChild(table);