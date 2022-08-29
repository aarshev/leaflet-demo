import { useDispatch } from 'react-redux'
import { changeValue } from '../features/route'
import { returnDefault } from '../features/line';
import { useNavigate } from 'react-router-dom';

export const DropDownRoute = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleChange(e) {
        dispatch(changeValue(e.target.value));
        console.log(e.target.value);
    }

    function btnOnClickHandler() {
        dispatch(returnDefault());
        navigate('/')
    }


    return (
        <>
            <select name="route" id="dropdownRoute" onChange={handleChange}>
                <option value="0" defaultValue={true}>Route 1</option>
                <option value="1">Route 2</option>
            </select>
            <button onClick={btnOnClickHandler}>
                Go to main view
            </button>
        </>
    )
}