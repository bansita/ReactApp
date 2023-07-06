import React, { useState } from 'react'

export default function About() {

  const[myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const[btnText,setBtnText]=useState("Enable dark mode")
  const enableStyle=()=>{
    if(myStyle.color==='black'){
      setMyStyle({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
      })
      setBtnText("Enable light mode")
    }
    else{
      setMyStyle({
        color:'black',
        backgroundColor:'white',
        border:'1px solid black'
      })
      setBtnText("Enable dark mode")
    }
  }
  return (
    <>
    <div className='container my-3' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatible

      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document,essays,etc
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
  <button type="button" onClick={enableStyle}className="btn btn-primary">{btnText}</button>
</div> */}
    </div>
    </>
  )
}
