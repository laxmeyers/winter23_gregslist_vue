import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService{
    async getHouses() {
        logger.log('account',AppState.account)
        const res = await api.get('auth/api/houses')
        AppState.houses = res.data.map(h => new House(h))
    }

    async createHouse(houseData) {
        const res = await api.post('auth/api/houses', houseData)
        let house = res.data
        AppState.houses.push(new House(house))
        AppState.house = house
        return house
    }

    async getHouse(houseId) {
        logger.log(AppState.house)
        logger.log(houseId)
        AppState.house = null
        const res = await api.get('auth/api/houses/' + houseId)
        logger.log(new House(res.data))
        AppState.house = new House(res.data)
    }
}

export const housesService = new HousesService()