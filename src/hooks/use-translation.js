import van from "vanjs-core";

export function useTranslation(i18n = globalThis?.__van__i18n__store__) {

  const t = (key) =>
    van.derive(() =>
      i18n.locals?.[i18n.lang.val]?.[key] ?? key
    );

  const setLang = (lang, rtl = i18n?.locals?.[lang]?.__rtl__ ?? false) => {
    i18n.lang.val = lang;
    document.documentElement.lang = lang;
    document.documentElement.style.direction = rtl ? 'rtl' : 'ltr'
  };

  return [t, setLang];
}