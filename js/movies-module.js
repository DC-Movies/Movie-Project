
export const getMovies = async () => {
    try {
        let url = `http://localhost:3000/movies`;
        let options = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        let response = await fetch(url, options);
        return await response.json();
    }catch(error){
        console.log(error);
    }
}

export const renderMovies = async (movie, parent) => {
    const title = movie.title;
    const rating = movie.rating;
    const releaseDate = movie.releaseDate;
    const genre = movie.genre;
    const movieId = movie.id;
    const element = document.createElement('div');

    element.classList.add('card');

    element.innerHTML = `
        <div class='img-wrapper'>
        <!--    Need to adjust parameters    -->
            <img src="https://via.placeholder.com/100x100?" alt="User image" class="avatar">
        </div>
        <div class="container">
            <div class="row">
                <div class="column">
                    <h3>${title}</h3>
                </div>
                <div class="column stretch">
                    <p>${genre}</p>
                    <p>Release Date: ${releaseDate}</p>
                    <p>Rating: ${rating}</p>
                    <button class="remove" id="removeMovie">Remove</button>
                </div>
            </div>
        </div>
        
        
    `;

    element.querySelector('.remove').addEventListener('click', function () {
        element.remove();
        deleteMovies(movieId);
    });

    parent.appendChild(element);
}

export const addMovie = async (movie) => {
    try {
        let url = `http://localhost:3000/movies`;
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        }
        let response = await fetch(url, options);
        let newMovie = await response.json();
        renderMovies(newMovie, document.querySelector('#cards'));
        return newMovie;
    }catch(error){
        console.log(error);
    }
}

export const deleteMovies = async (id) => {
    try {
        if (!id) {
            throw new Error('You must provide an id');
        }
        let url = `http://localhost:3000/movies/${id}`;
        let options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
};




