import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
  )
  .join("");
galleryRef.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery")) return;
});
