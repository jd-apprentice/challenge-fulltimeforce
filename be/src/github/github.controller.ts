import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private readonly githubService: GithubService) { }

    @Get('commits')
    async getCommits(@Query('url') url: string) {
        return this.githubService.executeUseCase(url);
    }
}
