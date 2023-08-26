import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubResponse, ParsedResponse } from './interfaces/commits.interface';

@Injectable()
export class GithubService {
    baseUrl: string;

    constructor(private httpService: HttpService) {
        this.baseUrl = "https://api.github.com/repos/";
    }

    public executeUseCase(repository: string): Observable<ParsedResponse[]> {
        return this.getCommits(repository).pipe(
            map(commits => commits.map(commit => ({
                commit: {
                    author: commit.commit.author,
                    message: commit.commit.message,
                },
                hash: commit.sha,
                commitUrl: commit.html_url,
                avatarUrl: commit.author.avatar_url,
            }))),
        );
    }


    private getCommits(repository: string): Observable<GithubResponse[]> {
        const commitUrl = this.baseUrl + repository + "/commits";

        try {
            return this.httpService.get(commitUrl).pipe(
                map((response: AxiosResponse) => {
                    return response.data;
                }),
            );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }
}
