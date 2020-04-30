import React, { useRef, useState } from 'react';

function ShareLink(props) {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  let share = ''

  const { user } = props

  if (user !== undefined){
    share = user.nickname
  }

  // const share = (props.user.nickname === undefined) ? '' : props.user.nickname;


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
      
        <input
          ref={textAreaRef}
          value={`mykard.netlify.app/#/kard/${share}`}
          size='25'
        />
      
    </div>
  );
}

export default ShareLink;

