import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getJobs)
            .post('', this.createJob)
        // .put('', this.editJob)
        // .delete('', this.deleteJob)
    }

    async getJobs(req, res, next) {
        try {
            const jobs = await jobsService.getJobs()
            return res.send(jobs)
        } catch (error) {
            next(error)
        }
    }

    async createJob(req, res, next) {
        try {
            const job = await jobsService.createJob(req.body)
            return res.send(job)
        } catch (error) {
            next(error)
        }


    }
}