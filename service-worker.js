/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/cxs-controlroom/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","273b37d82be400f868a867eeda5b3af0"],["/cxs-controlroom/bower_components/app-layout/app-drawer/app-drawer.html","0f72a286467d922d98ac0a931ff93ed6"],["/cxs-controlroom/bower_components/app-layout/app-header-layout/app-header-layout.html","29b36f15c5539706c3ab61b52c4ba9f2"],["/cxs-controlroom/bower_components/app-layout/app-header/app-header.html","267d191c7bd7ef3d9a3954799595ae03"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","497735516435a4f645951dfd89f04a47"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","c6d6f706f852326c83f1f104cf98cbde"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","5e9797470f01c48716b4944b263112b3"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/effects/material.html","df7146cd7e026bbcbdfb92bc8d2b8184"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","1f7969159863de3ee375e5404d642af7"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","11f48c9a430e29fc447d8a18a2ca400f"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","db98201304c6f12f204943f35c5c041d"],["/cxs-controlroom/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","5d0c52dc39b4e54c70b78e04691c3b03"],["/cxs-controlroom/bower_components/app-layout/app-toolbar/app-toolbar.html","36ae72efd1bba62bd0c8f424c33ea601"],["/cxs-controlroom/bower_components/app-layout/helpers/helpers.html","f5847e98a8cf221d4f205df1e1aa6119"],["/cxs-controlroom/bower_components/app-route/app-location.html","70c7976b18450f4e7be56bf2c0d41f61"],["/cxs-controlroom/bower_components/app-route/app-route-converter-behavior.html","bd86fc248eb33103a3ee9d797e1f19d8"],["/cxs-controlroom/bower_components/app-route/app-route.html","d4f03e5fe40b04d4c08f976d84aa0b62"],["/cxs-controlroom/bower_components/autobahn-connection/autobahn-connection.html","1ff9b66a667f1c5997ea09f8f10b5ed3"],["/cxs-controlroom/bower_components/autobahnjs/autobahn.min.js","649b61d2ce2399601b694fd95a2c3a94"],["/cxs-controlroom/bower_components/font-roboto/roboto.html","4fa582f0702a651ddea0643b823749e7"],["/cxs-controlroom/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","18c01a7bc4a6b167d7887dd235dbfd27"],["/cxs-controlroom/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","f1f094283647fe2b891f117f0d680946"],["/cxs-controlroom/bower_components/iron-ajax/iron-ajax.html","fa31b950b374aec627e9ca5ab59febf5"],["/cxs-controlroom/bower_components/iron-ajax/iron-request.html","753b3352306644057defbac8c11072ab"],["/cxs-controlroom/bower_components/iron-behaviors/iron-button-state.html","19518c44e73ea2454b6409c3fae832ec"],["/cxs-controlroom/bower_components/iron-behaviors/iron-control-state.html","9ffdfd4067353cf1d0fb4c7a30cebe12"],["/cxs-controlroom/bower_components/iron-fit-behavior/iron-fit-behavior.html","a64eb35cd2d6da4471200519ed4a217e"],["/cxs-controlroom/bower_components/iron-flex-layout/iron-flex-layout-classes.html","910c3181d5d32a2d173952fe960e3237"],["/cxs-controlroom/bower_components/iron-flex-layout/iron-flex-layout.html","c84f73133ad49e771c68e95c155fb061"],["/cxs-controlroom/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","cadcf25ebd5a1ef47cc9c8871daa952d"],["/cxs-controlroom/bower_components/iron-icon/iron-icon.html","3f5efd3e31987617fd7e9ac9733cec7a"],["/cxs-controlroom/bower_components/iron-icons/iron-icons.html","f167b940536136378cba6ddbc6bb00d0"],["/cxs-controlroom/bower_components/iron-iconset-svg/iron-iconset-svg.html","0aa8bee79fc9c119c1adb53e6d581ee2"],["/cxs-controlroom/bower_components/iron-input/iron-input.html","8ddb45734f110adb0e0f5b6a921ff160"],["/cxs-controlroom/bower_components/iron-location/iron-location.html","5023a899bcf306556d42666652b1e9c1"],["/cxs-controlroom/bower_components/iron-location/iron-query-params.html","f4b226ba8a80951b1a580f98ea214601"],["/cxs-controlroom/bower_components/iron-media-query/iron-media-query.html","2ec3ed362029257656948278e4ac604e"],["/cxs-controlroom/bower_components/iron-menu-behavior/iron-menu-behavior.html","03f3f14e35b7e0a5c95855dcff2da2f7"],["/cxs-controlroom/bower_components/iron-menu-behavior/iron-menubar-behavior.html","d9093e485fa120c62973832c4c47c949"],["/cxs-controlroom/bower_components/iron-meta/iron-meta.html","2f0ea8c4a3668e4be1b8635b6703e658"],["/cxs-controlroom/bower_components/iron-overlay-behavior/iron-focusables-helper.html","bae753259c4bc3eebe30a634d4a0055c"],["/cxs-controlroom/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","f28c042a5068d60fdb9833ea1da4e035"],["/cxs-controlroom/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","b2f611af232f30f324a33b467fcb80a3"],["/cxs-controlroom/bower_components/iron-overlay-behavior/iron-overlay-manager.html","63951238dd1800bdc5515d2c1fd97f5e"],["/cxs-controlroom/bower_components/iron-pages/iron-pages.html","8026c94d02669f6d6f6c7dec5ad1e9b8"],["/cxs-controlroom/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","69b940a4fe5539b6c5374877189b597c"],["/cxs-controlroom/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","3604c87b4aa3dfd201e3666027bcd53f"],["/cxs-controlroom/bower_components/iron-selector/iron-multi-selectable.html","9ba3d44b14c3e28e8fc03be9cdd8fcf8"],["/cxs-controlroom/bower_components/iron-selector/iron-selectable.html","a5cf513c7466ef8085ae89561fd0dadd"],["/cxs-controlroom/bower_components/iron-selector/iron-selection.html","a48d3a827f6c4f411abb2d34de2fa4b0"],["/cxs-controlroom/bower_components/iron-selector/iron-selector.html","81234b5f8e8443f26e37b0eac9aa88c7"],["/cxs-controlroom/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","b2980051fddbb43aa045ac90fb7568a8"],["/cxs-controlroom/bower_components/neon-animation/animations/cascaded-animation.html","fbd8365c9170666a24a6ec0ec5346f67"],["/cxs-controlroom/bower_components/neon-animation/animations/fade-in-animation.html","9187430a66c0271c0849586cd31a2370"],["/cxs-controlroom/bower_components/neon-animation/animations/fade-out-animation.html","aee1c7c074311fb8906405ecc6d4374a"],["/cxs-controlroom/bower_components/neon-animation/animations/hero-animation.html","337711b1499146cbaed47b5f326dc2dc"],["/cxs-controlroom/bower_components/neon-animation/animations/opaque-animation.html","a2f62e6a0061103f153a25834d430e61"],["/cxs-controlroom/bower_components/neon-animation/animations/reverse-ripple-animation.html","c158fc10b6e2db95de95f5421e66f00b"],["/cxs-controlroom/bower_components/neon-animation/animations/ripple-animation.html","cea504b54d3f8f120510d102b893d651"],["/cxs-controlroom/bower_components/neon-animation/animations/scale-down-animation.html","e056e75221df584964944f7ed6f75a1a"],["/cxs-controlroom/bower_components/neon-animation/animations/scale-up-animation.html","a57a96ee906d891e76e02ccfdac0d953"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-down-animation.html","d0f725b7b25ff02734802afcd7c74025"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-from-bottom-animation.html","6d255ce936f3290a49edf84a72f1f491"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-from-left-animation.html","598c17f7ac838e351934cd09f0a02ab8"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-from-right-animation.html","2049f621f8268b0474a53c4827998ad3"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-from-top-animation.html","3b24b2eb3f3a5546b74f0dad8b1a5c8e"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-left-animation.html","f73a7b8929f96e9f3cb9d57044b0c81e"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-right-animation.html","4c707a3c586c2a2fdd4ab1957dc050c1"],["/cxs-controlroom/bower_components/neon-animation/animations/slide-up-animation.html","b4e8e7ca1e160118adf005f63022c5fd"],["/cxs-controlroom/bower_components/neon-animation/animations/transform-animation.html","f9cb81bb41d7c273fa75256d9043c093"],["/cxs-controlroom/bower_components/neon-animation/neon-animatable-behavior.html","0068d6f24425bed7be4c57f70fab46d7"],["/cxs-controlroom/bower_components/neon-animation/neon-animatable.html","c1ba2542901d64d0e3f49fd8f02013de"],["/cxs-controlroom/bower_components/neon-animation/neon-animated-pages.html","04730fadaaa1d0deac98368dc13dacdc"],["/cxs-controlroom/bower_components/neon-animation/neon-animation-behavior.html","17eb8dd5363dfafbc82b7ee7c098dcc4"],["/cxs-controlroom/bower_components/neon-animation/neon-animation-runner-behavior.html","053e6c964687768b50aac26685093459"],["/cxs-controlroom/bower_components/neon-animation/neon-animations.html","f88f2b5db3daeaba28072b501f5b8bff"],["/cxs-controlroom/bower_components/neon-animation/neon-shared-element-animation-behavior.html","a123f57b07859e1b80d1bf2829cf3ded"],["/cxs-controlroom/bower_components/neon-animation/web-animations.html","aa5266664b17a9a7d7ebf0c4e6fcf8c9"],["/cxs-controlroom/bower_components/paper-behaviors/paper-inky-focus-behavior.html","267bc100babde07f6f3133acbfdf8e14"],["/cxs-controlroom/bower_components/paper-behaviors/paper-ripple-behavior.html","dbfd82d0692bbd552e403680c0635108"],["/cxs-controlroom/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","6a70d6f31a94e9bbf92bf7dfa3b4bf1c"],["/cxs-controlroom/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","c45645b477016ee30c18b66309c9870e"],["/cxs-controlroom/bower_components/paper-dialog/paper-dialog.html","03af49593a97fff8a162363a80444fe6"],["/cxs-controlroom/bower_components/paper-icon-button/paper-icon-button.html","aeb14712e90928869fbab2ccc8b159f6"],["/cxs-controlroom/bower_components/paper-input/paper-input-addon-behavior.html","f11dd5f4211141dbfcf6003065dfedc2"],["/cxs-controlroom/bower_components/paper-input/paper-input-behavior.html","f396ede1928070a6d629049adc99908f"],["/cxs-controlroom/bower_components/paper-input/paper-input-char-counter.html","2b6313672da559431bf190423126e261"],["/cxs-controlroom/bower_components/paper-input/paper-input-container.html","04a1c1191d8377345ca27192b780e44f"],["/cxs-controlroom/bower_components/paper-input/paper-input-error.html","f58018061d44545ece2afc7fe45e8b2d"],["/cxs-controlroom/bower_components/paper-input/paper-input.html","90daf37d4d106418fbf0b9b9a909d8c8"],["/cxs-controlroom/bower_components/paper-ripple/paper-ripple.html","eda9549e116154263092158776978191"],["/cxs-controlroom/bower_components/paper-styles/color.html","7e7b6c4b6df20d684db1c1f9d75485b0"],["/cxs-controlroom/bower_components/paper-styles/default-theme.html","356001e16dc2f911f8faeff659c61abb"],["/cxs-controlroom/bower_components/paper-styles/shadow.html","3de212121d13169e7b1a8b2872446330"],["/cxs-controlroom/bower_components/paper-styles/typography.html","75795596f1e9e0e90872cacb2936b1df"],["/cxs-controlroom/bower_components/paper-tabs/paper-tab.html","be637a984320d20acea20948490b1b9c"],["/cxs-controlroom/bower_components/paper-tabs/paper-tabs-icons.html","f8e9e4ba00752fc54f1046143ba1be28"],["/cxs-controlroom/bower_components/paper-tabs/paper-tabs.html","05da88febf13ffe037d23d6b2c7da403"],["/cxs-controlroom/bower_components/polymer/polymer-micro.html","ada895311f0055f01b5fe9425fdb8417"],["/cxs-controlroom/bower_components/polymer/polymer-mini.html","4f02690d082c387363ea22594989d6d4"],["/cxs-controlroom/bower_components/polymer/polymer.html","191ee315fe6f58499abb53b05839e628"],["/cxs-controlroom/bower_components/promise-polyfill/Promise.js","1296211dae20ef69392a340c06236090"],["/cxs-controlroom/bower_components/promise-polyfill/promise-polyfill-lite.html","c86f9b307a3cd86f9ce7f9a02cea9844"],["/cxs-controlroom/bower_components/web-animations-js/web-animations-next-lite.min.js","7b3c7d0e934a70af0c2d5d708eb7dff5"],["/cxs-controlroom/index.html","2fb847413057a584c90e8256fdbbc336"],["/cxs-controlroom/src/control-card.html","7ff839e3ec4ee691bb9d316ccc73c1d4"],["/cxs-controlroom/src/controlroom-app.html","8cb1d875f0293f7f99b2409a3c546ced"],["/cxs-controlroom/src/controlroom-control.html","217d071bbfe3dc71c4f81a910941a577"],["/cxs-controlroom/src/controlroom-home.html","70f18c27d63339950e46600c5f4f9510"],["/cxs-controlroom/src/controlroom-telemetry.html","21e5b87744f78ce1ac936a439d924c9e"],["/cxs-controlroom/src/controlroom-view404.html","181497317df393cc7a931e119913fb29"],["/cxs-controlroom/src/shared-styles.html","61345be6756b7c9b6918cae4368648fb"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




