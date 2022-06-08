import { dbContext } from "../db/DbContext"

class JobsService {
    async getJobs() {
        return await dbContext.Jobs.find()
    }
    async createJob(body) {
        const job = dbContext.Cars.create(body)
        return car
    }


}


export const jobsService = new JobsService()