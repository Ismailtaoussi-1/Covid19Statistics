import axios from 'axios'
import { useQuery } from 'react-query';


const fetchCountryCases = (country: string) => axios.get(`https://api.covid19api.com/live/country/${country}`).then(response => response.data);

export default function useCountryUser(country: string){
    return useQuery(['cases',fetchCountryCases],() => fetchCountryCases(country));
}
