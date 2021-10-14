/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

// [
//     'banda1',
//     'banda2',
// ];

/*
- Agrupar los nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/

//- Agrupar los nombres de la bandas, que no esten repetidas =======Solución 1
const singleBands = (bandArray) => {
    const setObj = new Set();
    return bandArray.reduce((acc,cur)=>{
        if(!setObj.has(cur.band)){
            setObj.add(cur.band) 
            acc.push(cur.band)
        }
        return acc;
    },[]);
}
console.log(singleBands(songsData));

//- Agrupar los nombres de la bandas, que no esten repetidas =======Solución 2
const singleBands2 = (bandArray) => {
    const bands = bandArray.map(songs=> {
      return [songs.band,songs.band]
    });
    return [...new Map(bands).values()];
}
  console.log(singleBands2(songsData));

  //- Agrupar los nombres de la bandas, que no esten repetidas =======Solución 3
const nameBands = () => {
    const bands = songsData.map(song => song.band);
    const names = bands.filter((name, index) => bands.indexOf(name) === index);
    return names;
}
console.log(nameBands())

//- Agrupar las canciones por banda
const songsByBand = (bandArray) => {
    let playlist = {};
    bandArray.map((band)=>{
        if(band.band in playlist){
            playlist[band.band] += band.name
        }else{
            playlist[band.band] = band.name
        }
    })
    return console.log(playlist);
}
songsByBand(songsData);

const songsByBand2 = (bandArray) => {
    let playlist = {};
    bandArray.map((band)=>{
        if(band.band in playlist){
            playlist[band.band] += `& ${band.name}  `
        }else{
            playlist[band.band] = `* ${band.name} `
        }
    })
    return console.log(playlist);
}
songsByBand2(songsData);


/*- La cancion con más reproducciones
- La cancion con más likes
*/

const mostReproductions = (bandArray)=>{
    const arrayReproductions = bandArray.map(songs=>songs.statistics.reproductions);
    const maxRepoductions = Math.max(...arrayReproductions);
    const searchSongMostReproduced = bandArray.filter(songname => songname.statistics.reproductions === maxRepoductions)
    const [{name}] = searchSongMostReproduced;
    console.log(name);
    const arrayLiked = bandArray.map(songs=>songs.statistics.likes);
    let maxLiked = Math.max(...arrayLiked);
    const searchSongMostLiked = bandArray.filter(songname => songname.statistics.likes === maxLiked)
    const [{name2}] = searchSongMostLiked;
    console.log(name2);
    //console.log(`La canción más repro`);
}
//mostReproductions(songsData);

const mostReproductions2 = (bandArray)=>{

    const getMostReproduced = () => {
        const arrayReproductions = bandArray.map(songs=>songs.statistics.reproductions);
        const maxReproductions = Math.max(...arrayReproductions);
        const searchSongMostReproduced = bandArray.filter(songname => songname.statistics.reproductions === maxReproductions)
        const [{name}] = searchSongMostReproduced;
        return {
            song: name, 
            reproducciones: maxReproductions
        };
    }
    
    const getMostLiked = () =>{
        const arrayLiked = bandArray.map(songs=>songs.statistics.likes);
        let maxLiked = Math.max(...arrayLiked);
        const searchSongMostLiked = bandArray.filter(songname => songname.statistics.likes === maxLiked)
        const [{name}] = searchSongMostLiked;
        return {
            song: name,
            likes: maxLiked
        }
    }

    return console.log(getMostLiked(),getMostReproduced());
}
mostReproductions2(songsData);