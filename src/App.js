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

  addSymb = e => {
    this.setState({calculate: this.state.calculate + e.target.innerText})
  }

  clearFunc = () => {
    this.setState({calculate: ''})
  }

  deleteFunc = () => {
    let exp = this.state.calculate
    this.setState({
      calculate: exp.slice(0, exp.length - 1)
    })
  }

  equalFunc = (state) => {
    this.setState({
      calculate: eval(this.state.calculate)
    })
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
              <div className="clean" onClick={this.clearFunc}>C</div>
              <div className="del" onClick={this.deleteFunc}>&larr;</div>
              <div className="equal" onClick={this.equalFunc}>=</div>
              <div className="num" onClick={this.addSymb}>1</div>
              <div className="num" onClick={this.addSymb}>2</div>
              <div className="num" onClick={this.addSymb}>3</div>
              <div className="plus" onClick={this.addSymb}>+</div>
              <div className="num" onClick={this.addSymb}>4</div>
              <div className="num" onClick={this.addSymb}>5</div>
              <div className="num" onClick={this.addSymb}>6</div>
              <div className="minus" onClick={this.addSymb}>-</div>
              <div className="num" onClick={this.addSymb}>7</div>
              <div className="num" onClick={this.addSymb}>8</div>
              <div className="num" onClick={this.addSymb}>9</div>
              <div className="mul" onClick={this.addSymb}>*</div>
              <div className="zero" onClick={this.addSymb}>0</div>
              <div className="num" onClick={this.addSymb}>.</div>
              <div className="divi" onClick={this.addSymb}>/</div>
              <div className="num bracket1" onClick={this.addSymb}>(</div>
              <div className="num bracket2" onClick={this.addSymb}>)</div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}


