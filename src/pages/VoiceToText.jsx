import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const VoiceToText = () => {
  const [transcript, setTranscript] = useState("");
  /* const { speak, voices } = useSpeechSynthesis(); */
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const synth = window.speechSynthesis;
  /* const voices = synth.getVoices(); */

  // Set language to Arabic
  /* recognition.lang = "ar-AR"; */

  recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    setTranscript(result);
  };

  const startRecognition = () => {
    recognition.start();
  };

  const speakResponse = (text) => {
    /* console.log(voices); */
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-EN"; // Set the language to Arabic
    synth.speak(utterance);
  };

  const postTranscriptToBackend = async () => {
    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint of your backend API
      const backendEndpoint = "http://127.0.0.1:5000/chat";
      const res = await axios.post(backendEndpoint, { city: transcript });
      speakResponse(res.data.message);
    } catch (error) {
      console.error("Error posting transcript to the backend:", error);
    }
  };


  return (
    <div>
      <h2>Voice to Text</h2>
      <button onClick={startRecognition}>Start Listening</button>
      <br />
      <button onClick={postTranscriptToBackend}>Post to Backend</button>
      <br />
      <button
        onClick={() =>
          speakResponse(
            'hello world'
          )
        }
      >
        read
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceToText;
