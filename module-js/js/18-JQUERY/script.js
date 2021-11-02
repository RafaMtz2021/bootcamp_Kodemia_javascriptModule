$(document).ready( () => {

    
    const displayCards = () =>{
        
        $.ajax({
            method: 'GET',
            url: 'https://practica01-2de44-default-rtdb.firebaseio.com/.json',
            
            success: (response) =>{

                // callback cuando la petición es exitosa
                console.log(response)
                //const person = JSON.parse(response)
                
                const newArray = Object.entries(response);
                console.log(newArray);

                newArray.forEach(item=>{
                    const square = document.createElement('div');
                    square.className = 'postIt m-3 col-4';
                    square.id = item[0]
                    square.textContent = `${item[1].name} ${item[1].lastName} ${item[1].age}`;
                    $('#draw').append(square);
            
                })
            },
            error: (error) => {
                // callback para cuando hay un error
                console.log(error)
            },
            async: true,
        })
        
    }
    displayCards();
    //Agrega texto al Post It
    const addText = ()=>{
        const name = $('#name').val();
        const lastName = $('#lastName').val();
        const age = $('#age').val();

        // text !== '' ? createPostIt(text.toUpperCase().trim()):
        // alert('Ingresa un texto');
        createPostIt(name, lastName, age);
    }
    //Crea Post It
    let id = 1;
    const createPostIt = (name, lastName, age) => {
    


        $.ajax({
            method: 'POST',
            url: 'https://practica01-2de44-default-rtdb.firebaseio.com/.json',
            data: JSON.stringify({name, lastName, age}),
            
            success: (response) =>{
                // callback cuando la petición es exitosa
                console.log(response)
            } ,
            error: (error) => {
                // callback para cuando hay un error
                console.log(error)
            },
            async: true,
        })
        location.reload();
    };
    //Detecta cualquier cambio en el DOM y pinta el Post It
    $('#draw').bind('DOMSubtreeModified', () => {
        console.log('changed');
        const item = $('.postIt')
        $(item).click( (e) => {
            const id = e.target.id
            console.log(id);
            $(item).removeClass('colorize');
            $('#'+id).addClass('colorize');
        });
        //Elimina Post It con click derecho
        $(item).mousedown( (e) =>{
            if(e.which === 3){
                const id = e.target.id
                $('#'+id).remove();
            }
        });
      });
    //Agrega texto y crea Post It 
    $('#addItem').click( () => { 
        addText();
    });


});


