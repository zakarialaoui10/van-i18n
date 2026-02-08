import van from "vanjs-core";

export function createI18NProvider(lang, locals, target = document.documentElement) {
    globalThis.__van__i18n__store__ = {
        lang: van.state(lang),
        locals: locals,
        target
    };
  target.lang = lang;
  if(locals[lang]?.__rtl__) target.style.direction = 'rtl'
}