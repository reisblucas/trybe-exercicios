const { expect } = require('chai');
const numPolarity = require('../numPolarity');

describe("The function verifies the num polarity", () => {
  it("Verifies when number is neutral", () => {
    expect(numPolarity(0)).to.be.equal("It's a neutral number!");
  })

  it("Verifies when number is positive", () => {
    expect(numPolarity(2)).to.be.equal("It's a positive number!");
  })

  it("Verifies when number is negative", () => {
    expect(numPolarity(-2)).to.be.equal("It's a negative number!");
  })

  // make tests for not to be equal negative, positive and neutral...
});