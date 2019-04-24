import React from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getWeightString, getRepString, getRestString } from '../../utils/exercises';

import dimensions from '../../globals/dimensions';
import colors from '../../globals/colors';
import { customExerciseIcon } from '../../images';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBlue,
    padding: dimensions.margin,
    marginTop: dimensions.margin / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exerciseTextLine: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: dimensions.margin,
    height: '100%',
  },
  text: {
    fontSize: dimensions.fontSize.regularText,
    color: colors.white,
    fontWeight: '200',
  },
  exerciseIcon: {
    width: dimensions.fontSize.small,
    height: dimensions.fontSize.small,
  },
  exerciseNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
  },
  multiInfoCOntainer: {
    flex: 1,
    flexDirection: 'row',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '33%',
  },
});

export default function ExerciseLine({ exercise }) {
  const weightString = getWeightString(exercise);
  const repString = getRepString(exercise);
  const restString = getRestString(exercise);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={customExerciseIcon} style={styles.exerciseIcon} />
        <View style={styles.exerciseTextLine}>

          <View style={styles.exerciseNameContainer}>
            <Text style={styles.text}>{exercise.name}</Text>
          </View>
          <View style={styles.multiInfoCOntainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>{repString}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>{weightString}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>{restString}</Text>
            </View>
          </View>
        </View>
        <Icon
          name="ios-arrow-forward"
          color={colors.electricYellow}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
}
