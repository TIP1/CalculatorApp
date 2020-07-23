import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculate: ''
    };
    this.addSymb = this.addSymb.bind(this)
  }

  addSymb = symb => {
    this.setState({calculate: this.state.calculate + symb})
  }

  render(){
    return (
      <div className="container">
          <div className="wrapcalc">
          <div className="caclulator">
            <div className="lineofnum">
              <form name="form">
                <input name="numbers" type="text" readOnly value={this.state.calculate}/>
              </form>
            </div>
            <div className="square">
              <div className="clean">C</div>
              <div className="del">&larr;</div>
              <div className="equal">=</div>
              <div className="num" onClick={this.addSymb}>1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="plus">+</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="minus">-</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="mul">&times;</div>
              <div className="zero">0</div>
              <div className="divi">&divide;</div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}


