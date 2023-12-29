import React, { useState } from 'react';

const TextToSpeechApp = () => {
  const [text, setText] = useState('');
  const [speaking, setSpeaking] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const speakText = () => {
    if (text) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);

      setSpeaking(true);

      utterance.onend = () => {
        setSpeaking(false);
      };

      synth.speak(utterance);
    }
  };

  return (
    <div>
      <h1>Text to Speech App</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text to be spoken..."
      ></textarea>
      <button onClick={speakText} disabled={speaking}>
        {speaking ? 'Speaking...' : 'Speak'}
      </button>
    </div>
  );
};

export default TextToSpeechApp;
