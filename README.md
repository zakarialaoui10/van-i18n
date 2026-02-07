# van-i18n
i18n provider for vanjs app 

## API Design 

- `createI18NProvider(lang, loclas)` : initialize once
- `useTranslation()` : use anywhere, returns :
    - `t(key)` : reactive translation
    - `setLang(lang, rtl = false)` : change language globally

## Usage 

```js
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

createI18NProvider("en", locals);

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

```

## Features

- Reactivity
- Simple Architecture
- No nesting
- No wrapping components
- Automatically updates `<html lang=""..`
- Handle directions
- Lightweight