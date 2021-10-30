$(document).ready( () => {
    //Agrega texto al Post It
    const addText = ()=>{
        const text = $('#text').val();
        text !== '' ? createPostIt(text.toUpperCase().trim()):
        alert('Ingresa un texto');
    }
    //Crea Post It
    let id = 1;
    const createPostIt = (text) => {
        const square = document.createElement('div');
        square.className = 'postIt m-3 col-4';
        square.id = id++;
        square.textContent = text;
        $('#draw').append(square);
        $('#text').val('');
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


