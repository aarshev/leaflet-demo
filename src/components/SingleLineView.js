import { SingleLineMap } from "./SingleLineMap"
import { SingleLineList } from "./SingleLineList"
import { DropDownRoute } from "./DropDownRoute"

export const SingleLineView = () => {

    return (
        <>
            <DropDownRoute />
            <div className="mainView">
                <SingleLineList />
                <SingleLineMap />
            </div>
        </>
    )
}