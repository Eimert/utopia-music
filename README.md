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

----
npx create-instantsearch-app@latest utopia-music-app \
  --template "InstantSearch.js" \
  --app-id "29ZW78SQY6" \
  --api-key "25ee5ee487717b1ded84e0ad05f31ba4" \
  --index-name dev_utopia-music \
  --attributes-to-display title,description

## Running:
`npm start`