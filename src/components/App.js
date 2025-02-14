import {useState} from "react";
function App() {
    var [toDo, setTodo] = useState("");
    var [toDos, setToDos] = useState([]);
    function onChange(event) {
        setTodo((val) => val = event.target.value);
    };
    function onSubmit(event) {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos(currentArray => [toDo,...currentArray]);
        setTodo("");

    }
    function deleteIndex(event){
        var index = Number(event.target.value); // value가 문자열이므로 숫자로 변환
        setToDos((currentToDos) =>
          currentToDos.filter((_, idx) => idx !== index)) // index와 일치하지 않는 항목만 유지
    }
    function resetTodo(){
        setToDos((currentArray)=>currentArray=[])
    }
    return (
        <div>
            <h1>My To Dos : ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    value={toDo}
                    placeholder="Write your to do"/>
                <button onClick={onSubmit}>Add To Do</button>
                <button onClick={resetTodo}>Reset</button>
            </form>
            <hr/>
            {toDos.map((item,index)=>
            <div>
            <li key={index}>{item} || {index}</li>
            <button value={index} onClick={deleteIndex}>delete</button>
            </div>
            )}
        </div>
    );
}

export default App;
