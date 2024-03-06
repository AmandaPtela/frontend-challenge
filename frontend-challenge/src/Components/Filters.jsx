import { useContext, useState } from "react";
import { Context } from '../Context/Context';
import { DisplayFiltersBtn, DisplayFilters, Filter, FilterInput } from "../styles";

export default function Filters() {
    /* IMPLEMENTAR LÓGICA */
    let [active, setActive] = useState("");
    const values = useContext(Context)
    console.log(values);
    return (
        <DisplayFilters>
            <DisplayFiltersBtn>
                <Filter
                    name="done"
                    onClick={(e) => {
                        setActive("done-active")
                        values.setFilter(e.target.name)
                    }}
                    className={active === "done-active" ? active : "done"}
                >
                    done
                </Filter> {/* Se ativo, borda verde */}
                <Filter
                    name="pending"
                    onClick={(e) => {
                        setActive("pend-active")
                        values.setFilter(e.target.name)
                    }}
                    className={active === "pend-active" ? active : "pend"}
                >
                    pending
                </Filter>
            </DisplayFiltersBtn>
            <FilterInput
                type="text"
                name="text-filter"
                onChange={({target}) => values.setFilter(target.value)}
                placeholder="Search items"
            />
        </DisplayFilters>
    )
}