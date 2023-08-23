import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class GithubService {
    private httpService;
    baseUrl: string;
    constructor(httpService: HttpService);
    getCommits(url: string): Observable<any>;
}
