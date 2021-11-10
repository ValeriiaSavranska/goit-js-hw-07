import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");
galleryRef.innerHTML = markup;

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery")) return;

  const originalImg = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${originalImg}" width="800" height="600">`
  );
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
});
