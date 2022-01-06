import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'
export const fetchApi = async (url) => {
      const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'aed104e27amsh9312dfe2fc62b2cp109d76jsnf9cd4bd99642'
          }

      })

      return data

}