2022 Oct 7
## ~~~ Hobby Project ~~~
Make a searchable FHL podcast archive

Bonus: lyric search.

Source: https://web.archive.org/web/20200701055059/http://utopia-music.podomatic.com/rss2.xml

Convert to JSON; https://jsonformatter.org/rss-to-json

Strip html: https://codebeautify.org/html-stripper

Select episodes:
```
jq ' .rss.channel.item' html-stripped.json
```
save as json

upload to algolia to index: https://www.algolia.com/apps/

## Running:
`npm start`

## Deployment to GitHub Pages:
```
npm run deploy
```

## Rerefences
[https://github.com/gitname/react-gh-pages]()
[https://stackoverflow.com/questions/65197385/how-to-change-sourcemappingurl-in-parcel-js]()