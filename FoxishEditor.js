import { ScrollView, Text, StyleSheet } from "react-native";
import FoxishCharacterEditor from "./FoxishCharacterEditor";
import { useSnapshot } from "valtio";

export default function FoxishEditor(props) {
  const model = props.model;
  const modelSnap = useSnapshot(model);

  const characters = modelSnap.characters.map((snap, index) => {
    return (
      <FoxishCharacterEditor
        style={styles.character}
        key={index}
        model={props.model.characters[index]}
      />
    );
  });

  return <ScrollView horizontal={true}>{characters}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  character: {
    flex: 1,
  },
});
