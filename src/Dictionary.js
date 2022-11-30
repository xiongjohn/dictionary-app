import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

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
      <section>
        <h2>Word</h2>
        <p>This is a description</p>
      </section>
      <section>
        <h2>Noun</h2>
        <p>This is a description</p>
      </section>
    </div>
  );
}
