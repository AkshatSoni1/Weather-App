import React, { useContext } from 'react'
import { useAppContext } from '../context/Context'
const Counter: React.FC = () => {

    const context = useAppContext();

    return (
        // <div>
        //     <p>{context?.count}</p>
        //     <button onClick={()=>context?.setCount(context?.count+1)}>Increment</button>

        // </div>
        <div className=""></div>
    )
}

export default Counter
