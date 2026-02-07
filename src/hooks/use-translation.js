import van from "vanjs-core";

export function useTranslation() {

  const i18n = globalThis.__van__i18n__store__
  const t = (key) =>
    van.derive(() =>
      i18n.locals?.[i18n.lang.val]?.[key] ?? key
    );

  const setLang = (lang) => {
    i18n.lang.val = lang;
    document.documentElement.lang = lang;
  };

  return [t, setLang];
}