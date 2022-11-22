import TheMovieDbSource from '../../globals/moviedb-source';
import UrlParser from '../../routes/url-parser';

const Upcoming = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movies = await TheMovieDbSource.detailMovies(url.id);
    console.log(movies);
  },
};

export default Upcoming;
