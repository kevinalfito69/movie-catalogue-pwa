import TheMovieDbSource from '../../globals/moviedb-source';
import UrlParser from '../../routes/url-parser';
import templateCreator from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url.id);
    const movies = await TheMovieDbSource.detailMovies(url.id);
    const movieContainer = document.querySelector('#movie');
    console.log(movies);
    movieContainer.innerHTML += templateCreator.createMovieDetailTemplate(movies);
  },
};

export default Upcoming;
