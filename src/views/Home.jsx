import React, { useEffect } from 'react'
import { Search } from '../components/Search'
import { Content } from '../components/Content'
import { PodcastCard } from '../components/PodcastCard'
const [ loading, setLoading ] = useState(true)
const [ podcasts, setPodcasts ] = useState([])
const [ filterPodcasts, podcastFilter ] = useState([])

function handlerFilterPodcast(text){
  const filtered = !!text
  ? podcasts
  .filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
  : podcasts
  podcastFilter(filtered)
}

useEffect(() => {
    async function loadPodcast(){
        const podcasts = await api.getPodcast()
        setPodcasts(podcasts)
        setLoading(false)
    }
    loadPoadcast()
}, [])

useEffect(() => {
    handlerFilterPodcast()
}, [podcasts])

const Home = () => {
 return(
     <div>
         <Search onSubmit={handlerFilterPodcast} />
         <Content podcasts={filterPodcasts} loading={loading} />
     </div>
 )
}

export default Home