import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async (name: string) => {
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${name}`);
    // console.log(res)
    return res.data;
};

function useFetchUpdates(name: string) {
    return useQuery({
        queryKey:['weather'],
        queryFn:() => fetchData(name),
        enabled:!!name
    })
}


export default useFetchUpdates;
