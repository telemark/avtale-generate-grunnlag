[![Build Status](https://travis-ci.com/telemark/avtale-generate-grunnlag.svg?branch=master)](https://travis-ci.com/telemark/avtale-generate-grunnlag)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# avtale-generate-grunnlag

Genererer grunnlag for dokumenter og avtaler på bakgrunn av elevdata fra Vigo eller Extens.

# Bruk

- Legg datafilen fra Extens eller Vigo i kø-mappen (```test/directories/queue```)
- Start roboten ```$ npm start```
- Det opprettes 1 jobb pr person/dokument i jobb-mappen (```test/directories/jobs```)
- Jobbene kan nå plukkes opp av ```avtale-generator```

# Se også

- [avtale-generator](https://github.com/telemark/avtale-generator) Genererer avtaler og dokumenter

# Lisens

[MIT](LICENSE)

![Robohash image of avtale-generate-grunnlag](https://robots.kebabstudios.party/avtale-generate-grunnlag.png "Robohash image of avtale-generate-grunnlag")
