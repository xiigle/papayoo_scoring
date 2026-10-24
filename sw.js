// Incrémentez V à chaque mise à jour de l'application pour renouveler le cache
const V='papayoo-v1',
FILES=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Cache d'abord (démarrage instantané, hors ligne), mise à jour en arrière-plan
self.addEventListener('fetch',e=>{const r=e.request;
if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>{
const net=fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res})
.catch(()=>hit||(r.mode==='navigate'?caches.match('index.html'):Response.error()));
return hit||net}))});
