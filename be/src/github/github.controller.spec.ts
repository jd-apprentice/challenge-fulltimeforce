import { GithubController } from './github.controller';
import { GithubService } from './github.service';
import { HttpService } from '@nestjs/axios';

describe('GithubController', () => {
  let controller: GithubController;
  let service: GithubService;
  let httpService: HttpService;

  beforeEach(async () => {
    service = new GithubService(httpService);
    controller = new GithubController(service);
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});