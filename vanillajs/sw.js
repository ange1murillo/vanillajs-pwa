self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/vanillajs-pwa/vanillajs/',
       '/vanillajs-pwa/vanillajs/index.html',
       '/vanillajs-pwa/vanillajs/index.js',
       '/vanillajs-pwa/vanillajs/images/pirate_PNG90.png',
       '/vanillajs-pwa/vanillajs/js/app.js',
       '/vanillajs-pwa/vanillajs/js/controller.js',
       '/vanillajs-pwa/vanillajs/js/helpers.js',
       '/vanillajs-pwa/vanillajs/js/model.js',
       '/vanillajs-pwa/vanillajs/js/store.js',
       '/vanillajs-pwa/vanillajs/js/template.js',
       '/vanillajs-pwa/vanillajs/js/view.js',
       '/vanillajs-pwa/vanillajs/node_modules/todomvc-app-css/index.css',
       '/vanillajs-pwa/vanillajs/node_modules/todomvc-common/base.css',
       '/vanillajs-pwa/vanillajs/node_modules/todomvc-common/base.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});