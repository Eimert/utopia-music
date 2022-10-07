const { algoliasearch , instantsearch  } = window;
const searchClient = algoliasearch("29ZW78SQY6", "25ee5ee487717b1ded84e0ad05f31ba4");
const search = instantsearch({
    indexName: "dev_utopia-music",
    searchClient
});
search.addWidgets([
    instantsearch.widgets.searchBox({
        container: "#searchbox"
    }),
    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
</article>
`
        }
    }),
    instantsearch.widgets.configure({
        hitsPerPage: 8
    }),
    instantsearch.widgets.dynamicWidgets({
        container: "#dynamic-widgets",
        fallbackWidget ({ container , attribute  }) {
            return instantsearch.widgets.panel({
                templates: {
                    header: attribute
                }
            })(instantsearch.widgets.refinementList)({
                container,
                attribute
            });
        },
        widgets: []
    }),
    instantsearch.widgets.pagination({
        container: "#pagination"
    }), 
]);
search.start();
// autofocus on search input field
window.onload = function() {
    var input = document.querySelector(".ais-SearchBox-input").focus();
};

//# sourceMappingURL=index.816e7b21.js.map
