const API_URL = 'http://localhost:5000'

export const api = {
    getPodcast: async () => {
        const data = await fetch(`${API_URL}/podcast`)
        const result = await data.json()
        return result
    }
}