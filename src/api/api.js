import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const search = async ( url, setData ) => {
    const { data } = await api.get(url)
    setData( data )
}