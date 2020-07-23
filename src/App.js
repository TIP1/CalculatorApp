import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="caclulator">
        <div className="lineofnum">
          <form name="form">
            <input name="numbers" type="text" readOnly/>
          </form>
        </div>
        <div className="clean">C</div>
        <div className="del">&larr;</div>
        <div className="plus">+</div>
        <div className="minus">-</div>
        <div className="mul">&times;</div>
        <div className="divi">&divide;</div>
        <div className="number">7</div>
        <div className="number">8</div>
        <div className="number">9</div>
        <div className="item">(</div>
        <div className="number">4</div>
        <div className="number">5</div>
        <div className="number">6</div>
        <div className="item">)</div>
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
        <div className="eq">=</div>
        <div className="zero">0</div>
        <div className="dot">.</div>
      </div>
    </div>
  );
}

export default App;
