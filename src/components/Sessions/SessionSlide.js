import React from 'react';
import { View, StyleSheet } from 'react-native';
import SessionHeader from './SessionHeader';
import SessionExerciseList from './SessionExerciseList';
import dimensions, { height, width } from '../../globals/dimensions';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  slideContainer: {
    width: width - 2 * dimensions.margin,
    height: height * 0.4,
    backgroundColor: colors.secondaryBlue,
    padding: dimensions.margin,
    justifyContent: 'space-between',
  },
  flideFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function SessionSlide({ session, sessionIndex }) {
  const { name, sessionTime, exerciseArray } = session;
  return (
    <View style={styles.slideContainer}>
      <View>
        <SessionHeader name={name} sessionIndex={sessionIndex} sessionTime={sessionTime} />
        <SessionExerciseList exerciseArray={exerciseArray} />
      </View>
      <View>
        <View />
      </View>
    </View>
  );
}
