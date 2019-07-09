import styled from 'styled-components'
import { theme } from '../../style'
const { headerHeight, searchHeight } = theme
const marginBottom = 30


export const Container = styled.div`
  height: calc(100vh - ${headerHeight+searchHeight+marginBottom}px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 300px;
  padding: 30px;
  flex: 1 1;
  overflow: auto;
`
