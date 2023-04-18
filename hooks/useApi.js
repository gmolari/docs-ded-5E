import api from "../utils/api";

export default function useApi(){

    async function getApi(path){
        const infos = await api.get(path)
        return infos.data
    }

    return {
        getApi
    }
}