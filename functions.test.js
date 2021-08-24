const { returnTwo,greetings, add, multiply, subtract, divide  } = require("./functions")

test('Should return 2', () =>{
    expect(returnTwo()).toEqual(2)
})

test('Should return a greeting for the input name', () => {
    expect(greetings('James')).toEqual("Hello, James.")
    expect(greetings('Jill')).toEqual("Hello, Jill.")
})


describe("Math functions", () => { 
    
test('This should return the sum of the two numbers', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})

test('This should return the product of the two numbers', () => {
    expect(multiply(3,3)).toEqual(9)
    expect(multiply(5,7)).toEqual(35)
})
test('This should return the quotient of the two numbers', () => {
    expect(divide(10,5)).toEqual(2)
    expect(divide(9,3)).toEqual(3)
})
test('This should return the difference of the two numbers', () => {
    expect(subtract(4,1)).toEqual(3)
    expect(subtract(10,3)).toEqual(7)
})

})