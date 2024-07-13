import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showMessage,
  showLoading,
  hideLoading,
  clearGallery,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    showMessage('Please enter a search term');
    return;
  }

  clearGallery();
  showLoading();

  fetchImages(query)
    .then(images => {
      hideLoading();
      if (images.length === 0) {
        showMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      hideLoading();
      clearGallery();
      showMessage('Failed to fetch images. Please try again later.');
      console.error('Fetch error: ', error);
    });
});
