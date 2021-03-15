
import {fibonacci} from '../utils/helper'

describe('first n fibonacci sequence', function () {
    test('fibonacci', function (done) {
        expect(fibonacci(4)
        ).toBe('0, 1, 1, 2')
        done() 
    })
})

describe('first n fibonacci sequence', function () {
    test('fibonacci', function (done) {
        expect(fibonacci(2)
        ).toBe('0, 1')
        done() 
    })
})
