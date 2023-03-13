import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Svg, Line } from "react-native-svg";
import { TouchableWithoutFeedback } from "react-native";
import { useSnapshot } from "valtio";
import { matchingVowel, matchingConsonant } from "./phonemes";

function LineBetween(point1, point2, model, modelSnap, name) {
  const enabled = modelSnap[name];
  return [
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
    />,
    <Line
      key="pressable"
      onPress={() => {
        model[name] = !enabled;
        console.log(model.vowel);
        console.log(model.consonant);
      }}
      x1={point1.x}
      y1={point1.y}
      x2={point2.x}
      y2={point2.y}
      stroke="transparent"
      strokeWidth="60"
    />,
  ];
}

export default function FoxishCharacterEditor(props) {
  const model = props.model;
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

  const vowel = matchingVowel(modelSnap.vowel);
  const consonant = matchingConsonant(modelSnap.consonant);

  return (
    <View style={styles.container}>
      <Svg style={styles.svg} height="400" width="220">
        {LineBetween(topTop, topLeft, model, modelSnap, "topNW")}
        {LineBetween(topTop, topRight, model, modelSnap, "topNE")}
        {LineBetween(topLeft, topBottom, model, modelSnap, "topSW")}
        {LineBetween(topRight, topBottom, model, modelSnap, "topSE")}
        {LineBetween(topTop, topBottom, model, modelSnap, "topCenter")}

        {LineBetween(topSide, topLeft, model, modelSnap, "side")}

        {LineBetween(bottomTop, bottomLeft, model, modelSnap, "botNW")}
        {LineBetween(bottomTop, bottomRight, model, modelSnap, "botNE")}
        {LineBetween(bottomLeft, bottomBottom, model, modelSnap, "botSW")}
        {LineBetween(bottomRight, bottomBottom, model, modelSnap, "botSE")}
        {LineBetween(bottomTop, bottomBottom, model, modelSnap, "botCenter")}

        {LineBetween(bottomSide, bottomLeft, model, modelSnap, "side")}

        {modelSnap.botCenter || modelSnap.topCenter ? (
          <Line
            x1={topBottom.x}
            y1={topBottom.y}
            x2={wordCenter.x}
            y2={wordCenter.y}
            stroke="black"
            strokeWidth="5"
          />
        ) : (
          ""
        )}

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
        {vowel ? vowel.sound : ""}
        {consonant ? consonant.sound : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {},
  text: {},
});
