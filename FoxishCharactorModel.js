export default class FoxishCharacterModel {
  constructor(vowel, consonant, reversed) {
    this.vowel = vowel ?? [false, false, false, false, false];
    this.consonant = consonant ?? [false, false, false, false, false, false];
    this.reversed = reversed ?? false;
  }

  // Vowel convenience properties
  get botSE() {
    return this.vowel[0];
  }

  set botSE(val) {
    this.vowel[0] = val;
  }

  get botSW() {
    return this.vowel[1];
  }

  set botSW(val) {
    this.vowel[1] = val;
  }

  get side() {
    return this.vowel[2];
  }

  set side(val) {
    this.vowel[2] = val;
  }

  get topNW() {
    return this.vowel[3];
  }

  set topNW(val) {
    this.vowel[3] = val;
  }

  get topNE() {
    return this.vowel[4];
  }

  set topNE(val) {
    this.vowel[4] = val;
  }

  // Consonant convenience properties
  get botNE() {
    return this.consonant[0];
  }

  set botNE(val) {
    this.consonant[0] = val;
  }

  get botCenter() {
    return this.consonant[1];
  }

  set botCenter(val) {
    this.consonant[1] = val;
  }

  get botNW() {
    return this.consonant[2];
  }

  set botNW(val) {
    this.consonant[2] = val;
  }

  get topSW() {
    return this.consonant[3];
  }

  set topSW(val) {
    this.consonant[3] = val;
  }

  get topCenter() {
    return this.consonant[4];
  }

  set topCenter(val) {
    this.consonant[4] = val;
  }

  get topSE() {
    return this.consonant[5];
  }

  set topSE(val) {
    this.consonant[5] = val;
  }
}
