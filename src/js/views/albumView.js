import { elements } from './base';


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
    document.querySelector('.result').insertAdjacentHTML('afterbegin', markup);
};

export const renderAlbums = array => {
    array.forEach(item => {
      renderAlbum(item);
    });
  };

export const renderBg = () => {
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
            <div class="albums__title--text">Podsiadło albums</div>
        </h2>

        <div class="result">
        </div>
        <div class="albums__pages">    
            <button class="albums__btn--prev">
                <svg class="albums__icon">
                    <use href="img/sprite.svg#icon-circle-left"></use>
                </svg>
                <span>Page 1</span>
            </button>
            <button class="albums__btn--next">
                <span>Page 3</span>
                <svg class="albums__icon">
                    <use xlink:href="img/sprite.svg#icon-circle-right"></use>
                </svg>
            </button>   
        </div>  
     </div>
      `;
      elements.searchResArt.insertAdjacentHTML('afterend', markup);
  }