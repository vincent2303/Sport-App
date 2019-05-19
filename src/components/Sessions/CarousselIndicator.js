import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import colors from '../../globals/colors';

const dotRadius = 6;
const dotMarginRight = 5;
export const dotSpacing = dotRadius * 2 + dotMarginRight;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
  },
  staticDot: {
    width: dotRadius * 2,
    height: dotRadius * 2,
    borderRadius: dotRadius,
    borderWidth: 1,
    borderColor: colors.electricYellow,
    marginRight: dotMarginRight,
  },
  dynamicDot: {
    width: dotRadius * 2,
    height: dotRadius * 2,
    borderRadius: dotRadius,
    opacity: 0.8,
    backgroundColor: colors.electricYellow,
    position: 'absolute',
  },
});

function StaticDots({ slideNumber }) {
  const dotArray = [];
  for (let index = 0; index < slideNumber; index += 1) {
    dotArray.push(<View key={index} style={styles.staticDot} />);
  }
  return dotArray;
}

function DynamicDot({ dynamicDotPosition }) {
  return <Animated.View style={[styles.dynamicDot, { left: dynamicDotPosition }]} />;
}

export default function carousselIndicator({ slideNumber, dynamicDotPosition }) {
  return (
    <View style={styles.container}>
      <View style={styles.dotContainer}>
        <DynamicDot dynamicDotPosition={dynamicDotPosition} />
        <StaticDots slideNumber={slideNumber} />
      </View>
    </View>
  );
}
