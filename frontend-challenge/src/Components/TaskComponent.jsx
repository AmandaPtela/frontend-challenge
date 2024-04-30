import { useContext, useState, useEffect } from "react";
import { Table, TBody, TRow, StyledImage, ActionButton, InputAdd, TaskTitle } from "../Styles/Tasks";
import { Context } from "../Context/Context";

export default function Tarefa(data) {
    const { item, index } = data;

    console.log(item);

    const initialItem = {
        value: "",
        status: "Pending",
        edit: false
    };

    const { items, setItem, filtered, setFiltered, setDoneTasks, doneTasks, setPercentage } = useContext(Context);
    let [done, setDone] = useState(false);
    let [toEdit, setEdit] = useState(false);
    let [selected, setSelected] = useState();

    useEffect(() => setFiltered(items), [items, setFiltered]);

    const deleteItem = (item) => {
        const newList = items.filter((tarefas) => tarefas.value !== item);
        return setItem(newList);
    };

    //PAREI
    const infoText = () => {
        console.log("em cima");
        return (
            <div
                style={{ position: "absolute", height: "20px", top: "50%", left: "50%", backgroundColor: "red" }}
            >
                <span>Edit task</span>
            </div>
        )
    }

    return (
        <TRow key={index} id={done ? `${index}-done` : `${index}-pending`}>
            <TaskTitle id={done ? `${index}-done` : `${index}-pending`} >
                {item.value}
            </TaskTitle>
            <td style={{ display: "flex" }}>
                {done
                    ?
                    <ActionButton
                        id="undo-button"
                        onClick={() => {
                            /* AJUSTAR ESTADOS P RENDERIZAR CERTo */
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
                    : <ActionButton
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
                    </ActionButton>}
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
