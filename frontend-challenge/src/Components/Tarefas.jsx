import { Table, DisplayTarefas, InputAdd, TBody } from "../styles";

export default function Tarefas() {
    return (
        <DisplayTarefas>
            <div id="newItemArea" style={{ display: "flex", alignItems: "center" }}>
                <InputAdd type="text" placeholder="Add new item" />
                <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "47px", height: "50px", border: "none", backgroundColor: "#4DA6B3" }}>
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
                <TBody style={{ color: "#848484" }}>
                    <tr>tarefa1</tr>
                </TBody>
            </Table>
        </DisplayTarefas>
    )
}
