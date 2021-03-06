import { elements } from './base';
const { getName } = require('country-list');

export const getQuery = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResArt.innerHTML = '';
};

export const renderFirstArtist = (top1, countryOne = 'no data in demo') => {
    const markup = `
        <div class="container__box">
            <div class="container__picture container__picture--1">
                <svg class="container__icon">
                    <use xlink:href='img/sprite.svg#icon-number2'></use>
                </svg>
                <div class="container__text-1">
                    <div class="container__text-1--style">
                    ${top1.artist.artist_name}
                    </div>
                </div>
            </div>
            <div class="container__text-2">
                <div class="container__text-2--style">
                    from: ${countryOne}
                </div>
            </div>
            <div class="container__text-3">
                <div class="container__text-3--style">
                    artist rating: ${top1.artist.artist_rating}
                </div>
            </div>
            <a href="#${top1.artist.artist_id}" class="container__link">
            <button class="container__btn">
                See albums <span>&rarr;</span>
            </button>
            </a>
        </div>
    `;

    elements.searchResArt.insertAdjacentHTML('afterbegin', markup);
};

export const renderSecondArtist = (top2, countryTwo = 'no data in demo') => { 
    const markup = `
        <div class="container__box">
            <div class="container__picture container__picture--2">
                <svg class="container__icon">
                    <use xlink:href='img/sprite.svg#icon-number1'></use>
                </svg>
                <div class="container__text-1">
                    <div class="container__text-1--style">
                    ${top2.artist.artist_name}
                    </div>
                </div>
            </div>
            <div class="container__text-2">
                <div class="container__text-2--style">
                    from: ${countryTwo}   
                </div>
            </div>
            <div class="container__text-3">
                <div class="container__text-3--style">
                artist rating: ${top2.artist.artist_rating}
                </div>
            </div>
            <a href="#${top2.artist.artist_id}" class="container__link">
            <button class="container__btn">
                See albums <span>&rarr;</span>
            </button>
            </a>
        </div>
    `;

    elements.searchResArt.insertAdjacentHTML('beforeend', markup);
};

export const renderThirdArtist = (top3, countryThree = 'no data in demo') => {
    const markup = `
        <div class="container__box">
            <div class="container__picture container__picture--3">
                <svg class="container__icon">
                    <use xlink:href='img/sprite.svg#icon-number'></use>
                </svg>
                <div class="container__text-1">
                    <div class="container__text-1--style">
                    ${top3.artist.artist_name}
                    </div>
                </div>
            </div>
            <div class="container__text-2">
                <div class="container__text-2--style">
                    from: ${countryThree}
                </div>
            </div>
            <div class="container__text-3">
                <div class="container__text-3--style">
                artist rating: ${top3.artist.artist_rating}
                </div>
            </div>
            <a href="#${top3.artist.artist_id}" class="container__link">
            <button class="container__btn">
                See albums <span>&rarr;</span>
            </button>
            </a>
        </div>
    `;

    elements.searchResArt.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = artists  => { 
    clearLoader();

    const [top1, top2, top3] = artists;
    const countryOne = getName(top1.artist.artist_country);  
    const countryTwo = getName(top2.artist.artist_country);
    const countryThree = getName(top3.artist.artist_country);

    renderFirstArtist(top1, countryOne);
    renderSecondArtist(top2, countryTwo);
    renderThirdArtist(top3, countryThree);  
};

const strings = {
    loader: 'loader-1',
    header: '.header'
};

export const renderLoader = () => {
    const loader = `
    <div class="${strings.loader}">
        <svg>
            <use href="img/sprite.svg#icon-loop2"></use>
        </svg>
    </div>
    `;
    elements.header.insertAdjacentHTML('afterend', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${strings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};

