self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('tetris-cache').then(cache => {
      return cache.addAll([
        './tetris.html',
        './manifest.json',
        './sw.js'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});