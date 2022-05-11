const { expect } = require('chai');
const numPolarity = require('../numPolarity');
const sinon = require('sinon');
const rs = require('readline-sync');

describe("The function verifies the num polarity", () => {
  afterEach(() => {
    rs.questionInt.restore();
  });

  it("Verifies when number is neutral", () => {
    sinon.stub(rs, "questionInt").returns(0);
    expect(numPolarity()).to.be.equal("It's a neutral number!");
  })

  it("Verifies when number is positive", () => {
    sinon.stub(rs, "questionInt").returns(2);
    expect(numPolarity()).to.be.equal("It's a positive number!");
  })

  it("Verifies when number is negative", () => {
    sinon.stub(rs, "questionInt").returns(-10);
    expect(numPolarity()).to.be.equal("It's a negative number!");
  })

  // make tests for not to be equal negative, positive and neutral...
  it ("Verifies if the input it's different of number", () => {
    sinon.stub(rs, "questionInt").returns("I'm not a number!");
    expect(numPolarity()).to.be.equal('Please, insert a number.')
  })
});