const table = document.querySelector('.list')
const button = document.getElementById('saveMentor');
const inputs = document.querySelectorAll('input')

const renderUsers = (users) => {

    const newArray = Object.values(users);
    newArray.forEach((mentor,index)=>{
        console.log(mentor.mentor);
        const row = document.createElement('tr');
        row.className = 'mentorRow';
        const name = document.createElement('td');
        const html = document.createElement('td');
        const css = document.createElement('td');
        const js = document.createElement('td');
        const react = document.createElement('td');
        //const removeButton = document.createElement('button');
        //removeButton.className = 'btn btn-primary'
        //removeButton.setAttribute('data-person', index)

        name.textContent = mentor.mentor.name;
        html.textContent = mentor.mentor.html;
        css.textContent = mentor.mentor.css;
        js.textContent = mentor.mentor.js;
        react.textContent = mentor.mentor.reactjs;

        //removeButton.textContent = 'Delete';
        row.appendChild(name);
        row.appendChild(html);
        row.appendChild(css);
        row.appendChild(js);
        row.appendChild(react);
        //row.appendChild(removeButton);
        table.appendChild(row);

//      removeButton.addEventListener('click', (event) => {
//      removeButton.closest('tr').remove();
//      const personIndex = event.target.dataset.person;
//      mentorList.splice(personIndex, 1);
    })
 };

const getUsers = () => {
    // instanciamos la clase
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    //console.log(xhr.readyState)
      if(xhr.readyState === 4 && xhr.status === 200) {
        //   JSON.parse()   este metodo te convierte de JSON > tipo de dato primitivo
        //   JSON.stringify()   este metodo te convierte de tipo de dato primitivo > JSON 
        console.log(xhr)
        const response = JSON.parse(xhr.responseText);
        renderUsers(response);
        
      }else {
          console.log('Hubo un error')
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
              console.log(xhr)
            }
    
        });
    
        const URL = "https://js-14va-default-rtdb.firebaseio.com/rafamtz/.json";
        console.log(xhr);
    
        xhr.open("POST", URL, true);
        xhr.send(JSON.stringify({ mentor }));
    };
    postUsers(mentor);
};

button.addEventListener('click', (e)=> {
    createMentor();
    //renderUsers();
});

document.body.appendChild(table);