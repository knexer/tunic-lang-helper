import { FlatList, Text, StyleSheet, View } from "react-native";
import { useSnapshot } from "valtio";

import FoxishCharacterEditor from "./FoxishCharacterEditor";
import FoxishCharacterModel from "./FoxishCharactorModel";
import { getMatchingConsonant, getMatchingVowel } from "./phonemes.js";

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

  return (
    <View>
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
      <Text style={styles.summary}>
        {modelSnap.characters
          .map((char) => {
            const consonant = getMatchingConsonant(char.consonant);
            const vowel = getMatchingVowel(char.vowel);
            return (
              (consonant ? consonant.sound : "") + (vowel ? vowel.sound : "")
            );
          })
          .join(" ")}
      </Text>
    </View>
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

  summary: {
    fontSize: 18,
    left: 10,
    top: 20,
    right: 10,
  },
});
