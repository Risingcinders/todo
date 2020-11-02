import Picker from "./components/picker";
import ListItem from "./components/listitem";
import { useState } from "react";
import "./App.css";

function App() {
    // const initialState = [{banana : "groovy"}]
    const [varObj, setVarObj] = useState([]);

    const updateState = (athingy) => {
        setVarObj([...varObj, { banana: athingy }]);
    };

    const removeItem = (e, index) => {
        let temp = [...varObj];
        console.log(temp);
        console.log(index);
        temp.splice(index, 1);
        console.log(temp);
        setVarObj(temp);
    };

    return (
        <div className="App">
            <Picker updateStateprop={updateState} />
            <div id="thelist">
                {varObj.map((arrobj, index) => {
                    return (
                        <ListItem
                            key={index}
                            removeStateprop={(e) => {
                                removeItem(e, index);
                            }}
                            goal={arrobj.banana}
                        ></ListItem>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
