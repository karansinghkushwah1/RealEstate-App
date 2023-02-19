import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '85c16205d3mshcbf3436119e81e0p164408jsn6f24f7608bba',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}