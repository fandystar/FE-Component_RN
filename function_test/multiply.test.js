import {multiply} from '../utils/helper'

describe('multiply two positive numbers', function () {
    test('multiply', function (done) {
        expect(multiply('2,3')
        ).toBe(6)
        done() 
    })
})

describe('multiply two negative numbers', function () {
    test('multiply', function (done) {
        expect(multiply('-7,-3')
        ).toBe(21)
        done() 
    })
})

describe('multiply negative and postive number', function () {
    test('multiply', function (done) {
        expect(multiply('7,-3')
        ).toBe(-21)
        done() 
    })
})