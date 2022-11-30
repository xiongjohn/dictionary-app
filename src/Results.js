import React from "react";

export default function Results(props) {
  console.log(props);

  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <p>{props.results.phonetics[0].text}</p>
        </section>
        <section>
          <h2>Noun</h2>
          <p>This is a description</p>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
