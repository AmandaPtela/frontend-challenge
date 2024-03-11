import { useContext, useState } from "react";
import { Context } from '../Context/Context';
import { DisplayFiltersBtn, DisplayFilters, Filter, FilterInput } from "../styles";

export default function Filters() {
    let [active, setActive] = useState("");
    const values = useContext(Context);
    const { items, setFiltered, setFilter, filter, setDoneTasks } = values;

    function filterItems(filterArea = 'all') {
        if (filterArea === 'done') {
            setDoneTasks(items.filter((tarefa) => tarefa.status === "Done"));
            return setFiltered(items.filter((tarefa) => tarefa.status === "Done"));
        }
        if (filterArea === 'pend') {
            return setFiltered(items.filter((tarefa) => tarefa.status === "Pending"));
        }
        if (filter.length > 2 && filterArea === 'text-filter') {
            return setFiltered(items.filter((tarefa) => tarefa.value.includes(filter)));
        }
        filterArea = 'all'
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