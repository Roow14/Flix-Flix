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

export const getMovies = async (path) => {
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
};

export default categories;
