import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const dotRadius = 6;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  staticDot: {
    width: dotRadius * 2,
    height: dotRadius * 2,
    borderRadius: dotRadius,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 5,
  },
  dynamicDot: {
    width: dotRadius * 2,
    height: dotRadius * 2,
    borderRadius: dotRadius,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
  },
});

function StaticDots({ slideNumber }) {
  const dotArray = [];
  for (let index = 0; index < slideNumber; index += 1) {
    dotArray.push(<View key={index} style={styles.staticDot} />);
  }
  return dotArray;
}

function DynamicDot() {
  return <View style={styles.dynamicDot} />;
}

export default function carousselIndicator({ slideNumber }) {
  return (
    <View style={styles.container}>
      <StaticDots slideNumber={slideNumber} />
      <DynamicDot />
    </View>
  );
}
