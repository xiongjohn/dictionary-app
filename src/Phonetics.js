import React, { useState, useEffect } from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  const [sound, setSound] = useState(props.phonetics.audio);

  useEffect(() => {
    setSound(props.phonetics.audio);
  }, [props.phonetics]);

  function playAudio() {
    let playSound = new Audio(sound);
    playSound.play(sound);
  }

  function handleClick(event) {
    event.preventDefault();
    setSound(props.phonetics.audio);
    playAudio();
  }

  if (props.phonetics.audio.length > 0) {
    return (
      <div className="Phonetics">
        <button onClick={handleClick}>
          <i class="far fa-play-circle"></i>
        </button>
        <p>{props.phonetics.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
