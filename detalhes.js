// detalhes.js

const API_KEY = 'bc60c2dc515b93fd83dde3c5fe6f3822'; // Sua chave da API

async function fetchMovieDetails(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter detalhes do filme:", error);
    return null;
  }
}

function showMovieDetails(movieId) {
  fetchMovieDetails(movieId).then(movie => {
    if (movie) {
      const detailsContainer = document.getElementById('details-container');
      detailsContainer.innerHTML = `
        <div class="details-content">
          <div class="banner-container">
            <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title}" class="details-banner">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="thumbnail">
          </div>
          <h2 class="movie-title">${movie.title}</h2>
          <p class="movie-overview">${movie.overview}</p>
          <div class="details-rating">
            <span class="rating-star">⭐</span> ${movie.vote_average}
          </div>
          <button id="back-button">Voltar</button>
        </div>
      `;
      detailsContainer.style.display = 'block';

      // Adiciona o evento para voltar à lista de filmes
      document.getElementById('back-button').addEventListener('click', () => {
        detailsContainer.style.display = 'none';
        document.getElementById('movies-container').style.display = 'grid';
      });

      document.getElementById('movies-container').style.display = 'none'; // Oculta a lista de filmes
    }
  });
}

// Adiciona o evento de clique às imagens dos filmes
function setupMovieClickEvents() {
  document.querySelectorAll('.movie').forEach(movieElement => {
    movieElement.addEventListener('click', () => {
      const movieId = movieElement.dataset.id;
      showMovieDetails(movieId);
    });
  });
}

// Atualiza a função displayMovies para incluir IDs dos filmes
function displayMovies(movies) {
  const container = document.getElementById('movies-container');
  container.innerHTML = ''; // Limpa o container antes de adicionar novos filmes

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.dataset.id = movie.id; // Adiciona o ID do filme como um dado
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title || movie.name}</h3>
      <div class="rating">
        <span class="rating-star">⭐</span> ${movie.vote_average}
      </div>
    `;
    container.appendChild(movieElement);
  });

  setupMovieClickEvents(); // Configura os eventos de clique nos filmes
}
