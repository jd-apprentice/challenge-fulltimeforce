import { GithubService } from './github.service';
export declare class GithubController {
    private readonly githubService;
    constructor(githubService: GithubService);
    getCommits(url: string): Promise<import("rxjs").Observable<import("./interfaces/commits.interface").ParsedResponse[]>>;
}
