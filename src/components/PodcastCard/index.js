import React from 'react'
import { Container, CardImage, CardInfo, CardTitle, CardAction, CardTotalEpisodes, link} from './style'
import { LibraryMusic, Link as LinkIcon } from '@material-ui/icons'

    const PodcastCard = ({podcast}) => {
    const { title, image, total_episodes: totalEpisodes, website } = podcast
    return (
        <Container>
            <CardImage urlImg={image}>
              <CardInfo>
                  <CardTitle>{title}</CardTitle>
                  <CardAction>
                      <CardTotalEpisodes>
                          <LibraryMusic />
                          <span>{totalEpisodes}</span>
                      </CardTotalEpisodes>
                      <Link target='_blank' href={website}><LinkIcon /></Link>
                  </CardAction>
              </CardInfo>
            </CardImage>
        </Container>
    )
}