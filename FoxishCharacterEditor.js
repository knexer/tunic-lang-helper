import { Text, View, StyleSheet } from "react-native";
import { Svg, Line } from "react-native-svg";
import { useSnapshot } from "valtio";

import { getMatchingVowel, getMatchingConsonant } from "./phonemes.js";

function TouchableLineBetween(point1, point2, model, modelSnap, name) {
  const enabled = modelSnap[name];
  return (
    <>
      <Line
        key="visible"
        x1={point1.x}
        y1={point1.y}
        x2={point2.x}
        y2={point2.y}
        stroke={enabled ? "black" : "gray"}
        strokeWidth={enabled ? 5 : 3}
        strokeLinecap="round"
        strokeDasharray={enabled ? "" : "0, 10"}
      />
      ,
      <Line
        key="pressable"
        onPress={() => {
          model[name] = !enabled;
        }}
        x1={point1.x}
        y1={point1.y}
        x2={point2.x}
        y2={point2.y}
        stroke="transparent"
        strokeWidth="60"
      />
      ,
    </>
  );
}

export default function FoxishCharacterEditor({ model }) {
  const modelSnap = useSnapshot(model);

  // Measured distances:
  // Diamond height: 12mm
  // Diamond width: 20mm
  // Left line: 12mm

  const margin = 10;
  const diamondHeight = 120;
  const diamondWidth = 200;

  const centerX = margin + diamondWidth / 2;

  const topTop = { x: centerX, y: margin };
  const topLeft = { x: margin, y: margin + diamondHeight / 2 };
  const topBottom = { x: centerX, y: margin + diamondHeight };
  const topRight = { x: margin + diamondWidth, y: margin + diamondHeight / 2 };
  const topSide = { x: margin, y: margin + (3 / 2) * diamondHeight };

  const wordLeft = { x: margin, y: margin + (3 / 2) * diamondHeight };
  const wordRight = {
    x: margin + diamondWidth,
    y: margin + (3 / 2) * diamondHeight,
  };
  const wordCenter = { x: centerX, y: margin + (3 / 2) * diamondHeight };

  const bottomTop = { x: centerX, y: margin + 2 * diamondHeight };
  const bottomLeft = { x: margin, y: margin + (5 / 2) * diamondHeight };
  const bottomBottom = { x: centerX, y: margin + 3 * diamondHeight };
  const bottomRight = {
    x: margin + diamondWidth,
    y: margin + (5 / 2) * diamondHeight,
  };
  const bottomSide = { x: margin, y: margin + 2 * diamondHeight };

  const vowel = getMatchingVowel(modelSnap.vowel);
  const consonant = getMatchingConsonant(modelSnap.consonant);

  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        {TouchableLineBetween(topTop, topLeft, model, modelSnap, "topNW")}
        {TouchableLineBetween(topTop, topRight, model, modelSnap, "topNE")}
        {TouchableLineBetween(topLeft, topBottom, model, modelSnap, "topSW")}
        {TouchableLineBetween(topRight, topBottom, model, modelSnap, "topSE")}
        {TouchableLineBetween(topTop, topBottom, model, modelSnap, "topCenter")}

        {TouchableLineBetween(topSide, topLeft, model, modelSnap, "side")}

        {TouchableLineBetween(bottomTop, bottomLeft, model, modelSnap, "botNW")}
        {TouchableLineBetween(
          bottomTop,
          bottomRight,
          model,
          modelSnap,
          "botNE"
        )}
        {TouchableLineBetween(
          bottomLeft,
          bottomBottom,
          model,
          modelSnap,
          "botSW"
        )}
        {TouchableLineBetween(
          bottomRight,
          bottomBottom,
          model,
          modelSnap,
          "botSE"
        )}
        {TouchableLineBetween(
          bottomTop,
          bottomBottom,
          model,
          modelSnap,
          "botCenter"
        )}

        {TouchableLineBetween(bottomSide, bottomLeft, model, modelSnap, "side")}

        {modelSnap.botCenter ||
          (modelSnap.topCenter && (
            <Line
              x1={topBottom.x}
              y1={topBottom.y}
              x2={wordCenter.x}
              y2={wordCenter.y}
              stroke="black"
              strokeWidth="5"
            />
          ))}

        <Line
          x1={wordLeft.x}
          y1={wordLeft.y}
          x2={wordRight.x}
          y2={wordRight.y}
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.text}>
        {consonant ? consonant.sound : ""}
        {vowel ? vowel.sound : ""}
      </Text>
      <Text style={styles.examples}>
        {consonant ? consonant.sound + " as in " + consonant.example : ""}
      </Text>
      <Text style={styles.examples}>
        {vowel ? vowel.sound + " as in " + vowel.example : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  svg: { height: 400, width: 220 },
  text: { fontSize: 60 },
  examples: { fontSize: 18 },
});
