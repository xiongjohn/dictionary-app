import React from "react";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <p>
            {props.results.phonetics.map(function (phonetics, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            })}
          </p>
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
