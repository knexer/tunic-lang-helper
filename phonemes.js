function phoneme(lines, sound, example) {
  return { lines: lines, sound: sound, example: example };
}

const vowels = [
  phoneme([false, false, false, false, true], "ei", "pie"),
  phoneme([false, false, false, true, true], "uh", "bruh"),
  phoneme([true, true, false, false, false], "ih", "tin"),
  phoneme([true, true, true, true, false], "ee", "tea"),
  phoneme([false, false, true, true, false], "ah", "not"),
  phoneme([true, true, true, true, true], "oh", "low"),
  phoneme([true, true, false, true, true], "arr", "far"),
  phoneme([false, true, true, true, true], "ooh", "poo"),
  phoneme([true, true, true, false, false], "eh", "meh"),
  phoneme([false, false, true, true, true], "a", "dad"),
  phoneme([true, true, true, false, true], "er", "fern"),
  phoneme([true, false, true, true, false], "eer", "fear"),
  phoneme([false, false, false, true, false], "ay", "bae"),
  phoneme([true, false, false, false, false], "ow", "ow"),
  phoneme([true, false, true, true, true], "or", "lore"),
  phoneme([true, false, true, false, false], "air", "lair"),
  phoneme([false, true, false, false, false], "u", "pull"),
];

const consonants = [
  phoneme([false, true, false, true, false, true], "t", "totes"),
  phoneme([false, true, false, false, true, true], "r", "roar"),
  phoneme([true, false, true, true, false, false], "n", "naan"),
  phoneme([true, false, true, false, false, false], "m", "mom"),
  phoneme([false, true, true, false, true, true], "s", "sass"),
  phoneme([true, true, true, false, true, false], "th", "thang"),
  phoneme([true, false, false, false, true, true], "k", "kek"),
  phoneme([false, true, true, false, false, true], "f", "faff"),
  phoneme([false, true, false, false, true, false], "L", "lol"),
  phoneme([false, false, false, true, false, true], "w", "wow"),
  phoneme([true, false, true, false, true, false], "d", "dad"),
  phoneme([false, true, false, true, true, false], "y", "yeet"),
  phoneme([false, false, true, false, true, false], "j", "jank"),
  phoneme([true, true, false, true, true, false], "zz", "zap"),
  phoneme([true, false, false, true, true, false], "v", "vibes"),
  phoneme([true, true, true, true, true, true], "ng", "bong"),
  phoneme([true, true, false, false, true, false], "h", "haha"),
  phoneme([true, true, true, true, false, true], "sh", "shush"),
  phoneme([false, true, false, false, false, true], "p", "pop"),
  phoneme([true, true, false, false, false, true], "g", "gag"),
  phoneme([true, false, false, false, true, false], "b", "bob"),
  phoneme([false, true, false, true, false, false], "ch", "church"),
  phoneme([true, false, true, true, true, true], "jjh", "usual"),
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
