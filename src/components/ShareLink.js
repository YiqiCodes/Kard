import React from "react";


function myFunction() {
  console.log('my function')
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}


const ShareLink = (props) => {
  


  return (

    <div style={{display:'flex', justifyContent:'center'}}>
      <input type="text" value="Hello World" id="myInput" />    
      <button onclick={()=>myFunction()}>Copy text</button>
    </div>

  )

}

export default ShareLink;
