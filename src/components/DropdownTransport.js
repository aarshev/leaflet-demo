import { useDispatch } from 'react-redux'
import { filter } from '../features/line'

export const DropdownTransport = () => {
    
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(filter(e.target.value));
        console.log(e.target.value);
    }


    return (
        <select name="transport" id="dropdownTransport" onChange={handleChange}>
            <option value="" defaultValue={true}>All</option>
            <option value="A">Bus</option>
            <option value="TM">Tram</option>
            <option value="TB">Trolleybus</option>
        </select>
    )
}