import Search from './models/Search';
import Album from './models/Album';
import * as searchView from './views/searchView';
import * as albumView from './views/albumView';
import { elements, renderLoader, clearLoader } from './views/base';
const { getCode } = require('country-list');

/** Global state of the app
 * - Search object (I have here search query and search result)
 * - Current artist object
 * - Albums object
 */

const state = {};

/***** SEARCH CONTROLLER *******/

const headerSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    console.log(query);
    
    if (query) {
        // 2. New artist object and add to state
        state.search = new Search(getCode(query));

        // 3. Prepare UI for result
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResArt);

        try {
            // 4. Search for artist
            await state.search.getResults(); // this will return promise (all async function return promise)

            // 5. Render result on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            console.log('error');
            clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    headerSearch();
});


/******** ALBUM LIST CONTROLLER **********/


const controlAlbum = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepare UI for changes

        // Create new album object
        state.album = new Album(id);

        // TESTING
        //window.r = state.album;

        try {
            // Get album data
            await state.album.getAlbum();

            // Render album
            albumView.renderBg();
            albumView.renderAlbums(state.album.result);
            
        } catch (err) {
            console.log(err);
        }
        
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlAlbum));
