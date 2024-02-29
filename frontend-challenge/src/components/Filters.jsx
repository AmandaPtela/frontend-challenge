import { DisplayFilters, Filter, FilterInput } from "../styles";
export default function Filters() {
    return (
        <DisplayFilters>
            <Filter id="done">done</Filter>
            <Filter id="pend">pending</Filter>
            <FilterInput type="text" placeholder="Search items"/>
        </DisplayFilters>
    )
}