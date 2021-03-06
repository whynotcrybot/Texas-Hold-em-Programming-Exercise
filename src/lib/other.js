module.exports = {
  ruleToNum: {
    HIGH_CARD:       0,
    PAIR:            1,
    TWO_PAIR:        2,
    THREE_OF_A_KIND: 3,
    STRAIGHT:        4,
    FLUSH:           5,
    FULL_HOUSE:      6,
    FOUR_OF_A_KIND:  7,
    STRAIGHT_FLUSH:  8
  },

  numToRule: [
    'High Card',
    'Pair',
    'Two Pair',
    'Three of a Kind',
    'Straight',
    'Flush',
    'Full House',
    'Four of a Kind',
    'Straight Flush'
  ],

  faceToNum: {
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  },

  numToFace: (face) => {
    return [
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Jack',
      'Queen',
      'King',
      'Ace',
    ][face - 2]
  },

  faces: ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'],
  suits: ['S', 'D', 'H', 'C']
}
