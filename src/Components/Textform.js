import React, { useState } from 'react'

export default function Textform(props) {
    
    const handleUpClick= () =>{
        
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase "," success ");
    }

    const handleLowClick= () =>{
        
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase "," success ");
  }

  const handleCopy= () =>{
        
    navigator.clipboard.writeText(text)
}

    const handleChange= (event) =>{
      
      setText(event.target.value);
    }

    
    const [text,setText]= useState("")
    return (
    
       
          <> 
          <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='dark'?'white':'black'}} onChange={handleChange} id="myBox" rows="8"></textarea>
        <div className="container my-3" >
        <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-danger mx-1 " onClick={handleLowClick}>Convert to LowerCase </button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy}>Copy to Clipboard  </button>


        </div>
          </div>
          <div className="container my-3">
            <h1>Your Summary:  </h1>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutues taken to read  </p>
            <h3>Preview:</h3>
            <p>{text}</p>
          </div>
          </div>
         </>
        
  );
}
