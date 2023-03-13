import { StyleSheet, TextInput, View, Text } from "react-native";
import FoxishEditor from "./FoxishEditor";

export default function NoteEditor() {
  return (
    <View style={styles.container}>
      <FoxishEditor></FoxishEditor>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="test"
      ></TextInput>
      <Text>Foo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  flashcard: {},
});
