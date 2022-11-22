import TheMovieDbSource from '../../globals/moviedb-source';
import templateCreator from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Now Playing in Cinema</h2>
    <div id="movies" class="movies">
    </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const movies = await TheMovieDbSource.upComingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += templateCreator.createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
