const redirect_uri = 'http://localhost:3000';
const clientId = '6231f7bb0f2f402e82ecc45d4daee27d';
const clientSecret = '581ff199ca0a43478b24e524d775901c';
const AUTHORIZE = 'https://accounts.spotify.com/authorize';

const requestAuthorization = () => {
  localStorage.setIetm('client_id', clientId);
  localStorage.setItem('client_secret', clientSecret);

  let url = AUTHORIZE;
  url += '?client_id=' + client_id;
  url += '&response_type=code';
  url += '&redirect_uri=' + encodeURI(redirect_uri);
  url += '&show_dialog=true';
  url += '&scope=user--top-read';
  window.location.href = url;
};
