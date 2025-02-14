import { useState } from "react";
import App from './components/App';
import CoinTracker from './components/CoinTracker';
import Movie from './components/Movie';
import Home from './routes/Home';
function Select(){
    var [val,SetVal] = useState(3);
    function onChange(event){
        SetVal((currnet)=>event.target.value);
    }
    return(
        <div>
        <h1>Choose project</h1>
        <select onChange={onChange}>
        <option value={0}>Choose</option>
        <option value={1}>ToDoList</option>
        {/* <option value={2}>CoinTracker</option> */}
        <option value={3}>Movie</option>
        </select>
        {val==0?<h1>Choose project</h1>:null}
        {val==1? <App/> :null}
        {val==2? <CoinTracker/>:null}
        {val==3? <Home/>:null}
        
        </div>
    );
}
export default Select;