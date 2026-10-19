(function () {
  const TAG_MS = 24 * 60 * 60 * 1000;
  const $ = (id) => document.getElementById(id);

  function parse(str) {
    const [j, m, t] = str.split("-").map(Number);
    return new Date(j, m - 1, t);
  }
  function nurDatum(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  function tageText(n) {
    if (n === 0) return "Heute!";
    if (n === 1) return "Morgen";
    return n + " Tage";
  }
  function formatDatum(d) {
    return d.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
  }
  // Nächstes Vorkommen von Monat/Tag (heute zählt mit)
  function naechster(monat, tag, heute) {
    let d = new Date(heute.getFullYear(), monat, tag);
    if (d < heute) d = new Date(heute.getFullYear() + 1, monat, tag);
    return d;
  }

  const seit = parse(ZUSAMMEN_SEIT);
  const geb = parse(GEBURTSTAG);
  const heute = nurDatum(new Date());

  $("name").textContent = NAME;

  // Tage zusammen
  const tage = Math.max(0, Math.round((heute - seit) / TAG_MS));
  $("tage-zusammen").textContent = tage.toLocaleString("de-DE");
  $("tage-label").textContent = tage === 1 ? "Tag zusammen" : "Tage zusammen";

  function stundenAktualisieren() {
    const h = Math.max(0, Math.floor((Date.now() - seit.getTime()) / 3600000));
    $("stunden-zusammen").textContent = "Das sind schon " + h.toLocaleString("de-DE") + " Stunden.";
  }
  stundenAktualisieren();
  setInterval(stundenAktualisieren, 60000);

  // Nächster Geburtstag
  const nextGeb = naechster(geb.getMonth(), geb.getDate(), heute);
  const bisGeb = Math.round((nextGeb - heute) / TAG_MS);
  $("bis-geburtstag").textContent = tageText(bisGeb);
  const alter = nextGeb.getFullYear() - geb.getFullYear();
  $("geburtstag-sub").textContent = "Am " + formatDatum(nextGeb) + (alter > 0 ? ", du wirst " + alter : "");

  // Nächster Jahrestag
  const nextJahr = naechster(seit.getMonth(), seit.getDate(), heute);
  const bisJahr = Math.round((nextJahr - heute) / TAG_MS);
  $("bis-jahrestag").textContent = tageText(bisJahr);
  const jahre = nextJahr.getFullYear() - seit.getFullYear();
  $("jahrestag-sub").textContent = "Am " + formatDatum(nextJahr) + (jahre > 0 ? ", der " + jahre + ". Jahrestag" : "");

  // Nächster Meilenstein (alle 100 Tage)
  const meilenstein = Math.max(100, Math.ceil(tage / 100) * 100);
  const rest = meilenstein - tage;
  $("bis-meilenstein").textContent = tageText(rest);
  const meilensteinDatum = new Date(seit.getFullYear(), seit.getMonth(), seit.getDate() + meilenstein);
  $("meilenstein-sub").textContent = "Tag " + meilenstein.toLocaleString("de-DE") + ", am " + formatDatum(meilensteinDatum);

  // Herz mit Sprüchen
  let letzter = -1;
  $("herz").addEventListener("click", function (e) {
    if (HERZ_SPRUECHE.length) {
      let i;
      do { i = Math.floor(Math.random() * HERZ_SPRUECHE.length); }
      while (HERZ_SPRUECHE.length > 1 && i === letzter);
      letzter = i;
      $("herz-text").textContent = HERZ_SPRUECHE[i];
    }
    const r = e.currentTarget.getBoundingClientRect();
    for (let k = 0; k < 4; k++) {
      const h = document.createElement("span");
      h.className = "floating-heart";
      h.textContent = "♥";
      h.style.left = r.left + r.width / 2 + (Math.random() * 60 - 30) + "px";
      h.style.top = r.top + "px";
      h.style.color = "var(--accent)";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1700);
    }
  });
})();
