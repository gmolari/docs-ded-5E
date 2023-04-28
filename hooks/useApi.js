import api from "../utils/api";

export default function useApi(){

    async function getApi(path){
        const infos = await api.get(path)
        return infos.data
    }

    async function getRaces(){
      const infos = await api.get('races')
      return infos.data
    }
    
    async function getSpells(){
      const infos = await api.get('spells')
      return infos.data
    }

    async function getEquipCategories(){
      const infos = await api.get('equipment-categories')
      return infos.data
    }

    async function getMonsters(){
      const infos = await api.get('monsters')
      return infos.data
    }

    async function getMagicItems(){
      const infos = await api.get('magic-items')
      return infos.data
    }

    return {
        getApi,  
        getEquipCategories,
        getMonsters,
        getRaces,
        getSpells,
        getMagicItems
    }
}