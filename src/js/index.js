import Search from './models/Search';
import Album from './models/Album';
import * as searchView from './views/searchView';
import * as albumView from './views/albumView';
import { elements } from './views/base';
const { getCode } = require('country-list');

/** Global state of the app
 * - Search object 
 * - Current artist object
 * - Albums object
 */

const state = {};

/***** SEARCH CONTROLLER *******/

const headerSearch = async () => {
    // 1. Get query from view
    const query = searchView.getQuery();
    
    if (query) {
        // 2. New artist object and add to state
        state.search = new Search(getCode(query));

        // 3. Scroll down the page
        elements.footer.scrollIntoView({ behavior: 'smooth', block: 'end' });

        // 4. Prepare UI for result
        searchView.clearInput();
        searchView.clearResults();
        albumView.clearAlbums();
        searchView.renderLoader();

        try {
            // 5. Search for artist
            await state.search.getResults(); 

            // 6. Render result on UI
            console.log(state.search.result)
            searchView.renderResults(state.search.result);  // to tablica z trzema artystami
            
        } catch (err) {
            console.log('error propably in searchView');
            searchView.clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    headerSearch();
});

/******** ALBUM LIST CONTROLLER **********/

const controlAlbum = async () => {
    // 1. Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // 2. Prepare UI for changes
        albumView.clearAlbums();
        albumView.setCursor();
        elements.footer.scrollIntoView({ behavior: 'smooth', block: 'end' });

        // 3. Create new album object
        state.album = new Album(id);

        try {
            // 4. Get album data
            await state.album.getAlbum();

            // 5. Render album
            albumView.renderBg(state.album.title);
            albumView.renderAlbums(state.album.result);
            albumView.clearCursor();

        } catch (err) {
            console.log(err);
        }
    }
}

elements.searchResult.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        albumView.clearAlbumsList();
        albumView.clearButton();
        albumView.renderAlbums(state.album.result, goToPage);
    }
});

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlAlbum));
