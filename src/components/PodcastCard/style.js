import styled from 'styled-components'
import { theme } from '../../style'

const { animation } = theme

export const CardImage = styled.div`
  background-image: url(${props => props.urlImg});
  height: 150px;
  width: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
`
const Centralized = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardTitle = styled(Centralized)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${theme.secundary};
  white-space: nowrap;
  overflow-x: hidden;
  width: 95%;
  text-overflow: ellipsis;
  display: inline-block;
  text-align: center;
`

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${theme.secundary};
  font-size: 11px;
`

export const CardTotalEpisodes = Centralized

export const Link = styled.a`
  color: ${theme.secundary};
  &:hover, &:visited, &:link, &:active{
    text-decoration: none;
  }
  &:hover {
    color: ${theme.auxTwo};
  }

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 180px;
  width: 180px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color:${theme.auxOne};
  border-radius: 8px;
  box-shadow: 9px 5px 4px 0px rgba(0, 0, 0, 0.9);
  animation: ${animation.slideUp} 2.5s ease;

  &:hover{
    box-shadow: 5px -3px 16px -6px rgba(255, 255, 255, 0.5);
    ${CardImage} {
      background-size: auto;
      filter: grayscale(.7);
    }
  }
`
