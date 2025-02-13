import Button from "./Button"
import style from "./App.module.css"
import {useState,useEffect} from "react";
function App() {
    var [counter, setCounter] = useState(0);
    var [keyWord, setKeyWord] = useState("");
    function onChange(event){
            setKeyWord((temp) => temp = event.target.value);
            
    }
   
    function onclick() {
        setCounter((currnet) => currnet += 1);

    }
    console.log("render all time");
    //useEffect를 통해 내가 원하는 시점에서 실행 가능한 코드를 작성 가능
    // 앞단에서는 딱히 문제가 없지만 뒷단으로 가면 머리 많이 아플듯?
    //dependcy[] 가 null 임으로 최초의 렌더링 될때에만 실행
    useEffect(()=>{
        console.log("call the api");
    },[]);
    //키워드가 변화 되었을때만 해당 함수가 실행이됨
    useEffect(()=>{
        if(keyWord!=null && keyWord.length > 5){
        console.log("search thie " ,keyWord);
        }
    },[keyWord])
    //카운터가가 변화 되었을때만 해당 함수가 실행이됨
    useEffect(()=>{
        console.log("count thie " ,counter);
    },[counter])
    //키워드와 카운터 가 변화 되었을때만 해당 함수가 실행이됨
    useEffect(()=>{
        console.log("count and keyword ");
    },[counter,keyWord])
  
    return (
        <div>
            <input value={keyWord}
                    onChange={onChange}
                    type="text"
                    placeholder="Search Here..."/>
            <h1 id={style.title}>Welcome Back!!!!</h1>
            <h1>{counter}</h1>
            <button onClick={onclick}>clickMe</button>

        </div>
    );
}

export default App;
