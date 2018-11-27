import Search from './models/Search';
import Album from './models/Album';
import * as searchView from './views/searchView';
import * as albumView from './views/albumView';
import { elements, renderLoader, renderResLoader, clearLoader } from './views/base';
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

        // scroll down the page
        elements.footer.scrollIntoView({ behavior: 'smooth', block: 'end' });

        // 3. Prepare UI for result
        searchView.clearInput();
        searchView.clearResults();
        albumView.clearAlbums();
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
        albumView.clearAlbums();
        
        const box = document.querySelector('.container');
        renderResLoader(box);

        // Create new album object
        state.album = new Album(id);

        try {
            // Get album data
            await state.album.getAlbum();

            // Render album
            clearLoader();
            albumView.renderBg(state.album.title);
            albumView.renderAlbums(state.album.result);

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
