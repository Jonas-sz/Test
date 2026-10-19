(function () {
  const TAG_MS = 24 * 60 * 60 * 1000;

  // Datum ohne Uhrzeit (lokale Zeit), damit der neue Tag um 00:00 Uhr startet
  function nurDatum(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  const [j, m, t] = START_DATUM.split("-").map(Number);
  const start = new Date(j, m - 1, t);
  const heute = nurDatum(new Date());

  // 0 = Geburtstag, 1 = Tag danach, ...
  const tageSeitStart = Math.round((heute - start) / TAG_MS);

  const elCountdown = document.getElementById("countdown");
  const elDay = document.getElementById("day");

  // Noch vor dem Geburtstag: Countdown
  if (tageSeitStart < 0) {
    const rest = -tageSeitStart;
    document.getElementById("countdown-text").textContent =
      rest === 1 ? "Morgen geht es los." : "Noch " + rest + " Tage.";
    elCountdown.hidden = false;
    return;
  }

  // Höchster freigeschalteter Eintrag (begrenzt auf vorhandene Einträge)
  const maxIndex = Math.min(tageSeitStart, EINTRAEGE.length - 1);
  let aktuell = maxIndex;

  function zeige(index) {
    const e = EINTRAEGE[index];
    document.getElementById("day-label").textContent = "Tag " + (index + 1);
    const img = document.getElementById("day-image");
    img.src = e.bild;
    img.alt = e.bildtext || "";
    document.getElementById("day-caption").textContent = e.bildtext || "";
    document.getElementById("day-text").textContent = e.text;
    document.getElementById("prev").disabled = index === 0;
    document.getElementById("next").disabled = index === maxIndex;
  }

  document.getElementById("prev").addEventListener("click", function () {
    if (aktuell > 0) zeige(--aktuell);
  });
  document.getElementById("next").addEventListener("click", function () {
    if (aktuell < maxIndex) zeige(++aktuell);
  });

  elDay.hidden = false;
  zeige(aktuell);
})();
