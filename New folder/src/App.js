import logo from './logo.svg';
import './App.css';
import {  useDispatch , useSelector } from 'react-redux'
import { decrement, increment } from './Redux/Slice/Slice';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state)=> state.Counter.value)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{value}</span>
        <br/>
        <button onClick={()=>{dispatch(increment())}}> increase</button>
        <br/>
        <button onClick={()=>{dispatch(decrement())}}> decrease</button>

      </header>
    </div>
  );
}

export default App;
