// Merkt sich auf diesem Gerät, welche Spiele schon gespielt wurden
const FS = {
  get: function () { try { return JSON.parse(localStorage.getItem("fd-gespielt") || "[]"); } catch (e) { return []; } },
  add: function (id) {
    const l = FS.get();
    if (l.indexOf(id) < 0) { l.push(id); try { localStorage.setItem("fd-gespielt", JSON.stringify(l)); } catch (e) {} }
  }
};
