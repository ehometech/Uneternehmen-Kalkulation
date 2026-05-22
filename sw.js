const CACHE_NAME = 'kalk-app-v15';
const ASSETS = ['./','./index.html','./app.js','./kfe-db.js','./manifest.json'];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  // Network first - always try fresh, fallback to cache
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
