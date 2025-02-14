import { useEffect, useState } from "react";

function Hello(){
    //리턴값을 생성하여 컴포넌트가 destroy 될때 실행 할 함수를 설정 가능
    function destroyFn(){
        console.log("destroyFn");
    }
    function effectFn(){
    console.log("Create");
    return destroyFn();
    }
    useEffect(effectFn,[])
    return <h1>Hello</h1>
}

function CleanUp(){
    var [showing,setShowing] = useState(false);
    function onClick(){
        setShowing((show)=>!show)
    }
    return(
        <div>
             {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "hide":"show"}</button>
        </div>
    );
}
export default CleanUp;