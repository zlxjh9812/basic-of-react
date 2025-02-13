import { useState } from "react";
import App from './App';
import CoinTracker from './CoinTracker';
function Select(){
    var [val,SetVal] = useState("3")
    function onChange(event){
        SetVal((currnet)=>event.target.value);
    }
    return(
        <div>
        <h1>Choose project</h1>
        <select onChange={onChange}>
        <option value={0}>Choose</option>
        <option value={1}>ToDoList</option>
        <option value={2}>CoinTracker</option>
        </select>
        {val==0?<h1>Choose project</h1>:null}
        {val==1? <App/> :null}
        {val==2? <CoinTracker/>:null}
        
        </div>
    );
}
export default Select;