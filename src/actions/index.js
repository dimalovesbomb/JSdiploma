import authUnsplash from '../service/unsplash-auth';

const SET_LIKE = 'SET_LIKE';
const UNSET_LIKE = 'UNSET_LIKE';
const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
const RECIEVE_PHOTOS = 'RECIEVE_PHOTOS';
const RECIEVE_MORE_PHOTOS = 'RECIEVE_MORE_PHOTOS';

const counter = () => {
  let currentPage = 1;

  return () => currentPage++;
}

let pagesCounter = counter();

function likePhoto(photo) {
  return {
    type: SET_LIKE,
    ...photo
  }
}

export function setLike(id) {
  return async (dispatch) => {
    const unsplash = await authUnsplash();
    return unsplash.photos.likePhoto(id)
            .then(res => res.json())
            .then(res => dispatch(likePhoto(res.photo)))
  }
}

function unlikePhoto(photo) {
  return {
    type: UNSET_LIKE,
    ...photo
  }
}

export function unsetLike(id) {
  return async (dispatch) => {
    const unsplash = await authUnsplash();
    return unsplash.photos.unlikePhoto(id)
            .then(res => res.json())
            .then(res => dispatch(unlikePhoto(res.photo)))
  }
}

function requestPhotos() {
  return {
    type: REQUEST_PHOTOS
  }
}

function recievePhotos(photos) {
  return {
    type: RECIEVE_PHOTOS,
    photos: photos
  }
}

export function fetchPhotos(pages = pagesCounter(), quantity = 9) {

  return async (dispatch) => {
    dispatch(requestPhotos());

    const unsplash = await authUnsplash();
    return unsplash.photos.listPhotos(pages, quantity, 'popular')
            .then(res => res.json())
            .then(photos => dispatch(recievePhotos(photos)));
  }
}

function recieveMorePhotos(photos) {
  return {
    type: RECIEVE_MORE_PHOTOS,
    photos
  }
}

export function loadMorePhotos(pages = pagesCounter(), quantity = 9) {

  return async (dispatch) => {
    const unsplash = await authUnsplash();

    return unsplash.photos.listPhotos(pages, quantity, 'popular')
            .then(res => res.json())
            .then(photos => dispatch(recieveMorePhotos(photos)));
  }
}
