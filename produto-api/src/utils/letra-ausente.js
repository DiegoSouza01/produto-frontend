function getFirstMissingLetter(name) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const nameLetters = new Set(name.toLowerCase().split('').filter(char => /[a-z]/.test(char)));

  for (let letter of alphabet) {
    if (!nameLetters.has(letter)) {
      return letter;
    }
  }
  return '_'; // Se todas as letras estão presentes
}

module.exports = { getFirstMissingLetter };