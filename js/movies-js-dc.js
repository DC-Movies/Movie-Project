import {getMovies, renderMovies, addMovie} from "./movies-module.js"


(async()=>{

    let movies = await getMovies();
    console.log(movies);


    let footerToggle = document.querySelector('#toggle');
    footerToggle.addEventListener('click', function(){
       let footer = document.querySelector('.footer');
       footer.classList.toggle('open');
       footerToggle.classList.toggle('flip')

    });
    const cards = document.querySelector('#cards');


    movies.forEach(function(movies){
        renderMovies(movies, cards)
    });

    let newMovie = await addMovie();


})();





// let pageWrapper = document.querySelector('.page-wrapper');
//
// let dropdowns = document.querySelectorAll('[data-dropdown="parent"]');
// dropdowns.forEach(function(dropdown){
//     let toggle = dropdown.querySelector('[data-dropdown="toggle"]');
//     toggle.addEventListener('click', function(){
//         dropdowns.forEach(function(element){
//             if(element.classList.contains('open') && element !== dropdown) {
//                 element.classList.remove('open')
//             }
//         })
//         dropdown.classList.toggle('open');
//     });
// });
// pageWrapper.addEventListener('click', function(event){
//     if (!event.target.closest('[data-dropdown="parent"]')) {
//         dropdowns.forEach(function(dropdown){
//             dropdown.classList.remove('open');
//         });
//     }
// })