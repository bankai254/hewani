import axios from 'axios'

export const fetchLocationByIP = async () => {
  try {
    const { data } = await axios.get('http://ip-api.com/json/')
    return { city: data.city, lat: data.lat, lon: data.lon }
  } catch (error) {
    console.error('Failed to fetch location by IP:', error)
    throw error
  }
}
