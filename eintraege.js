// ===== EINSTELLUNG =====
const START_DATUM = "2026-10-24"; // Tag 1 = ihr Geburtstag (JJJJ-MM-TT)

// ===== TEXT-POOLS (Startmaterial: daraus wird die feste Reihenfolge unten gefüllt) =====
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
  7:   { typ: "Eine Woche", bildtext: "Schon eine Woche um! Bewerte die App mit Sternen!", text: "Aufgabe: Du musst mich heute 1 mal richtig erschrecken!" },
  30:  { typ: "Ein Monat", bildtext: "Monat 1", text: "Ein Monat voller kleiner Überraschungen.\n\n[Dein persönlicher Text]" },
  100: { typ: "Tag 100", bildtext: "100 Tage", text: "100 Tage. Danke, dass du dabei bist.\n\n[Dein persönlicher Text]" },
  200: { typ: "Tag 200", bildtext: "200 Tage", text: "200 Tage, und es gibt noch so viel mehr.\n\n[Dein persönlicher Text]" },
  300: { typ: "Tag 300", bildtext: "300 Tage", text: "300 Tage. Fast ein ganzes Jahr.\n\n[Dein persönlicher Text]" },
  365: { typ: "Ein Jahr", bildtext: "Ein ganzes Jahr", text: "Ein ganzes Jahr, Tag für Tag.\n\n[Dein persönlicher Text zum Abschluss]" }
};

// ===== EIGENE EINTRÄGE (überschreiben alles andere) =====
// Beispiel: PERSOENLICH[5] = { text: "Mein eigener Text", bildtext: "Unser Urlaub", bild: "bilder/urlaub.jpg" };
const PERSOENLICH = {};
PERSOENLICH[4] = {
  typ: "Aufgabe",
  bildtext: "Ich war schon immer neidisch auf deinen Biezeps",
  text: "Beweise das du stärker bist als ich indem du dir eine Sportchallange ausdenkst, in der du gewinnst!",
  antwort: ""
};

PERSOENLICH[5] = {
  typ: "Rätsel",
  bildtext: "Schaffst du es das Rätsel zu lösen?",
  text: "Was kommt einmal in jeder Minute, zweimal in jedem Moment, aber nie in tausend Jahren vor?",
  antwort: "Der Buchstabe M."
};

PERSOENLICH[6] = {
  typ: "Gutschein",
  bildtext: "Ein Gutschein für dich?",
  text: "Ein Spieleabend (egal welches und egal wie oft)",
  antwort: ""
};

// ===== TAG 8 BIS 365: FESTE REIHENFOLGE (jede Zeile = ein Tag, hier einzeln änderbar) =====
// Zeilen mit „Wiederholung“ sind Texte, die schon einmal vorkamen: bei Gelegenheit durch neue ersetzen.
PERSOENLICH[2] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 1:\nIch bringe dir Frühstück ans Bett\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[3] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war heute dein schönster Moment?", antwort: "" };
PERSOENLICH[8] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welchen Ort willst du unbedingt mit mir sehen?", antwort: "" };
PERSOENLICH[9] = { typ: "Grund", bildtext: "Grund Nr. 1", text: "Grund Nr. 1:\nDein Lachen ist das aller süßeste.", antwort: "" };
PERSOENLICH[10] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Zähne, aber beißt nie?", antwort: "Ein Kamm." };
PERSOENLICH[11] = { typ: "Grund", bildtext: "Grund Nr. 2", text: "Grund Nr. 2:\nIch liebe unsere kleinen Gespräche.", antwort: "" };
PERSOENLICH[12] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 2:\nEin Abend, an dem du den Film aussuchst\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[13] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war dein erster Eindruck von mir?", antwort: "" };
PERSOENLICH[14] = { typ: "Grund", bildtext: "Grund Nr. 3", text: "Grund Nr. 3:\nMit dir fühlt sich jeder Tag besonders an.", antwort: "" };
PERSOENLICH[15] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Je mehr du davon nimmst, desto mehr lässt du zurück. Was ist es?", antwort: "Schritte." };
PERSOENLICH[16] = { typ: "Grund", bildtext: "Grund Nr. 4", text: "Grund Nr. 4:\nMit dir macht sogar Zeitungverteilen um 2 Uhr spaß.", antwort: "" };
PERSOENLICH[17] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 3:\nEine Massage (20 Minuten)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[18] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Lied erinnert dich an uns?", antwort: "" };
PERSOENLICH[19] = { typ: "Grund", bildtext: "Grund Nr. 5", text: "Grund Nr. 5:\nDu bist mutig, auch wenn du es selbst nicht weißt.", antwort: "" };
PERSOENLICH[20] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was gehört dir, wird aber meist von anderen benutzt?", antwort: "Dein Name." };
PERSOENLICH[21] = { typ: "Grund", bildtext: "Grund Nr. 6", text: "Grund Nr. 6:\nDeine Umarmungen.", antwort: "" };
PERSOENLICH[22] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 4:\nEin Date, das ich plane und bezahle\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[23] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was wünschst du dir für das kommende Jahr?", antwort: "" };
PERSOENLICH[24] = { typ: "Grund", bildtext: "Grund Nr. 7", text: "Grund Nr. 7:\nDu errinerst dich immer an alles.", antwort: "" };
PERSOENLICH[25] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wird nasser, je mehr es trocknet?", antwort: "Ein Handtuch." };
PERSOENLICH[26] = { typ: "Grund", bildtext: "Grund Nr. 8", text: "Grund Nr. 8:\nWie du dich über Kleinigkeiten freust.", antwort: "" };
PERSOENLICH[27] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 5:\nEin Tag, an dem ich den Haushalt mache\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[28] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Erinnerung an uns magst du am liebsten?", antwort: "" };
PERSOENLICH[29] = { typ: "Grund", bildtext: "Grund Nr. 9", text: "Grund Nr. 9:\nDeine Ehrlichkeit.", antwort: "" };
PERSOENLICH[31] = { typ: "Grund", bildtext: "Grund Nr. 10", text: "Grund Nr. 10:\nDu machst jeden Raum wärmer.", antwort: "" };
PERSOENLICH[32] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 6:\nEs gibt genau das zu Essen, was du dir wüscht\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[33] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Superkraft hättest du gern?", antwort: "" };
PERSOENLICH[34] = { typ: "Grund", bildtext: "Grund Nr. 11", text: "Grund Nr. 11:\nDeine süße Stimme.", antwort: "" };
PERSOENLICH[35] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Hände, aber kann nicht klatschen?", antwort: "Eine Uhr." };
PERSOENLICH[36] = { typ: "Grund", bildtext: "Grund Nr. 12", text: "Grund Nr. 12:\nDu glaubst an mich.", antwort: "" };
PERSOENLICH[37] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 7:\nEin Spaziergang mit Eis\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[38] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein Lieblingsessen, das wir zusammen hatten?", antwort: "" };
PERSOENLICH[39] = { typ: "Grund", bildtext: "Grund Nr. 13", text: "Grund Nr. 13:\nWie du mich ansiehst.", antwort: "" };
PERSOENLICH[40] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat einen Hals, aber keinen Kopf?", antwort: "Eine Flasche." };
PERSOENLICH[41] = { typ: "Grund", bildtext: "Grund Nr. 14", text: "Grund Nr. 14:\nDu bist loyal.", antwort: "" };
PERSOENLICH[42] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 8:\nEin Spieleabend (egal welches und egal wie oft)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[43] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wofür bist du gerade dankbar?", antwort: "" };
PERSOENLICH[44] = { typ: "Grund", bildtext: "Grund Nr. 15", text: "Grund Nr. 15:\nMit dir kann ich ich selbst sein.", antwort: "" };
PERSOENLICH[45] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist so zerbrechlich, dass es schon bei seinem Namen kaputtgeht?", antwort: "Das Schweigen." };
PERSOENLICH[46] = { typ: "Grund", bildtext: "Grund Nr. 16", text: "Grund Nr. 16:\nDeine Geduld mit mir.", antwort: "" };
PERSOENLICH[47] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 9:\nEine Umarmung, jederzeit einlösbar\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[48] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wenn wir morgen frei hätten: Was machen wir?", antwort: "" };
PERSOENLICH[49] = { typ: "Grund", bildtext: "Grund Nr. 17", text: "Grund Nr. 17:\nDu hast ein großes Herz.", antwort: "" };
PERSOENLICH[50] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was steigt, aber fällt nie?", antwort: "Das Alter." };
PERSOENLICH[51] = { typ: "Grund", bildtext: "Grund Nr. 18", text: "Grund Nr. 18:\nDein Humor.", antwort: "" };
PERSOENLICH[52] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 10:\nIch muss 10 Liegestütze vor dir machen\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[53] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Tier wärst du?", antwort: "" };
PERSOENLICH[54] = { typ: "Grund", bildtext: "Grund Nr. 19", text: "Grund Nr. 19:\nDu gibst nicht auf.", antwort: "" };
PERSOENLICH[55] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Städte ohne Häuser, Wälder ohne Bäume und Wasser ohne Fische?", antwort: "Eine Landkarte." };
PERSOENLICH[56] = { typ: "Grund", bildtext: "Grund Nr. 20", text: "Grund Nr. 20:\nDeine Augen, wenn du lachst.", antwort: "" };
PERSOENLICH[57] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 11:\nEin Picknick\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[58] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was bringt dich garantiert zum Lachen?", antwort: "" };
PERSOENLICH[59] = { typ: "Grund", bildtext: "Grund Nr. 21", text: "Grund Nr. 21:\nDein Mitgefühl.", antwort: "" };
PERSOENLICH[60] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wird größer, wenn man es teilt?", antwort: "Freude." };
PERSOENLICH[61] = { typ: "Grund", bildtext: "Grund Nr. 22", text: "Grund Nr. 22:\nDu bist Sympatisch.", antwort: "" };
PERSOENLICH[62] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 12:\nEin Kinoabend mit Snacks (zuhause oder Kino)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[63] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Gewohnheit von mir findest du süß?", antwort: "" };
PERSOENLICH[64] = { typ: "Grund", bildtext: "Grund Nr. 23", text: "Grund Nr. 23:\nDeine Neugier.", antwort: "" };
PERSOENLICH[65] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist immer vor dir, aber du kannst es nicht sehen?", antwort: "Die Zukunft." };
PERSOENLICH[66] = { typ: "Grund", bildtext: "Grund Nr. 24", text: "Grund Nr. 24:\nDu bringst Ruhe in mein Chaos.", antwort: "" };
PERSOENLICH[67] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 13:\nEin Wunsch frei (im Rahmen der Vernunft natürlich)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[68] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wo wollen wir in fünf Jahren zusammen sein?", antwort: "" };
PERSOENLICH[69] = { typ: "Grund", bildtext: "Grund Nr. 25", text: "Grund Nr. 25:\nWie du singst, wenn du denkst, es hört keiner zu.", antwort: "" };
PERSOENLICH[70] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Ich habe Tasten, aber öffne keine Tür. Was bin ich?", antwort: "Eine Tastatur." };
PERSOENLICH[71] = { typ: "Grund", bildtext: "Grund Nr. 26", text: "Grund Nr. 26:\nDu siehst das Gute in anderen.", antwort: "" };
PERSOENLICH[72] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 14:\nEin Spieleabend, bei dem du gewinnen darfst (Lasse ich dich sowieso immer)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[73] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war unser lustigster Moment?", antwort: "" };
PERSOENLICH[74] = { typ: "Grund", bildtext: "Grund Nr. 27", text: "Grund Nr. 27:\nDeine Hand in meiner.", antwort: "" };
PERSOENLICH[75] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist leichter als eine Feder, aber selbst der Stärkste kann es nicht lange halten?", antwort: "Der Atem." };
PERSOENLICH[76] = { typ: "Grund", bildtext: "Grund Nr. 28", text: "Grund Nr. 28:\nDu machst mich zu einem besseren Menschen.", antwort: "" };
PERSOENLICH[77] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 15:\nHeiße Schokolade und Kuscheldecke\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[78] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welchen Film sollen wir als Nächstes schauen?", antwort: "" };
PERSOENLICH[79] = { typ: "Grund", bildtext: "Grund Nr. 29", text: "Grund Nr. 29:\nDeine Kreativität.", antwort: "" };
PERSOENLICH[80] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat ein Auge, aber kann nicht sehen?", antwort: "Eine Nadel." };
PERSOENLICH[81] = { typ: "Grund", bildtext: "Grund Nr. 30", text: "Grund Nr. 30:\nDu verzeihst großzügig.", antwort: "" };
PERSOENLICH[82] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 16:\nEin Ausflug, den du aussuchst\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[83] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein Traumurlaub?", antwort: "" };
PERSOENLICH[84] = { typ: "Grund", bildtext: "Grund Nr. 31", text: "Grund Nr. 31:\nDein perfekter Duft.", antwort: "" };
PERSOENLICH[85] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was geht um die Welt, bleibt aber in der Ecke?", antwort: "Eine Briefmarke." };
PERSOENLICH[86] = { typ: "Grund", bildtext: "Grund Nr. 32", text: "Grund Nr. 32:\nWie du dich freust wenn ich dir Essen mache.", antwort: "" };
PERSOENLICH[87] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 17:\nEin Kuchen-Date am Wochenende\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[88] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist ein kleiner Luxus, den du liebst?", antwort: "" };
PERSOENLICH[89] = { typ: "Grund", bildtext: "Grund Nr. 33", text: "Grund Nr. 33:\nDu lässt mich träumen.", antwort: "" };
PERSOENLICH[90] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Welche Frage kann man nie mit Ja beantworten?", antwort: "Schläfst du schon?" };
PERSOENLICH[91] = { typ: "Grund", bildtext: "Grund Nr. 34", text: "Grund Nr. 34:\nDu bist ehrlich zu mir, auch wenn es schwer ist.", antwort: "" };
PERSOENLICH[92] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 18:\nEin Sonnenuntergang zu zweit\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[93] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was würdest du deinem zehnjährigen Ich sagen?", antwort: "" };
PERSOENLICH[94] = { typ: "Grund", bildtext: "Grund Nr. 35", text: "Grund Nr. 35:\nDu tröstest mich, ohne viele Worte.", antwort: "" };
PERSOENLICH[95] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Je mehr man davon hat, desto weniger sieht man. Was ist es?", antwort: "Dunkelheit." };
PERSOENLICH[96] = { typ: "Grund", bildtext: "Grund Nr. 36", text: "Grund Nr. 36:\nDeine Spontanität.", antwort: "" };
PERSOENLICH[97] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 19:\nEin Tag ohne Diskussionen\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[98] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Jahreszeit passt am besten zu uns?", antwort: "" };
PERSOENLICH[99] = { typ: "Grund", bildtext: "Grund Nr. 37", text: "Grund Nr. 37:\nDu lachst über meine schlechten Witze.", antwort: "" };
PERSOENLICH[101] = { typ: "Grund", bildtext: "Grund Nr. 38", text: "Grund Nr. 38:\nDein Mut, Neues auszuprobieren.", antwort: "" };
PERSOENLICH[102] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 20:\nZusammen Fotos machen (mit Stativ und so)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[103] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was möchtest du unbedingt mal lernen?", antwort: "" };
PERSOENLICH[104] = { typ: "Grund", bildtext: "Grund Nr. 39", text: "Grund Nr. 39:\nDu bist für deine Liebsten da.", antwort: "" };
PERSOENLICH[105] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wächst, wenn man es isst?", antwort: "Der Appetit." };
PERSOENLICH[106] = { typ: "Grund", bildtext: "Grund Nr. 40", text: "Grund Nr. 40:\nDein Lächeln nach einem langen Tag.", antwort: "" };
PERSOENLICH[107] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 21:\nIch fahre dich, wohin du willst (Action, DM usw.)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[108] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Gericht sollen wir zusammen kochen?", antwort: "" };
PERSOENLICH[109] = { typ: "Grund", bildtext: "Grund Nr. 41", text: "Grund Nr. 41:\nDu erinnerst mich daran, das Leben zu genießen.", antwort: "" };
PERSOENLICH[110] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Ich bin klein, schlage ohne Pause und gehöre dir. Was bin ich?", antwort: "Mein Herz." };
PERSOENLICH[111] = { typ: "Grund", bildtext: "Grund Nr. 42", text: "Grund Nr. 42:\nDu forderst mich heraus.", antwort: "" };
PERSOENLICH[112] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 22:\nEine Stunde Kopfkraulen\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[113] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was macht einen perfekten Sonntag aus?", antwort: "" };
PERSOENLICH[114] = { typ: "Grund", bildtext: "Grund Nr. 43", text: "Grund Nr. 43:\nDu bist mein Lieblingsmensch.", antwort: "" };
PERSOENLICH[115] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist das Wertvollste, das man verschenken kann, ohne Geld auszugeben?", antwort: "Zeit." };
PERSOENLICH[116] = { typ: "Grund", bildtext: "Grund Nr. 44", text: "Grund Nr. 44:\nDu teilst Freude.", antwort: "" };
PERSOENLICH[117] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 23:\nPizza-Abend ohne Kompromisse\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[118] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wovon träumst du gerade?", antwort: "" };
PERSOENLICH[119] = { typ: "Grund", bildtext: "Grund Nr. 45", text: "Grund Nr. 45:\nDu verstehst mich, auch wenn ich schweige.", antwort: "" };
PERSOENLICH[120] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was kann man teilen und trotzdem behalten?", antwort: "Ein Geheimnis." };
PERSOENLICH[121] = { typ: "Grund", bildtext: "Grund Nr. 46", text: "Grund Nr. 46:\nDu machst Orte zu einem Zuhause.", antwort: "" };
PERSOENLICH[122] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 24:\nEin Tanz im Wohnzimmer (Nur ich oder wir zusammen)\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[123] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war das Schönste, was jemand für dich getan hat?", antwort: "" };
PERSOENLICH[124] = { typ: "Grund", bildtext: "Grund Nr. 47", text: "Grund Nr. 47:\nDie Tage an denen du schlechte Laune hast, wir aber am ende trotzdem kuscheln.", antwort: "" };
PERSOENLICH[125] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist bei jedem Wetter nass, aber nie im Regen?", antwort: "Die Zunge." };
PERSOENLICH[126] = { typ: "Grund", bildtext: "Grund Nr. 48", text: "Grund Nr. 48:\nDu motivierst mich.", antwort: "" };
PERSOENLICH[127] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 25:\nEin Besuch an deinem Lieblingsort\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[128] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Hobby sollen wir gemeinsam ausprobieren?", antwort: "" };
PERSOENLICH[129] = { typ: "Grund", bildtext: "Grund Nr. 49", text: "Grund Nr. 49:\nUnsere Filmabende.", antwort: "" };
PERSOENLICH[130] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat vier Beine, aber kann nicht laufen?", antwort: "Ein Tisch." };
PERSOENLICH[131] = { typ: "Grund", bildtext: "Grund Nr. 50", text: "Grund Nr. 50:\nIch bin so so so so sehr dankbar, dass es dich gibt.", antwort: "" };
PERSOENLICH[132] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 26:\nEin Abend, an dem ich nur zuhöre\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[133] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welchen Spitznamen für mich magst du am liebsten?", antwort: "" };
PERSOENLICH[134] = { typ: "Grund", bildtext: "Grund Nr. 51", text: "Grund Nr. 51:\nDein Lachen ist das aller süßeste.", antwort: "" }; // Wiederholung von Nr. 1
PERSOENLICH[135] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was kommt einmal in der Minute, zweimal im Moment, aber nie in tausend Jahren?", antwort: "Der Buchstabe M." };
PERSOENLICH[136] = { typ: "Grund", bildtext: "Grund Nr. 52", text: "Grund Nr. 52:\nIch liebe unsere kleinen Gespräche.", antwort: "" }; // Wiederholung von Nr. 2
PERSOENLICH[137] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 27:\nEin Mitternachtssnack\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[138] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was würdest du mit einem freien Tag nur für dich tun?", antwort: "" };
PERSOENLICH[139] = { typ: "Grund", bildtext: "Grund Nr. 53", text: "Grund Nr. 53:\nMit dir fühlt sich jeder Tag besonders an.", antwort: "" }; // Wiederholung von Nr. 3
PERSOENLICH[140] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Zähne, aber beißt nie?", antwort: "Ein Kamm." }; // Wiederholung von Nr. 1
PERSOENLICH[141] = { typ: "Grund", bildtext: "Grund Nr. 54", text: "Grund Nr. 54:\nMit dir macht sogar Zeitungverteilen um 2 Uhr spaß.", antwort: "" }; // Wiederholung von Nr. 4
PERSOENLICH[142] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 28:\nEin Tag, an dem du bestimmst\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[143] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Eigenschaft magst du an dir selbst am meisten?", antwort: "" };
PERSOENLICH[144] = { typ: "Grund", bildtext: "Grund Nr. 55", text: "Grund Nr. 55:\nDu bist mutig, auch wenn du es selbst nicht weißt.", antwort: "" }; // Wiederholung von Nr. 5
PERSOENLICH[145] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Je mehr du davon nimmst, desto mehr lässt du zurück. Was ist es?", antwort: "Schritte." }; // Wiederholung von Nr. 2
PERSOENLICH[146] = { typ: "Grund", bildtext: "Grund Nr. 56", text: "Grund Nr. 56:\nDeine Umarmungen.", antwort: "" }; // Wiederholung von Nr. 6
PERSOENLICH[147] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 29:\nEin Abend Sterne gucken\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[148] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein liebster Duft?", antwort: "" };
PERSOENLICH[149] = { typ: "Grund", bildtext: "Grund Nr. 57", text: "Grund Nr. 57:\nDu errinerst dich immer an alles.", antwort: "" }; // Wiederholung von Nr. 7
PERSOENLICH[150] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was gehört dir, wird aber meist von anderen benutzt?", antwort: "Dein Name." }; // Wiederholung von Nr. 3
PERSOENLICH[151] = { typ: "Grund", bildtext: "Grund Nr. 58", text: "Grund Nr. 58:\nWie du dich über Kleinigkeiten freust.", antwort: "" }; // Wiederholung von Nr. 8
PERSOENLICH[152] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 30:\nEin Kuschelsonntag\n\nEinlösbar nach Absprache.", antwort: "" };
PERSOENLICH[153] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Wort beschreibt uns am besten?", antwort: "" };
PERSOENLICH[154] = { typ: "Grund", bildtext: "Grund Nr. 59", text: "Grund Nr. 59:\nDeine Ehrlichkeit.", antwort: "" }; // Wiederholung von Nr. 9
PERSOENLICH[155] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wird nasser, je mehr es trocknet?", antwort: "Ein Handtuch." }; // Wiederholung von Nr. 4
PERSOENLICH[156] = { typ: "Grund", bildtext: "Grund Nr. 60", text: "Grund Nr. 60:\nDu machst jeden Raum wärmer.", antwort: "" }; // Wiederholung von Nr. 10
PERSOENLICH[157] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 31:\nIch bringe dir Frühstück ans Bett\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 1
PERSOENLICH[158] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein Lieblingsplatz bei uns zu Hause?", antwort: "" };
PERSOENLICH[159] = { typ: "Grund", bildtext: "Grund Nr. 61", text: "Grund Nr. 61:\nDeine süße Stimme.", antwort: "" }; // Wiederholung von Nr. 11
PERSOENLICH[160] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Hände, aber kann nicht klatschen?", antwort: "Eine Uhr." }; // Wiederholung von Nr. 5
PERSOENLICH[161] = { typ: "Grund", bildtext: "Grund Nr. 62", text: "Grund Nr. 62:\nDu glaubst an mich.", antwort: "" }; // Wiederholung von Nr. 12
PERSOENLICH[162] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 32:\nEin Abend, an dem du den Film aussuchst\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 2
PERSOENLICH[163] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war heute dein schönster Moment?", antwort: "" }; // Wiederholung von Nr. 1
PERSOENLICH[164] = { typ: "Grund", bildtext: "Grund Nr. 63", text: "Grund Nr. 63:\nWie du mich ansiehst.", antwort: "" }; // Wiederholung von Nr. 13
PERSOENLICH[165] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat einen Hals, aber keinen Kopf?", antwort: "Eine Flasche." }; // Wiederholung von Nr. 6
PERSOENLICH[166] = { typ: "Grund", bildtext: "Grund Nr. 64", text: "Grund Nr. 64:\nDu bist loyal.", antwort: "" }; // Wiederholung von Nr. 14
PERSOENLICH[167] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 33:\nEine Massage (20 Minuten)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 3
PERSOENLICH[168] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welchen Ort willst du unbedingt mit mir sehen?", antwort: "" }; // Wiederholung von Nr. 2
PERSOENLICH[169] = { typ: "Grund", bildtext: "Grund Nr. 65", text: "Grund Nr. 65:\nMit dir kann ich ich selbst sein.", antwort: "" }; // Wiederholung von Nr. 15
PERSOENLICH[170] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist so zerbrechlich, dass es schon bei seinem Namen kaputtgeht?", antwort: "Das Schweigen." }; // Wiederholung von Nr. 7
PERSOENLICH[171] = { typ: "Grund", bildtext: "Grund Nr. 66", text: "Grund Nr. 66:\nDeine Geduld mit mir.", antwort: "" }; // Wiederholung von Nr. 16
PERSOENLICH[172] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 34:\nEin Date, das ich plane und bezahle\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 4
PERSOENLICH[173] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war dein erster Eindruck von mir?", antwort: "" }; // Wiederholung von Nr. 3
PERSOENLICH[174] = { typ: "Grund", bildtext: "Grund Nr. 67", text: "Grund Nr. 67:\nDu hast ein großes Herz.", antwort: "" }; // Wiederholung von Nr. 17
PERSOENLICH[175] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was steigt, aber fällt nie?", antwort: "Das Alter." }; // Wiederholung von Nr. 8
PERSOENLICH[176] = { typ: "Grund", bildtext: "Grund Nr. 68", text: "Grund Nr. 68:\nDein Humor.", antwort: "" }; // Wiederholung von Nr. 18
PERSOENLICH[177] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 35:\nEin Tag, an dem ich den Haushalt mache\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 5
PERSOENLICH[178] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Lied erinnert dich an uns?", antwort: "" }; // Wiederholung von Nr. 4
PERSOENLICH[179] = { typ: "Grund", bildtext: "Grund Nr. 69", text: "Grund Nr. 69:\nDu gibst nicht auf.", antwort: "" }; // Wiederholung von Nr. 19
PERSOENLICH[180] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Städte ohne Häuser, Wälder ohne Bäume und Wasser ohne Fische?", antwort: "Eine Landkarte." }; // Wiederholung von Nr. 9
PERSOENLICH[181] = { typ: "Grund", bildtext: "Grund Nr. 70", text: "Grund Nr. 70:\nDeine Augen, wenn du lachst.", antwort: "" }; // Wiederholung von Nr. 20
PERSOENLICH[182] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 36:\nEs gibt genau das zu Essen, was du dir wüscht\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 6
PERSOENLICH[183] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was wünschst du dir für das kommende Jahr?", antwort: "" }; // Wiederholung von Nr. 5
PERSOENLICH[184] = { typ: "Grund", bildtext: "Grund Nr. 71", text: "Grund Nr. 71:\nDein Mitgefühl.", antwort: "" }; // Wiederholung von Nr. 21
PERSOENLICH[185] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wird größer, wenn man es teilt?", antwort: "Freude." }; // Wiederholung von Nr. 10
PERSOENLICH[186] = { typ: "Grund", bildtext: "Grund Nr. 72", text: "Grund Nr. 72:\nDu bist Sympatisch.", antwort: "" }; // Wiederholung von Nr. 22
PERSOENLICH[187] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 37:\nEin Spaziergang mit Eis\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 7
PERSOENLICH[188] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Erinnerung an uns magst du am liebsten?", antwort: "" }; // Wiederholung von Nr. 6
PERSOENLICH[189] = { typ: "Grund", bildtext: "Grund Nr. 73", text: "Grund Nr. 73:\nDeine Neugier.", antwort: "" }; // Wiederholung von Nr. 23
PERSOENLICH[190] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist immer vor dir, aber du kannst es nicht sehen?", antwort: "Die Zukunft." }; // Wiederholung von Nr. 11
PERSOENLICH[191] = { typ: "Grund", bildtext: "Grund Nr. 74", text: "Grund Nr. 74:\nDu bringst Ruhe in mein Chaos.", antwort: "" }; // Wiederholung von Nr. 24
PERSOENLICH[192] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 38:\nEin Spieleabend (egal welches und egal wie oft)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 8
PERSOENLICH[193] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Superkraft hättest du gern?", antwort: "" }; // Wiederholung von Nr. 7
PERSOENLICH[194] = { typ: "Grund", bildtext: "Grund Nr. 75", text: "Grund Nr. 75:\nWie du singst, wenn du denkst, es hört keiner zu.", antwort: "" }; // Wiederholung von Nr. 25
PERSOENLICH[195] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Ich habe Tasten, aber öffne keine Tür. Was bin ich?", antwort: "Eine Tastatur." }; // Wiederholung von Nr. 12
PERSOENLICH[196] = { typ: "Grund", bildtext: "Grund Nr. 76", text: "Grund Nr. 76:\nDu siehst das Gute in anderen.", antwort: "" }; // Wiederholung von Nr. 26
PERSOENLICH[197] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 39:\nEine Umarmung, jederzeit einlösbar\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 9
PERSOENLICH[198] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein Lieblingsessen, das wir zusammen hatten?", antwort: "" }; // Wiederholung von Nr. 8
PERSOENLICH[199] = { typ: "Grund", bildtext: "Grund Nr. 77", text: "Grund Nr. 77:\nDeine Hand in meiner.", antwort: "" }; // Wiederholung von Nr. 27
PERSOENLICH[201] = { typ: "Grund", bildtext: "Grund Nr. 78", text: "Grund Nr. 78:\nDu machst mich zu einem besseren Menschen.", antwort: "" }; // Wiederholung von Nr. 28
PERSOENLICH[202] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 40:\nIch muss 10 Liegestütze vor dir machen\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 10
PERSOENLICH[203] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wofür bist du gerade dankbar?", antwort: "" }; // Wiederholung von Nr. 9
PERSOENLICH[204] = { typ: "Grund", bildtext: "Grund Nr. 79", text: "Grund Nr. 79:\nDeine Kreativität.", antwort: "" }; // Wiederholung von Nr. 29
PERSOENLICH[205] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist leichter als eine Feder, aber selbst der Stärkste kann es nicht lange halten?", antwort: "Der Atem." }; // Wiederholung von Nr. 13
PERSOENLICH[206] = { typ: "Grund", bildtext: "Grund Nr. 80", text: "Grund Nr. 80:\nDu verzeihst großzügig.", antwort: "" }; // Wiederholung von Nr. 30
PERSOENLICH[207] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 41:\nEin Picknick\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 11
PERSOENLICH[208] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wenn wir morgen frei hätten: Was machen wir?", antwort: "" }; // Wiederholung von Nr. 10
PERSOENLICH[209] = { typ: "Grund", bildtext: "Grund Nr. 81", text: "Grund Nr. 81:\nDein perfekter Duft.", antwort: "" }; // Wiederholung von Nr. 31
PERSOENLICH[210] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat ein Auge, aber kann nicht sehen?", antwort: "Eine Nadel." }; // Wiederholung von Nr. 14
PERSOENLICH[211] = { typ: "Grund", bildtext: "Grund Nr. 82", text: "Grund Nr. 82:\nWie du dich freust wenn ich dir Essen mache.", antwort: "" }; // Wiederholung von Nr. 32
PERSOENLICH[212] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 42:\nEin Kinoabend mit Snacks (zuhause oder Kino)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 12
PERSOENLICH[213] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Tier wärst du?", antwort: "" }; // Wiederholung von Nr. 11
PERSOENLICH[214] = { typ: "Grund", bildtext: "Grund Nr. 83", text: "Grund Nr. 83:\nDu lässt mich träumen.", antwort: "" }; // Wiederholung von Nr. 33
PERSOENLICH[215] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was geht um die Welt, bleibt aber in der Ecke?", antwort: "Eine Briefmarke." }; // Wiederholung von Nr. 15
PERSOENLICH[216] = { typ: "Grund", bildtext: "Grund Nr. 84", text: "Grund Nr. 84:\nDu bist ehrlich zu mir, auch wenn es schwer ist.", antwort: "" }; // Wiederholung von Nr. 34
PERSOENLICH[217] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 43:\nEin Wunsch frei (im Rahmen der Vernunft natürlich)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 13
PERSOENLICH[218] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was bringt dich garantiert zum Lachen?", antwort: "" }; // Wiederholung von Nr. 12
PERSOENLICH[219] = { typ: "Grund", bildtext: "Grund Nr. 85", text: "Grund Nr. 85:\nDu tröstest mich, ohne viele Worte.", antwort: "" }; // Wiederholung von Nr. 35
PERSOENLICH[220] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Welche Frage kann man nie mit Ja beantworten?", antwort: "Schläfst du schon?" }; // Wiederholung von Nr. 16
PERSOENLICH[221] = { typ: "Grund", bildtext: "Grund Nr. 86", text: "Grund Nr. 86:\nDeine Spontanität.", antwort: "" }; // Wiederholung von Nr. 36
PERSOENLICH[222] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 44:\nEin Spieleabend, bei dem du gewinnen darfst (Lasse ich dich sowieso immer)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 14
PERSOENLICH[223] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Gewohnheit von mir findest du süß?", antwort: "" }; // Wiederholung von Nr. 13
PERSOENLICH[224] = { typ: "Grund", bildtext: "Grund Nr. 87", text: "Grund Nr. 87:\nDu lachst über meine schlechten Witze.", antwort: "" }; // Wiederholung von Nr. 37
PERSOENLICH[225] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Je mehr man davon hat, desto weniger sieht man. Was ist es?", antwort: "Dunkelheit." }; // Wiederholung von Nr. 17
PERSOENLICH[226] = { typ: "Grund", bildtext: "Grund Nr. 88", text: "Grund Nr. 88:\nDein Mut, Neues auszuprobieren.", antwort: "" }; // Wiederholung von Nr. 38
PERSOENLICH[227] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 45:\nHeiße Schokolade und Kuscheldecke\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 15
PERSOENLICH[228] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wo wollen wir in fünf Jahren zusammen sein?", antwort: "" }; // Wiederholung von Nr. 14
PERSOENLICH[229] = { typ: "Grund", bildtext: "Grund Nr. 89", text: "Grund Nr. 89:\nDu bist für deine Liebsten da.", antwort: "" }; // Wiederholung von Nr. 39
PERSOENLICH[230] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wächst, wenn man es isst?", antwort: "Der Appetit." }; // Wiederholung von Nr. 18
PERSOENLICH[231] = { typ: "Grund", bildtext: "Grund Nr. 90", text: "Grund Nr. 90:\nDein Lächeln nach einem langen Tag.", antwort: "" }; // Wiederholung von Nr. 40
PERSOENLICH[232] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 46:\nEin Ausflug, den du aussuchst\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 16
PERSOENLICH[233] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war unser lustigster Moment?", antwort: "" }; // Wiederholung von Nr. 15
PERSOENLICH[234] = { typ: "Grund", bildtext: "Grund Nr. 91", text: "Grund Nr. 91:\nDu erinnerst mich daran, das Leben zu genießen.", antwort: "" }; // Wiederholung von Nr. 41
PERSOENLICH[235] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Ich bin klein, schlage ohne Pause und gehöre dir. Was bin ich?", antwort: "Mein Herz." }; // Wiederholung von Nr. 19
PERSOENLICH[236] = { typ: "Grund", bildtext: "Grund Nr. 92", text: "Grund Nr. 92:\nDu forderst mich heraus.", antwort: "" }; // Wiederholung von Nr. 42
PERSOENLICH[237] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 47:\nEin Kuchen-Date am Wochenende\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 17
PERSOENLICH[238] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welchen Film sollen wir als Nächstes schauen?", antwort: "" }; // Wiederholung von Nr. 16
PERSOENLICH[239] = { typ: "Grund", bildtext: "Grund Nr. 93", text: "Grund Nr. 93:\nDu bist mein Lieblingsmensch.", antwort: "" }; // Wiederholung von Nr. 43
PERSOENLICH[240] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist das Wertvollste, das man verschenken kann, ohne Geld auszugeben?", antwort: "Zeit." }; // Wiederholung von Nr. 20
PERSOENLICH[241] = { typ: "Grund", bildtext: "Grund Nr. 94", text: "Grund Nr. 94:\nDu teilst Freude.", antwort: "" }; // Wiederholung von Nr. 44
PERSOENLICH[242] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 48:\nEin Sonnenuntergang zu zweit\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 18
PERSOENLICH[243] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein Traumurlaub?", antwort: "" }; // Wiederholung von Nr. 17
PERSOENLICH[244] = { typ: "Grund", bildtext: "Grund Nr. 95", text: "Grund Nr. 95:\nDu verstehst mich, auch wenn ich schweige.", antwort: "" }; // Wiederholung von Nr. 45
PERSOENLICH[245] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was kann man teilen und trotzdem behalten?", antwort: "Ein Geheimnis." }; // Wiederholung von Nr. 21
PERSOENLICH[246] = { typ: "Grund", bildtext: "Grund Nr. 96", text: "Grund Nr. 96:\nDu machst Orte zu einem Zuhause.", antwort: "" }; // Wiederholung von Nr. 46
PERSOENLICH[247] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 49:\nEin Tag ohne Diskussionen\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 19
PERSOENLICH[248] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist ein kleiner Luxus, den du liebst?", antwort: "" }; // Wiederholung von Nr. 18
PERSOENLICH[249] = { typ: "Grund", bildtext: "Grund Nr. 97", text: "Grund Nr. 97:\nDie Tage an denen du schlechte Laune hast, wir aber am ende trotzdem kuscheln.", antwort: "" }; // Wiederholung von Nr. 47
PERSOENLICH[250] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist bei jedem Wetter nass, aber nie im Regen?", antwort: "Die Zunge." }; // Wiederholung von Nr. 22
PERSOENLICH[251] = { typ: "Grund", bildtext: "Grund Nr. 98", text: "Grund Nr. 98:\nDu motivierst mich.", antwort: "" }; // Wiederholung von Nr. 48
PERSOENLICH[252] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 50:\nZusammen Fotos machen (mit Stativ und so)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 20
PERSOENLICH[253] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was würdest du deinem zehnjährigen Ich sagen?", antwort: "" }; // Wiederholung von Nr. 19
PERSOENLICH[254] = { typ: "Grund", bildtext: "Grund Nr. 99", text: "Grund Nr. 99:\nUnsere Filmabende.", antwort: "" }; // Wiederholung von Nr. 49
PERSOENLICH[255] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat vier Beine, aber kann nicht laufen?", antwort: "Ein Tisch." }; // Wiederholung von Nr. 23
PERSOENLICH[256] = { typ: "Grund", bildtext: "Grund Nr. 100", text: "Grund Nr. 100:\nIch bin so so so so sehr dankbar, dass es dich gibt.", antwort: "" }; // Wiederholung von Nr. 50
PERSOENLICH[257] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 51:\nIch fahre dich, wohin du willst (Action, DM usw.)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 21
PERSOENLICH[258] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Jahreszeit passt am besten zu uns?", antwort: "" }; // Wiederholung von Nr. 20
PERSOENLICH[259] = { typ: "Grund", bildtext: "Grund Nr. 101", text: "Grund Nr. 101:\nDein Lachen ist das aller süßeste.", antwort: "" }; // Wiederholung von Nr. 1
PERSOENLICH[260] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was kommt einmal in der Minute, zweimal im Moment, aber nie in tausend Jahren?", antwort: "Der Buchstabe M." }; // Wiederholung von Nr. 24
PERSOENLICH[261] = { typ: "Grund", bildtext: "Grund Nr. 102", text: "Grund Nr. 102:\nIch liebe unsere kleinen Gespräche.", antwort: "" }; // Wiederholung von Nr. 2
PERSOENLICH[262] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 52:\nEine Stunde Kopfkraulen\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 22
PERSOENLICH[263] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was möchtest du unbedingt mal lernen?", antwort: "" }; // Wiederholung von Nr. 21
PERSOENLICH[264] = { typ: "Grund", bildtext: "Grund Nr. 103", text: "Grund Nr. 103:\nMit dir fühlt sich jeder Tag besonders an.", antwort: "" }; // Wiederholung von Nr. 3
PERSOENLICH[265] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Zähne, aber beißt nie?", antwort: "Ein Kamm." }; // Wiederholung von Nr. 1
PERSOENLICH[266] = { typ: "Grund", bildtext: "Grund Nr. 104", text: "Grund Nr. 104:\nMit dir macht sogar Zeitungverteilen um 2 Uhr spaß.", antwort: "" }; // Wiederholung von Nr. 4
PERSOENLICH[267] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 53:\nPizza-Abend ohne Kompromisse\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 23
PERSOENLICH[268] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Gericht sollen wir zusammen kochen?", antwort: "" }; // Wiederholung von Nr. 22
PERSOENLICH[269] = { typ: "Grund", bildtext: "Grund Nr. 105", text: "Grund Nr. 105:\nDu bist mutig, auch wenn du es selbst nicht weißt.", antwort: "" }; // Wiederholung von Nr. 5
PERSOENLICH[270] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Je mehr du davon nimmst, desto mehr lässt du zurück. Was ist es?", antwort: "Schritte." }; // Wiederholung von Nr. 2
PERSOENLICH[271] = { typ: "Grund", bildtext: "Grund Nr. 106", text: "Grund Nr. 106:\nDeine Umarmungen.", antwort: "" }; // Wiederholung von Nr. 6
PERSOENLICH[272] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 54:\nEin Tanz im Wohnzimmer (Nur ich oder wir zusammen)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 24
PERSOENLICH[273] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was macht einen perfekten Sonntag aus?", antwort: "" }; // Wiederholung von Nr. 23
PERSOENLICH[274] = { typ: "Grund", bildtext: "Grund Nr. 107", text: "Grund Nr. 107:\nDu errinerst dich immer an alles.", antwort: "" }; // Wiederholung von Nr. 7
PERSOENLICH[275] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was gehört dir, wird aber meist von anderen benutzt?", antwort: "Dein Name." }; // Wiederholung von Nr. 3
PERSOENLICH[276] = { typ: "Grund", bildtext: "Grund Nr. 108", text: "Grund Nr. 108:\nWie du dich über Kleinigkeiten freust.", antwort: "" }; // Wiederholung von Nr. 8
PERSOENLICH[277] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 55:\nEin Besuch an deinem Lieblingsort\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 25
PERSOENLICH[278] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wovon träumst du gerade?", antwort: "" }; // Wiederholung von Nr. 24
PERSOENLICH[279] = { typ: "Grund", bildtext: "Grund Nr. 109", text: "Grund Nr. 109:\nDeine Ehrlichkeit.", antwort: "" }; // Wiederholung von Nr. 9
PERSOENLICH[280] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wird nasser, je mehr es trocknet?", antwort: "Ein Handtuch." }; // Wiederholung von Nr. 4
PERSOENLICH[281] = { typ: "Grund", bildtext: "Grund Nr. 110", text: "Grund Nr. 110:\nDu machst jeden Raum wärmer.", antwort: "" }; // Wiederholung von Nr. 10
PERSOENLICH[282] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 56:\nEin Abend, an dem ich nur zuhöre\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 26
PERSOENLICH[283] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war das Schönste, was jemand für dich getan hat?", antwort: "" }; // Wiederholung von Nr. 25
PERSOENLICH[284] = { typ: "Grund", bildtext: "Grund Nr. 111", text: "Grund Nr. 111:\nDeine süße Stimme.", antwort: "" }; // Wiederholung von Nr. 11
PERSOENLICH[285] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Hände, aber kann nicht klatschen?", antwort: "Eine Uhr." }; // Wiederholung von Nr. 5
PERSOENLICH[286] = { typ: "Grund", bildtext: "Grund Nr. 112", text: "Grund Nr. 112:\nDu glaubst an mich.", antwort: "" }; // Wiederholung von Nr. 12
PERSOENLICH[287] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 57:\nEin Mitternachtssnack\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 27
PERSOENLICH[288] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Hobby sollen wir gemeinsam ausprobieren?", antwort: "" }; // Wiederholung von Nr. 26
PERSOENLICH[289] = { typ: "Grund", bildtext: "Grund Nr. 113", text: "Grund Nr. 113:\nWie du mich ansiehst.", antwort: "" }; // Wiederholung von Nr. 13
PERSOENLICH[290] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat einen Hals, aber keinen Kopf?", antwort: "Eine Flasche." }; // Wiederholung von Nr. 6
PERSOENLICH[291] = { typ: "Grund", bildtext: "Grund Nr. 114", text: "Grund Nr. 114:\nDu bist loyal.", antwort: "" }; // Wiederholung von Nr. 14
PERSOENLICH[292] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 58:\nEin Tag, an dem du bestimmst\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 28
PERSOENLICH[293] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welchen Spitznamen für mich magst du am liebsten?", antwort: "" }; // Wiederholung von Nr. 27
PERSOENLICH[294] = { typ: "Grund", bildtext: "Grund Nr. 115", text: "Grund Nr. 115:\nMit dir kann ich ich selbst sein.", antwort: "" }; // Wiederholung von Nr. 15
PERSOENLICH[295] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist so zerbrechlich, dass es schon bei seinem Namen kaputtgeht?", antwort: "Das Schweigen." }; // Wiederholung von Nr. 7
PERSOENLICH[296] = { typ: "Grund", bildtext: "Grund Nr. 116", text: "Grund Nr. 116:\nDeine Geduld mit mir.", antwort: "" }; // Wiederholung von Nr. 16
PERSOENLICH[297] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 59:\nEin Abend Sterne gucken\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 29
PERSOENLICH[298] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was würdest du mit einem freien Tag nur für dich tun?", antwort: "" }; // Wiederholung von Nr. 28
PERSOENLICH[299] = { typ: "Grund", bildtext: "Grund Nr. 117", text: "Grund Nr. 117:\nDu hast ein großes Herz.", antwort: "" }; // Wiederholung von Nr. 17
PERSOENLICH[301] = { typ: "Grund", bildtext: "Grund Nr. 118", text: "Grund Nr. 118:\nDein Humor.", antwort: "" }; // Wiederholung von Nr. 18
PERSOENLICH[302] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 60:\nEin Kuschelsonntag\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 30
PERSOENLICH[303] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Eigenschaft magst du an dir selbst am meisten?", antwort: "" }; // Wiederholung von Nr. 29
PERSOENLICH[304] = { typ: "Grund", bildtext: "Grund Nr. 119", text: "Grund Nr. 119:\nDu gibst nicht auf.", antwort: "" }; // Wiederholung von Nr. 19
PERSOENLICH[305] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was steigt, aber fällt nie?", antwort: "Das Alter." }; // Wiederholung von Nr. 8
PERSOENLICH[306] = { typ: "Grund", bildtext: "Grund Nr. 120", text: "Grund Nr. 120:\nDeine Augen, wenn du lachst.", antwort: "" }; // Wiederholung von Nr. 20
PERSOENLICH[307] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 61:\nIch bringe dir Frühstück ans Bett\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 1
PERSOENLICH[308] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein liebster Duft?", antwort: "" }; // Wiederholung von Nr. 30
PERSOENLICH[309] = { typ: "Grund", bildtext: "Grund Nr. 121", text: "Grund Nr. 121:\nDein Mitgefühl.", antwort: "" }; // Wiederholung von Nr. 21
PERSOENLICH[310] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat Städte ohne Häuser, Wälder ohne Bäume und Wasser ohne Fische?", antwort: "Eine Landkarte." }; // Wiederholung von Nr. 9
PERSOENLICH[311] = { typ: "Grund", bildtext: "Grund Nr. 122", text: "Grund Nr. 122:\nDu bist Sympatisch.", antwort: "" }; // Wiederholung von Nr. 22
PERSOENLICH[312] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 62:\nEin Abend, an dem du den Film aussuchst\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 2
PERSOENLICH[313] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Wort beschreibt uns am besten?", antwort: "" }; // Wiederholung von Nr. 31
PERSOENLICH[314] = { typ: "Grund", bildtext: "Grund Nr. 123", text: "Grund Nr. 123:\nDeine Neugier.", antwort: "" }; // Wiederholung von Nr. 23
PERSOENLICH[315] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wird größer, wenn man es teilt?", antwort: "Freude." }; // Wiederholung von Nr. 10
PERSOENLICH[316] = { typ: "Grund", bildtext: "Grund Nr. 124", text: "Grund Nr. 124:\nDu bringst Ruhe in mein Chaos.", antwort: "" }; // Wiederholung von Nr. 24
PERSOENLICH[317] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 63:\nEine Massage (20 Minuten)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 3
PERSOENLICH[318] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein Lieblingsplatz bei uns zu Hause?", antwort: "" }; // Wiederholung von Nr. 32
PERSOENLICH[319] = { typ: "Grund", bildtext: "Grund Nr. 125", text: "Grund Nr. 125:\nWie du singst, wenn du denkst, es hört keiner zu.", antwort: "" }; // Wiederholung von Nr. 25
PERSOENLICH[320] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist immer vor dir, aber du kannst es nicht sehen?", antwort: "Die Zukunft." }; // Wiederholung von Nr. 11
PERSOENLICH[321] = { typ: "Grund", bildtext: "Grund Nr. 126", text: "Grund Nr. 126:\nDu siehst das Gute in anderen.", antwort: "" }; // Wiederholung von Nr. 26
PERSOENLICH[322] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 64:\nEin Date, das ich plane und bezahle\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 4
PERSOENLICH[323] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war heute dein schönster Moment?", antwort: "" }; // Wiederholung von Nr. 1
PERSOENLICH[324] = { typ: "Grund", bildtext: "Grund Nr. 127", text: "Grund Nr. 127:\nDeine Hand in meiner.", antwort: "" }; // Wiederholung von Nr. 27
PERSOENLICH[325] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Ich habe Tasten, aber öffne keine Tür. Was bin ich?", antwort: "Eine Tastatur." }; // Wiederholung von Nr. 12
PERSOENLICH[326] = { typ: "Grund", bildtext: "Grund Nr. 128", text: "Grund Nr. 128:\nDu machst mich zu einem besseren Menschen.", antwort: "" }; // Wiederholung von Nr. 28
PERSOENLICH[327] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 65:\nEin Tag, an dem ich den Haushalt mache\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 5
PERSOENLICH[328] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welchen Ort willst du unbedingt mit mir sehen?", antwort: "" }; // Wiederholung von Nr. 2
PERSOENLICH[329] = { typ: "Grund", bildtext: "Grund Nr. 129", text: "Grund Nr. 129:\nDeine Kreativität.", antwort: "" }; // Wiederholung von Nr. 29
PERSOENLICH[330] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was ist leichter als eine Feder, aber selbst der Stärkste kann es nicht lange halten?", antwort: "Der Atem." }; // Wiederholung von Nr. 13
PERSOENLICH[331] = { typ: "Grund", bildtext: "Grund Nr. 130", text: "Grund Nr. 130:\nDu verzeihst großzügig.", antwort: "" }; // Wiederholung von Nr. 30
PERSOENLICH[332] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 66:\nEs gibt genau das zu Essen, was du dir wüscht\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 6
PERSOENLICH[333] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was war dein erster Eindruck von mir?", antwort: "" }; // Wiederholung von Nr. 3
PERSOENLICH[334] = { typ: "Grund", bildtext: "Grund Nr. 131", text: "Grund Nr. 131:\nDein perfekter Duft.", antwort: "" }; // Wiederholung von Nr. 31
PERSOENLICH[335] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was hat ein Auge, aber kann nicht sehen?", antwort: "Eine Nadel." }; // Wiederholung von Nr. 14
PERSOENLICH[336] = { typ: "Grund", bildtext: "Grund Nr. 132", text: "Grund Nr. 132:\nWie du dich freust wenn ich dir Essen mache.", antwort: "" }; // Wiederholung von Nr. 32
PERSOENLICH[337] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 67:\nEin Spaziergang mit Eis\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 7
PERSOENLICH[338] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welches Lied erinnert dich an uns?", antwort: "" }; // Wiederholung von Nr. 4
PERSOENLICH[339] = { typ: "Grund", bildtext: "Grund Nr. 133", text: "Grund Nr. 133:\nDu lässt mich träumen.", antwort: "" }; // Wiederholung von Nr. 33
PERSOENLICH[340] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was geht um die Welt, bleibt aber in der Ecke?", antwort: "Eine Briefmarke." }; // Wiederholung von Nr. 15
PERSOENLICH[341] = { typ: "Grund", bildtext: "Grund Nr. 134", text: "Grund Nr. 134:\nDu bist ehrlich zu mir, auch wenn es schwer ist.", antwort: "" }; // Wiederholung von Nr. 34
PERSOENLICH[342] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 68:\nEin Spieleabend (egal welches und egal wie oft)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 8
PERSOENLICH[343] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was wünschst du dir für das kommende Jahr?", antwort: "" }; // Wiederholung von Nr. 5
PERSOENLICH[344] = { typ: "Grund", bildtext: "Grund Nr. 135", text: "Grund Nr. 135:\nDu tröstest mich, ohne viele Worte.", antwort: "" }; // Wiederholung von Nr. 35
PERSOENLICH[345] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Welche Frage kann man nie mit Ja beantworten?", antwort: "Schläfst du schon?" }; // Wiederholung von Nr. 16
PERSOENLICH[346] = { typ: "Grund", bildtext: "Grund Nr. 136", text: "Grund Nr. 136:\nDeine Spontanität.", antwort: "" }; // Wiederholung von Nr. 36
PERSOENLICH[347] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 69:\nEine Umarmung, jederzeit einlösbar\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 9
PERSOENLICH[348] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Erinnerung an uns magst du am liebsten?", antwort: "" }; // Wiederholung von Nr. 6
PERSOENLICH[349] = { typ: "Grund", bildtext: "Grund Nr. 137", text: "Grund Nr. 137:\nDu lachst über meine schlechten Witze.", antwort: "" }; // Wiederholung von Nr. 37
PERSOENLICH[350] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Je mehr man davon hat, desto weniger sieht man. Was ist es?", antwort: "Dunkelheit." }; // Wiederholung von Nr. 17
PERSOENLICH[351] = { typ: "Grund", bildtext: "Grund Nr. 138", text: "Grund Nr. 138:\nDein Mut, Neues auszuprobieren.", antwort: "" }; // Wiederholung von Nr. 38
PERSOENLICH[352] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 70:\nIch muss 10 Liegestütze vor dir machen\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 10
PERSOENLICH[353] = { typ: "Frage", bildtext: "Frage des Tages", text: "Welche Superkraft hättest du gern?", antwort: "" }; // Wiederholung von Nr. 7
PERSOENLICH[354] = { typ: "Grund", bildtext: "Grund Nr. 139", text: "Grund Nr. 139:\nDu bist für deine Liebsten da.", antwort: "" }; // Wiederholung von Nr. 39
PERSOENLICH[355] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Was wächst, wenn man es isst?", antwort: "Der Appetit." }; // Wiederholung von Nr. 18
PERSOENLICH[356] = { typ: "Grund", bildtext: "Grund Nr. 140", text: "Grund Nr. 140:\nDein Lächeln nach einem langen Tag.", antwort: "" }; // Wiederholung von Nr. 40
PERSOENLICH[357] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 71:\nEin Picknick\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 11
PERSOENLICH[358] = { typ: "Frage", bildtext: "Frage des Tages", text: "Was ist dein Lieblingsessen, das wir zusammen hatten?", antwort: "" }; // Wiederholung von Nr. 8
PERSOENLICH[359] = { typ: "Grund", bildtext: "Grund Nr. 141", text: "Grund Nr. 141:\nDu erinnerst mich daran, das Leben zu genießen.", antwort: "" }; // Wiederholung von Nr. 41
PERSOENLICH[360] = { typ: "Rätsel", bildtext: "Rätsel des Tages", text: "Ich bin klein, schlage ohne Pause und gehöre dir. Was bin ich?", antwort: "Mein Herz." }; // Wiederholung von Nr. 19
PERSOENLICH[361] = { typ: "Grund", bildtext: "Grund Nr. 142", text: "Grund Nr. 142:\nDu forderst mich heraus.", antwort: "" }; // Wiederholung von Nr. 42
PERSOENLICH[362] = { typ: "Gutschein", bildtext: "Gutschein", text: "Gutschein Nr. 72:\nEin Kinoabend mit Snacks (zuhause oder Kino)\n\nEinlösbar nach Absprache.", antwort: "" }; // Wiederholung von Nr. 12
PERSOENLICH[363] = { typ: "Frage", bildtext: "Frage des Tages", text: "Wofür bist du gerade dankbar?", antwort: "" }; // Wiederholung von Nr. 9
PERSOENLICH[364] = { typ: "Grund", bildtext: "Grund Nr. 143", text: "Grund Nr. 143:\nDu bist mein Lieblingsmensch.", antwort: "" }; // Wiederholung von Nr. 43

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
    liste.push(Object.assign(e, { antwort: "" }, BESONDERE_TAGE[tag], PERSOENLICH[tag]));
  }
  return liste;
})();
