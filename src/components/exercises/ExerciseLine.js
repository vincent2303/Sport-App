import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet, Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getWeightString, getRepString, getRestString } from '../../utils/exercises';

import dimensions from '../../globals/dimensions';
import colors from '../../globals/colors';
import { customExerciseIcon } from '../../images';
import commonStyles from '../../globals/commonStyles';

const styles = StyleSheet.create({
  container: {
    marginTop: dimensions.margin / 2,
  },
  exerciseTextLine: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: dimensions.margin,
    height: '100%',
  },
  exerciseNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
  },
  multiInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default class ExerciseLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedOpacity: new Animated.Value(props.selected ? 1 : 0.3),
    };
  }

  getLineStyle = () => {
    const { selectionMode } = this.props;
    const { animatedOpacity } = this.state;
    if (selectionMode) {
      return [commonStyles.AHsecondaryContainer, { opacity: animatedOpacity }];
    }
    return commonStyles.AHsecondaryContainer;
  }

  animateLineOpacity =() => {
    const { selected } = this.props;
    const { animatedOpacity } = this.state;
    if (selected) { // if it was already selected
      Animated.timing(animatedOpacity, {
        toValue: 0.3,
        duration: 150,
      }).start();
    } else {
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  }

  render() {
    const {
      exercise, onChooseExercise, selectionMode,
    } = this.props;
    const {
      weight, repetitionNumber, executionNumber, restTime,
    } = exercise;
    const weightString = getWeightString(weight);
    const repString = getRepString({ executionNumber, repetitionNumber });
    const restString = getRestString(restTime);
    const lineStyle = this.getLineStyle();

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.animateLineOpacity();
          onChooseExercise(exercise);
        }}
        activeOpacity={selectionMode ? 1 : 0.1}
      >
        <Animated.View style={lineStyle}>
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
          {!selectionMode && (
          <Icon
            name="ios-arrow-forward"
            color={colors.electricYellow}
            size={20}
          />
          )}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
