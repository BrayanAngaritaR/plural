import { useEffect, useState } from "react";

let recognition: any = null;

if("webkitSpeechRecognition" in window) {
   recognition = new webkitSpeechRecognition();
   recognition.continuous = true;
   recognition.lang = 'en';
}

const useSpeechRecognition = () => {
   const [text, setText] = useState("");
   const [isListening, setIsListening] = useState(false);

   useEffect(() => {
      if(!recognition) return;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
         setText(event.results[0][0].transcript);
         recognition.stop();
         setIsListening(false);
      }
   }, []);

   const startListening = () => {
      setText('');
      setIsListening(true);
      recognition.start();
   };

   const stopListening = () => {
      setIsListening(false);
      recognition.stop();
   };

   return {
      text, setText, stopListening, isListening, startListening, hasRecognitionSupport: !!recognition
   }
};

export default useSpeechRecognition;