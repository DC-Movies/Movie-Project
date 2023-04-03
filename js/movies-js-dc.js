import {getMovies, renderMovies, addMovie} from "./movies-module.js"


(async()=>{

    // Loading Screen

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



    let movies = await getMovies();
    console.log(movies);


    let addMovieToggle = document.querySelector('#addInterface');
    let footerToggle = document.querySelector('#toggle');
    footerToggle.addEventListener('click', function(){
       let footer = document.querySelector('.footer');
       footer.classList.toggle('open');
       footerToggle.classList.toggle('flip');
       addMovieToggle.classList.toggle('left')
    });

    const cards = document.querySelector('#cards');


    movies.forEach(function(movies){
        renderMovies(movies, cards)
    });

    let newMovie = await addMovie();

    document.querySelector('#addMovie').addEventListener('click', async function(){
        const title = document.querySelector('#title').value;
        const genre = document.querySelector('#genre').value;
        const rating = parseFloat(document.querySelector('#rating').value);
        let movieData = {
            title,
            genre,
            rating
        }
        let result = await addMovie(movieData);
    });


})();