(function () {
  const TAG_MS = 24 * 60 * 60 * 1000;
  const $ = (id) => document.getElementById(id);

  const [j, m, t] = START_DATUM.split("-").map(Number);
  const start = new Date(j, m - 1, t);
  const jetzt = new Date();
  const heute = new Date(jetzt.getFullYear(), jetzt.getMonth(), jetzt.getDate());
  const tageSeitStart = Math.round((heute - start) / TAG_MS);

  if (tageSeitStart < 0) {
    const rest = -tageSeitStart;
    $("countdown-text").textContent = rest === 1 ? "Morgen geht es los." : "Noch " + rest + " Tage.";
    $("countdown").hidden = false;
    return;
  }

  const maxIndex = Math.min(tageSeitStart, EINTRAEGE.length - 1);
  let aktuell = maxIndex;
  const wunsch = parseInt(new URLSearchParams(location.search).get("tag"), 10);
  if (wunsch) aktuell = Math.min(maxIndex, Math.max(0, wunsch - 1));

  // Platzhalter-Bild, falls noch kein Foto hochgeladen ist
  function platzhalter(n) {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0a9a0"/><stop offset="1" stop-color="#8c4a5e"/></linearGradient></defs>' +
      '<rect width="400" height="400" fill="url(#g)"/>' +
      '<text x="200" y="215" font-size="130" text-anchor="middle" fill="#fbf7f4" opacity="0.9">♥</text>' +
      '<text x="200" y="330" font-size="40" text-anchor="middle" fill="#fbf7f4" font-family="Georgia,serif">Tag ' + n + '</text></svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  const img = $("day-image");
  img.addEventListener("error", function () {
    if (!img.dataset.fallback) { img.dataset.fallback = "1"; img.src = platzhalter(aktuell + 1); }
  });

  function zeige(index) {
    const e = EINTRAEGE[index];
    $("day-label").textContent = "Tag " + (index + 1) + (e.typ ? " · " + e.typ : "");
    delete img.dataset.fallback;
    img.src = e.bild;
    img.alt = e.bildtext || "";
    $("day-caption").textContent = e.bildtext || "";
    $("day-text").textContent = e.text;
    const btn = $("antwort-btn"), ant = $("day-antwort");
    ant.hidden = true;
    ant.textContent = e.antwort || "";
    btn.hidden = !e.antwort;
    const sid = spielIdFuerTag(index + 1), sl = $("spiel-link");
    sl.href = "spiel.html?id=" + sid + "&tag=" + (index + 1);
    sl.textContent = "Tagesspiel: " + SPIELE[sid].typ + (FS.get().indexOf(sid) >= 0 ? " ✓" : " ›");
    sl.hidden = false;
    $("prev").disabled = index === 0;
    $("next").disabled = index === maxIndex;
  }

  $("antwort-btn").addEventListener("click", function () { $("day-antwort").hidden = false; this.hidden = true; });
  $("prev").addEventListener("click", function () { if (aktuell > 0) zeige(--aktuell); });
  $("next").addEventListener("click", function () { if (aktuell < maxIndex) zeige(++aktuell); });

  $("day").hidden = false;
  zeige(aktuell);
})();
