import React from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getWeightString, getRepString, getRestString } from '../../utils/exercises';

import dimensions from '../../globals/dimensions';
import colors from '../../globals/colors';
import { customExerciseIcon } from '../../images';
import commonStyles from '../../globals/commonStyles';

const styles = StyleSheet.create({
  exerciseTextLine: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: dimensions.margin,
    height: '100%',
  },
  exerciseNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
  },
  multiInfoContainer: {
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
      <View style={commonStyles.AHsecondaryContainer}>
        <Image source={customExerciseIcon} style={commonStyles.smallIcon} />
        <View style={styles.exerciseTextLine}>
          <View style={styles.exerciseNameContainer}>
            <Text style={commonStyles.AHregularWhiteText}>{exercise.name}</Text>
          </View>
          <View style={styles.multiInfoContainer}>
            <View style={styles.infoContainer}>
              <Text style={commonStyles.AHregularWhiteText}>{repString}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={commonStyles.AHregularWhiteText}>{weightString}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={commonStyles.AHregularWhiteText}>{restString}</Text>
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
