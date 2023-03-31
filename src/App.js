import React from "react";
import './App.css';
import { useSelector , useDispatch } from "react-redux";
import { incNumber , decNumber} from "./Actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return(
    <div className="container">
        <h1>Increment / Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
            <a className="quantity_minus" title="Decrement" onClick={() => dispatch(decNumber(5))}><span>-</span></a>
            <input name="quantity" type="text" className="quantity_input" value={myState} />
            <a className="quantity_plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
        </div>
    </div>
  )
};

export default App;