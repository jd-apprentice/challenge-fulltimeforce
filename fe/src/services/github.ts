import axios from "axios";
import { config } from "../config/config";

export class GithubService {
    constructor() { }

    static async getCommits(url: string): Promise<CommitHistory[]> {
        const response = await axios.get(`${config.baseUrl}/github/commits?url=${url}`);
        return response.data;
    }
}