import { useNavigate } from 'react-router-dom';

export const LineItem = (
    line,
    routes
) => {
    const navigate = useNavigate();
    function handleClick(e){
        navigate(`/${e.target.parentElement.children[0].innerText}`);
    }

    let lineName = line.line
    let routeOneName = line.routes[0]["name"];
    let routeTwoName = line.routes[1]["name"];
    let transportType = line.routes[0]["transportType"];
    let typeOfVehicle;

    if (transportType === "A") {
        typeOfVehicle = "Bus";
    } else if (transportType === "TB") {
        typeOfVehicle = "Trolleybus";
    } else {
        typeOfVehicle = "Tram";
    }
    return (
        <tr onClick={handleClick}>
            <td>{lineName}</td>
            <td>{routeOneName}</td>
            <td>{routeTwoName}</td>
            <td>{typeOfVehicle}</td>
        </tr>
    )
}