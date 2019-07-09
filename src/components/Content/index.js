import React from 'styled-components'
import { Container } from './style'
import PodcastCard from '../PodcastCard'
import { api } from '../../services'

const Content = ({podcast, loading}) => {
    return(
        <Container>
            
            <PodcastCard />
        </Container>
    )
}