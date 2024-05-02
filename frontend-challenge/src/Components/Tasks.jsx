import { useContext, useState, useEffect } from "react";
import { DisplayTarefas, InputAdd, AddButton, NewTaskArea, Table, TBody } from "../Styles/Tasks";
import { Context } from "../Context/Context";
import TaskComponent from "./TaskComponent";

export default function Tarefas() {

    const initialItem = {
        value: "",
        status: "Pending",
        edit: false
    };

    const { items, setItem, filtered, setFiltered, doneTasks, setPercentage } = useContext(Context);
    let [newItem, setNewItem] = useState("");

    useEffect(() => setFiltered(items), [items, setFiltered]);

    const createNewItem = (create) => {
        const listItems = items;
        newItem = { value: create, status: initialItem.status, edit: initialItem.edit };

        listItems.push(newItem);
        setItem(listItems);
        return setPercentage(doneTasks.length);
    };

    return (
        <DisplayTarefas>
            <NewTaskArea>
                <InputAdd
                    type="text"
                    maxLength={67}
                    onChange={({ target }) => setNewItem(target.value)}
                    value={newItem}
                    placeholder="Add new item" />
                <AddButton
                    id="add-task"
                    width={window.innerWidth}
                    onClick={() => {
                        createNewItem(newItem);
                        setNewItem("")
                    }}
                />
            </NewTaskArea>
            <Table>
                <TBody>
                    {filtered.map((item, index) => <TaskComponent item={item} index={index} />)}
                </TBody>
            </Table>
        </DisplayTarefas>
    )
}
