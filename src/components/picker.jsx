import React, { useState } from "react";
import "./styles.modules.css";

const Picker = (props) => {
    const [aListItem, setListItem] = useState("")

    const thingtodo = (e) => {
        e.preventDefault();
        props.updateStateprop(aListItem)
        e.target.reset()
    }

    return (
        <div className="picker">
            <form onSubmit={thingtodo}>
            <label >
                What do you need to do?
                <input type="text" id="resetable" onChange={ (e) => setListItem(e.target.value) }/>
                Done?
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Picker;
