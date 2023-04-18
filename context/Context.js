import { createContext } from "react";
import useApi from "../hooks/useApi";

const Context = createContext();

function ContextProvider({children}){

    const {getApi} = useApi();

    return (
        <Context.Provider value={{getApi}}>
            {children}
        </Context.Provider>
    )
}

export {
    ContextProvider,
    Context
}