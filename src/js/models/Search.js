import axios from 'axios';


export default class Search {
    constructor(query) {                // to jest polska
        this.query = query;
    }

    

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key ='a8162e1198d74d863a3f66ea7a96c9a8';
        try {
            const res = await axios(`${proxy}http://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=${this.query}&apikey=${key}`);
            this.result = res.data.message.body.artist_list;
            // console.log(this.result); // array
        } catch (error) {
            alert(error);
        }
    }
}



