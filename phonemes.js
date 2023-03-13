function phoneme(lines, sound, example) {
  return { lines: lines, sound: sound, example: example };
}

const vowels = [
  phoneme([false, false, false, false, true], "ei", "pie"),
  phoneme([false, false, false, true, true], "uh", "bruh"),
];

const consonants = [
  phoneme([false, true, false, true, false, true], "t", "toy"),
  phoneme([false, true, false, false, true, true], "r", "ray"),
  phoneme([true, false, true, true, false, false], "n", "no"),
  phoneme([true, false, true, false, false, false], "m", "moo"),
];

function matchingVowel(lines) {
  const key = JSON.stringify(lines);
  for (const vowel of vowels) {
    if (JSON.stringify(vowel.lines) === key) {
      return vowel;
    }
  }
}

function matchingConsonant(lines) {
  const key = JSON.stringify(lines);
  for (const consonant of consonants) {
    if (JSON.stringify(consonant.lines) === key) {
      return consonant;
    }
  }
}

export { matchingVowel, matchingConsonant };
