// Service Worker: Netzwerk zuerst (immer aktuelle Inhalte), Cache als Offline-Reserve
const CACHE = "fuer-dich-v2";
const GRUNDDATEIEN = [
  "./", "index.html", "tage.html", "style.css",
  "config.js", "gate.js", "eintraege.js", "start.js", "script.js",
  "icons/icon-192.png", "icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(GRUNDDATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Nur eigene Dateien cachen (Google Fonts o. Ä. laufen normal übers Netz)
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const kopie = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, kopie));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
