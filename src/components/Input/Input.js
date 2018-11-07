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
    flex: 1;

    label {
      color: #248c2f;
      font-weight: 500;
      margin-bottom: 10px;
    }

    input {
      border: 1px solid #888;
      border-radius: 5px;
      color: #444;
      font-size: 25px;
      height: 35px;
      line-height: 100%;
      padding: 5px 8px;
    }
`

export default Input
