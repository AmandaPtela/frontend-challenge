import { useContext, useState } from "react";
import { Context } from '../Context/Context';
import { DisplayFiltersBtn, DisplayFilters, Filter, FilterInput } from "../styles";

export default function Filters() {
    let [active, setActive] = useState("");
    const values = useContext(Context);
    const { items, setFiltered, setFilter, setDoneTasks } = values;

    function filterItems(filter) {
        if (filter === 'done') {
            setDoneTasks(items.filter((tarefa) => tarefa.status === "Done"));
            return setFiltered(items.filter((tarefa) => tarefa.status === "Done"));
        }
        if (filter === 'pend') {
            return setFiltered(items.filter((tarefa) => tarefa.status === "Pending"));
        }
        return setFiltered(items);
    }

    return (
        <DisplayFilters>
            <DisplayFiltersBtn>
                <Filter
                    name="done"
                    onClick={({ target }) => {
                        setActive("done-active");
                        setFilter(target.name);
                        filterItems(target.name);
                    }}
                    className={active === "done-active" ? active : "done"}
                >
                    Done
                </Filter>
                <Filter
                    name="pend"
                    onClick={({ target }) => {
                        setActive("pend-active");
                        setFilter(target.name);
                        filterItems(target.name);
                    }}
                    className={active === "pend-active" ? active : "pend"}
                >
                    Pending
                </Filter>
                <Filter
                    name="all"
                    onClick={({ target }) => {
                        setActive("all-active");
                        setFilter(target.name);
                        filterItems(target.name);
                    }}
                    className={active === "all-active" ? active : "pend"}
                >
                    All
                </Filter>
            </DisplayFiltersBtn>
            <FilterInput
                type="text"
                name="text-filter"
                onChange={({ target }) => {
                    filterItems(target.name);
                    setFilter(target.value)
                }}
                placeholder="Search items"
            />
        </DisplayFilters>
    )
}