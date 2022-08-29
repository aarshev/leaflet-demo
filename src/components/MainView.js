import { DropdownTransport } from "./DropdownTransport"
import { LineMap } from "./LineMap"
import { LineList } from "./LinesList"

export const MainView = () => {
    return (
        <>
            <DropdownTransport />
            <LineList />
            <LineMap />
        </>
    )
}