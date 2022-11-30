import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(`animal`);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApi).then(handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word"
              onChange={handleKeywordChange}
            ></input>
          </form>
        </main>

        <Results results={results} />
      </div>
    );
  } else {
    load();

    return null;
  }
}
