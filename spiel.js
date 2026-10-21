(function () {
  const q = new URLSearchParams(location.search), tag = q.get("tag");
  const id = Math.min(Math.max(+q.get("id") || 0, 0), SPIELE.length - 1), g = SPIELE[id];
  const $ = (i) => document.getElementById(i), area = $("spiel");
  $("titel").textContent = g.typ;
  $("zurueck").href = tag ? "tage.html?tag=" + tag : "archiv.html";

  if (g.typ === "Liebst du mich?") { location.replace("liebst-du-mich.html?f=" + encodeURIComponent(g.f) + "&id=" + id); return; }

  function el(t, c, x) { const e = document.createElement(t); if (c) e.className = c; if (x) e.textContent = x; return e; }
  function knopf(t, f) { const b = el("button", "", t); b.onclick = f; return b; }
  function ende(t) { FS.add(id); area.appendChild(el("p", "ergebnis", t)); }

  if (g.o) { // Quiz, Wahr/Falsch, Entweder-oder, Emoji
    area.appendChild(el("p", "spiel-frage", g.q));
    let opts = g.o.map((t, i) => ({ t: t, i: i }));
    if (!g.fix) opts = mischen(opts, rnd(id + 1));
    const box = el("div", "opts"); area.appendChild(box);
    opts.forEach(function (o) {
      box.appendChild(knopf(o.t, function () {
        if (box.dataset.fertig) return; box.dataset.fertig = 1;
        Array.from(box.children).forEach((c, k) => { if (opts[k].i === g.r) c.classList.add("richtig"); });
        ende(g.r < 0 ? "Gute Wahl ♥" : o.i === g.r ? "Richtig ♥" : "Knapp daneben, aber trotzdem süß.");
      }));
    });
  } else if (g.typ === "Memory") {
    const karten = mischen(g.e.slice(0, g.n).concat(g.e.slice(0, g.n)), rnd(id + 3));
    const grid = el("div", "mem"); area.appendChild(grid);
    let offen = [], treffer = 0, sperre = false;
    karten.forEach(function (e) {
      const b = knopf("?", function () {
        if (sperre || b.disabled || offen.indexOf(b) >= 0) return;
        b.textContent = e; offen.push(b);
        if (offen.length < 2) return;
        if (offen[0].dataset.e === offen[1].dataset.e) {
          offen.forEach((x) => { x.disabled = true; x.classList.add("richtig"); }); offen = [];
          if (++treffer === g.n) ende("Alle Paare gefunden ♥");
        } else { sperre = true; setTimeout(function () { offen.forEach((x) => (x.textContent = "?")); offen = []; sperre = false; }, 800); }
      });
      b.dataset.e = e; grid.appendChild(b);
    });
  } else if (g.typ === "Herzen fangen") {
    let n = 0, rest = g.s, aus = false;
    const info = el("p", "spiel-frage"), feld = el("div", "feld"); area.appendChild(info); area.appendChild(feld);
    const upd = () => (info.textContent = n + " von " + g.z + " · " + rest + " s");
    function fertig() { if (aus) return; aus = true; clearInterval(tick); clearInterval(spawn); ende(n >= g.z ? "Geschafft ♥" : "Zu langsam, versuch es nochmal."); }
    const tick = setInterval(function () { rest--; upd(); if (rest <= 0) fertig(); }, 1000);
    const spawn = setInterval(function () {
      if (aus) return;
      const h = knopf("♥", function () { n++; h.remove(); upd(); if (n >= g.z) fertig(); });
      h.className = "herz"; h.style.left = Math.random() * 85 + "%"; h.style.top = Math.random() * 85 + "%";
      feld.appendChild(h); setTimeout(() => h.remove(), g.t * 1.4);
    }, g.t);
    upd();
  } else { // Zahlenraten, Wort-Wirrwarr: Eingabe
    const geheim = g.m ? 1 + Math.floor(Math.random() * g.m) : 0;
    let wirr = g.w; if (g.w) { for (let k = 0; k < 20 && wirr === g.w; k++) wirr = mischen(g.w.split(""), rnd(id * 31 + k)).join(""); }
    let v = g.v;
    area.appendChild(el("p", "spiel-frage", g.m ? "Ich denke an eine Zahl von 1 bis " + g.m + ". Du hast " + g.v + " Versuche." : "Welches Wort steckt hier drin?\n" + wirr));
    const inp = el("input", "spiel-eingabe"); inp.autocomplete = "off"; if (g.m) inp.type = "number"; area.appendChild(inp);
    const hint = el("p", "spiel-frage");
    const pruefen = knopf("Prüfen", function () {
      const x = inp.value.trim(); if (!x || pruefen.disabled) return;
      if (g.m) {
        const z = +x; v--;
        if (z === geheim) { pruefen.disabled = true; hint.textContent = ""; ende("Genau! Die Zahl war " + geheim + " ♥"); }
        else if (v <= 0) { pruefen.disabled = true; hint.textContent = ""; ende("Leider nicht. Es war die " + geheim + "."); }
        else hint.textContent = (z < geheim ? "Höher" : "Tiefer") + " (" + v + " Versuche übrig)";
      } else if (x.toUpperCase() === g.w) { pruefen.disabled = true; ende("Richtig: " + g.w + " ♥"); }
      else hint.textContent = "Nicht ganz, probier es nochmal.";
      inp.value = "";
    });
    area.appendChild(pruefen); area.appendChild(hint);
  }
})();
