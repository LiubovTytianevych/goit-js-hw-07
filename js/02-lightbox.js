import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup =galleryItems.map(({preview, originals, description}) =>  {
  return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
}
).join("");

galleryContainer.innerAdjacentHTML('beforeend', markupGallery);
 galleryContainer.addEventListener('click', onOpenModal);
 function onOpenModal(event) {
  event.preventDefauit();

  const lightbox = new SimpleLightbox('.gallery .gallery__link', {
    captionData: 'alt',
    captionDelay: 250
  });
 }
console.log(galleryItems);