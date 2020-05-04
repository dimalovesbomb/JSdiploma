import Unsplash from 'unsplash-js';

function getUnsplash() {
  let unsplash;
  const unsplashIsNotExist = unsplash == null;
  const unsplashIsNotInstance = (unsplash instanceof Unsplash) === false;

  if (unsplashIsNotExist || unsplashIsNotInstance) {
      unsplash = new Unsplash({
          accessKey: 'GEYL3AxQuJLWhLI1aMI4i_QpOjnxsqMPfNBqmiInmTM',
          secret: 'JimgwNyVzymK1umNBoJbslLDJXNDxPRv8MpmuYcLjTE',
          callbackUrl: 'http://kupriunin.ru/jsdiploma/'
      })
  }

  return unsplash;
}

export default getUnsplash;
