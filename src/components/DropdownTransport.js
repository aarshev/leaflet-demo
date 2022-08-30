import { useDispatch } from 'react-redux'
import { filter } from '../features/line'

export const DropdownTransport = () => {

    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(filter(e.target.value));
        console.log(e.target.value);
    }


    return (
        <div>
            <span className='dropDownSpan'>Please select a type of transportation</span>
            <select className='transportDropdown' name="transport" id="dropdownTransport" onChange={handleChange}>
                <option value="" defaultValue={true}>All</option>
                <option value="A">Bus</option>
                <option value="TM">Tram</option>
                <option value="TB">Trolleybus</option>
            </select>
        </div>
    )
}