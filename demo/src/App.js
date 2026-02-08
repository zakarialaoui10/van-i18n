import './App.css'
import van from "vanjs-core";
import { createI18NProvider, useTranslation } from "van-i18n";
import locals from './locals.json'

const TARGET = document.getElementById('app')

const {div, p, button, br} = van.tags

createI18NProvider("en", locals, TARGET);

const App = () => {
  const [t, setLang] = useTranslation();

  return div(
    p(t("prog")),
    p(t("se")),
    // br(),
    button({ onclick: () => setLang("en") }, "EN"),
    button({ onclick: () => setLang("fr") }, "FR"),
    button({ onclick: () => setLang("ar") }, "Ar"),
  );
};

van.add(TARGET, App())
