import axios from 'axios'
import { useQuery } from 'react-query';


const fetchCases = () => axios.get('https://api.covid19api.com/summary').then(response => response.data);


export default function useCases(){
    return useQuery('cases',fetchCases)
}
