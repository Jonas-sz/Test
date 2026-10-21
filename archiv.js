(function () {
  const [j, m, t] = START_DATUM.split("-").map(Number), s = new Date(j, m - 1, t), n = new Date();
  const heute = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  const max = Math.min(Math.round((heute - s) / 864e5) + 1, EINTRAEGE.length);
  const T = document.getElementById("tage"), G = document.getElementById("gespielt");
  function chip(box, href, text) { const a = document.createElement("a"); a.className = "chip"; a.href = href; a.textContent = text; box.appendChild(a); }
  if (max < 1) T.textContent = "Noch nichts da. Es geht bald los.";
  for (let i = max; i >= 1; i--) chip(T, "tage.html?tag=" + i, "Tag " + i + " · " + EINTRAEGE[i - 1].typ);
  const g = FS.get().sort((a, b) => a - b);
  document.getElementById("zaehler").textContent = g.length + " von " + SPIELE.length + " Spielen gespielt";
  g.forEach((id) => chip(G, "spiel.html?id=" + id, "Spiel " + (id + 1) + " · " + SPIELE[id].typ));
})();
