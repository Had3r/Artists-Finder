import axios from 'axios';
import { key, proxy } from '../config';

export default class Album {
    constructor(id) {
        this.id = id;
    }

    async getAlbum() {
        try {
            const res = await axios(`${proxy}http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${this.id}&page_size=5&g_album_name=1&apikey=${key}`)
            
            this.result = res.data.message.body.album_list;
        
            console.log(this.result);
              
        } catch(error) {
            console.log(error);
        }
    }
}