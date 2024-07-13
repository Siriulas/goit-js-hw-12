export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '44807177-c49104cccf7249c598a5adf77';
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error('Fetch error: ', error);
      throw error;
    });
}
