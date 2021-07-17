// 10. Készíts egy scriptet egy javaScript fájlban! 
// A script feladata, hogy egyetlen függvényben lekérdezze a mozifilmek számát kimentve egy változóba, 
//majd ennek segítségével egy ciklus keretében 3-asával lapozva
//írja ki a konzolra a filmek címeit és kategóriáit (kisbetűvel a kategóriát) a következő módon =>
// pl.: „Terminator : action movie”
// Minden egyes oldal alján jelenjen meg a szöveg: --page over--!

const movieFunction = () => {
    const countMovies = db.movies.find().count(); 
    for (let i =0; i< countMovies; i+=3) {
        db.movies.find().skip(i).limit(3).forEach(film => {
            print(`${film.title}: ${film.category.toLowerCase()} movie`)
        })
        print("--page over--")
    }
}

movieFunction()