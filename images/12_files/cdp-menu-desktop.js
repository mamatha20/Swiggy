function menuDesktop() {
    var e = {
        navMenu: {
            clickedOn: String || "",
            pos: String || "",
            parent: String || "",
            gParent: String || ""
        }
    },
        t = document.getElementById("navmenubar");
    t && t.firstElementChild.className.indexOf("cdp") !== -1 && t.addEventListener("click", function (t) {
        var n = t.target.text;
        n = n.split("keyboard")[0];
        var a = t.target.closest("li"),
            r = Array.from(a.closest("ul").children);
        r = r.indexOf(a);
        var s = t.target.closest("ul").parentElement;
        s = s.className.indexOf("header-wrapper") !== -1 ? "" : s.firstElementChild.textContent;
        var l = t.target.closest("[data-mnuname]");
        l && (l = l.dataset.mnuname), e.navMenu.clickedOn = n, e.navMenu.pos = r, e.navMenu.parent = s || "", e.navMenu.gParent = l || "", cdp.setCookie("widget", "menuclick");
        let i = JSON.stringify(e.navMenu);
        cdp.setCookie("pageload", i, .00138889)
    })
}