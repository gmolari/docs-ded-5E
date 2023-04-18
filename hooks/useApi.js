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

// Example using api
  // useEffect(() => {
    // (async ()=>{
    //   await api.get('races').then(response => {
    //     setRaces(response.data.results)
    //     console.log(response.data.results)
    //   })
    // })()
    // console.log(races)
  // }, [])