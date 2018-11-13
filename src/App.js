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
    const calc = ((Math.round((event.target.value * this.state.quantity) / this.state.base)) * 2) / 2

    this.setState({
      value: event.target.value,
      calc: isNaN(calc) ? 0 : calc
    })
  }

  render() {
    return (
      <AppWrapper>
        <div>
          <CenterImage>
            <img src={bimbyLogo} alt='bimby-logo' />
          </CenterImage>

          <ColumnsDiv>
            <Input
              label='Quantidade Base (g)'
              inputProps={{type: 'number', onBlur: this.updateBase, placeholder: 'ex: 500'}}
            />

            <Input
              label='Quantidade Pretendida (g)'
              inputProps={{type: 'number', onBlur: this.updateQuantity, placeholder: 'ex: 200'}}
            />
          </ColumnsDiv>

          <ColumnsDiv>
            <Input
              label='Valor a Calcular (g)'
              inputProps={{type: 'number', onChange: this.updateValue, placeholder: 'ex: 100'}}
            />
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

const CenterImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const ColumnsDiv = styled.div`
  align-items: center;
  display: flex;
  padding: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 20px;
  }

  > * {
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 800px) {
      width: 100%;
      padding: 10px;
    }
  }
`

export default App
