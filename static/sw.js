importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "sample",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f6740b4f5537676f9720.js",
    "revision": "b6d93dff3edec0345eec0b2d63a17007"
  },
  {
    "url": "/_nuxt/layouts_default.d6377f0488309f6bb6fe.js",
    "revision": "11fcb22d6f7ef9fd881b0b0323aa870d"
  },
  {
    "url": "/_nuxt/manifest.6556b487b3b0ba85a12a.js",
    "revision": "2731478a70f4f3f9b17cde6aad280278"
  },
  {
    "url": "/_nuxt/pages_about_index.c34b4a84084455e671a2.js",
    "revision": "e58a550447bb0d1d43bee3b6d0b82c75"
  },
  {
    "url": "/_nuxt/pages_cards_index.174992d69310aac79c40.js",
    "revision": "79ad74aabecc99f3303aea787278a4a3"
  },
  {
    "url": "/_nuxt/pages_contact_index.dc11877afa5e4c8d11d0.js",
    "revision": "0fd784e593f051d39e1fe4c04ae990fe"
  },
  {
    "url": "/_nuxt/pages_door_index.52a9089f2092df445bd9.js",
    "revision": "4efe215a65c00ecb07ab695378aa10ae"
  },
  {
    "url": "/_nuxt/pages_events_index.e76369d1258bed1e9d57.js",
    "revision": "ea10429d21e35bdc6429cf3b45706280"
  },
  {
    "url": "/_nuxt/pages_index.324914006d18552ecee8.js",
    "revision": "012718a7388164313dba6ca691f0d3b7"
  },
  {
    "url": "/_nuxt/pages_Non-Technical_index.a9453051d91803ad1b6f.js",
    "revision": "086ea84324b4b59ac4e71edc3a78adbc"
  },
  {
    "url": "/_nuxt/pages_OTS_index.7439f469abe7aa79de53.js",
    "revision": "ed7e59ba766c6c415758d4f6d3505e4a"
  },
  {
    "url": "/_nuxt/pages_sponsers_index.6b1899019e30bdb85daf.js",
    "revision": "1a0f42e805b4f3c8e6d43ad12ae62c42"
  },
  {
    "url": "/_nuxt/pages_team_index.ab154db76a9ff201b481.js",
    "revision": "924bf7eb8c3c8668134441fe465b0c4f"
  },
  {
    "url": "/_nuxt/pages_Technical_index.1d747fe38492e87a967f.js",
    "revision": "eb4e4bcad0a5847c7c71dec21d51503a"
  },
  {
    "url": "/_nuxt/vendor.a2793dd1043cdc1ed60a.js",
    "revision": "53eb3609879f7f01948f5ef9c87e98f5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

