import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { customExerciseIcon } from '../../images';
import commonStyles from '../../globals/commonStyles';
import { getWeightString, getRestString } from '../../utils/exercises';
import dimensions from '../../globals/dimensions';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  sessionExerciseLineContainer: {
    flexDirection: 'row', padding: 5, width: '100%', justifyContent: 'space-between',
  },
  exerciseIconAndTitleContainer: {
    flexDirection: 'row',
  },
  exerciseIcon: {
    marginRight: dimensions.margin / 2,
  },
  exerciseInfoContainer: {
    flexDirection: 'row', width: '50%', justifyContent: 'space-between',
  },
});

function SessionExerciseLine({ exercise }) {
  const {
    name, repetitionNumber, executionNumber, restTime, weight,
  } = exercise;
  const executionRepetitionString = `${executionNumber}x${repetitionNumber} Rep`;
  const weightString = getWeightString(weight);
  const restTimeString = getRestString(restTime);
  return (
    <View style={styles.sessionExerciseLineContainer}>
      <View style={styles.exerciseIconAndTitleContainer}>
        <Image source={customExerciseIcon} style={[commonStyles.smallIcon, styles.exerciseIcon]} />
        <Text style={commonStyles.AHregularWhiteText}>{name}</Text>
      </View>
      <View style={styles.exerciseInfoContainer}>
        <Text style={commonStyles.AHregularWhiteText}>{executionRepetitionString}</Text>
        <Text style={commonStyles.AHregularWhiteText}>{weightString}</Text>
        <Text style={commonStyles.AHregularWhiteText}>{restTimeString}</Text>
      </View>
    </View>
  );
}

export default function SessionExerciseList({ exerciseArray }) {
  return (
    <View style={styles.container}>
      {exerciseArray.map(exercise => (
        <SessionExerciseLine key={exercise.id} exercise={exercise} />
      ))}
    </View>
  );
}
