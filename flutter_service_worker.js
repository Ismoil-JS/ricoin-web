'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c7d768d1d7467a6777295d7bbc66269d",
"assets/AssetManifest.bin.json": "37c4677abf31ef13b31d595cffe23989",
"assets/AssetManifest.json": "e77d83402307e3dfda4d91eb09991cb5",
"assets/assets/icons/bird.svg": "329813ddc93abd5354b988c973bf2021",
"assets/assets/icons/flower.svg": "f8744a67df5043a112a77231be34b6b4",
"assets/assets/icons/launcher-icon.png": "45264510711da575201253158ed84d1d",
"assets/assets/icons/main-icon.png": "46fcabff09d8ed356d1fffc2696f0e1f",
"assets/assets/icons/splash-icon.png": "56e08033955fa0ba47521015ab6272b9",
"assets/assets/images/0-medal.png": "e2ce0469979b7365bd95eec9bf48029e",
"assets/assets/images/1-medal.png": "c7a91ebc7b7dd4b179398a236286bdd1",
"assets/assets/images/2-medal.png": "c44048c28bf22c8f4408985eac5e6b06",
"assets/assets/images/black-cap.png": "c6ae36d6e742f4ee532a5dcb599ba92f",
"assets/assets/images/deep-work-book.png": "0333a951853857a02641c197ef5cf95d",
"assets/assets/images/ismoil.jpg": "3cba927646f302ae75c6506be3e949a4",
"assets/assets/images/sohib.jpg": "1b3ccff21c7d14a0f02fb896f73e4c37",
"assets/assets/images/tshirt-black.png": "e6cbbb5d192866df511415e2850500aa",
"assets/assets/images/tshirt-white.png": "b69a2d93102e1218fd1e8f43400ba182",
"assets/assets/images/typec-cable.png": "cb7648d1371c84ffe17882ac8416b867",
"assets/assets/images/usb-cable.png": "dc8d8aa9ad4e17430101c8dea7ca9df7",
"assets/assets/images/white-cap.png": "d291abccf449645cabbc1426706c0584",
"assets/assets/images/white-cap.webp": "987239cfa573af637b22feb9191c93b8",
"assets/assets/images/xurshidbek.jpg": "c85947d6dfe93700ed9a1e47766f85da",
"assets/FontManifest.json": "820d3c98abc58fb563bf3da2404ea035",
"assets/fonts/MaterialIcons-Regular.otf": "d3f9789554409102ac4a69cdb76d05c4",
"assets/NOTICES": "202869dbb45b76ebf438337eadb7ed23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP1.ttf": "18363f22c1a1e5edd78af7dcb6db4704",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP2.ttf": "f361a7f534b150b6aca9e062d26df1ec",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP3.ttf": "e59442c8a082f6314479eadfa78a88be",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP4.ttf": "1d7bd3ebed559a3291c8f2556ea0a58f",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP5.ttf": "3066e0e994eb220c010683f13de4893b",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP6.ttf": "3e237ba9e8ea7fea26d7aff083b104ac",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP7.ttf": "6ff04f77f5d74b91158d60468affbccc",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bac9e203b33b80a9566ebdefaa02c296",
"/": "bac9e203b33b80a9566ebdefaa02c296",
"main.dart.js": "0280ceabd6bb52a6489e25c968f84d9f",
"manifest.json": "db55e67a2d658d28bcc4ab0f4ee36ab0",
"splash/img/dark-1x.png": "e0f63c90cb419eff62708e80dc905f2c",
"splash/img/dark-2x.png": "f52a5ebd859f8ca2eb07cd13588fc6a7",
"splash/img/dark-3x.png": "f48f7220ece0d1127a116c42e95d0144",
"splash/img/dark-4x.png": "ee456da6411d40c9f4b6e35b45c9303d",
"splash/img/light-1x.png": "e0f63c90cb419eff62708e80dc905f2c",
"splash/img/light-2x.png": "f52a5ebd859f8ca2eb07cd13588fc6a7",
"splash/img/light-3x.png": "f48f7220ece0d1127a116c42e95d0144",
"splash/img/light-4x.png": "ee456da6411d40c9f4b6e35b45c9303d",
"version.json": "43ad059034bfeb2c8eb8816ea18d8be3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
