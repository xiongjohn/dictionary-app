import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <p>
          <span className="font-bold">Example: </span>
          {props.example}
        </p>
      </div>
    );
  }
}
