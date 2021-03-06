import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {               
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}http://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=${this.query}&apikey=${key}`);
            console.log(res);
            this.result = res.data.message.body.artist_list;
        } catch (error) {
            alert(error);
        }
    }
};



