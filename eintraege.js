// ===== EINSTELLUNG =====
const START_DATUM = "2026-10-24"; // Tag 1 = ihr Geburtstag (JJJJ-MM-TT)

// ===== TEXT-POOLS (Startmaterial, gern durch Eigenes ersetzen) =====
const GRUENDE = [
  "Dein Lachen ist das aller süßeste.", "Ich liebe unsere kleinen Gespräche.", "Mit dir fühlt sich jeder Tag besonders an.",
  "Mit dir macht sogar Zeitungverteilen um 2 Uhr spaß.", "Du bist mutig, auch wenn du es selbst nicht weißt.",
  "Deine Umarmungen.", "Du errinerst dich immer an alles.", "Wie du dich über Kleinigkeiten freust.",
  "Deine Ehrlichkeit.", "Du machst jeden Raum wärmer.", "Deine süße Stimme.", "Du glaubst an mich.",
  "Wie du mich ansiehst.", "Du bist loyal.", "Mit dir kann ich ich selbst sein.",
  "Deine Geduld mit mir.", "Du hast ein großes Herz.", "Dein Humor.", "Du gibst nicht auf.",
  "Deine Augen, wenn du lachst.", "Dein Mitgefühl.", "Du bist Sympatisch.",
  "Deine Neugier.", "Du bringst Ruhe in mein Chaos.", "Wie du singst, wenn du denkst, es hört keiner zu.",
  "Du siehst das Gute in anderen.", "Deine Hand in meiner.", "Du machst mich zu einem besseren Menschen.",
  "Deine Kreativität.", "Du verzeihst großzügig.", "Dein perfekter Duft.",
  "Wie du dich freust wenn ich dir Essen mache.", "Du lässt mich träumen.", "Du bist ehrlich zu mir, auch wenn es schwer ist.",
  "Du tröstest mich, ohne viele Worte.", "Deine Spontanität.", "Du lachst über meine schlechten Witze.",
  "Dein Mut, Neues auszuprobieren.", "Du bist für deine Liebsten da.", "Dein Lächeln nach einem langen Tag.",
  "Du erinnerst mich daran, das Leben zu genießen.", "Du forderst mich heraus.", "Du bist mein Lieblingsmensch.",
  "Du teilst Freude.", "Du verstehst mich, auch wenn ich schweige.", "Du machst Orte zu einem Zuhause.",
  "Die Tage an denen du schlechte Laune hast, wir aber am ende trotzdem kuscheln.", "Du motivierst mich.", "Unsere Filmabende.",
  "Ich bin so so so so sehr dankbar, dass es dich gibt.",
];
const GUTSCHEINE = [
  "Ich bringe dir Frühstück ans Bett", "Ein Abend, an dem du den Film aussuchst", "Eine Massage (20 Minuten)",
  "Ein Date, das ich plane und bezahle", "Ein Tag, an dem ich den Haushalt mache", "Es gibt genau das zu Essen, was du dir wüscht",
  "Ein Spaziergang mit Eis", "Ein Spieleabend (egal welches und egal wie oft)", "Eine Umarmung, jederzeit einlösbar",
  "Ich muss 10 Liegestütze vor dir machen", "Ein Picknick", "Ein Kinoabend mit Snacks (zuhause oder Kino)", "Ein Wunsch frei (im Rahmen der Vernunft natürlich)",
  "Ein Spieleabend, bei dem du gewinnen darfst (Lasse ich dich sowieso immer)", "Heiße Schokolade und Kuscheldecke", "Ein Ausflug, den du aussuchst",
  "Ein Kuchen-Date am Wochenende", "Ein Sonnenuntergang zu zweit", "Ein Tag ohne Diskussionen", "Zusammen Fotos machen (mit Stativ und so)",
  "Ich fahre dich, wohin du willst (Action, DM usw.)", "Eine Stunde Kopfkraulen", "Pizza-Abend ohne Kompromisse", "Ein Tanz im Wohnzimmer (Nur ich oder wir zusammen)",
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
  1:   { typ: "Dein Geburtstag hehe", bildtext: "Das wären deine Geschenke wenn ich mehr Geld hätte😪", text: "Ich wünsche dir alles gute und liebe zum Geburstag mein wunderschöner Schatz Mausi Engel!!!\n\nIch liebe dich über alles und für immer und das hier soll dich jeden Tag daran errinern❤️" },
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
