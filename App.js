import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import FoxishEditor from "./FoxishEditor";
import FoxishModel from "./FoxishModel";
import FoxishCharacterModel from "./FoxishCharactorModel";
import { proxy } from "valtio";

const model = proxy(new FoxishModel());
model.characters.push(new FoxishCharacterModel());

console.log(model.characters.length);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FoxishEditor model={model} />
    </SafeAreaView>
  );
}

// Stories:
// Add a new note
// Review old notes
// Edit an old note
// Search for a foxish string
// Search for an english string

// Components:
// Read-only smol card version of note
// Container with all the notes
// Editable note with text box and stuff
// Search box (in english)
// Search widget (in foxish)
// Add new note button

// MVP would be:
// Cut the search parts
// Start with just editing a note

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
