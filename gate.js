// Einfache Passwort-Sperre (gilt, solange die App/der Tab offen ist; nach Neustart wird neu gefragt)
(function () {
  if (typeof PASSWORT === "undefined" || !PASSWORT) return;

  const KEY = "fuer-dich-entsperrt";
  try { localStorage.removeItem(KEY); } catch (e) {} // alte Merkung früherer Version löschen
  try {
    if (sessionStorage.getItem(KEY) === "1") return;
  } catch (e) { /* Speicher gesperrt: Sperre bei jedem Besuch */ }

  document.documentElement.classList.add("gesperrt");

  document.addEventListener("DOMContentLoaded", function () {
    const box = document.createElement("div");
    box.id = "sperre";
    box.innerHTML =
      '<form id="sperre-form">' +
      '<p class="sperre-herz" aria-hidden="true">♥</p>' +
      '<h1>Nur für dich</h1>' +
      '<label for="sperre-pw" class="sperre-label">Wie lautet unser Wort?</label>' +
      '<input id="sperre-pw" type="password" autocomplete="off" autocapitalize="none" required>' +
      '<p id="sperre-fehler" role="alert"></p>' +
      '<button type="submit">Öffnen</button>' +
      '</form>';
    document.body.appendChild(box);

    const input = document.getElementById("sperre-pw");
    const fehler = document.getElementById("sperre-fehler");
    input.focus();

    document.getElementById("sperre-form").addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value.trim().toLowerCase() === String(PASSWORT).trim().toLowerCase()) {
        try { sessionStorage.setItem(KEY, "1"); } catch (err) {}
        document.documentElement.classList.remove("gesperrt");
        box.remove();
      } else {
        fehler.textContent = "Nicht ganz … versuch es nochmal.";
        input.value = "";
        input.focus();
      }
    });
  });
})();
