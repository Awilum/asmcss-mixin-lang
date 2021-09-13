AssemblerCSS.registerMixin("lang", function (settings, lang, ...args) {
    if (document.documentElement.lang == lang) {
        return args.join(';');
    }
});