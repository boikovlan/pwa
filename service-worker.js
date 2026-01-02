const CACHE_NAME = 'topology-crypto-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Добавьте другие файлы, если есть, например CSS/JS, если они отдельные
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});