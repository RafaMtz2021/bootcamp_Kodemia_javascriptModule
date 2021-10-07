function convertToUpperCase() {
    let outPutString = '';
    inputString = (prompt('Ingresa alguna frase: ')).toLowerCase();

    for(let i=0;i<inputString.length;i++){
        character = inputString.charAt(i);
        
        if(i%2 === 0){
            outPutString += character.toUpperCase();
        }else{
            outPutString += character.toLowerCase();
        }
    }
console.log(outPutString);
}

//convertToUpperCase();

function convertToUpperCase() {
    let outputString = [];
    inputString = (prompt('Ingresa alguna frase: ')).toLowerCase();

    for(let i=0;i<inputString.length;i++){
        character = inputString.charAt(i);
        
        if(i%2 === 0){
            outputString.push(character.toUpperCase());
        }else{
            outputString.push(character.toLowerCase());
        }
    }
    console.log(outputString.join(''));
}

convertToUpperCase();