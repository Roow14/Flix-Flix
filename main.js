import { getMovies } from './netflix-api.js';
import categories from './netflix-api.js';

document.addEventListener('DOMContentLoaded', async function() {
    // Carrega automaticamente os filmes da primeira categoria
    const defaultCategory = categories.find(cat => cat.name === 'Ultimos lançamentos');
    if (defaultCategory) {
        const movies = await getMovies(defaultCategory.path);
        displayMovies(movies.results);
    }

    // Adicionar evento de clique para os links de plataforma
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', async function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            const category = this.dataset.category;
            const selectedCategory = categories.find(cat => cat.name.toLowerCase() === category);

            if (selectedCategory) {
                const movies = await getMovies(selectedCategory.path);
                displayMovies(movies.results);
            } else {
                document.getElementById('platform-content').innerHTML = 'Categoria não disponível.';
            }
        });
    });
});

function displayMovies(movies) {
    const platformContent = document.getElementById('platform-content');
    platformContent.innerHTML = '';

    if (movies.length === 0) {
        platformContent.innerHTML = 'Nenhum filme disponível.';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.overview}</p>
        `;
        platformContent.appendChild(movieElement);
    });
}
