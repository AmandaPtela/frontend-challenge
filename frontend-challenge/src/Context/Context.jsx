import { createContext, useState } from "react";


export const Context = createContext();

export const Provider = ({ children }) => {
    const [filter, setFilter] = useState("");

    return (
        <Context.Provider value={{ filter, setFilter }}>
            {children}
        </Context.Provider>
    )
}
