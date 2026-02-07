import van from "vanjs-core";
import { createI18NProvider, useTranslation } from "van-i18n";

const {div, p, button, br} = van.tags

const locals = {
  fr: {
    start: "Commencer",
    end: "Terminer",
  },
  en: {
    start: "Start",
    end: "Finish",
  },
};

createI18NProvider("fr", locals);

const App = () => {
  const [t, setLang] = useTranslation();

  return div(
    p(t("start")),
    br(),
    button({ onclick: () => setLang("en") }, "EN"),
    button({ onclick: () => setLang("fr") }, "FR"),
  );
};

document.body.appendChild(App());
