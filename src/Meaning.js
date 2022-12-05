import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>
        {props.meaning.definitions.map(function (definitions, index) {
          if (index < 5) {
            return (
              <ul key={index}>
                <li>
                  {definitions.definition}
                  <Example example={definitions.example} />
                </li>
              </ul>
            );
          }
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
