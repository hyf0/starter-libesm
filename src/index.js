
/**
 * @template T
 * @typedef {object} Box
 * @property  {T} value
 */


/**
 * @template T
 * @param {T} value
 * 
 * @description Create an {@link Box} with the given value
 */
export function box(value) {
    return {
        value,
    }
}

/**
 * @template T
 * @template U
 * @param {Box<T>} self
 * @param {(value: T) => U} mapper
 * @returns {Box<U>}
 */
export function map(self, mapper) {
    return {
        value: mapper(self.value)
    }
}

