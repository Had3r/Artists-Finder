import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
const { getCode } = require('country-list');

/** Global state of the app
 * - Search object (I have here search query and search result)
 * - Current artist object
 * - Albums object
 */

const state = {};

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

        // 4. Search for artist
        await state.search.getResults(); // this will return promise (all async function return promise)

        // 5. Render result on UI
        searchView.renderResults(state.search.result);
    }
};





elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    headerSearch();

});