import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          {props.photos.photos.map(function (photo, index) {
            return (
              <div key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} alt={photo.src.alt} />
                </a>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
