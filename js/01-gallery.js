
import { galleryItems } from './gallery-items.js';
const galleryListEl = document.querySelector('.gallery');
// Change code below this line


const makeGalleryCard = ({ preview, original } = {}) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="Image description"
  />
  </a>
  </div>
  `;
};


const galleryCardsArr = galleryItems.map((el) => makeGalleryCard(el));

galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsArr.join(''));

galleryListEl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
event.preventDefault();

const currentItem = event.target;
if (currentItem.nodeName !== "IMG") {
  return;
}
const instance = basicLightbox.create
(`<img class="gallery__image" src="${currentItem.dateset.source}" width="800" heagth="600">`)
instance.show()
console.dir(currentItem.nodeName)
}