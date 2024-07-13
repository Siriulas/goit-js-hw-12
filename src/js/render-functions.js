// render-functions.js

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images.map(image => createImageCard(image)).join('');
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a');
  }
}

function createImageCard(image) {
  return `
    <div class="image-card">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
       <div> <p>Likes: <p>${image.likes}</p></p></div>
        <div><p>Views: <p>${image.views}</p></p></div>
        <div><p>Comments: <p>${image.comments}</p></p></div>
       <div> <p>Downloads: <p>${image.downloads}</p></p></div>
      </div>
    </div>
  `;
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showMessage(message) {
  iziToast.error({
    message: message,
    messageColor: '#fff',
    position: 'topRight',
    color: '#ef4040',
  });
}

export function showLoading() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  document.body.appendChild(loader);
}

export function hideLoading() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
