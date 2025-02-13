import { useEffect, useState } from "react";

import "./CoinTracker.css"
function CoinTracker(){
    var[state,setState] = useState(true);
    var[coin,setCoins]=useState([]);
    var[val,setVal] = useState(0);
    var[name,setName] = useState("");
    function onChangeVal(event){
        setVal((value)=>event.target.value)
    }
    function onChangeName (event){
        setName((nameVal)=>event.target.value)
    }

    const filterArr = coin.filter((coins)=>
    coins.name.toLowerCase().includes(name.toLowerCase()) ||
    coins.symbol.toLowerCase().includes(name.toLowerCase())
  );
        

    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
          setCoins(json);
          setState(false);
        });
    },[])
    return(
        <div>
        <div>
        <h1 id="txt">Coin</h1>
        
        <label  id="txt" htmlFor="money">how much do you have?</label>
        <input value={val} onChange={onChangeVal}></input>
        <br/>
        <label  id="txt" htmlFor="search">what do you want</label>
        <input value={name} onChange={onChangeName}></input>
        </div>
        {state ? <strong>Loading</strong>:null}
        {/* <select>   
        {coin.map((coin) => 
            <option>{coin.name}({coin.symbol})</option>
        )}
     </select> */}
   
      {filterArr.map((coin) =>
     
      <ul>
        <li>
        <p>{coin.name}({coin.symbol})</p>
        <hr></hr>
        <p>Price : {coin.quotes.USD.price}</p>
        <p>I Got : {val} $</p>
        <p>then i can buy this much {coin.name}  : {(val/coin.quotes.USD.price).toFixed(6)}</p>
        </li>
      </ul>
     
    )}
     
        </div>
    );
}
export default CoinTracker;