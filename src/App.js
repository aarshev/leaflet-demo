
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainView } from './components/MainView';
import { SingleLineView } from './components/SingleLineView';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<MainView />} />
                <Route path='/:lineName' element={<SingleLineView />} />
            </Routes>
        </div>
    );
}

export default App;
