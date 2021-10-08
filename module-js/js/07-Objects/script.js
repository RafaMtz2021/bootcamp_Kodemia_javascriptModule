let songsData = [
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    }
  },
  {
    name: "Nikita",
    band: "Elton John",
    releaseYear: "1980",
    statistics: {
      likes: 9409483256,
      reproductions: 9843293,
    }
  },
  {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    }
  },
  {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
      likes: 25000,
      reproductions: 100000,
    }
  }, {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 95000,
    }
  }, {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
      likes: 128000,
      reproductions: 915000,
    }
  }, {
    name: "Daze",
    band: "Poets of the Fall",
    releaseYear: "2014",
    statistics: {
      likes: 3548413,
      reproductions: 87095138,
    }
  }, {
    name: "The Sweet Scape",
    band: "Poets of the fall",
    releaseYear: "2018",
    statistics: {
      likes: 26268856,
      reproductions: 2424568,
    }
  }
]

/*Tomando en cuenta el array songsData 

Ejercicio 1
input: 'The Cure'
output: {
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    }
  }
}
*/

input = 'Poets of the fall';

function searchBand(band) {
    for(let i=0;i<songsData.length;i++){
        if(songsData[i].band.toLowerCase() === input.toLowerCase()){
            let result = {
                name: songsData[i].name,
                band: songsData[i].band,
                releaseYear: songsData[i].releaseYear,
                statistics: {
                    likes: songsData[i].statistics.likes,
                    reproductions: songsData[i].statistics.reproductions
                }
                
            }
            console.log(result);
        }
        
    }
    
}
//searchBand(input);

/*
----------------------------
Ejercicio 2
-Generar el top 5 de las canciones mas escuchadas
-Mostrar la cancion mas reciente
-Mostrar el artista mas gustado a los fans
*/

//mas escuchada = reproductions
//mas reciente = release Year
//mas gustada = likes

function statistics() {
    top5();
    latest();
    loved();

function loved() {
    let love = [];
    
    for(let i=0;i<songsData.length;i++){
        const {statistics:{likes}} = songsData[i];
        love.push(likes);
    }
    love.sort(function (a,b){return b-a});
    
    for(let j=0;j<songsData.length;j++){
        const {name,statistics:{likes}} = songsData[j];

        if(love[0] === likes){
            console.log(`La canción: ${name} es la más gustada. Con ${likes} likes`);
        }
    }
}


function latest() {
    let top1 = [];
    
    for(let i=0;i<songsData.length;i++){
        const {releaseYear} = songsData[i];
        top1.push(releaseYear);
    }
    top1.sort(function (a,b){return b-a});
    
    for(let j=0;j<songsData.length;j++){
        const {name,releaseYear} = songsData[j];

        if(top1[0] === releaseYear){
            console.log(`La canción: ${name} es la más reciente. Del año ${releaseYear}`);
        }
    }
}


function top5() {
    let top5 = [];
    let counter = 1;

    for(let i=0;i<songsData.length;i++){
        const {statistics:{reproductions}} = songsData[i];
        top5.push(reproductions);
    }
    top5.sort(function (a,b){return b-a});

    for(let i=0;i<5;i++){
     
        for(let j=0;j<songsData.length;j++){
            const {name,statistics:{reproductions}} = songsData[j];

            if(top5[i] === reproductions){
                
                console.log(`
                    número: ${counter}
                    canción: ${name}
                    reproducciones: ${reproductions}
                `);
                ++ counter;
            }

        }
    }
}
}
statistics();