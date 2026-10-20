// ===== EINSTELLUNG =====
const START_DATUM = "2026-10-20"; // Tag 1 = ihr Geburtstag (JJJJ-MM-TT)

// ===== TEXT-POOLS (Startmaterial, gern durch Eigenes ersetzen) =====
const GRUENDE = [
  "Dein Lachen steckt mich sofort an.", "Du hörst wirklich zu.", "Mit dir fühlt sich Alltag besonders an.",
  "Du bringst mich zum Lachen, wenn ich es am wenigsten erwarte.", "Du bist mutig, auch wenn du es selbst nicht merkst.",
  "Deine Umarmungen.", "Du erinnerst dich an die kleinen Dinge.", "Wie du dich über Kleinigkeiten freust.",
  "Deine Ehrlichkeit.", "Du machst jeden Raum wärmer.", "Deine Stimme am Morgen.", "Du glaubst an mich.",
  "Wie du die Stirn runzelst, wenn du nachdenkst.", "Du bist loyal, immer.", "Mit dir kann ich ich selbst sein.",
  "Deine Geduld mit mir.", "Du gibst Menschen das Gefühl, wichtig zu sein.", "Dein Humor.", "Du gibst nicht auf.",
  "Deine Augen, wenn du lachst.", "Du machst aus Plänen Abenteuer.", "Du bist stark und weich zugleich.",
  "Deine Neugier.", "Du bringst Ruhe in mein Chaos.", "Wie du singst, wenn du denkst, es hört keiner zu.",
  "Du siehst das Gute in anderen.", "Deine Hand in meiner.", "Du machst mich zu einem besseren Menschen.",
  "Deine Kreativität.", "Du verzeihst großzügig.", "Dein Duft, den ich überall erkennen würde.",
  "Deine Gelassenheit in stressigen Momenten.", "Du lässt mich träumen.", "Du bist ehrlich zu mir, auch wenn es schwer ist.",
  "Du tröstest mich, ohne viele Worte.", "Deine Spontanität.", "Du lachst über meine schlechten Witze.",
  "Dein Mut, Neues auszuprobieren.", "Du bist für deine Liebsten da.", "Dein Lächeln nach einem langen Tag.",
  "Du erinnerst mich daran, das Leben zu genießen.", "Du forderst mich heraus.", "Du bist mein Lieblingsmensch.",
  "Du teilst Freude.", "Du verstehst mich, auch wenn ich schweige.", "Du machst Orte zu einem Zuhause.",
  "Deine kleinen Macken, die ich so mag.", "Du motivierst mich.", "Wir können zusammen schweigen.",
  "[Persönlicher Grund: bitte ersetzen]", "Dass es dich gibt."
];
const GUTSCHEINE = [
  "Frühstück im Bett", "Ein Abend, an dem du den Film aussuchst", "Eine Massage nach Wahl (20 Minuten)",
  "Ein Date, das ich plane und bezahle", "Ein Tag, an dem ich den Haushalt mache", "Dein Lieblingsessen, selbst gekocht",
  "Ein Spaziergang mit Eis", "Ein Abend ohne Handy, nur wir zwei", "Eine Umarmung, jederzeit einlösbar",
  "Eine Playlist nur für dich", "Ein Picknick", "Ein Kinoabend mit Snacks", "Ein Wunsch frei (im Rahmen der Vernunft)",
  "Ein Spieleabend, bei dem du gewinnen darfst", "Heiße Schokolade und Kuscheldecke", "Ein Ausflug, den du aussuchst",
  "Ein Kaffee-Date am Wochenende", "Ein Sonnenuntergang zu zweit", "Ein Tag ohne Diskussionen", "Eine Fotosession",
  "Ich fahre dich, wohin du willst", "Eine Stunde Kopfkraulen", "Pizza-Abend ohne Kompromisse", "Ein Tanz im Wohnzimmer",
  "Ein Besuch an deinem Lieblingsort", "Ein Abend, an dem ich nur zuhöre", "Ein Mitternachtssnack",
  "Ein Tag, an dem du bestimmst", "Ein Abend Sterne gucken", "Ein Kuschelsonntag"
];
const FRAGEN = [
  "Was war heute dein schönster Moment?", "Welchen Ort willst du unbedingt mit mir sehen?", "Was war dein erster Eindruck von mir?",
  "Welches Lied erinnert dich an uns?", "Was wünschst du dir für das kommende Jahr?", "Welche Erinnerung an uns magst du am liebsten?",
  "Welche Superkraft hättest du gern?", "Was ist dein Lieblingsessen, das wir zusammen hatten?", "Wofür bist du gerade dankbar?",
  "Wenn wir morgen frei hätten: Was machen wir?", "Welches Tier wärst du?", "Was bringt dich garantiert zum Lachen?",
  "Welche Gewohnheit von mir findest du süß?", "Wo wollen wir in fünf Jahren zusammen sein?", "Was war unser lustigster Moment?",
  "Welchen Film sollen wir als Nächstes schauen?", "Was ist dein Traumurlaub?", "Was ist ein kleiner Luxus, den du liebst?",
  "Was würdest du deinem zehnjährigen Ich sagen?", "Welche Jahreszeit passt am besten zu uns?", "Was möchtest du unbedingt mal lernen?",
  "Welches Gericht sollen wir zusammen kochen?", "Was macht einen perfekten Sonntag aus?", "Wovon träumst du gerade?",
  "Was war das Schönste, was jemand für dich getan hat?", "Welches Hobby sollen wir gemeinsam ausprobieren?",
  "Welchen Spitznamen für mich magst du am liebsten?", "Was würdest du mit einem freien Tag nur für dich tun?",
  "Welche Eigenschaft magst du an dir selbst am meisten?", "Was ist dein liebster Duft?", "Welches Wort beschreibt uns am besten?",
  "Was ist dein Lieblingsplatz bei uns zu Hause?"
];
const RAETSEL = [
  ["Was hat Zähne, aber beißt nie?", "Ein Kamm."], ["Je mehr du davon nimmst, desto mehr lässt du zurück. Was ist es?", "Schritte."],
  ["Was gehört dir, wird aber meist von anderen benutzt?", "Dein Name."], ["Was wird nasser, je mehr es trocknet?", "Ein Handtuch."],
  ["Was hat Hände, aber kann nicht klatschen?", "Eine Uhr."], ["Was hat einen Hals, aber keinen Kopf?", "Eine Flasche."],
  ["Was ist so zerbrechlich, dass es schon bei seinem Namen kaputtgeht?", "Das Schweigen."], ["Was steigt, aber fällt nie?", "Das Alter."],
  ["Was hat Städte ohne Häuser, Wälder ohne Bäume und Wasser ohne Fische?", "Eine Landkarte."], ["Was wird größer, wenn man es teilt?", "Freude."],
  ["Was ist immer vor dir, aber du kannst es nicht sehen?", "Die Zukunft."], ["Ich habe Tasten, aber öffne keine Tür. Was bin ich?", "Eine Tastatur."],
  ["Was ist leichter als eine Feder, aber selbst der Stärkste kann es nicht lange halten?", "Der Atem."], ["Was hat ein Auge, aber kann nicht sehen?", "Eine Nadel."],
  ["Was geht um die Welt, bleibt aber in der Ecke?", "Eine Briefmarke."], ["Welche Frage kann man nie mit Ja beantworten?", "Schläfst du schon?"],
  ["Je mehr man davon hat, desto weniger sieht man. Was ist es?", "Dunkelheit."], ["Was wächst, wenn man es isst?", "Der Appetit."],
  ["Ich bin klein, schlage ohne Pause und gehöre dir. Was bin ich?", "Mein Herz."], ["Was ist das Wertvollste, das man verschenken kann, ohne Geld auszugeben?", "Zeit."],
  ["Was kann man teilen und trotzdem behalten?", "Ein Geheimnis."], ["Was ist bei jedem Wetter nass, aber nie im Regen?", "Die Zunge."],
  ["Was hat vier Beine, aber kann nicht laufen?", "Ein Tisch."], ["Was kommt einmal in der Minute, zweimal im Moment, aber nie in tausend Jahren?", "Der Buchstabe M."]
];

// ===== BESONDERE TAGE (mit Platzhaltern, bitte persönlich ausfüllen) =====
const BESONDERE_TAGE = {
  1:   { typ: "Geburtstag", bildtext: "Alles Gute!", text: "Alles Gute zum Geburtstag!\n\n[Dein persönlicher Text für Tag 1]" },
  7:   { typ: "Eine Woche", bildtext: "Woche 1", text: "Schon eine Woche mit dieser Seite.\n\n[Dein persönlicher Text]" },
  30:  { typ: "Ein Monat", bildtext: "Monat 1", text: "Ein Monat voller kleiner Überraschungen.\n\n[Dein persönlicher Text]" },
  100: { typ: "Tag 100", bildtext: "100 Tage", text: "100 Tage. Danke, dass du dabei bist.\n\n[Dein persönlicher Text]" },
  200: { typ: "Tag 200", bildtext: "200 Tage", text: "200 Tage, und es gibt noch so viel mehr.\n\n[Dein persönlicher Text]" },
  300: { typ: "Tag 300", bildtext: "300 Tage", text: "300 Tage. Fast ein ganzes Jahr.\n\n[Dein persönlicher Text]" },
  365: { typ: "Ein Jahr", bildtext: "Ein ganzes Jahr", text: "Ein ganzes Jahr, Tag für Tag.\n\n[Dein persönlicher Text zum Abschluss]" }
};

// ===== EIGENE EINTRÄGE (überschreiben alles andere) =====
// Beispiel: PERSOENLICH[5] = { text: "Mein eigener Text", bildtext: "Unser Urlaub", bild: "bilder/urlaub.jpg" };
const PERSOENLICH = {};

// ===== 365 EINTRÄGE ZUSAMMENBAUEN =====
const EINTRAEGE = (function () {
  const liste = [];
  const reihe = ["Grund", "Gutschein", "Frage", "Grund", "Rätsel"];
  const zaehler = {};
  for (let tag = 1; tag <= 365; tag++) {
    const typ = reihe[(tag - 1) % 5];
    const i = zaehler[typ] = (zaehler[typ] === undefined ? 0 : zaehler[typ] + 1);
    let e;
    if (typ === "Grund") {
      e = { bildtext: "Grund Nr. " + (i + 1), text: "Grund Nr. " + (i + 1) + ":\n" + GRUENDE[i % GRUENDE.length] };
    } else if (typ === "Gutschein") {
      e = { bildtext: "Gutschein", text: "Gutschein Nr. " + (i + 1) + ":\n" + GUTSCHEINE[i % GUTSCHEINE.length] + "\n\nEinlösbar nach Absprache." };
    } else if (typ === "Frage") {
      e = { bildtext: "Frage des Tages", text: FRAGEN[i % FRAGEN.length] };
    } else {
      const r = RAETSEL[i % RAETSEL.length];
      e = { bildtext: "Rätsel des Tages", text: r[0], antwort: r[1] };
    }
    e.typ = typ;
    e.bild = "bilder/tag" + String(tag).padStart(3, "0") + ".jpg";
    liste.push(Object.assign(e, { antwort: e.antwort || "" }, BESONDERE_TAGE[tag], PERSOENLICH[tag]));
  }
  return liste;
})();
