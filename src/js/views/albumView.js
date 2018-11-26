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
    elements.albums.insertAdjacentHTML('beforeend', markup);
};

export const renderAlbums = array => {
    array.forEach(item => {
      renderAlbum(item);
    });
  }