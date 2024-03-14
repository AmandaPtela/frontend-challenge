import { useContext, useState, useEffect } from "react";
import { Table, DisplayTarefas, InputAdd, TBody, TRow, StyledImage } from "../Styles/Tasks";
import { Context } from "../Context/Context";
import addTask from "../Assets/add-task.png";

export default function Tarefas() {

    const initialItem = {
        value: "",
        status: "Pending"
    }
    const { items, setItem, filtered, setFiltered, setDoneTasks, doneTasks, setPercentage } = useContext(Context);
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
                        <td style={{ display: "flex" }}>
                            <button
                                onClick={() => {
                                    setDone(!done);
                                    item.status = done ? "Done" : "Pending";
                                    setDoneTasks(items.filter(({ status }) => status !== "Pending"));
                                    setPercentage(doneTasks.length);
                                }}
                                style={{ fontSize: "13px", fontFamily: "inherit", color: "#FA5252", opacity: "100%", border: "none", backgroundColor: "transparent", cursor: "pointer", zIndex: 2 }}
                            > 
                                Undo task
                            </button>
                            <button
                                onClick={() => {
                                    setDoneTasks(items.filter((tarefa) => tarefa.value !== item.value && tarefa.status !== "Pending"));
                                    deleteItem(item.value);
                                    setPercentage(doneTasks.length);
                                }}
                                style={{ border: "none", outline: "none", backgroundColor: "transparent", opacity: "100%", cursor: "pointer", zIndex: 2 }}
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
                    <th style={{ zIndex: 0 }}>{item.value}</th>
                </tr>
                <tr>
                    <td style={{ display: "flex" }}>
                        <button
                            onClick={() => {
                                setDone(!done);
                                item.status = done ? "Done" : "Pending";
                                setDoneTasks(items.filter((tarefas) => tarefas.status === "Done"));
                                setPercentage(doneTasks.length);
                            }}
                            style={{ fontSize: "13px", fontFamily: "inherit", color: "inherit", opacity: "70%", border: "none", backgroundColor: "transparent", cursor: "pointer", zIndex: 2 }}
                        >
                            Mark as Done
                        </button>
                        <button
                            onClick={() => {
                                setDoneTasks(items.filter((tarefa) => tarefa.value !== item.value && tarefa.status !== "Pending"));
                                deleteItem(item.value);
                                setPercentage(doneTasks.length);
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
            <div
                id="newItemArea"
                style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <InputAdd type="text" onChange={({ target }) => setNewItem(target.value)} value={newItem} placeholder="Add new item" />
                <button
                    style={{
                        maxHeight: "51px",
                        maxWidth: "52px",
                        width: window.innerWidth < 500 ? "60px" : "10%",
                        height: window.innerWidth < 500 ? "50px" : "100%",
                        border: "none",
                        borderRadius: "0 4px 4px 0",
                        backgroundImage: `url(${addTask})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: 1,
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        createNewItem(newItem);
                        setNewItem("")
                    }}
                >
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
