'use strict';

self.onfetch = function(event) {
  console.log('fetch event: ' + event.request.url);
  return fetch(event.request);
};
