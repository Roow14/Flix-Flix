const API_KEY = 'bc60c2dc515b93fd83dde3c5fe6f3822'; // Sua chave da API

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    isLarge: true,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];

async function getMovies(path) {
  try {
    const url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao obter filmes:", error);
    return []; // Retorna uma lista vazia no caso de erro
  }
}

function createSidebar() {
  const categoryLinks = document.getElementById('category-links');

  categories.forEach(category => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = category.title;
    a.dataset.path = category.path;

    a.addEventListener('click', async (event) => {
      event.preventDefault();
      const path = event.target.dataset.path;
      
      document.querySelector('.welcome-container').style.display = 'none';
      document.getElementById('movies-container').style.display = 'grid';
      document.getElementById('details-container').style.display = 'none'; // Esconde o contêiner de detalhes

      const movies = await getMovies(path);
      if (movies.length > 0) {
        displayMovies(movies);
      } else {
        console.log("Nenhum filme encontrado.");
      }
    });

    li.appendChild(a);
    categoryLinks.appendChild(li);
  });
}

function displayMovies(movies) {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';  // Limpa o container antes de adicionar novos filmes

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="movie-img">
      <h3>${movie.title || movie.name}</h3>
      <div class="rating">
        <span class="rating-star">★</span> ${movie.vote_average}
      </div>
    `;

    // Adiciona o evento de clique na imagem
    movieElement.querySelector('.movie-img').addEventListener('click', () => {
      showDetails(movie);
    });

    container.appendChild(movieElement);
  });
}

function showDetails(movie) {
  const detailsContainer = document.getElementById('details-container');
  
  // Configura o conteúdo dos detalhes
  detailsContainer.innerHTML = `
    <div class="details-content">
      <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title}" class="details-banner">
      <h1>${movie.title || movie.name}</h1>
      <p>${movie.overview}</p>
      <div class="rating">
        <span class="rating-star">★</span> ${movie.vote_average}
      </div>
      <button id="back-button">Voltar</button>
    </div>
  `;

  detailsContainer.style.display = 'flex';
  
  // Adiciona o evento de clique no botão de voltar
  document.getElementById('back-button').addEventListener('click', () => {
    detailsContainer.style.display = 'none';
    document.querySelector('.welcome-container').style.display = 'none';
    document.getElementById('movies-container').style.display = 'grid';
  });
}

// Inicializar o menu e exibir a categoria padrão
createSidebar();
