import api from "../utils/api";

export default function useApi(){

    async function getApi(info){
        const infos = await api.get()
        return infos
    }

    return {
        getApi
    }
}