import { Test, TestingModule } from '@nestjs/testing';
import { ChargeController } from './charge.controller';

describe('ChargeController', () => {
  let controller: ChargeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeController],
    }).compile();

    controller = module.get<ChargeController>(ChargeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
