import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleStop } from "./SingleStop";



export const SingleLineList = () => {
    const { lineName } = useParams();
    let lines = useSelector((state) => state.line.value);
    const route = useSelector((state) => state.route.value);
    console.log(route);
    lines = lines.filter(item =>
        item.line === lineName
    )



   

    return (
        <div className="tableDivLine">
            
            <table className="tableStop">
                <thead>
                    <tr>
                        <th>Line: {lines[0].line}</th>
                    </tr>
                    <tr>
                        <th>Route {Number(route) + 1} stops</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lines.length > 0
                            ? lines[0].routes[route]["stops"].map(stop =>
                                <SingleStop
                                    key={stop.id} {...stop}
                                />
                            )
                            : <tr colspan="3">No stops</tr>

                    }
                </tbody>
            </table>
        </div>
    )
}