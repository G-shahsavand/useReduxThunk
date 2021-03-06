import logo from './logo.svg';
import './App.css';
import {  useDispatch , useSelector } from 'react-redux'
import { decrement, increment } from './Redux/Slice/Slice';
import { fetchUsers } from './Redux/Slice/UsersSlice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state)=> state.Counter.value)
  const users = useSelector((state)=> state.UsersList)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <button onClick={()=> {dispatch(fetchUsers())}  }>fetch</button>
        <br/>
        <ul>
          {users.value.map(user =><li>{user.name}</li>)}
        </ul>
        <br/>
        <span>{users.status}</span>
        <br/>

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
