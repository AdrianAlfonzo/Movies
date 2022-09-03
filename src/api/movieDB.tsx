import axios from 'axios';


const movieDB= axios.create( {
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a9cbc7fa0d6feed716b2940c87be4eff',
        language: 'es-ES'
    }
});

export default movieDB;