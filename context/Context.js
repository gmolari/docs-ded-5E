import { createContext } from "react";
import useApi from "../hooks/useApi";

const Context = createContext();

function ContextProvider({children}){

    const {getApi, getEquipment, getMonsters, getSpells, getRaces, getMagicItems} = useApi();

    return (
        <Context.Provider value={{getApi, getEquipment, getMonsters, getSpells, getRaces, getMagicItems}}>
            {children}
        </Context.Provider>
    )
}

export {
    ContextProvider,
    Context
}