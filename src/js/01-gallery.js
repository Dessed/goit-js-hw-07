import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const fotoMarkup = creatingImageGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', fotoMarkup);

function creatingImageGallery(pictures) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
};


gallery.addEventListener('click', onGalleryBasicLightbox)

function onGalleryBasicLightbox (evt) {
  evt.preventDefault();

  let originalPicture = evt.target.dataset.source;

  const html = `
  <img width="1400" height="900" src="${originalPicture}">
	`
	basicLightbox.create(html, {
		// onClose: () => {alert ('Вы уверены?')},
    onShow: (instance) => { 
      
    document.addEventListener("keydown", closeLightboxButton)

    function closeLightboxButton(evt) {
      if (evt.key === `Escape`) {
        instance.close();
      } 
    }},
	}).show()

 
}



