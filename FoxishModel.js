import FoxishCharacterModel from "./FoxishCharactorModel";
import { proxy } from "valtio";

export default class FoxishModel {
  constructor() {
    this.reset();
  }

  reset(size = 4) {
    this.characters = Array.from({ length: size }, () =>
      proxy(new FoxishCharacterModel())
    );
  }
}
