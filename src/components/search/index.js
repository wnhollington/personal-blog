import algoliasearch from "algoliasearch/lite"
import { default as React, useState, useMemo } from "react"
import { InstantSearch, connectMenu, SearchBox } from "react-instantsearch-dom"
import SearchResult from "./search-results"

export default function Search({ indices }) {
  const [query, setQuery] = useState()
  const [hasFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  const MenuSelect = ({ items, currentRefinement, refine, type }) => (
    <select
      value={currentRefinement || ''}
      onChange={event => refine(event.currentTarget.value)}
      className="m-2 p-2 rounded-md"
    >
      <option value="">{type}</option>
      {items.map(item => (
        <option
          key={item.label}
          value={item.isRefined ? currentRefinement : item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );

  const CustomMenuSelect = connectMenu(MenuSelect);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <h2 class="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl text-center">
          Articles
      </h2>
      <section class="flex flex-col sm:flex-row justify-center items-center my-4 gap-2">
          <SearchBox />
          <div className="flex gap-2">
            <CustomMenuSelect attribute="category" type="All Categories"/>
            <CustomMenuSelect attribute="tags" type="All Tags"/>
          </div>
      </section>

      <SearchResult
        show={query && query.length > 0 && hasFocus}
        indices={indices}
      />

    </InstantSearch>

  )
}