import { elements } from './base';

const elementStrings = {
    album: 'albums',
    result: 'result',
    albumsPages: 'albums__pages'
};

export const clearAlbums = () => {
    const result = document.querySelector(`.${elementStrings.album}`);
    if (result) {
        result.parentElement.removeChild(result);
    }
};

export const clearAlbumsList = () => {
    const result = document.querySelector(`.${elementStrings.result}`);
    if (result) {
        result.innerHTML = '';
    }
};

export const clearButton = () => {
    const btn = document.querySelector(`.${elementStrings.albumsPages}`);
    if (btn) {
        btn.innerHTML = '';
    }
};

export const renderAlbum = album => {
    const markup = `
        <div class="box">
            <div class="box__text--name">
                album name: ${album.album.album_name}
            </div>
            <div class="box__text--date">
                relased in ${album.album.album_release_date},
            </div>
            <div class="box__text--type">
                type: ${album.album.album_release_type} 
            </div>
        </div>
    `;
    document.querySelector(`.${elementStrings.result}`).insertAdjacentHTML('afterbegin', markup);
};

// type: 'prev' or 'next'
const createButton = (page, type) => `
    <button class="btn-inline albums__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="albums__icon">
            <use href="img/sprite.svg#icon-circle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>   
`;

const renderButtons = (page, numResult, resPerPage) => {

    const pages = Math.ceil(numResult / resPerPage);
    let button;

    if (page === 1 && pages > 1) {
        // Button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons 
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Button to go to prev page
        button = createButton(page, 'prev');
    }

    document.querySelector(`.${elementStrings.albumsPages}`).insertAdjacentHTML('afterbegin', button);
};

export const renderAlbums = (array, page = 1, resPerPage = 4) => {
    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    array.slice(start, end).forEach(renderAlbum);

    // render pagination buttons
    renderButtons(page, array.length, resPerPage);
  };

export const renderBg = title => {
    const markup = `
    <div class="albums">
        <div class="bg-video">
            <video class="bg-video__content" autoplay muted loop>
                <source src="../img/notes.mp4" type="video/mp4">
                <source src="../img/notes.webm" type="video/webm">
                Your browser is not supported!
            </video>
        </div>
        <h2 class="albums__title">
            <div class="albums__title--text">${title} albums</div>
        </h2>
        <div class="result">
        </div>
        <div class="albums__pages">      
        </div>  
     </div>
      `;
      elements.searchResArt.insertAdjacentHTML('afterend', markup);
  };