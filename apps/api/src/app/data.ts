const data = [
    {
        "id":"1",
        "title":"The Rock",
        "year":"1996",
        "genre":"Action/Thriller",
        "runtime":"2h 16m",
        "image":"/assets/the-rock.jpeg"
    },
    {
        "id":"2",
        "title":"Psycho",
        "year":"1960",
        "genre":"Horror/Thriller",
        "runtime":"1h 49m",
        "image":"/assets/psycho.jpg"
    },
    {
        "id":"3",
        "title":"Goodfellas",
        "year":"1990",
        "genre":"Crime/Drama",
        "runtime":"2h 28m",
        "image":"/assets/goodfellas.jpg"
    }
]

export const getAllMovies = () => {
    return data;
}

export const getMovieById = (id:string) => {
    return data.find(movie => movie.id === id);
}