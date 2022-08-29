import { MapContainer, TileLayer, Popup, Polyline, Marker } from 'react-leaflet';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


export const SingleLineMap = () => {
    const { lineName } = useParams();
    let lines = useSelector((state) => state.line.value);
    const route = useSelector((state) => state.route.value);
    lines = lines.filter(item =>
        item.line === lineName
    )

    console.log(lines)

    return (
        <MapContainer center={[42.698334, 23.319941]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {lines.map(currLine => (
                currLine.routes[route]["segments"].map(currSegment => (
                    <Polyline key={currSegment.id} positions={currSegment.coordinates}>
                        <Popup>
                            <div>
                                <h4>{currLine.line}</h4>
                            </div>
                        </Popup>
                    </Polyline>
                ))
            ))}

            {lines.map(currLine => (
                currLine.routes[route]["stops"].map(currStop => (
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
            ))}

        </MapContainer>
    )
}