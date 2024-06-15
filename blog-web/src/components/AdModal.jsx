import React, { useEffect } from 'react';

const AdModal = ({ isOpen, onClose, onAdEnd }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3229999237020171";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      script.onload = () => {
        // Once the script is loaded, initialize the ad
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };

      // Cleanup the script when the component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAdEnd = () => {
    onAdEnd();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3229999237020171"
          data-ad-slot="6734456703" 
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <button onClick={handleAdEnd} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Close Ad</button>
      </div>
    </div>
  );
};

export default AdModal;
