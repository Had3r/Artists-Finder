export const elements = {
    searchForm: document.querySelector('.header__search'),
    searchInput: document.querySelector('.header__search-input'),
    searchResArt: document.querySelector('.container'),
    albums: document.querySelector('.result')
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
    <div class="${elementStrings.loader}">
        <svg>
            <use href="img/sprite.svg#icon-loop2"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
}