import { Test, TestingModule } from '@nestjs/testing';
import { LearnContController } from './learn-cont.controller';

describe('LearnContController', () => {
  let controller: LearnContController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnContController],
    }).compile();

    controller = module.get<LearnContController>(LearnContController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
