import { useContext, useState, useEffect } from "react";
import { Table, DisplayTarefas, InputAdd, TBody, TRow, StyledImage } from "../Styles/Tasks";
import { Context } from "../Context/Context";
import addTask from "../Assets/add-task.png";

export default function Tarefas() {

    const styleNewItemArea = {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    }

    const styleAddButton = {
        backgroundImage: `url(${addTask})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "none",
        borderRadius: "0 4px 4px 0",
        cursor: "pointer",
        height: window.innerWidth < 500 ? "50px" : "100%",
        maxHeight: "51px",
        width: window.innerWidth < 500 ? "60px" : "10%",
        maxWidth: "52px",
        zIndex: 1,
    }

    const styleDoneTask = {
        textDecoration: "line-through",
        zIndex: 0
    };

    const styleUndoTask = {
        fontSize: "13px",
        fontFamily: "inherit",
        color: "#FA5252",
        opacity: "100%",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        zIndex: 2
    }

    const styleSetDoneButton = {
        backgroundColor: "transparent",
        color: "inherit",
        opacity: "70%",
        border: "none",
        fontSize: "13px",
        fontFamily: "inherit",
        cursor: "pointer",
        zIndex: 2
    }

    const styleActionButton = {
        backgroundColor: "transparent",
        opacity: "100%",
        border: "none",
        outline: "none",
        cursor: "pointer",
        zIndex: 2
    };

    const initialItem = {
        value: "",
        status: "Pending"
    };

    const { items, setItem, filtered, setFiltered, setDoneTasks, doneTasks, setPercentage } = useContext(Context);
    let [newItem, setNewItem] = useState("");
    let [done, setDone] = useState(true);

    useEffect(() => setFiltered(items), [items, setFiltered]);

    const createNewItem = (create) => {
        const listItems = items;
        newItem = { value: create, status: initialItem.status };

        listItems.push(newItem);
        setItem(listItems);
        return setPercentage(doneTasks.length);
    };

    const deleteItem = (item) => {
        const newList = items.filter((tarefas) => tarefas.value !== item);
        return setItem(newList);
    };

    const renderItem = (item, index) => {
        if (item.status === "Done") {
            return (
                <TRow key={index} id={`${index}-done`} >
                    <td style={styleDoneTask}>
                        {item.value}
                    </td>
                    <td style={{ display: "flex" }}>
                        <button
                            onClick={() => {
                                setDone(!done);
                                item.status = done ? "Done" : "Pending";
                                setDoneTasks(items.filter(({ status }) => status !== "Pending"));
                                setPercentage(doneTasks.length);
                            }}
                            style={styleUndoTask}
                        >
                            Undo task
                        </button>
                        <button
                            onClick={() => {
                                setDoneTasks(items.filter((tarefa) => (
                                    tarefa.value !== item.value && tarefa.status !== "Pending"))
                                );
                                deleteItem(item.value);
                                setPercentage(doneTasks.length);
                            }}
                            style={styleActionButton}
                        >
                            <StyledImage
                                id="delete-item"
                                alt="delete-item"
                                height="30px"
                            />
                        </button>
                    </td>
                </TRow>
            )
        }

        return (
            <TRow key={index} id={`${index}-pending`} >
                <td>
                    {item.value}
                </td>
                <td style={{ display: "flex" }}>
                    <button
                        onClick={() => {
                            setDone(!done);
                            item.status = done ? "Done" : "Pending";
                            setDoneTasks(items.filter((tarefas) => tarefas.status === "Done"));
                            setPercentage(doneTasks.length);
                        }}
                        style={styleSetDoneButton}
                    >
                        Mark as Done
                    </button>
                    <button
                        onClick={() => {
                            setDoneTasks(items.filter((tarefa) => (
                                tarefa.value !== item.value && tarefa.status !== "Pending"))
                            );
                            deleteItem(item.value);
                            setPercentage(doneTasks.length);
                        }}
                        style={styleActionButton}
                    >
                        <StyledImage
                            id="delete-item"
                            alt="delete-item"
                            height="30px"
                        />
                    </button>
                </td>
            </TRow>
        )
    }

    return (
        <DisplayTarefas>
            <div
                id="newItemArea"
                style={styleNewItemArea}>
                <InputAdd
                    type="text"
                    maxLength={67}
                    onChange={({ target }) => setNewItem(target.value)}
                    value={newItem} placeholder="Add new item" />
                <button
                    style={styleAddButton}
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
