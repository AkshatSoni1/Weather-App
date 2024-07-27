import React, { createContext, useState, useContext } from "react";

interface AppProviderProps {
    children : React.ReactNode;
}

interface conditionTypes {
    text:string;
    icon:string;
}

interface currentTypes {
    condition: conditionTypes;
    temp_c:number;
    wind_kph:number;
    humidity:number;
}

interface locationTypes {
    name:string;
    region:string;
    localtime:string;
}

interface responseType {
    location: locationTypes;
    current:currentTypes;
}

interface AppContextValue {
    // count:number;
    // setCount: (num:number) => void;
    data:responseType | null;
    setData:(data:responseType) => void;
    text:string;
    setText:(text:string) => void;
}

const AppContext = createContext<AppContextValue | null>(null)


export const AppProvider:React.FC<AppProviderProps> = (props) => {
    // const [count, setCount] = useState<number>(0)
    const [data, setData] = useState<responseType | null>(null)
    const [text, setText] = useState<string>('');

    return (
        // <AppContext.Provider value={{ count, setCount, data, setData }}>
        <AppContext.Provider value={{ data, setData, text, setText }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export default AppContext;
