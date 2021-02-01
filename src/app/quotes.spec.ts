import { Quote } from './quotes';

newFunction();
function newFunction() {
  describe('Quote', () => {
    it('should create an instance', () => {
      expect(new Quote()).toBeTruthy();
    });
  });
}

