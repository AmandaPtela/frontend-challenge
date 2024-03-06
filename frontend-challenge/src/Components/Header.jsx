import { Calendar, DisplayDate, DisplayDateYear, DisplayDateMonth, DisplayDay, DateInfo, DisplayWeekDay } from "../styles";

export default function Header() {
    const now = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" }).split("/");
    const day = now[0];
    const year = now[2];
    const weekDay = new Date().getDay();

    let monthNumber = "";
    
    if (now[1].startsWith("0")) {
        monthNumber = now[1].split("")[1] - 1;
    } else {
        monthNumber = now[1] - 1;
    }
    
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <Calendar>
            <DisplayDate>
                <DisplayDay>{day}</DisplayDay>
                <DateInfo>
                    <DisplayDateMonth>{months[monthNumber]}</DisplayDateMonth>
                    <DisplayDateYear>{year}</DisplayDateYear>
                </DateInfo>
            </DisplayDate>
            <DisplayWeekDay>
                {week[weekDay]}
            </DisplayWeekDay>
        </Calendar>
    )
}