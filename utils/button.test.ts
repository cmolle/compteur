import { expect } from '@jest/globals'
import { increase } from './button'

describe('increase', () => {
  it('should return x + 1 ', () => {
    expect(increase(2)).toBe(3)
    expect(increase(-6)).toBe(-5)
    expect(increase(456123)).toBe(456124)
  })
})