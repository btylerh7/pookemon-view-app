const pokemonApp = "pokemon-app-v1";
const assets = [
  "/",
  "/index.html",
  "/script.js",

];
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(pokemonApp).then(cache => {
      cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  )
})