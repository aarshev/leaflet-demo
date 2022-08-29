import { MapContainer, TileLayer, Popup, Polyline, Marker } from 'react-leaflet';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


export const LineMap = () => {
    const lines = useSelector((state) => state.line.value);
    const navigate = useNavigate();

    console.log(lines)

    function onPolylineClick(line){
        
        navigate(`/${line}`);
    }

    return (
        <MapContainer center={[42.698334, 23.319941]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {lines.map(currLine => (
                currLine.routes.map(route => (
                    route.segments.map(currSegment => (

                        <Polyline key={currSegment.id} positions={currSegment.coordinates} eventHandlers={{ click: ()=>{onPolylineClick(currLine.line)} }}>

                        </Polyline>

                    ))
                ))
            ))}

            {lines.map(currLine => (
                currLine.routes.map(route =>(
                    route.stops.map(currStop => (
                        <Marker
                            key={currStop.id}
                            position={[currStop.location.lat, currStop.location.lon]}
                        >

                            <Popup
                                position={[currStop.location.lat, currStop.location.lon]}
                            >
                                <div>
                                    <h3>{currStop.name}</h3>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                ))
            ))}

        </MapContainer>
    )
}