import van from "vanjs-core";

export function createI18NProvider(lang, locals) {
    globalThis.__van__i18n__store__ = {
        lang: van.state(lang),
        locals: locals,
    };
  document.documentElement.lang = lang;
}