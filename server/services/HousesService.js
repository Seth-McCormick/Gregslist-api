import { dbContext } from "../db/DbContext"

class HousesService {
    async getHouses() {
        return await dbContext.Houses.find()
    }
    async createHouse(body) {
        const house = await dbContext.Houses.create(body)
        return house
    }

}

export const housesService = new HousesService()