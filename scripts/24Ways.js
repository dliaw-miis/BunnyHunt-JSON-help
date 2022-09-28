schedule("window", loadStrings);

function loadStrings() {
    const [html] = document.getElementsByTagName("html")
    const lang = html.getAttribute("lang");

	fetch("../langs/" + lang + ".json")
		.then(resp => resp.json())
		.then(data => i18n = data)
		.catch(error => console.error(error))
		.finally(() => preloadImages());
}

function _(s) {
    if (typeof(i18n)!='undefined' && i18n[s]) {
        return i18n[s];
    }
    return s;
}
