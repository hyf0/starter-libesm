import assert from 'assert'
import { describe, it } from 'node:test'
import { one, two } from '../src/index.js'

describe('should', () => {
  it('exported', () => {
    assert.equal(one + one, two)
  })
})