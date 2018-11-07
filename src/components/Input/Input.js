import React from 'react'
import { string, object } from 'prop-types'
import styled from 'styled-components'

const Input = ({ label, inputProps }) => {
  return (
    <InputWrapper>
      <label>{ label }</label>
      <input { ...inputProps } />
    </InputWrapper>
  )
}

Input.propTypes = {
  label: string.isRequired,
  inputProps: object,
}

Input.defaultPropTypes = {
  inputProps: {},
}

Input.displayName = 'Input'

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 20px;

    label {
      margin-bottom: 10px;
    }

    input {
      font-size: 25px;
      height: 40px;
      line-height: 38px;
    }
`

export default Input
