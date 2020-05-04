import Unsplash from 'unsplash-js';

function getUnsplash() {
  let unsplash;
  const unsplashIsNotExist = unsplash == null;
  const unsplashIsNotInstance = (unsplash instanceof Unsplash) === false;

  if (unsplashIsNotExist || unsplashIsNotInstance) {
      unsplash = new Unsplash({
          accessKey: 'GEYL3AxQuJLWhLI1aMI4i_QpOjnxsqMPfNBqmiInmTM',
          secret: 'JimgwNyVzymK1umNBoJbslLDJXNDxPRv8MpmuYcLjTE',
          callbackUrl: 'http://localhost:8080/' //ниже
      })
  }

  return unsplash;
}

export default getUnsplash;
// адрес надо менять, когда это дело пойдет в продакшн
