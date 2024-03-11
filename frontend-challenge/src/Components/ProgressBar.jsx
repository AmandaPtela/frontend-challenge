import { useContext } from "react";
import { DisplayProgressBar } from "../styles";
import { Context } from "../Context/Context";
import { keyframes } from "styled-components";
import css from "@styled-system/css";

export default function ProgressBar() {

    const { doneTasks, items } = useContext(Context);
    let initial = 0;
    const done = doneTasks.length;
    let taskPercentage = Number(items.length === 0 ? 0 : (100 / items.length).toFixed(0));

    const setPercentage = () => {

        for (let i = 0; i <= done; i += 1) {
            if (i === 1) {
                initial = taskPercentage;
            }

            if (i > 1) {
                initial = initial + taskPercentage;
            }
        }
    }

    setPercentage()

    const increase = keyframes`
        from {
            width: ${initial - taskPercentage}% 
        }
        to {
            ${initial}%
        }
    
    `
    const style = {
        backgroundColor: "#5DE290",
        width: `${initial}%`,
        maxWidth: "100%",
        height: "30px",
        margin: 0,
        border: "none",
        transition: "1s",
        animation: css`${increase} 1.5s linear 1`
    }
    return (
        <DisplayProgressBar size={initial}>
            < hr style={style} />
        </DisplayProgressBar>
    )
}