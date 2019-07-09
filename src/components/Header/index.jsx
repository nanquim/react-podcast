import React from 'react'
import { Container, Title } from './style'
import { Mic } from '@material-ui/icons'

const Header = () => {
    return(
     <Container>
         <Title id="header-title">
               targetTrust 
            <Mic />
         </Title>
     </Container>
    )
}

export default Header