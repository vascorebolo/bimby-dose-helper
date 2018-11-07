import React, { Component } from 'react'
import Input from './components/Input/Input'
import Result from './components/Result/Result'
import styled from 'styled-components'
import bimbyLogo from './assets/images/bimby.jpg'

class App extends Component {
  state = {
    base: 0,
    quantity: 0,
    value: 0,
    calc: '0',
  }

  updateBase = (event) => this.setState({base: event.target.value})

  updateQuantity = (event) => this.setState({quantity: event.target.value})

  updateValue = (event) => {
    this.setState({
      value: event.target.value,
      calc: ((event.target.value * this.state.quantity) / this.state.base).toFixed(2)
    })
  }

  render() {
    return (
      <AppWrapper>
        <div style={{textAlign: 'center'}}>
          <img src={bimbyLogo} alt='bimby-logo' />
          <ColumnsDiv>
            <Input label='Quantidade Base' inputProps={{type: 'number', onBlur: this.updateBase}} />
            <Input label='Quantidade Pretendida' inputProps={{type: 'number', onBlur: this.updateQuantity}} />
          </ColumnsDiv>

          <ColumnsDiv>
            <Input label='Valor a Calcular' inputProps={{type: 'number', onChange: this.updateValue}} />
            <Result result={this.state.calc} />
          </ColumnsDiv>
        </div>
      </AppWrapper>
    )
  }
}

const AppWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ColumnsDiv = styled.div`
  align-items: center;
  display: flex;
  padding: 20px;

  > * {
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export default App
