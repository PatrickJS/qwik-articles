export function generateRandomWord(length: number) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomParagraph(
  wordCount: number,
  minWordLength: number,
  maxWordLength: number,
) {
  let paragraph = "";
  for (let i = 0; i < wordCount; i++) {
    const wordLength =
      Math.floor(Math.random() * (maxWordLength - minWordLength + 1)) +
      minWordLength;
    paragraph += generateRandomWord(wordLength) + " ";
  }
  return paragraph.trim() + ".";
}
export function generateRandomObjects(min: number, max: number) {
  const objectsArray = [];
  const objectCount = Math.floor(Math.random() * (max - min + 1)) + min;
  for (let i = 0; i < objectCount; i++) {
    objectsArray.push({
      name: generateRandomWord(10) + ".mdx",
      contents: generateRandomParagraph(500, 3, 10),
    });
  }
  return objectsArray;
}
