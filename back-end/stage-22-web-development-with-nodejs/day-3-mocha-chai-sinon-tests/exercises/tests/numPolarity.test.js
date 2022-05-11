const { expect } = require('chai');
const numPolarity = require('../numPolarity');
const sinon = require('sinon');
const rs = require('readline-sync');

describe("The function verifies the num polarity", () => {
  afterEach(() => {
    rs.questionInt.restore();
  });

  describe("Test for numbers", () => {
    it("Verifies when number is neutral", () => {
      const input = 0;
      sinon.stub(rs, "questionInt").returns(input);
      expect(numPolarity()).to.has.property(input);
      expect(numPolarity()[input]).to.be.equal("It's a neutral number!");
    });
  
    it("Verifies when number is positive", () => {
      const input = 2;
      sinon.stub(rs, "questionInt").returns(input);
      expect(numPolarity()).to.has.property(input);
      expect(numPolarity()[input]).to.be.equal("It's a positive number!");
    });
  
    it("Verifies when number is negative", () => {
      const input = -10;
      sinon.stub(rs, "questionInt").returns(input);
      expect(numPolarity()).to.has.property(input);
      expect(numPolarity()[input]).to.be.equal("It's a negative number!");
    });
  });

  // make tests for not to be equal negative, positive and neutral...
  describe("Test for non numbers", () => {
    it ("Verifies if the input it's different of number", () => {
      const input = "I'm not a number!";
      sinon.stub(rs, "questionInt").returns(input);
      expect(numPolarity()).to.has.property(input);
      expect(numPolarity()[input]).to.be.equal('Please, insert a number.');
    });
  });
  
});