import {prime,isPrime} from '../utils/helper'

// describe('first n prime numbers', function () {
//     test('prime', function (done) {
//         expect(prime(4)
//         ).toBe('2, 3, 5, 7')
//         done() 
//     })
// })

// describe('first n prime numbers', function () {
//     test('prime', function (done) {
//         let n = prime(2).reduce((a,b)=>a+b)
//         expect(n).toBe(5)
//         done() 
//     })
// })

describe('check whetsher a number is prime or not', function () {
    test('isPrime', function (done) {
        expect(isPrime(8)
        ).toBe(false)
        done() 
    })
})

describe('check whetsher a number is prime or not', function () {
    test('isPrime', function (done) {
        expect(isPrime(5)
        ).toBe(true)
        done() 
    })
})
