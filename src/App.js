import React, { Component } from 'react'

class App extends Component {
  state = {
    base: 0,
    quantity: 0,
    value: 0,
    calc: 0,
  }

  updateBase(event) {
    this.setState({base: event.target.value})
  }

  updateQuantity(event) {
    this.setState({quantity: event.target.value})
  }

  updateValue(event) {
    this.setState({
      value: event.target.value,
      calc: (event.target.value * this.state.quantity) / this.state.base
    })
  }

  render() {
    return (
      <div>
        <div>
            <label>Quantidade Base</label><br />
            <input type="number" onBlur={ this.updateBase.bind(this) } />
        </div>
        <br />
        <div>
            <label>Quantidade Pretendida</label><br />
            <input type="number" onBlur={ this.updateQuantity.bind(this) }/>
        </div>
        <br />
        <div>
            <label>Valor a Calcular</label><br />
            <input type="number" onChange={ this.updateValue.bind(this) }/>
        </div>
        <br />
        <div>
          <p>{ `Resultado: ${(this.state.calc).toFixed(2)}` }</p>
        </div>
      </div>
    )
  }
}

export default App
