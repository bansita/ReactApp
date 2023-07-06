import React, { useState } from "react";

export default function TextForm(props) {
  
    const handleUpClick=()=>{
        console.log("Uppercase is done");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into upperCase","sucess");
    }
    const handleLowClick=()=>{
        console.log("Lowercase is done");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowerCase","sucess");
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const clearText=()=>{
      let newText=" ";
      setText(newText);
    }
    const ReverseText=()=>{
      let newText=text.split("").reverse().join("");
      setText(newText);
    }
   const [text,setText] = useState("");
  //   wrong way to set the text
  //   text="new text"
  // correct way to set the text
  //   setText("New text");
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        {/* onChange is used for write in the textarea  */}
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={ReverseText}>Reverse generator</button>
      <button className="btn btn-primary mx-1" onClick={clearText}>Clear </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Yours Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something here to preview"}</p>
    </div> 
    </>
  );
}
