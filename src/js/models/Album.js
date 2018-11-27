import axios from 'axios';
import { key, proxy } from '../config';

export default class Album {
    constructor(id) {
        this.id = id;
    }

    async getAlbum() {
        try {
            const res = await axios(`${proxy}http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${this.id}&g_album_name=1&s_release_date=desc&apikey=${key}`)
            console.log(res);
            this.result = res.data.message.body.album_list;
            this.title = res.data.message.body.album_list[0].album.artist_name;
              
        } catch(error) {
            console.log(error);
        }
    }
}