const { faces, suits } = require('./other')

function validateCard (card) {
  if (
    card.length !== 2 ||
    !faces.includes(card[0]) ||
    !suits.includes(card[1]))
  {
    throw new Error(`Card ${card} is invalid`)
  }
}

function validate (array, cards, firstln) {
  for (let i = firstln ? 0 : 1; i < array.length; i++) {
    const card = array[i]

    validateCard(card)

    if (cards.includes(card)) {
      throw new Error(`Card ${card} already exists`)
    }
  }
}

module.exports = {
  validate
}