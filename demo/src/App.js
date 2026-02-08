import './App.css'
import van from "vanjs-core";
import { createI18NProvider, useTranslation } from "van-i18n";

const TARGET = document.getElementById('app')

const {div, p, button, br} = van.tags

const locals = {
  fr: {
    start: "Commencer",
    finish: "Terminer",
  },
  en: {
    start: "Start",
    finish: "Finish",
  },
  ar: {
    __rtl__ : true,
    start: "ابدأ",
    finish: "إنهاء",
  },
};

createI18NProvider("en", locals, TARGET);

const App = () => {
  const [t, setLang] = useTranslation();

  return div(
    p(t("start")),
    p(t("finish")),
    // br(),
    button({ onclick: () => setLang("en") }, "EN"),
    button({ onclick: () => setLang("fr") }, "FR"),
    button({ onclick: () => setLang("ar") }, "Ar"),
  );
};

van.add(TARGET, App())
