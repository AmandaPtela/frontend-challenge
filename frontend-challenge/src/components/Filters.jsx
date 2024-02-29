import { DisplayFiltersBtn, DisplayFilters, Filter, FilterInput } from "../styles";
export default function Filters() {
    return (
        <DisplayFilters>
            <DisplayFiltersBtn>
                <Filter id="done">done</Filter> {/* Se ativo, borda verde */}
                <Filter id="pend">pending</Filter>
            </DisplayFiltersBtn>
            <FilterInput type="text" placeholder="Search items" />
        </DisplayFilters>
    )
}