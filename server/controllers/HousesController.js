import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .post('', this.createHouse)
        // .put('', this.editHouse)
        // .delete('', this.deleteHouse)

    }


    async getHouses(req, res, next) {
        try {
            const houses = await housesService.getHouses()
            return res.send(houses)
        } catch (error) {
            next(error)
        }


    }
    async createHouse(req, res, next) {
        try {
            const house = await housesService.createHouse(req.body)
            return res.send(house)
        } catch (error) {
            next(error)
        }


    }

}