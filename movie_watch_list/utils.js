import baseUrl from "./data.js"

const fetchMovieId = async movie => {
    const res = await fetch(baseUrl + `s=${movie.replaceAll(' ', '+')}`)
    const data = await res.json()    
    
    return data
}

const fetchMovieDetails = async movieId => {
    const res = await fetch(baseUrl + `i=${movieId}`)
    const data = await res.json()
    // console.log(data)
    return data
}











// console.log(movieData)
// return `
    // <div class="movies-search_card"
    //     <div class="card-main"
    //         <div class="movie-card-header"
    //             <h3 class="movie-title">${Title}</h3>
    //             <p class="movie-rating">${imdbRating}</p
    //         </div
    //         <div class="movie-info"
    //             <p>${Runtime}</p>
    //             <p>${Genre}</p>
    //             <button class="movie-add-btn">Watchlist</button
    //         </div
    //         <p class="movie-plot">${Plot}</p
    //     </div
    //     <div class="card-secondary"
    //         <img src='${Poster}'
    //     </div
    // </div>
// `









export { fetchMovieDetails, fetchMovieId }