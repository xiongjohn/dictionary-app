import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <li>Example: {props.example}</li>
      </div>
    );
  }
}
