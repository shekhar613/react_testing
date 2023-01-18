import React,{useState} from 'react'

export default function TextForm(props) {
    const uppercase=()=>{
        setText(text.toUpperCase())
        props.showAlert(" All the words converted to UpperCase","success");
    }
    const Lowercase=()=>{
        setText(text.toLowerCase())
        props.showAlert(" All the words converted to LowerCase","success");
    }
    const ClearAll=()=>{
        setText("")
        props.showAlert(" All the text Cleared ","success");
    }

    const CopyText=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to clipboard","success");
    }

    const removeExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra Spaces removed","success");
    }
    
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState('')
    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-4" onClick={uppercase}>UpperCase</button>
                <button className="btn btn-success mx-3 my-4" onClick={Lowercase}>LowerCase</button> 
                <button className="btn btn-success mx-3 my-4" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-success mx-3 my-4" onClick={removeExtraSpaces}>Remove extra Spaces</button>   
                <button className="btn btn-danger mx-3 my-4" onClick={ClearAll}>Clear</button>
            </div>
            <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <b><p>{0.008* text.split(" ").length} Minutes to read it</p></b>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
