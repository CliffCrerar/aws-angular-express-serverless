import { HandleUndefinedPipe } from './handle-undefined.pipe';

describe('HandleUndefinedPipe', () => {
  it('create an instance', () => {
    const pipe = new HandleUndefinedPipe();
    expect(pipe).toBeTruthy();
  });
});
