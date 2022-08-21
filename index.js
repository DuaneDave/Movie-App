

const createCards = (obj) => {
  const path = 'https://image.tmdb.org/t/p/w1280';
  obj.forEach((movie) => {
    const short = movie.overview.slice(0, 150);
    container.innerHTML += `
    <div class="card">
      <img src="${path + movie.poster_path}" alt="" />
      <div class="movie-info">
        <div class="movie-title flex">
          <div class="title">
            <p>${movie.title}</p>
          </div>
          <span class="rating">${movie.vote_average}<i class="bx bx-star"></i></span>
        </div>
        <p class="movie-desc">${short}</p>
      </div>
    </div>`;
  });
};



