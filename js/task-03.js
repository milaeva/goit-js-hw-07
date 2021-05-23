const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listRef = document.querySelector('#gallery');

const insertGallery = array => {
  const makeItemsGallery = array =>
    array
      .map(({ url, alt }) => {
        return `<li> <img src="${url}" alt="${alt}"> </li>`;
      })
      .join('');
  listRef.insertAdjacentHTML('afterbegin', makeItemsGallery(array));
  listRef.classList.add('list', 'js-gallery__list');
  listRef
    .querySelectorAll('li')
    .forEach(item => item.classList.add('js-gallery__item'));
};

insertGallery(images);
