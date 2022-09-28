schedule("window", loadStrings);

let i18n;

async function loadStrings() {
    const html = document.documentElement;
    const lang = html.getAttribute("lang");

    try {
        let localeResp = await fetch("../langs/locales.json")
        let locales = await localeResp.json()
        if (locales.val.includes(lang)) {
            let langDataResp = await fetch(`../langs/${lang}.json`)
            i18n = await langDataResp.json()
        }
    } catch (err) {
        console.error(err)
    }
    preloadImages();
}

function _(s) {
    if (typeof (i18n) != 'undefined' && i18n[s]) {
        return i18n[s];
    }
    return s;
}
