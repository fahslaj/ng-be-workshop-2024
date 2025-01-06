import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MOVIES_DATA } from './static-data';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return static data', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getMovies()).toEqual(
        MOVIES_DATA.sort((a, b) => a.popularity - b.popularity)
      );
    });

    it('flaky test', () => {
      if (Math.random() > 0.5) {
        expect(1).toBe(1);
      } else {
        expect(1).toBe(2);
      }
    });
  });
});
