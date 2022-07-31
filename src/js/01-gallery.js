import { galleryItems } from './gallery-items.js';

// Change code below this line
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
            data-source="large-image.jpg"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
};



  gallery.addEventListener('click', (evt) => {
    evt.preventDefault();
console.log(evt.target.classList);
    let pic = evt.target.src;
    // console.log(evt.target.href);
    // console.log(evt.target.classList.contains('gallery__link'));
      basicLightbox.create(`
      <img width="1400" height="900" src="${pic}">
    `).show()
  });

const pic = galleryItems.map(({preview, original, description}) => {
  return original;
})

console.log(pic);