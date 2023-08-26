import { GithubService } from './github.service';
import { HttpService } from '@nestjs/axios';
import { ErrorType, ParsedResponse } from './interfaces/commits.interface';

describe('GithubService', () => {
  let service: GithubService;
  let httpService: HttpService;

  beforeEach(async () => {
    httpService = new HttpService();
    service = new GithubService(httpService);
  })

  it('should call method executeCase - Success', () => {
    const repository = "jd-apprentice/challenge-fulltimeforce";
    const result = service.executeUseCase(repository);

    expect(result).toBeDefined();
    expect(result).toMatchObject<ParsedResponse>
  })

  it("should call method executeCase - Throw exception", () => {
    const repository = "";
    const result = service.executeUseCase(repository);

    expect(result).toBeDefined();
    expect(result).toMatchObject<ErrorType>
  });
});
