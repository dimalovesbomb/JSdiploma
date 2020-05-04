import getUnsplash from './unsplash';

const TOKEN_STORAGE_ALIAS = 'unsplash-auth-token';

function writeToken(token) {
  sessionStorage.setItem(TOKEN_STORAGE_ALIAS, token);
}

function readToken() {
  return sessionStorage.getItem(TOKEN_STORAGE_ALIAS);
}

async function authUnsplash() {
  const unsplash = getUnsplash();
  const code = new URLSearchParams(location.search).get('code');
  const currentToken = readToken();

  if (currentToken) {
      unsplash.auth.setBearerToken(currentToken);
      return unsplash;
  }

  if (code) {
      const token = await unsplash.auth.userAuthentication(code)
          .then(response => response.json())
          .then(payload => payload.access_token)
          .catch(error => console.error(error));

      writeToken(token);
      unsplash.auth.setBearerToken(currentToken);

      return unsplash;
  }
}

export default authUnsplash;
