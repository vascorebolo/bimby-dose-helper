import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const Result = ({ result }) => {
  return (
    <StyledResult>
      { `Resultado: ${result}` }
    </StyledResult>
  )
}

Result.propTypes = {
  result: string,
}

Result.defaultPropTypes = {
  result: '0'
}

const StyledResult = styled.p`
  align-self: flex-end;
  color: #248c2f;
  font-size: 30px;
  height: auto;
  margin: 0;
  padding: 0;
  text-align: right;
`

Result.displayName = 'Result'

export default Result
