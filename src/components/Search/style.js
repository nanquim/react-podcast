import styled from 'styled-components'
import { theme } from '../../style'

export const Container = styled.div`
  height: ${theme.searchHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 0 0;
` 
const buttonWidth = 80

export const InputContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  max-width: 500px;
  background-color: ${theme.auxOne};

  form {
    display: flex;
    width: 100%
  }
  
  input {
    flex-grow: 1;
    font-size: 2rem;
    line-height: 2.4rem;
    border-style: none;
    outline: none;
    padding: 20px;
    color: ${theme.secundary};
    background-color: ${theme.auxOne};
    background: transparent;
    width: calc(100% - ${buttonWidth}px);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    height: 80px;
    width: ${buttonWidth}px;
    cursor: pointer;
    background-color: ${theme.auxTwo};
    color: ${theme.secundary};
    outline: none;
  }
`
