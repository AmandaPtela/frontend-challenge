import { useContext, useState, useEffect } from "react";
import { Table, DisplayTarefas, InputAdd, TBody, TRow, StyledImage, AddButton, ActionButton, NewTaskArea, TaskTitle } from "../Styles/Tasks";
import { Context } from "../Context/Context";
import Info from "./Info";

export default function Tarefas() {

    const initialItem = {
        value: "",
        status: "Pending",
        edit: false
    };

    const { items, setItem, filtered, setFiltered, setDoneTasks, doneTasks, setPercentage } = useContext(Context);
    let [newItem, setNewItem] = useState("");
    let [done, setDone] = useState(true);
    let [toEdit, setEdit] = useState(false);
    let [selected, setSelected] = useState();

    useEffect(() => setFiltered(items), [items, setFiltered]);

    const createNewItem = (create) => {
        const listItems = items;
        newItem = { value: create, status: initialItem.status, edit: initialItem.edit };

        listItems.push(newItem);
        setItem(listItems);
        return setPercentage(doneTasks.length);
    };

    const deleteItem = (item) => {
        const newList = items.filter((tarefas) => tarefas.value !== item);
        return setItem(newList);
    };

    //PAREI
    const infoText = () => {
        console.log("em cima");
        return(
            <div
                style={{ position: "absolute", height: "20px", top: "50%", left: "50%", backgroundColor: "red"}}
            >
                <span>Edit task</span>
            </div>
        )
    }

    const renderItem = (item, index) => {
        if (item.status === "Done") {
            return (
                <TRow key={index} id={`${index}-done`}>
                    <TaskTitle id={`${index}-done`} >
                        {item.value}
                    </TaskTitle>
                    <td style={{ display: "flex" }}>
                        <ActionButton
                            id="undo-button"
                            onClick={() => {
                                setDone(!done);
                                item.status = done ? "Done" : "Pending";
                                setDoneTasks(items.filter(({ status }) => status !== "Pending"));
                                setPercentage(doneTasks.length);
                            }}
                        >
                            {window.innerWidth > 500
                                ? "Undo task"
                                : <StyledImage id="undo-item" alt="undo-item-icon"  />
                            }
                        </ActionButton>
                        <ActionButton
                            id="delete-button"
                            onClick={() => {
                                setDoneTasks(items.filter((tarefa) => (
                                    tarefa.value !== item.value && tarefa.status !== "Pending"))
                                );
                                deleteItem(item.value);
                                setPercentage(doneTasks.length);
                            }}
                        >
                            <StyledImage
                                id="delete-item"
                                alt="delete-item-icon"
                            />
                        </ActionButton>
                    </td>
                </TRow>
            )
        }

        return (
            <TRow
                key={index}
                id={`${index}-pending`}
            >

                {/* RENDERIZAR DE ACORDO COM O ID DO SELECIONADO */}
                {toEdit
                    ? (
                        <td style={{ display: "flex", width: "100%" }}>
                            <InputAdd id="edit" maxLength={60} onChange={({ target }) => item.value = target.value} />
                            <ActionButton
                                id="edit"
                                onClick={() => {
                                    setDoneTasks(items.filter((tarefas) => tarefas.status === "Done"));
                                    setPercentage(doneTasks.length);
                                    item.edit = false
                                    setEdit(false)
                                }}
                            >
                                Edit
                            </ActionButton>
                        </td>)
                    : (
                        <td style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                            <TaskTitle
                                id={`${index}-pending`}
                                style={{ display: "flex", width: "83%", alignItems: "center" }}
                                onClick={() => {
                                    if (item.toEdit !== true) {
                                        setEdit(true);
                                    }
                                    if (toEdit === false) {
                                        setEdit(true);
                                    };
                                    item.edit = toEdit;
                                    setSelected(index);
                                    console.log(selected);
                                }}>
                                {item.value}
                            </TaskTitle>
                            <div
                                style={{
                                    display: "flex",
                                    height: "100%",
                                    width: window.innerWidth < 500 ? "fir-content" : "128px"
                                }}>
                                <ActionButton
                                    id="mark-done-button"
                                    width={window.innerWidth}
                                    onClick={() => {
                                        setDone(!done);
                                        item.status = done ? "Done" : "Pending";
                                        setDoneTasks(items.filter((tarefas) => tarefas.status === "Done"));
                                        setPercentage(doneTasks.length);
                                    }}
                                >
                                    {window.innerWidth > 500
                                        ? "Mark as Done"
                                        : <StyledImage
                                            id="done-item"
                                            alt="do-item-icon"
                                            height="30px"
                                        />
                                    }
                                </ActionButton>
                                <ActionButton
                                    id="delete-button"
                                    onClick={() => {
                                        setDoneTasks(items.filter((tarefa) => (
                                            tarefa.value !== item.value && tarefa.status !== "Pending"))
                                        );
                                        deleteItem(item.value);
                                        setPercentage(doneTasks.length);
                                    }}
                                >
                                    <StyledImage
                                        id="delete-item"
                                        alt="delete-item"
                                        
                                    />
                                </ActionButton>
                            </div>
                        </td>
                    )}
            </TRow>
        )
    }

    return (
        <DisplayTarefas>
            <NewTaskArea>
                <InputAdd
                    type="text"
                    maxLength={67}
                    onChange={({ target }) => setNewItem(target.value)}
                    value={newItem} placeholder="Add new item" />
                <AddButton
                    id="add-task"
                    width={window.innerWidth}
                    /* style={styleAddButton} */
                    onClick={() => {
                        createNewItem(newItem);
                        setNewItem("")
                    }}
                />
            </NewTaskArea>
            <Table>
                <TBody>
                    {filtered.map((item, index) => renderItem(item, index))}
                </TBody>
            </Table>
        </DisplayTarefas>
    )
}
