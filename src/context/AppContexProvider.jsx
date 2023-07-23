import {createContext, useContext, useState } from "react";

export const AppContext=createContext()

export function AppContextProvider({children}){

    const [data, setData] = useState([]);
    const [todo, setTodo] = useState("");
    const [editTodoId, setEditTodoId] = useState(null);
    const [idCounter, setIdCounter] = useState(1);

    return(<AppContext.Provider    value={{
        data,
        setData,
        todo,
        setTodo,
        editTodoId,
        setEditTodoId,
        idCounter,
        setIdCounter,
      }}>
        {children}
    </AppContext.Provider>)
}

