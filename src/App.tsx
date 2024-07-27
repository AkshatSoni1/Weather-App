// import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Weathercard from './components/Weathercard';
import { useAppContext } from './context/Context';

function App() {
  // const [text, setText] = useState<string>('')
  // const [data, setData] = useState<any>()

  const context = useAppContext()

  // const data = useFetch(text);
  // console.log(text)
  // console.log(context?.data)
  return (
    <div className="App">
        <main className='h-[91vh] flex justify-center items-center bg-gray-200'>
          <div className="h-full min-w-fit space-y-10 flex items-center justify-center flex-col">
            {/* search bar */}
            <Searchbar 
              // text = {text}
              // setText = {setText}
              // placeholder="Search place.."
              // data={data}
              // setData={setData}
            />

            {/* card */}
            {(context?.data) && <Weathercard />}
            {/* {(context?.data) && <Weathercard 
              // icon={data?.current?.condition?.icon}
              // alt={'Image'}
              // temperature={data?.current?.temp_c}
              // name = {data?.location?.name}
              // region = {data?.location?.region}
              // humidity = {data?.current?.humidity}
              // windspeed = {data?.current?.wind_kph}
              // text = {data?.current?.condition?.text}
              // time={data?.location?.localtime}
            />} */}


            {/* <div className="">
              <Counter />
            </div> */}
          </div>
        </main>
    </div>
  );
}

export default App;
