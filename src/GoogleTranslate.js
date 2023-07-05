import React, { useEffect, useState } from 'react';

function GoogleTranslate() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    googleTranslateScript.async = true;
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    googleTranslateScript.onload = () => {
      setIsLoaded(true);
    };

    return () => {
      document.body.removeChild(googleTranslateScript);
    };
  }, []);

  if (!isLoaded) {
    return <div>Loading Google Translate...</div>;
  }

  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;
