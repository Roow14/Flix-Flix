const API_KEY = 'bc60c2dc515b93fd83dde3c5fe6f3822';
const BASE_URL = 'https://api.themoviedb.org/3';

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', async function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        if (category === 'netflix') {
            loadMovies('/trending/all/week');
        }
        // Adicione lógica para outras categorias aqui
    });
});

async function loadMovies(path) {
    try {
        const url = `${BASE_URL}${path}?api_key=${API_KEY}&language=pt-BR`;
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.log("Error fetching movies: ", error);
    }
}

function displayMovies(movies) {
    const container = document.getElementById('movies-container');
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        container.appendChild(movieElement);
    });
}
