// ===== 120 Mini-Spiele aus 9 Spielarten (Daten gern erweitern/ersetzen) =====
// Quiz: "Frage|A|B|C|Nr. der richtigen Antwort (0 = erste)" (Antworten werden gemischt)
const QUIZ = [
  "Welches Tier gilt als Symbol für Treue?|Schwan|Fuchs|Hai|0", "Wie viele Herzen hat ein Oktopus?|1|2|3|2",
  "Welcher Planet ist der Sonne am nächsten?|Venus|Merkur|Mars|1", "Hauptstadt von Australien?|Sydney|Melbourne|Canberra|2",
  "Wie viele Zähne hat ein Erwachsener mit Weisheitszähnen?|28|32|36|1", "Welche Farbe entsteht aus Blau und Gelb?|Grün|Orange|Lila|0",
  "Welches ist das größte Säugetier?|Elefant|Blauwal|Giraffe|1", "Wie viele Beine hat eine Spinne?|6|8|10|1",
  "Welches Land hat die meisten Einwohner?|Indien|USA|Brasilien|0", "Wofür steht DIY?|Do it yourself|Dance in yellow|Dream it yearly|0",
  "Welcher Vogel kann rückwärts fliegen?|Kolibri|Adler|Spatz|0", "In welchem Land steht der Schiefe Turm von Pisa?|Frankreich|Italien|Spanien|1",
  "Wie heißt ein Katzenbaby?|Kitz|Kätzchen|Welpe|1", "Welches Gewürz ist eines der teuersten der Welt?|Safran|Zimt|Pfeffer|0",
  "Welche Blume steht für die Liebe?|Rose|Sonnenblume|Tulpe|0", "Wie viele Minuten hat ein Tag?|1.240|1.440|1.640|1",
  "Welches Instrument hat 88 Tasten?|Gitarre|Klavier|Flöte|1", "Was ist die Hauptzutat von Guacamole?|Avocado|Gurke|Erbse|0"
];
// Wahr oder falsch: "Aussage|w" oder "|f"
const WF = [
  "Honig kann praktisch nie verderben.|w", "Blitze schlagen nie zweimal an derselben Stelle ein.|f",
  "Der Eiffelturm wird im Sommer etwas höher.|w", "Goldfische haben nur ein Gedächtnis von drei Sekunden.|f",
  "Schmetterlinge schmecken mit den Füßen.|w", "Ein Tag auf der Venus ist länger als ein Venusjahr.|w",
  "Erdnüsse sind botanisch Nüsse.|f", "Haie gibt es schon länger als Bäume.|w", "Menschen nutzen nur zehn Prozent ihres Gehirns.|f",
  "Bananen wachsen an Bäumen.|f", "Der Mond entfernt sich langsam von der Erde.|w", "Pinguine leben am Nordpol.|f",
  "Ein Blitz ist heißer als die Oberfläche der Sonne.|w", "Wale sind Fische.|f"
];
const ENTWEDER = [
  "Strand|Berge", "Pizza|Pasta", "Kino|Spieleabend", "Frühstück im Bett|Dinner bei Kerzenlicht", "Sonnenaufgang|Sonnenuntergang",
  "Hund|Katze", "Sommer|Winter", "Städtetrip|Natururlaub", "Süß|Salzig", "Frühaufsteherin|Nachteule", "Roadtrip|Flugreise",
  "Tanzen|Kuscheln", "Kaffee|Tee", "Pläne machen|Spontan sein", "Schokolade|Chips", "Zelten|Hotel", "Konzert|Theater",
  "Überraschungs-Date|Selbst planen", "Liebesbrief|Sprachnachricht", "Altes Foto ansehen|Neues Foto machen",
  "Gemeinsam kochen|Essen gehen", "Regentag drinnen|Schneetag draußen"
];
const EMOJI = [
  "🦁👑|Der König der Löwen|Madagascar|Tarzan|0", "🧊❄️👸|Die Eiskönigin|Aschenputtel|Mulan|0", "🕷️🧑|Spider-Man|Batman|Superman|0",
  "🚢🧊💔|Titanic|Avatar|Der weiße Hai|0", "🧙‍♂️💍🌋|Der Herr der Ringe|Harry Potter|Narnia|0", "🐠🔍|Findet Nemo|Arielle|Shrek|0",
  "🧞‍♂️🪔|Aladdin|Mulan|Pocahontas|0", "🌹👹💃|Die Schöne und das Biest|Cinderella|Rapunzel|0", "🤖🌱🌍|WALL·E|Cars|Oben|0",
  "🎈🏠👴|Oben|Rio|Coco|0", "🐟🍣🇯🇵|Sushi|Pizza|Tacos|0", "☕🥐🇫🇷|Frühstück in Paris|Pizza in Rom|Tee in London|0"
];
const MEM = [
  "🐶 🐱 🐰 🦊 🐻 🐼 🐨 🦁", "🍎 🍌 🍇 🍓 🍉 🍒 🍍 🥝", "🌸 🌻 🌹 🌷 🌼 🍀 🌵 🌴", "⚽ 🏀 🎾 🏐 🏈 🎱 🏓 🎯",
  "🍕 🍔 🍟 🌭 🍩 🍪 🍦 🍫", "🌞 🌙 ⭐ ☁️ 🌈 ⚡ ❄️ 🔥", "🚗 🚲 ✈️ 🚂 ⛵ 🚀 🚁 🛵", "🎸 🥁 🎹 🎺 🎻 🎤 🎧 🎵",
  "💌 💍 🎁 🕯️ 🍷 🧸 🎈 🍰", "🏖️ 🏔️ 🏕️ 🗼 🏰 🎡 🌋 🏝️", "🐠 🐙 🦀 🐬 🐳 🦈 🐢 🦑", "👑 💎 🔮 🎩 🪄 🎭 🎪 🎨"
];
const FANGEN = [[10, 15, 900], [12, 15, 800], [15, 20, 800], [15, 15, 700], [20, 20, 700], [10, 10, 600], [25, 25, 700], [20, 15, 600]]; // [Herzen, Sekunden, Tempo ms]
const ZAHLEN = [[20, 5], [50, 7], [100, 8], [30, 6], [10, 4], [200, 9]]; // [größte Zahl, Versuche]
const WORTE = ["HERZ", "KUSS", "LIEBE", "KUSCHELN", "SOMMER", "URLAUB", "SCHOKOLADE", "SONNE", "STRAND", "ABENTEUER", "GEBURTSTAG",
  "GESCHENK", "LACHEN", "UMARMUNG", "SCHMETTERLING", "FRÜHSTÜCK", "SPAZIERGANG", "SCHATZ", "SEHNSUCHT", "ZUSAMMEN", "TRÄUME", "KERZENLICHT"];
const JN = ["Liebst du mich?", "Bin ich dein Lieblingsmensch?", "Gehen wir heute Eis essen?", "Findest du mich süß?", "Kuscheln wir gleich?", "Bist du heute gut gelaunt?"];

const SPIELE = [];
QUIZ.forEach(function (s) { const p = s.split("|"); SPIELE.push({ typ: "Quiz", q: p[0], o: p.slice(1, -1), r: +p[p.length - 1] }); });
WF.forEach(function (s) { const p = s.split("|"); SPIELE.push({ typ: "Wahr oder falsch", q: p[0], o: ["Wahr", "Falsch"], r: p[1] === "w" ? 0 : 1, fix: 1 }); });
ENTWEDER.forEach(function (s) { SPIELE.push({ typ: "Entweder oder", q: "Was wäre dir lieber?", o: s.split("|"), r: -1 }); });
EMOJI.forEach(function (s) { const p = s.split("|"); SPIELE.push({ typ: "Emoji-Rätsel", q: p[0] + "\nWas ist gemeint?", o: p.slice(1, -1), r: +p[p.length - 1] }); });
MEM.forEach(function (s, i) { SPIELE.push({ typ: "Memory", e: s.split(" "), n: i < 6 ? 6 : 8 }); });
FANGEN.forEach(function (a) { SPIELE.push({ typ: "Herzen fangen", z: a[0], s: a[1], t: a[2] }); });
ZAHLEN.forEach(function (a) { SPIELE.push({ typ: "Zahlenraten", m: a[0], v: a[1] }); });
WORTE.forEach(function (w) { SPIELE.push({ typ: "Wort-Wirrwarr", w: w }); });
JN.forEach(function (f) { SPIELE.push({ typ: "Liebst du mich?", f: f }); });

// Feste Zufallsreihenfolge: jeder Tag bekommt immer dasselbe Spiel, alle 120 Spiele kommen vor
function rnd(seed) {
  return function () {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function mischen(a, r) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const x = a[i]; a[i] = a[j]; a[j] = x; }
  return a;
}
function spielIdFuerTag(tag) {
  const n = SPIELE.length, runde = Math.floor((tag - 1) / n), pos = (tag - 1) % n;
  return mischen(Array.from(SPIELE.keys()), rnd(runde + 7))[pos];
}
