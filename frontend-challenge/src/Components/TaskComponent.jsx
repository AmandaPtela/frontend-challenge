import { useContext, useState, useEffect } from "react";
import { TRow, StyledImage, ActionButton, TaskTitle } from "../Styles/Tasks";
import { Context } from "../Context/Context";

export default function Tarefa(data) {
    const { item, index } = data;

    const initialItem = {
        value: "",
        status: "Pending",
        edit: false
    };

    const { items, setItem, setFiltered, setDoneTasks, doneTasks, setPercentage } = useContext(Context);
    let [done, setDone] = useState(false);
    let [toEdit, setEdit] = useState(null);
    let [selected, setSelected] = useState();

    useEffect(() => setFiltered(items), [items, setFiltered]);

    const deleteItem = (item) => {
        const newList = items.filter((tarefas) => tarefas.value !== item);
        return setItem(newList);
    };

    //PAREI
/*     const infoText = () => {
        console.log("em cima");
        return (
            <div
                style={{ position: "absolute", height: "20px", top: "50%", left: "50%", backgroundColor: "red" }}
            >
                <span>Edit task</span>
            </div>
        )
    } */

    return (
        <TRow
            key={index}
            id={done
                ? toEdit ? `${index}-done-selected` : `${index}-done`
                : toEdit ? `${index}-pending-selected` : `${index}-pending`
            }
        >
            {toEdit
                ? (
                    <div style={{ height: "55%", width: "80%" }}>
                        <input
                            onChange={({ target }) => item.value = target.value}
                            style={{ height: "90%", width: "90%", border: "solid 0.1ch orange", borderRadius: "0.2em", outline: "none" }}
                            type="text"
                            maxLength={67}
                        />
                        <ActionButton
                            id="confirm-edit-button"
                            onClick={() => { item.edit = !item.edit; setEdit(item.edit) }}
                        >
                            {window.innerWidth > 500
                                ? "Editar"
                                : <StyledImage id="undo-item" alt="undo-item-icon" />
                            }
                        </ActionButton>
                    </div>
                )
                : (
                    <TaskTitle
                        onClick={
                            () => {
                                setSelected(item)
                                item.edit = !item.edit
                                setEdit(item.edit)
                            }
                        }
                        id={done ? `${index}-done` : `${index}-pending`} >
                        {item.value}
                    </TaskTitle>)}
            <td style={{ display: "flex" }}>
                {done
                    ? (
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
                                : <StyledImage id="undo-item" alt="undo-item-icon" />
                            }
                        </ActionButton>
                    )
                    : (
                        <ActionButton
                            id={toEdit ? "mark-done-button-dis" : "mark-done-button"}
                            width={window.innerWidth}
                            disabled={toEdit}
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
                    )
                }
                <ActionButton
                    id={toEdit ? "delete-button-dis" : "delete-button"}
                    disabled={toEdit}
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
        </TRow >
    )
}
