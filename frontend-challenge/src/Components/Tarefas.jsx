import { useContext, useState } from "react";
import { Table, DisplayTarefas, InputAdd, TBody } from "../styles";
import { Context } from "../Context/Context";

export default function Tarefas() {

    const initialItem = {
        value: "",
        status: "pending"
    }
    const { items, setItem } = useContext(Context);
    let [newItem, setNewItem] = useState("");

    const createNewItem = (create) => {
        const listItems = items;
        newItem = { value: create, status: initialItem.status}
        listItems.push(newItem);
        return setItem(listItems);
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
                {items.map((item, index) => (
                    <TBody key={index} style={{ color: "#848484" }}>
                        <tr><th>{item.value}</th></tr>
                    </TBody>
                ))}
            </Table>
        </DisplayTarefas>
    )
}
