import React from 'react'
import { CiSearch } from "react-icons/ci";
import useFetchUpdates from '../hooks/useFetchUpdates';
import { useAppContext } from '../context/Context';

// interface responseType {
//     icon: string;
//     temp_c: number;
//     name: string;
//     region?: string;
//     humidity: number;
//     wind_kph: number;
//     text:string;
//     localtime: number;
// }

// interface SearchbarProps {
//     text:string;
//     setText : (str:string) => void;
    // placeholder:string;
    // data : responseType;
    // setData: (data:responseType) => void;
// }

const Searchbar:React.FC = () => {
// const Searchbar:React.FC<SearchbarProps> = (props) => {
// const Searchbar:React.FC<SearchbarProps> = (props) => {

    // const {text, setText, placeholder} = props;

    const context = useAppContext()
    
    const {data:updates, refetch} = useFetchUpdates(context?.text || '')

    // context?.setData(updates)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        context?.setText(e.target.value)
    }
    
    const handleClick = async () => {
        try {
            if(context?.text !== ""){
                const {data:newUpdates} = await refetch();
                // console.log(newUpdates)
                // console.log(context?.data)
                context?.setData(newUpdates)
                // console.log(context?.data)
            }
            context?.setText('')
        } catch (error) {
            alert(error)
        }
        // console.log(response)
    }

  return (
    <div className="flex items-center space-x-5">
        <div className='w-64 md:w-96'>
        <input 
            type='text'
            className='p-2 rounded-lg border border-gray-200 focus:outline-none w-full shadow-sm text-gray-800'
            placeholder="Search Place"
            value={context?.text}
            onChange={handleChange}
        />
        </div>
        <div>
            <button onClick={handleClick} className='p-2 rounded-lg border border-gray-200 bg-gray-50 shadow-sm text-gray-600'>
                <CiSearch 
                    className='text-2xl'
                />
            </button>
        </div>
    </div>
  )
}

export default Searchbar
