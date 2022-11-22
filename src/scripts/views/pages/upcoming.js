import TheMovieDbSource from '../../globals/moviedb-source';

const Upcoming = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Upcoming in Cinema</h2>
    <div id="movies" class="movies">
    </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const movies = await TheMovieDbSource.upComingMovies();
    console.log(movies);
  },
};

export default Upcoming;
