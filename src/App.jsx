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

    const removeItem = (index) => {
        let temp = [...varObj];
        console.log(index);
        temp.splice(index, 1);
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
                            removeStateprop={() => {
                                removeItem(index);
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
