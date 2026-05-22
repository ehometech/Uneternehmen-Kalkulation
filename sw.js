// Service Worker - löscht alten Cache sofort
const CACHE_NAME = 'kalk-v20';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
// Immer frisch vom Server - kein Caching
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
