/* global axios */

const container = document.querySelector('.movie-container');
const form = document.querySelector('form');
const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7dc6ebc456b7af85b54afceb8881055a';
const search = 'https://api.themoviedb.org/3/search/movie?api_key=7dc6ebc456b7af85b54afceb8881055a&query=';

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

const errorMsg = (msg) => {
  container.innerHTML = `
    <p class="no-movie">${msg}.</p>
  `;
};

const getData = async (url) => {
  const { data } = await axios(url);
  if (data.results.length === 0) {
    errorMsg('No Movies Found');
  }
  createCards(data.results);
};

form.addEventListener('submit', (e) => {
  const input = document.querySelector('input').value;
  e.preventDefault();
  container.innerHTML = '';
  getData(search + input);
  form.reset();
});

getData(url);

const ball = document.querySelector('.ball');
const theme = document.querySelector('.theme');
const { body } = document;
const selectedTheme = localStorage.getItem('selected-theme');

const checkTheme = () => (body.classList.contains('dark-mode') ? 'dark' : 'light');

theme.addEventListener('click', (e) => {
  if (e.target.classList.contains('ball')) {
    ball.classList.toggle('active');
    body.classList.toggle('dark-mode');
    localStorage.setItem('selected-theme', checkTheme());
  }
});

if (selectedTheme) {
  body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-mode');
  if (body.classList.contains('dark-mode')) {
    ball.classList.add('active');
  }
}
