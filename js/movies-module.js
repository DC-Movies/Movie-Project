
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

