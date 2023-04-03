
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

    element.querySelector('button').addEventListener('click', function () {
        element.remove();
    })

    parent.appendChild(element);
}