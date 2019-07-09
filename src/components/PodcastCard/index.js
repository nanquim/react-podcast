import React from 'react'
import { Container, CardImage, CardInfo, CardTitle, CardActions, CardTotalEpisodes, Link } from './style'
import { LibraryMusic, Link as LinkIcon } from '@material-ui/icons'

const PodcastCard = ({ podcast }) => {
const { title, image, total_episodes: totalEpisodes, website } = podcast
    return (
        <Container>
            <CardImage urlImg={image}>
                <CardInfo>
                    <CardTitle>{title}</CardTitle>
                    <CardActions>
                        <CardTotalEpisodes>
                            <LibraryMusic />
                            <span>{totalEpisodes}</span>
                        </CardTotalEpisodes>
                        <Link target='_blank' href={website}><LinkIcon /></Link>
                    </CardActions>
                </CardInfo>
            </CardImage>
        </Container>
    )
}

export default PodcastCard