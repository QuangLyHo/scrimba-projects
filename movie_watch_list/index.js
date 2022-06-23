
import baseUrl from "./data.js"
import { fetchMovieId, fetchMovieDetails } from "./utils.js"

const searchBtn = document.getElementById('search')
const searchContainer = document.querySelector('.search-results-container')






searchBtn.addEventListener('submit', async e => {
    e.preventDefault()

    const query = new FormData(e.target).get("searchQuery")
    const data = await fetchMovieId(query)

    const moviePromise = await getPromise(data)
    console.log(await moviePromise)
    searchContainer.innerHTML = moviePromise.join('')
    // console.log(moviePromise)
})




async function getPromise(data) {
    const moviePromise = data.Search.map(async movie => {
        let movieData = await fetchMovieDetails(movie.imdbID)

        movieData = {
            
            title: movieData.Title,
            poster: movieData.Poster,
            genre: movieData.Genre,
            runtime: movieData.Runtime,
            plot: movieData.Plot,
            rating: movieData.imdbRating
        }
        return formatMovieHtml(movieData)
    })
    
    return await Promise.all(moviePromise) 
}

async function formatMovieHtml(movieDetailsReturned) {
    
        const {poster, title, genre, runtime, plot, rating} = movieDetailsReturned

        return `
        
            <div class="movies-search_card">
                <div class="card-main">
                    <div class="movie-card-header">
                        <h3 class="movie-title">${title}</h3>
                        <p class="movie-rating">${rating}</p>
                    </div>
                    <div class="movie-info">
                        <p>${runtime}</p>
                        <p>${genre}</p>
                        <button class="movie-add-btn">Watchlist</button>
                    </div>
                    <p class="movie-plot">${plot}</p>
                </div>
                <div class="card-secondary">
                    <img src='${poster}'>
                </div>
            </div>
        `
    
    
    

}