import {getMovies} from "./movies-module.js"


(async()=>{

    let movies = await getMovies();
    console.log(movies);


})();





let pageWrapper = document.querySelector('.page-wrapper');

let dropdowns = document.querySelectorAll('[data-dropdown="parent"]');
dropdowns.forEach(function(dropdown){
    let toggle = dropdown.querySelector('[data-dropdown="toggle"]');
    toggle.addEventListener('click', function(){
        dropdowns.forEach(function(element){
            if(element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open')
            }
        })
        dropdown.classList.toggle('open');
    });
});
pageWrapper.addEventListener('click', function(event){
    if (!event.target.closest('[data-dropdown="parent"]')) {
        dropdowns.forEach(function(dropdown){
            dropdown.classList.remove('open');
        });
    }
})