import React, {useState} from 'react'
// text is for the content present and set text is for updating the text

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!!!","Success");
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!!!","Success");
    }

    const handleClearClick = ()=>{
        console.log("Text was clear" + text);
        let newtext = ' ';
        setText(newtext)
        props.showAlert("Text has been cleared!!!","Success");
    }

    const handleOnChange = (event)=>{                          
        console.log("On changed");
        setText(event.target.value);
    }

    const handleCopy = ()=>{                          
        console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!!!","Success");
    }

    const [text, setText] = useState(' ');
   
  return (
    <>
    <div className="conatiner" style = {{color : props.mode==='dark'?'white' : 'black'}}>
        <h1>{props.heading} </h1>
        <div class="mb-3">
        <textarea className="form-control" value ={text} onChange = {handleOnChange} style = {{backgroundColor : props.mode==='dark'?'grey' : 'white'}} id="mybox" rows="8"></textarea>
    </div>  
        {/* button tag */}
        <button className = "btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button> 
        <button className = "btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Lowercase</button> 
        <button className = "btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button> 
        <button className = "btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button> 
    </div>
         <div className="conatiner my-2" style = {{color : props.mode==='dark'?'white' : 'black'}}>
         <h1>Your Text Summary</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         <h2><b>Preview</b></h2>
         <p>{text.length>0?text:"Enter Something to preview it her"}</p>
    </div>
    </>   
  )
}
