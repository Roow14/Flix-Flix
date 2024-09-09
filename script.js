const API_KEY = "bc60c2dc515b93fd83dde3c5fe6f3822";

// Função para carregar filmes com base na categoria selecionada
async function loadMovies(category) {
    let url;
    switch (category) {
        case 'netflix':
            url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + API_KEY;
            break;
        case 'disney':
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=16'; // Exemplo de API para Disney+
            break;
        case 'hbo':
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_networks=13'; // Exemplo de API para HBO
            break;
        default:
            url = '';
    }
    const response = await fetch(url);
    const data = await response.json();
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = ''; // Limpa o conteúdo existente

    data.results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

// Adiciona eventos de clique aos links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        loadMovies(category);
    });
});

// Carrega filmes da Netflix ao iniciar
loadMovies('netflix');
