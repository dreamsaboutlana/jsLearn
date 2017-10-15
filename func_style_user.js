'use strict';

const getUrlForUser = (user, indexUrl) => {
  let language = user.prefs.languages.primary;
  return indexUrl[language];
}

let joeUser = {
  name: 'joe',
  email: 'joe@example.com',
  prefs: {
    languages: {
      primary: 'sp',
      secondary: 'en'
    }
  }
};

var indexURLs = {
  'en': 'http://mysite.com/en', //english
  'sp': 'http://mysite.com/sp', //spanish
  'jp': 'http://mysite.com/jp' //japan
}

const showIndexPage = (url) => {
  window.location = url;
  return url;
};

console.log('last func', showIndexPage(getUrlForUser(joeUser, indexURLs)));