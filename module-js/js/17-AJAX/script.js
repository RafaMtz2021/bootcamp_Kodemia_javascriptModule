const table = document.querySelector('.list')

const mentorList = [
   
];

console.log(mentorList);

const button = document.getElementById('saveMentor');
const inputs = document.querySelectorAll('input')

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

    mentorList.push(mentor);
};

const createRow = () => {  
    while (table.lastElementChild) {
        table.removeChild(table.lastElementChild)
    }

    mentorList.forEach((person, index) => {
        const row = document.createElement('tr');
        row.className = 'mentorRow';
        const name = document.createElement('td');
        const html = document.createElement('td');
        const css = document.createElement('td');
        const js = document.createElement('td');
        const react = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-primary'
        removeButton.setAttribute('data-person', index)

        name.textContent = person.name;
        html.textContent = person.html;
        css.textContent = person.css;
        js.textContent = person.js;
        react.textContent = person.reactjs;

        removeButton.textContent = 'Delete';
        row.appendChild(name);
        row.appendChild(html);
        row.appendChild(css);
        row.appendChild(js);
        row.appendChild(react);
        row.appendChild(removeButton);
        table.appendChild(row);

        removeButton.addEventListener('click', (event) => {
            removeButton.closest('tr').remove();
            const personIndex = event.target.dataset.person;
            mentorList.splice(personIndex, 1);

        });
    });
};

button.addEventListener('click', (e)=> {
    createMentor();
    createRow();
    console.log(mentorList);

});

createRow();

document.body.appendChild(table);