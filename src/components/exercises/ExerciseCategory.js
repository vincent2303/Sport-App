import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExerciseLine from './ExerciseLine';


import dimensions from '../../globals/dimensions';

import commonStyles from '../../globals/commonStyles';

const styles = StyleSheet.create({
  container: {
    marginTop: dimensions.margin * 3,
  },
  title: {
    marginLeft: dimensions.margin,
    marginBottom: dimensions.margin / 2,
  },
});

export default function ExerciseCategory({ categoryName, exerciseArray }) {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.AHlargeWhiteText, styles.title]}>
        {categoryName.toUpperCase()}
      </Text>
      {exerciseArray.map(exercise => (
        <ExerciseLine key={exercise.id} exercise={exercise} />
      ))}
    </View>
  );
}
