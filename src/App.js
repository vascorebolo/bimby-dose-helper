import React, { Component } from 'react'
import Input from './components/Input/Input'

class App extends Component {
  state = {
    base: 0,
    quantity: 0,
    value: 0,
    calc: 0,
  }

  updateBase = (event) => this.setState({base: event.target.value})

  updateQuantity = (event) => this.setState({quantity: event.target.value})

  updateValue = (event) => {
    this.setState({
      value: event.target.value,
      calc: (event.target.value * this.state.quantity) / this.state.base
    })
  }

  render() {
    return (
      <div>
        <Input label='Quantidade Base' inputProps={{type: 'number', onBlur: this.updateBase}} />

        <Input label='Quantidade Pretendida' inputProps={{type: 'number', onBlur: this.updateQuantity}} />

        <Input label='Valor a Calcular' inputProps={{type: 'number', onChange: this.updateValue}} />
        
        <div>
          <p>{ `Resultado: ${(this.state.calc).toFixed(2)}` }</p>
        </div>
      </div>
    )
  }
}

export default App
