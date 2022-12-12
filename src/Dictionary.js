import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(``);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [suggestedWord, setSuggestedWord] = useState("");
  const randomWords = require("random-words");

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    let dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApi).then(handleDictionaryResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let pexelsApiKey =
      "563492ad6f91700001000001303e79b848bc4ebbade8f573b674f454";
    let header = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: header }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

    event.target[0].value = "";
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
    setSuggestedWord(randomWords({ exactly: 5, join: `, ` }));
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <h2>What word do you want to look up?</h2>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word"
              onChange={handleKeywordChange}
            ></input>
          </form>
          <p>Suggested words: {suggestedWord}</p>
        </main>

        <Results results={results} />
        <Photos photos={photos} />
        <footer>
          Coded by John Xiong -{" "}
          <a href="/https://github.com/xiongjohn/dictionary-app">Github</a> -
          Hosted on - <a href="">Netlify</a>
        </footer>
      </div>
    );
  } else {
    load();

    return null;
  }
}
