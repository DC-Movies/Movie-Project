// REQUEST FOR LOCAL JSON API SERVER
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

// FUNCTION TO RENDER API OBJECTS TO HTML CARDS ONTO WEBSITE PAGE

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
        <div class="container javascript-cards">
            <div class="row">
                <div class="column">
                    <h3 id="card-title">${title}</h3>
                </div>
                <div class="column stretch">
                    <p>${genre}</p>
                    <p>Release Date: ${releaseDate}</p>
                    <p>Rating: ${rating}</p>
                </div>
                <div class="column card-rating">
                    <select id="updateRating">
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>    
                    <button class="update-rating-btn" for="updateRating">Select</button>
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

// FUNCTION TO ADD MOVIES TO WEBSITE AND DATABASE

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
};

// FUNCTION TO REMOVE MOVIES FROM WEBSITE AND DATABASE

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

// PATCH FUNCTION
export const changeRating = async (id, movie) => {
    try {
        if (!id) {
            throw new Error('You must provide an id');
        }
        let url = `http://localhost:3000/favorites/${id}`;
        let options = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}


