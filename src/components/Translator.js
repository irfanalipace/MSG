import React, { useState } from 'react';
import axios from 'axios';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        null,
        {
          params: {
            q: inputText,
            target: 'iw', // 'iw' represents Hebrew (Israel)
            source: 'en', // 'en' represents English
            key: 'YOUR_GOOGLE_TRANSLATE_API_KEY', // Replace with your actual API key
          },
        }
      );

      const translation = response.data.data.translations[0].translatedText;
      setTranslatedText(translation);
    } catch (error) {
      console.log('Translation error:', error);
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={handleTranslate}>Translate</button>

      <div>{translatedText}</div>
    </div>
  );
};

export default Translator;
