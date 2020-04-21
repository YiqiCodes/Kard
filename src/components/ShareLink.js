import React, { useRef, useState } from 'react';

function ShareLink(props) {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div style={{
      display:'flex',
      justifyContent:'center'
    }}>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
      
          <button onClick={copyToClipboard}>Share Your Kard</button> 
      
      }
      
        <textarea
          ref={textAreaRef}
          value={`mykard.netlify.app/#/kard/${props.user.nickname}`}
        />
      
    </div>
  );
}

export default ShareLink;