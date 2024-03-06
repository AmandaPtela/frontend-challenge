import { createContext, useState } from "react";


export const Context = createContext();

export const Provider = ({ children }) => {
    const [filter, setFilter] = useState("");
    const [items, setItem] = useState([]);

    return (
        <Context.Provider value={{ filter, setFilter, items, setItem }}>
            {children}
        </Context.Provider>
    )
}
