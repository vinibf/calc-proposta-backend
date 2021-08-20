import { Test, TestingModule } from '@nestjs/testing';
import { LoadController } from './load.controller';

describe('LoadController', () => {
  let controller: LoadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadController],
    }).compile();

    controller = module.get<LoadController>(LoadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
