import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';

import NewExerciseIllustration from '../../components/exercises/NewExerciseIllustration';
import AimHighNumericField from '../../components/commons/inputs/AimHighNumericField';
import RectangleButton from '../../components/commons/buttons/RectangleButton';

import { checkExerciseValidity } from '../../utils/exercises';

import styles from './styles';
import commonStyles, { illustrationSize } from '../../globals/commonStyles';
import headerStyle from '../../globals/header';

import {
  increaseWeight,
  lowerWeight,
  increaseExecutionNumber,
  lowerExecutionNumber,
  increaseRepetitionNumber,
  lowerRepetitionNumber,
  increaseRestTime,
  lowerRestTime,
} from '../../sharedClassMethods/exercises';

export default class EditExercise extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: navigation.getParam('title', 'EDIT'),
      ...headerStyle,
      headerLeft: (
        <HeaderBackButton onPress={() => navigation.goBack(null)} />
      ),
    });

    constructor(props) {
      super(props);
      const { selectedExercise } = this.props;
      const editableExercise = Object.assign({}, selectedExercise);
      this.state = { ...editableExercise };
      this.increaseWeight = increaseWeight.bind(this);
      this.lowerWeight = lowerWeight.bind(this);
      this.increaseExecutionNumber = increaseExecutionNumber.bind(this);
      this.lowerExecutionNumber = lowerExecutionNumber.bind(this);
      this.increaseRepetitionNumber = increaseRepetitionNumber.bind(this);
      this.lowerRepetitionNumber = lowerRepetitionNumber.bind(this);
      this.increaseRestTime = increaseRestTime.bind(this);
      this.lowerRestTime = lowerRestTime.bind(this);
    }

    onSaveExercise = () => {
      const editableExercise = this.state;
      const { isValid, missingString } = checkExerciseValidity(editableExercise);
      if (isValid) {
        const { exercises, setExercises, navigation } = this.props;
        const exerciseIndex = exercises.findIndex(exercise => exercise.id === editableExercise.id);
        exercises[exerciseIndex] = editableExercise;
        setExercises(exercises);
        navigation.navigate('Exercises');
      } else {
        Alert.alert(
          'Requiered fields',
          missingString,
        );
      }
    }

    render() {
      const {
        weight, restTime, repetitionNumber, executionNumber,
      } = this.state;
      return (
        <View style={commonStyles.AHprimaryContainer}>
          <NewExerciseIllustration illustrationSize={illustrationSize} />
          <AimHighNumericField
            fieldName="weight"
            type="weight"
            value={weight}
            increase={this.increaseWeight}
            lower={this.lowerWeight}
            holdMode
          />
          <AimHighNumericField
            fieldName="exec"
            type="executionNumber"
            increase={this.increaseExecutionNumber}
            lower={this.lowerExecutionNumber}
            value={executionNumber}
          />
          <AimHighNumericField
            fieldName="rep"
            type="repetitionNumber"
            increase={this.increaseRepetitionNumber}
            lower={this.lowerRepetitionNumber}
            value={repetitionNumber}
          />
          <AimHighNumericField
            fieldName="rest"
            type="restTime"
            increase={this.increaseRestTime}
            lower={this.lowerRestTime}
            value={restTime}
            holdMode
          />
          <View style={styles.graphiqueContainer} />
          <RectangleButton
            title="save"
            type="add"
            onPress={this.onSaveExercise}
          />
        </View>
      );
    }
}
