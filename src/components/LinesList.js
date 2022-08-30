import { useSelector } from "react-redux";
import { LineItem } from "./LineItem";


export const LineList = () => {
    const lines = useSelector((state) => state.line.value);

    console.log(lines)
    return (
        <div className="tableDivLine">
            <table className="tableLine">
                <thead>
                    <tr>
                        <th>Line Name</th>
                        <th>Route 1</th>
                        <th>Route 2</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lines.length > 0
                            ? lines.map(line =>
                                <LineItem
                                    key={line.line} {...line}
                                />
                            )
                            : <tr colspan="4">No lines yet</tr>

                    }
                </tbody>
            </table>
        </div>
    )
}