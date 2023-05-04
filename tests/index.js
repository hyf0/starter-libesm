import assert from 'assert'
import { describe, it } from 'node:test'
import { box, map } from 'starter-libesm'

describe('should', () => {
  it('exported', () => {
    assert.equal(map(box(1), v => String(v)).value, '1')
  })
})