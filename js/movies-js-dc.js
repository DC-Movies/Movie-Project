import {getMovies, renderMovies, addMovie} from "./movies-module.js"


(async()=>{

    // loading screen
    function onReady(callback) {
        let intervalId = window.setInterval(function() {
            if (document.getElementsByTagName('body')[0] !== undefined) {
                window.clearInterval(intervalId);
                callback.call(this);
            }
        }, 2000);
    }
    function setVisible(selector, visible) {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }
    onReady(function() {
        setVisible('.page', true);
        setVisible('#loading', false);
    });

    // display movies
    let movies = await getMovies();
    console.log(movies);

    // footer pop up
    let addMovieToggle = document.querySelector('#addInterface');
    let footerToggle = document.querySelector('#toggle');
    footerToggle.addEventListener('click', function(){
       let footer = document.querySelector('.footer');
       footer.classList.toggle('open');
       footerToggle.classList.toggle('flip');
       addMovieToggle.classList.toggle('left')
    });

    // adding new movie to card and DOM
    const cards = document.querySelector('#cards');
    movies.forEach(function(movies){
        renderMovies(movies, cards)
    });
    document.querySelector('#addMovie').addEventListener('click', async function(){
        const title = document.querySelector('#title').value;
        const genre = document.querySelector('#genre').value;
        const rating = parseFloat(document.querySelector('#rating').value);
        const releaseDate = document.querySelector('#rel-date').value;
        let movieData = {
            title,
            genre,
            rating,
            releaseDate
        }
        let result = await addMovie(movieData);
    });

    // genre links




})();