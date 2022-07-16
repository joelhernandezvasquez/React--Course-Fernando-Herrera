
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,incrementBy2} from './store/slices/counter';

function App() {
  // use selector to get access to the store 
  // use dispatch hook to dispatch actions
const {counter} =  useSelector(state => state.counter);
const dispatch = useDispatch()

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
        count is: {counter}
          </p>
          <div>
          <button type="button" onClick={() =>dispatch(increment())}>
           Increment
          </button>

          <button type="button" onClick={() =>dispatch(decrement())}>
          Decrement
          </button>

          <button type="button" onClick={() =>dispatch(incrementBy2(2))}>
          Increment by 2 </button>
        
          </div>
      
     
        
      </header>
    </div>
  )
}

export default App
