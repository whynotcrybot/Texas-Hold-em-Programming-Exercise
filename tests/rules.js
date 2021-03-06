const { expect } = require('chai')

const { ruleToNum } = require('../src/lib/other')
const {
  HIGH_CARD,
  PAIR,
  TWO_PAIR,
  THREE_OF_A_KIND,
  STRAIGHT,
  FLUSH,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  STRAIGHT_FLUSH,
} = ruleToNum

const { count } = require('../src/lib/process')
const rules = require('../src/lib/rules')

describe('Rules (card combinations)', () => {
  describe('Straight Flush', () => {
    it('should find 5 consecutive cards of the same suit', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 7, suit: 'H'},
        { face: 6, suit: 'H'},
        { face: 5, suit: 'H'},
        { face: 4, suit: 'H'},
      ]

      const expected = {
        rule: STRAIGHT_FLUSH,
        combo: [8],
        kickers: []
      }

      expect(rules[0](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should return false if there is no 5 consecutive cards', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 7, suit: 'C'},
        { face: 6, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 3, suit: 'S'},
      ]

      const expected = false

      expect(rules[0](cards, count(cards))).to.be.equal(expected)
    })

    it('should return false if there are < 5 different faces of cards', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 6, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 5, suit: 'S'}
      ]

      const expected = false

      expect(rules[0](cards, count(cards))).to.be.equal(expected)
    })
  })

  describe('Four of a Kind', () => {
    it('should find 4 cards of the same kind', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 8, suit: 'S'},
        { face: 8, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = {
        rule: FOUR_OF_A_KIND,
        combo: [8],
        kickers: [2]
      }

      expect(rules[1](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should return false if there is no 4 cards of the same kind', () => {
      const cards = [
        { face: 9, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 7, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = false

      expect(rules[1](cards, count(cards))).to.be.equal(expected)
    })
  })

  describe('Full House', () => {
    it('should find a pair and 3 of a kind amongst cards', () => {
      const cards = [
        { face: 9, suit: 'H'},
        { face: 9, suit: 'C'},
        { face: 5, suit: 'S'},
        { face: 5, suit: 'H'},
        { face: 5, suit: 'D'},
      ]

      const expected = {
        rule: FULL_HOUSE,
        combo: [5, 9],
        kickers: []
      }

      expect(rules[2](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should return false if there is no pair', () => {
      const cards = [
        { face: 9, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 5, suit: 'S'},
        { face: 5, suit: 'H'},
        { face: 5, suit: 'D'},
      ]

      const expected = false

      expect(rules[2](cards, count(cards))).to.be.equal(expected)
    })

    it('should return false if there is no 3 cards of the same kind', () => {
      const cards = [
        { face: 9, suit: 'H'},
        { face: 9, suit: 'C'},
        { face: 5, suit: 'S'},
        { face: 4, suit: 'H'},
        { face: 3, suit: 'D'},
      ]

      const expected = false

      expect(rules[2](cards, count(cards))).to.be.equal(expected)
    })
  })

  describe('Flush', () => {
    it('should find 5 cards of the same suit', () => {
      const cards = [
        { face: 9, suit: 'H'},
        { face: 8, suit: 'H'},
        { face: 6, suit: 'H'},
        { face: 3, suit: 'H'},
        { face: 2, suit: 'H'},
      ]

      const expected = {
        rule: FLUSH,
        combo: [9],
        kickers: [8, 6, 3, 2]
      }

      expect(rules[3](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should return false if there is no 5 cards of the same suit', () => {
      const cards = [
        { face: 9, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 7, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = false

      expect(rules[3](cards, count(cards))).to.be.equal(expected)
    })
  })

  describe('Straight', () => {
    it('should find 5 consecutive cards (different suits)', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 7, suit: 'C'},
        { face: 6, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 4, suit: 'S'},
      ]

      const expected = {
        rule: STRAIGHT,
        combo: [8],
        kickers: []
      }

      expect(rules[4](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should return false if there is no 5 consecutive cards', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 7, suit: 'C'},
        { face: 6, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 3, suit: 'S'},
      ]

      const expected = false

      expect(rules[4](cards, count(cards))).to.be.equal(expected)
    })

    it('should return false if there are < 5 different faces of cards', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 6, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 5, suit: 'S'}
      ]

      const expected = false

      expect(rules[4](cards, count(cards))).to.be.equal(expected)
    })
  })

  describe('Three of a Kind', () => {
    it('should find 3 cards of a single kind', () => {
      const cards = [
        { face: 8, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 8, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = {
        rule: THREE_OF_A_KIND,
        combo: [8],
        kickers: [5, 2]
      }

      expect(rules[5](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should return false if there is no 3 cards of the same kind', () => {
      const cards = [
        { face: 9, suit: 'H'},
        { face: 8, suit: 'C'},
        { face: 7, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = false

      expect(rules[5](cards, count(cards))).to.be.equal(expected)
    })
  })

  describe('Pair & Two Pair', () => {
    it('should find a single pair amongst cards', () => {
      const cards = [
        { face: 9, suit: 'S'},
        { face: 8, suit: 'S'},
        { face: 5, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = {
        rule: PAIR,
        combo: [5],
        kickers: [9, 8, 2]
      }

      expect(rules[6](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should find two pairs amongst cards', () => {
      const cards = [
        { face: 8, suit: 'S'},
        { face: 8, suit: 'H'},
        { face: 5, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = {
        rule: TWO_PAIR,
        combo: [8, 5],
        kickers: [2]
      }

      expect(rules[6](cards, count(cards))).to.be.deep.equal(expected)
    })

    it('should return false if there is no pair of cards', () => {
      const cards = [
        { face: 9, suit: 'S'},
        { face: 8, suit: 'S'},
        { face: 7, suit: 'S'},
        { face: 5, suit: 'C'},
        { face: 2, suit: 'S'},
      ]

      const expected = false

      expect(rules[6](cards, count(cards))).to.be.equal(expected)
    })
  })

  describe('High Card', () => {
    it('should get first card from an array of sorted cards', () => {
      const cards = [
        { face: 14, suit: 'S'},
        { face: 12, suit: 'H'},
        { face: 10, suit: 'S'},
        { face: 8, suit: 'C'},
        { face: 6, suit: 'S'},
      ]

      const expected = {
        rule: HIGH_CARD,
        combo: [14],
        kickers: [12, 10, 8, 6]
      }

      expect(rules[7](cards)).to.be.deep.equal(expected)
    })
  })
})
