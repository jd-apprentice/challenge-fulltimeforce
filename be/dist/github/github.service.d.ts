import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { ParsedResponse } from './interfaces/commits.interface';
export declare class GithubService {
    private httpService;
    baseUrl: string;
    constructor(httpService: HttpService);
    executeUseCase(url: string): Observable<ParsedResponse[]>;
    private getCommits;
}
