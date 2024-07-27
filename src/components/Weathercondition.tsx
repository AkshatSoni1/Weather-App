import React from 'react'
import { useAppContext } from '../context/Context';

// interface WeatherconditionProps {
//     icon: string;
//     alt?: string;
//     temperature: number;
//     name: string;
//     region?: string;
//     humidity: number;
//     windspeed: number;
//     text:string;
//     time: number;
// }

// interface dataKeTypes {
//     icon: string;
//     temperature: number;
//     name: string;
//     region?: string;
//     humidity: number;
//     windspeed: number;
//     text:string;
//     time: number;
// }

const Weathercondition: React.FC = () => {
// const Weathercondition: React.FC<WeatherconditionProps> = (props) => {
    // const { icon, alt, temperature, name, region, humidity, windspeed, text, time } = props

    const context = useAppContext()
    const data = context?.data;
    // console.log(context?.data);

    
    let dataObj = {
        icon:data?.current?.condition?.icon,
        temperature:data?.current?.temp_c ,
        name : data?.location?.name ,
        region : data?.location?.region ,
        humidity : data?.current?.humidity ,
        windspeed : data?.current?.wind_kph ,
        text : data?.current?.condition?.text ,
        time:data?.location?.localtime, 
    }
    // console.log(data);
    // console.log(dataObj)

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className='font-thin text-xl'>{dataObj.text}</h1>
                <img 
                    className='h-28 w-28'
                    src = {dataObj.icon}
                    alt='Updates'
                />
            </div>
            <div className="text-center mb-4">
                <h1 className='text-5xl font-thin'>{dataObj.temperature}° C</h1>
                <h2 className='text-2xl font-light'>{dataObj.name}<span>{`, ${dataObj.region}`}</span></h2>
            </div>
            <div className="flex space-x-5 text-sm">
                <div className="">
                    Humidity: {dataObj.humidity}%
                </div>
                <div className="">
                    Wind speed: {dataObj.windspeed}km/h
                </div>
            </div>
            <div className="">
                <p className='font-extralight my-1 tracking-wide'>{dataObj.time}</p>
            </div>
        </>
    )
}

export default Weathercondition
