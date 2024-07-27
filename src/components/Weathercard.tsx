import React from 'react'
import Weathercondition from './Weathercondition'

// interface WeathercardProps {
//   icon:string;
//   alt? : string;
//   temperature:number;
//   name:string;
//   region?:string;
//   humidity:number;
//   windspeed:number;
//   text:string;
//   time:number;
// }

const Weathercard:React.FC = () => {
// const Weathercard:React.FC<WeathercardProps> = (props) => {
  // const {icon, alt, temperature, name, region, humidity, windspeed, text, time} = props;
  return (
    <div className='flex items-center flex-col p-4 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-300 shadow-md'>
      
        <Weathercondition />

        {/* <Weathercondition 
            icon={icon}
            alt={alt}
            temperature={temperature}
            name = {name}
            region = {region}
            humidity = {humidity}
            windspeed = {windspeed}
            text = {text}
            time={time}
        /> */}
    </div>
  )
}

export default Weathercard
