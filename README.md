[![Build Status](https://travis-ci.com/telemark/avtale-generate-grunnlag.svg?branch=master)](https://travis-ci.com/telemark/avtale-generate-grunnlag)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# avtale-generate-grunnlag

Genererer grunnlag for dokumenter og avtaler på bakgrunn av elevdata fra Vigo eller Extens.
Forutsetter at data er i en .csv-fil og at den har `.job.` som en del av filnavnet (eks: 2018-08-06.job.csv)

Det må også være "ekte" .csv mao kommaseparert

```
Enhet,Programområde,Personid,Basisgruppe,,Fornavn,Epost,Etternavn,PC,Skoleår,Kol1,Orgnr
BAMVS,ELELE1----,01020304050,,ELELE1----,Ulla,,Norakk,,1,,974568098
BAMVS,TPTIP1----,06070809100,,TPTIP1----,Anton,,Gåbortbukser,,1,,974568098
```

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
