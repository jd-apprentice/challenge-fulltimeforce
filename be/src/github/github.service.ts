import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
    baseUrl: string;

    constructor(private httpService: HttpService) {
        this.baseUrl = "https://api.github.com/repos/";
    }

    getCommits(url: string): Observable<any> {
        const commitUrl = this.baseUrl + url + "/commits";
        return this.httpService.get(commitUrl).pipe(
            map((response: AxiosResponse) => {
                return response.data;
            }),
        );
    }
}
