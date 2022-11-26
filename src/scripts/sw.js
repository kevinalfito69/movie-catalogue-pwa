self.addEventListener('install', (event) => {
  console.log('installing service worker...');
});
self.addEventListener('activate', (event) => {
  console.log('activate service worker...');
});
self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(fetch(event.request));
});
