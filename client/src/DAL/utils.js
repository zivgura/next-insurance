export function getAllMovies() {
    return fetch("/movies")
        .then((res) => res.json())
}

export function getMovieById(id) {
    return fetch(`/movies/${id}`)
        .then((res) => res.json())
}
