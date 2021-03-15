
import {sum} from '../utils/helper'

describe('sum two numbers', function () {
    test('sum', function (done) {
        expect(sum('2,3')
        ).toBe(5)
        done() 
    })
})

describe('sum negative and positive number result postive number', function () {
    test('sum', function (done) {
        expect(sum('-2,3')
        ).toBe(1)
        done() 
    })
})

describe('sum negative and positive number result negative number', function () {
    test('sum', function (done) {
        expect(sum('-7,3')
        ).toBe(-4)
        done() 
    })
})

describe('sum two negative number', function () {
    test('sum', function (done) {
        expect(sum('-2,-3')
        ).toBe(-5)
        done() 
    })
})
