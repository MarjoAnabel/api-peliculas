const API_URL = 'https://api.themoviedb.org/3/search/movie?query=' ///poner la url de las peliculas 
const apikey='24f48324f7f2a6baa5347579cd716569'
const apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY0ODMyNGY3ZjJhNmJhYTUzNDc1NzljZDcxNjU2OSIsInN1YiI6IjY2NGUyNzkwMzdmZDM0OWE5OGZkMTRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rxKHqram9pKpGJufk7aMifviHwQllBHSniuSkLhZBvk'
const moviesContainer = document.querySelector('#movie')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')



    const showmovies = (movie) => {
      moviesContainer.innerHTML = ''
        movie.forEach((movies_container) => {
          moviesContainer.innerHTML += `
        <div class="card col-lg-3 col-xs-12 col-md-6 " >
        <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${movies_container.poster_path}" alt="${movies_container.title}">
        <div class="card-body">
        <h1 class="card-header">${movies_container.title}</h1>
        <p class="card-title">${movies_container.overview}</p>
        </div>
        </div>
        `
        })
     }





    //Funcion para enlazar la api con nuestra llame de acceso a las pelis
     const searchmovies = async (event) => {
      event.preventDefault()
      try {
      const search = searchInput.value
      const res = await axios.get(`${API_URL}${search}&api_key=${apikey}`)
      const movie = res.data.results
      showmovies(movie)
      } catch (error) {
      console.error(error)
      }
    }
      

formSearch.addEventListener('submit', searchmovies)
        