import { useContext } from "react";
import { DisplayProgressBar } from "../styles";
import { Context } from "../Context/Context";
import { keyframes } from "styled-components";
import css from "@styled-system/css";

export default function ProgressBar() {

    const { percentage } = useContext(Context);

    const increase = keyframes`
        from {
            width: ${percentage - 10}% 
        }
        to {
            ${percentage}%
        }
    
    `
    const style = {
        backgroundColor: "#5DE290",
        width: `${percentage}%`,
        maxWidth: "100%",
        height: "30px",
        margin: 0,
        border: "none",
        transition: "1.5s",
        animation: css`${increase} 1.5s linear 1`
    }
    return (
        <DisplayProgressBar>
            < hr style={style} />
        </DisplayProgressBar>
    )
}