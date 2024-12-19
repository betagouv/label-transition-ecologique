import { Test, TestingModule } from '@nestjs/testing';
import { NotionBugCreatorService } from './notion-bug-creator.service';

describe('NotionBugCreatorService', () => {
  let service: NotionBugCreatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotionBugCreatorService],
    }).compile();

    service = module.get<NotionBugCreatorService>(NotionBugCreatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
