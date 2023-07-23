import { useContext } from "react";
import { AppContext, useTodoContext } from "../context/AppContexProvider"

export const TodoApp=()=>{

    const {data, setData, todo, setTodo, editTodoId, setEditTodoId}=useContext(AppContext)

    
      
    
      const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      };
    
      const handleUpdate = (id) => {
        const todoToEdit = data.find((item) => item.id === id);
        if (todoToEdit) {
          setEditTodoId(id);
          setTodo(todoToEdit.text);
        }
      };
    
      
    
      console.log(data);
    


    return (<div>
    <div>
      {data.map((el) => (
        <div key={el.id}>
          <div style={{ display: "flex", gap: "10px", textAlign: "left", padding: "10px" }}>
            <div>{el.id}. </div>
            
    
                         <div>{el.text}</div>
            
            
              <>
                <div>
                  <button onClick={() => handleDelete(el.id)}>Delete</button>
                </div>
                <div>
                  <button onClick={() => handleUpdate(el.id)}>Update</button>
                </div>
              </>
       
          </div>
        </div>
      ))}
    </div>



    </div>)
}