const cacheName = "trading-app-cache-v1";
const assetsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/auth.js",
  "/step.js",
  "/otp.js",
  "/valid.js",
  "/orderstatus.js",
  "/cebuy.js",
  "/cebuyatmkt.js",
  "/cesellmkt.js",
  "/cesell.js",
  "/cesellpone.js",
  "/cesellptwo.js",
  "/cesellpthree.js",
  "/cesellpfour.js",
  "https://code.jquery.com/jquery-3.6.0.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
