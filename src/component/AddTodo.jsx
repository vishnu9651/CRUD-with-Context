import { useContext } from "react";
import { AppContext, AppContextProvider } from "../context/AppContexProvider";

export const AddTodo=()=>{

const {todo,setTodo,data,setData,idCounter,setIdCounter,editTodoId,setEditTodoId}=useContext(AppContext)



    const handleChange = (e) => {
        setTodo(e.target.value);
        console.log(todo);
      };

      const handleSubmit = () => {
        console.log("submit", todo);
        if (todo.trim() === "") {
          return;
        }
        const newTodo = {
          id: idCounter,
          text: todo,
        };
        setIdCounter((prevId) => prevId + 1);
        setData([...data, newTodo]);
        setTodo("");
      };

      const handleSaveUpdate = () => {
        const todoIndex = data.findIndex((item) => item.id === editTodoId);
        if (todoIndex !== -1) {
          const updatedData = [...data];
          updatedData[todoIndex].text = todo;
          setData(updatedData);
          setEditTodoId(null);
          setTodo("");
        }
      };
      const handleCancelUpdate = () => {
        setEditTodoId(null);
        setTodo("");
      };

    
    
    
    return (<div>
              <input placeholder="enter details" value={todo} onChange={handleChange} />
      {editTodoId ? (
        <>
          <button onClick={handleSaveUpdate}>Save</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
        </div>)
}