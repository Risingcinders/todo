import React, { useState } from "react";
import "./styles.modules.css";

const ListItem = (props) => {
    const [completed,setCompleted] = useState(false)

    const anotherthing = () => {
        completed ? setCompleted(false) : setCompleted(true)
    }

    return (
        <div className="listitem">
            <p style={ completed ? {textDecoration: "line-through"} : {textDecoration: "none"} }>{props.goal}</p>
            <form action="">
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={anotherthing}
                    />
                    Done?
                </label>
            </form>
            <a className="deletebtn" onClick={ (e) => props.removeStateprop(e) }>Delete</a>
        </div>
    );
};

export default ListItem;
