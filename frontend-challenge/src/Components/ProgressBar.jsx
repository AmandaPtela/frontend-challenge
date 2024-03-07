import { useContext } from "react";
import { Bar } from "../styles";
import { Context } from "../Context/Context";

export default function ProgressBar() {

    const { percentage } = useContext(Context);

    const style = {
        backgroundColor: "#5DE290",
        width: `${percentage}%`,
        height: "30px",
        margin: 0
    }
    return (
        <Bar>
            < hr style={style} />
        </Bar>
    )
}