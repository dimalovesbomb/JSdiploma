import Unsplash from 'unsplash-js';

let unsplash;

function getUnsplash() {
<<<<<<< HEAD

=======
>>>>>>> 3871d2d5541a77c18c4f69d4861f99fbd1a1be54
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
