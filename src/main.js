import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showMessage,
  showLoading,
  hideLoading,
  clearGallery,
} from './js/render-functions.js';

let currentPage = 1;
let currentQuery = '';
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loadMoreBtn = document.createElement('button');
loadMoreBtn.classList.add('btn', 'load-more');
loadMoreBtn.textContent = 'Load more';
loadMoreBtn.style.display = 'none';
document.body.appendChild(loadMoreBtn);

form.addEventListener('submit', event => {
  event.preventDefault();
  handleSearch();
});

loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  loadImages(currentQuery, currentPage);
});

async function handleSearch() {
  currentQuery = input.value.trim();
  if (!currentQuery) {
    showMessage('Please enter a search term');
    return;
  }

  currentPage = 1;
  clearGallery();
  loadMoreBtn.style.display = 'none';
  await loadImages(currentQuery, currentPage);
}

async function loadImages(query, page) {
  showLoading();
  try {
    const data = await fetchImages(query, page);
    hideLoading();
    if (data.hits.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderImages(data.hits);
      if (data.totalHits > page * 15) {
        loadMoreBtn.style.display = 'block';
      } else {
        loadMoreBtn.style.display = 'none';
        showMessage(
          "We're sorry, but you've reached the end of search results."
        );
      }
    }
  } catch (error) {
    hideLoading();
    clearGallery();
    showMessage('Failed to fetch images. Please try again later.');
    console.error('Fetch error: ', error);
  }
}
