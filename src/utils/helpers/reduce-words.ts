function reduceWords(sentence: string, numberOfWords: number) {
  const wordsFromSentence = sentence.split(" ")
  let newSentence = "";
  for (let i=0; i<numberOfWords; i++) {
    newSentence = newSentence + ` ${wordsFromSentence[i]}`
  }
  return `${newSentence}...`
}

export { reduceWords }
