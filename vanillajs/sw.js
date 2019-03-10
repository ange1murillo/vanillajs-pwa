self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjs-todo-store').then(function(cache) {
     return cache.addAll([
       '/vanillajs/',
       '/vanillajs/index.html',
       '/vanillajs/index.js',
       '/vanillajs/images/pirate_PNG90.png',
       '/vanillajs/js/app.js',
       '/vanillajs/js/controller.js',
       '/vanillajs/js/helpers.js',
       '/vanillajs/js/model.js',
       '/vanillajs/js/store.js',
       '/vanillajs/js/template.js',
       '/vanillajs/js/view.js',
       '/vanillajs/node_modules/todomvc-app-css/index.css',
       '/vanillajs/node_modules/todomvc-common/base.css',
       '/vanillajs/node_modules/todomvc-common/base.js'
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