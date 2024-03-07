import { useContext, useState, useEffect } from "react";
import { Table, DisplayTarefas, InputAdd, TBody, TRow, StyledImage } from "../styles";
import { Context } from "../Context/Context";

export default function Tarefas() {

    const initialItem = {
        value: "",
        status: "Pending"
    }
    const { items, setItem, filtered, setFiltered, setDoneTasks, setPercentage } = useContext(Context);
    let [newItem, setNewItem] = useState("");
    let [done, setDone] = useState(true);

    useEffect(() => setFiltered(items), [items, setFiltered]);

    const createNewItem = (create) => {
        const listItems = items;
        newItem = { value: create, status: initialItem.status }
        listItems.push(newItem);
        return setItem(listItems);
    }

    const deleteItem = (item) => {
        const newList = items.filter((tarefas) => tarefas.value !== item);
        return setItem(newList);
    }

    const renderItem = (item, index) => {
        if (item.status === "Done") {
            return (
                <TRow key={index} id={`${index}-done`} >
                    <tr>
                        <th style={{ textDecoration: "line-through", zIndex: 0 }}>{item.value}</th>
                    </tr>
                    <tr>
                        <td>
                            <button
                                onClick={() => {
                                    setDone(!done);
                                    item.status = done ? "Done" : "Pending";
                                    setDoneTasks(items.filter((tarefa) => tarefa.status !== "Pending"));
                                    setPercentage(items.filter((tarefas) => tarefas.status === "Done").length * 10)
                                }}
                                style={{ border: "none", outline: "none", backgroundColor: "transparent", cursor: "pointer", zIndex: 2 }}
                                >
                                    <StyledImage id="return-item" alt="return-item" height="30px" />
                                </button>
                            <button
                                onClick={() => {
                                    deleteItem(item.value);
                                }}
                                style={{ border: "none", outline: "none", backgroundColor: "transparent", cursor: "pointer", zIndex: 2 }}
                            >
                                <StyledImage id="delete-item" alt="delete-item" height="30px" />
                            </button>

                        </td>
                    </tr>
                </TRow>
            )
        }

        return (
            <TRow key={index} id={`${index}-pending`} >
                <tr>
                    <th style={{zIndex: 0}}>{item.value}</th>
                </tr>
                <tr>
                    <td>

                        <button
                            onClick={() => {
                                setDone(!done);
                                item.status = done ? "Done" : "Pending";
                                setDoneTasks(items.filter((tarefas) => tarefas.status === "Done"));
                                setPercentage(items.filter((tarefas) => tarefas.status === "Done").length * 10)
                            }}
                            style={{ border: "none", outline: "none", backgroundColor: "transparent", cursor: "pointer", zIndex: 2 }}
                        >
                            <StyledImage id="item-done" alt="item-done" height="30px" />
                        </button>
                        <button
                            onClick={() => {
                                deleteItem(item.value);
                            }}
                            style={{ border: "none", outline: "none", backgroundColor: "transparent", cursor: "pointer", zIndex: 2 }}
                        >
                            <StyledImage id="delete-item" alt="delete-item" height="30px" />
                        </button>
                    </td>
                </tr>
            </TRow>
        )
    }

    return (
        <DisplayTarefas>
            <div id="newItemArea" style={{ display: "flex", alignItems: "center" }}>
                <InputAdd type="text" onChange={({ target }) => setNewItem(target.value)} value={newItem} placeholder="Add new item" />
                <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "47px", height: "50px", border: "none", backgroundColor: "#4DA6B3" }}
                    onClick={() => {
                        createNewItem(newItem);
                        setNewItem("")
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "white",
                            fontWeight: "500",
                            color: "#4DA6B3",
                        }}>
                        +
                    </span>
                </button>
            </div>
            <Table>
                <TBody>
                    {filtered.map((item, index) => renderItem(item, index))}
                </TBody>
            </Table>
        </DisplayTarefas>
    )
}
