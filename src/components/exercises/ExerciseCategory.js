import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExerciseLine from './ExerciseLine';


import dimensions from '../../globals/dimensions';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: dimensions.margin * 3,
  },
  title: {
    marginLeft: dimensions.margin,
    fontSize: dimensions.fontSize.regular,
    color: colors.white,
    fontWeight: '300',
    marginBottom: dimensions.margin / 2,
  },
});

export default function ExerciseCategory({ categoryName, exerciseArray }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {categoryName.toUpperCase()}
      </Text>
      {exerciseArray.map(exercise => (
        <ExerciseLine key={exercise.id} exercise={exercise} />
      ))}
    </View>
  );
}
