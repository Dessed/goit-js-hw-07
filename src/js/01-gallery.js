import { galleryItems } from './gallery-items.js';

// Change code below this line


const gallery = document.querySelector('.gallery');
const fotoMarkup = creatingImageGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', fotoMarkup);

function creatingImageGallery(pictures) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
};

const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';


const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()

console.log(galleryItems);
