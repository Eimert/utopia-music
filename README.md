## Funky House London 

Funky House London podcast tracklist archive with audio playback for 43 episodes. This free podcast was moved from its [original location](https://utopia-music.podomatic.com/) to [mixcloud](https://mixcloud.com/UtopiaFunkyHouseLondon/) and changed from free to a paid subscriber model. This website keeps the tracklist of the initial 168 episodes produced between 2006 and 2020 online and searchable. 

Podcast homepage from web archive: https://web.archive.org/web/20191202085132/https://utopia-music.podomatic.com/

## Running:
```
cd utopia-music-app/
npm i
npm start
```
http://localhost:3000

## Deployment to GitHub Pages:
```
cd utopia-music-app/
npm run deploy
```
https://eimert.github.io/utopia-music/

## Creating the search index from scratch

RSS web archive source: https://web.archive.org/web/20200701055059/http://utopia-music.podomatic.com/rss2.xml

Convert to JSON: https://jsonformatter.org/rss-to-json

Strip html: https://codebeautify.org/html-stripper

Select episodes:
```
jq ' .rss.channel.item' html-stripped.json
```
save as episodes.json

Upload to algolia to index: https://www.algolia.com/apps/

## References
[https://github.com/gitname/react-gh-pages]()
[https://stackoverflow.com/questions/65197385/how-to-change-sourcemappingurl-in-parcel-js]()