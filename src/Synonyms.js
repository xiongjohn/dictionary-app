import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return <li key={index}>Synonyms: {synonyms}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
