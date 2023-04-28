import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  })
  function handleChangeTitle(event) {
    const {value} = event.target;
    setNote((prevValue)=> {
      return {...prevValue, title: value
    }})
  }

  function handleChangeContent(event) {
    const {value} = event.target;
    setNote((prevValue)=> {
      return {...prevValue, content: value}
    })
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChangeTitle} name="title" placeholder="Title" />}
        <textarea onClick={expand} onChange = {handleChangeContent} name="content" placeholder="Take a note..." rows={isExpanded? 3 : 1} />
        <Zoom in={isExpanded}>
        <Fab onClick = {(event)=> {
          props.addNote(note);
          //first pass the note to the app 
          setNote({title:"", content:""})
          //second reset the setNote
          //prevent the default in html 
          event.preventDefault();
        }}><AddCircleIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
