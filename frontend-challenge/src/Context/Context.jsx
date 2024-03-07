import { createContext, useState } from "react";


export const Context = createContext();

export const Provider = ({ children }) => {
    const [filter, setFilter] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [items, setItem] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [percentage, setPercentage] = useState(0);

    return (
        <Context.Provider
            value={{
                filter,
                setFilter,
                items,
                setItem,
                filtered,
                setFiltered,
                doneTasks,
                setDoneTasks,
                percentage,
                setPercentage
            }}>
            {children}
        </Context.Provider>
    )
}
