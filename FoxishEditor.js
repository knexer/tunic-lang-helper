import { FlatList, ScrollView, StyleSheet } from "react-native";
import FoxishCharacterEditor from "./FoxishCharacterEditor";
import { useSnapshot } from "valtio";
import FoxishCharacterModel from "./FoxishCharactorModel";

export default function FoxishEditor(props) {
  const model = props.model;
  const modelSnap = useSnapshot(model);

  const renderItem = (params) => {
    return (
      <FoxishCharacterEditor
        style={styles.character}
        key={params.index}
        model={model.characters[params.index]}
      />
    );
  };
  //const characters = modelSnap.characters.map(renderItem)

  return (
    <FlatList
      horizontal={true}
      onEndReached={() => {
        model.characters.push(new FoxishCharacterModel());
      }}
      onRefresh={() => model.reset()}
      refreshing={false}
      data={modelSnap.characters}
      renderItem={renderItem}
    ></FlatList>
  );
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
