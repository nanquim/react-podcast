import React from 'styled-components'
import { Container } from './style'
import PodcastCard from '../PodcastCard'
import { api } from '../../services'

const Content = ({podcasts, loading}) => {
    return(
        <Container>
            {!loading && 
            podcasts.map(podcast => <PodcastCard 
            key={podcast.id} 
            podcast={podcast} />)}
            <PodcastCard />
        </Container>
    )
}

export default Content
