import Search from './models/Search';

/** Global state of the app
 * - Search object (I have here search query and search result)
 * - Current artist object
 * - Albums object
 */

const state = {};

const headerSearch = async () => {
    // 1. Get query from view
    const query = 'pl';

    if (query) {
        // 2. New artist object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for result

        // 4. Search for artist
        await state.search.getResults(); // this will return promise (all async function return promise)

        // 5. Render result on UI
        console.log(state.search.result);
    }
};





document.querySelector('.header__search').addEventListener('submit', e => {
    e.preventDefault();
    headerSearch();

});








// overwrite(countries)
// const { getCode } = require('country-list');
// console.log(getCode('Poland'))
