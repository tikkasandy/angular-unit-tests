import {greet} from "./greet";

describe('greet', () => {
  it('should include name in return message', function () {
    // expect(greet('Angular')).toBe('Hello Angular');
    expect(greet('Angular')).toContain('Angular');
  });
})
