import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dimensions from '../globals/dimensions';
import colors from '../globals/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBlue,
    padding: dimensions.margin / 2,
    paddingHorizontal: dimensions.margin,
    marginTop: 5,
  },
  text: {
    fontSize: dimensions.fontSize.small,
    color: colors.white,
    fontWeight: '200',
  },
});

export default function ExerciseLine({ exercise }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{exercise.name}</Text>
    </View>
  );
}
