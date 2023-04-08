import { galleryItems } from './gallery-items.js';
// Change code below this line
const itemUl = document.querySelector('.gallery');
const showGallery = galleryItems.map(({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
          </li>`;
}).join('');

itemUl.insertAdjacentHTML('beforeend', showGallery);

itemUl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}">`);
  instance.show();
}
