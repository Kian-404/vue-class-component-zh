/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fb74a5ac5ec45618450c348abc05ec3c"
  },
  {
    "url": "api/index.html",
    "revision": "6d2c53b6d2bd84e19304b4b4414f7e30"
  },
  {
    "url": "assets/css/0.styles.8adf33f9.css",
    "revision": "a0e13b4e457706b321ccfaeea6622ce5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vue-cli-1.67b86f9d.png",
    "revision": "67b86f9dec716c74168f4e8ea3ae8873"
  },
  {
    "url": "assets/img/vue-cli-2.388fcd7f.png",
    "revision": "388fcd7fded23987678113e1d7c3deb6"
  },
  {
    "url": "assets/img/vue-cli-3.92013345.png",
    "revision": "92013345822d49e92bc486036ea514eb"
  },
  {
    "url": "assets/js/10.07a4a202.js",
    "revision": "0c3ab4bff388ad011a0e778de7f5446c"
  },
  {
    "url": "assets/js/11.73a71981.js",
    "revision": "95fd6890202c6b6e9bbca9ccb6aed134"
  },
  {
    "url": "assets/js/12.de2c3f47.js",
    "revision": "24451ecc863453935a98d9158d3a8c37"
  },
  {
    "url": "assets/js/13.925c8b9c.js",
    "revision": "e841ec5b82136381a5e1808f97ed63a1"
  },
  {
    "url": "assets/js/14.d6928efd.js",
    "revision": "ef0b57b691f432b0ec9ecc6227edc540"
  },
  {
    "url": "assets/js/15.80e2cee5.js",
    "revision": "1927f58e8731615c6c3a5f23ec2ce725"
  },
  {
    "url": "assets/js/16.ab01c8e6.js",
    "revision": "4b08d3fceafd5a449b4fc5664e4365b5"
  },
  {
    "url": "assets/js/17.a5b430bf.js",
    "revision": "03b35f7339411af639efa9f36e2029f3"
  },
  {
    "url": "assets/js/18.15eec4ba.js",
    "revision": "66eac9d8e5be22cc2ea3525b69973c8b"
  },
  {
    "url": "assets/js/19.6cca8a55.js",
    "revision": "c3168dac3d9fb74f00d77b030f0b2784"
  },
  {
    "url": "assets/js/2.1606ceab.js",
    "revision": "215421e9ad157ae33f4882cb8e40b31f"
  },
  {
    "url": "assets/js/20.d51954bc.js",
    "revision": "46493be08719c3ba3bee1633c5c96973"
  },
  {
    "url": "assets/js/3.424bd4ee.js",
    "revision": "188bb43cf5837fc72183365059e8331a"
  },
  {
    "url": "assets/js/4.23b4e2fd.js",
    "revision": "52af3d30a25ca0be64528e91ed571362"
  },
  {
    "url": "assets/js/5.15717fc6.js",
    "revision": "e3e3011644f9efd738aa5056f7ef1f6c"
  },
  {
    "url": "assets/js/6.f4fc4308.js",
    "revision": "84db514b732a10356af4237a0b935c10"
  },
  {
    "url": "assets/js/7.36978bb5.js",
    "revision": "37d8b5b1ac188bbecd32e918f9a5c232"
  },
  {
    "url": "assets/js/8.aa48a3ba.js",
    "revision": "b56658f1d2fe001020a58b59b81bdd3b"
  },
  {
    "url": "assets/js/9.86b2724d.js",
    "revision": "ff8078b5d2581051cbd4113957c21e90"
  },
  {
    "url": "assets/js/app.9b535468.js",
    "revision": "ec25fd9d456fac056d2374fd3692c7aa"
  },
  {
    "url": "guide/additional-hooks.html",
    "revision": "7b79fcefe427874137137074620c12c4"
  },
  {
    "url": "guide/annotate-component-type-in-decorator.html",
    "revision": "dc8289e617f260f330931c0d42ab0a62"
  },
  {
    "url": "guide/caveats.html",
    "revision": "63b66ef137954476aebf1515de027f59"
  },
  {
    "url": "guide/class-component.html",
    "revision": "2f7a4a0822456a956f333ead1f580e52"
  },
  {
    "url": "guide/custom-decorators.html",
    "revision": "da309a8b6d831d7e4997415a3747aea1"
  },
  {
    "url": "guide/extend-and-mixins.html",
    "revision": "12f69e3955578c55b0b9af542b336b50"
  },
  {
    "url": "guide/hooks-auto-complete.html",
    "revision": "7325153c8212bb8ccfd6f1b450a97779"
  },
  {
    "url": "guide/installation.html",
    "revision": "bf5e708c1c274d99b3448aeec6d50e86"
  },
  {
    "url": "guide/property-type-declaration.html",
    "revision": "9fc7c3c5a66a53da5816c67f9f049997"
  },
  {
    "url": "guide/props-definition.html",
    "revision": "6155c5a2a7da2118ee50b4fec386de10"
  },
  {
    "url": "guide/refs-type-extension.html",
    "revision": "fa4deb16d79bf5ce1b28bb90e6d70eaa"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "index.html",
    "revision": "8e7cb8e547a3d6d53cc1cce1befd271b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
