import React, { Component } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';
import headerStyle from '../../globals/header';

import NewExerciseIllustration from '../../components/exercises/NewExerciseIllustration';
import AimHighTextField from '../../components/commons/inputs/AimHighTextField';
import AimHighSelector from '../../components/commons/inputs/AimHighSelector';
import AimHighNumericField from '../../components/commons/inputs/AimHighNumericField';
import RectangleButton from '../../components/commons/buttons/RectangleButton';

import {
  increaseWeight,
  lowerWeight,
  increaseExecutionNumber,
  lowerExecutionNumber,
  increaseRepetitionNumber,
  lowerRepetitionNumber,
  increaseRestTime,
  lowerRestTime,
  onChangeName,
  onSelectFocus,
} from '../../sharedClassMethods/exercises';

import { idGenerator } from '../../utils/idGenerators';
import { checkExerciseValidity } from '../../utils/exercises';

import commonStyles, { illustrationSize } from '../../globals/commonStyles';
import styles from './styles';

export default class NewExercise extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'NEW EXERCISE',
      ...headerStyle,
      headerLeft: (
        <HeaderBackButton onPress={() => navigation.goBack(null)} />
      ),
    });

    constructor(props) {
      super(props);
      this.state = {
        name: null,
        categoryId: null,
        weight: null,
        executionNumber: null,
        repetitionNumber: null,
        restTime: null,
      };
      this.increaseWeight = increaseWeight.bind(this);
      this.lowerWeight = lowerWeight.bind(this);
      this.increaseExecutionNumber = increaseExecutionNumber.bind(this);
      this.lowerExecutionNumber = lowerExecutionNumber.bind(this);
      this.increaseRepetitionNumber = increaseRepetitionNumber.bind(this);
      this.lowerRepetitionNumber = lowerRepetitionNumber.bind(this);
      this.increaseRestTime = increaseRestTime.bind(this);
      this.lowerRestTime = lowerRestTime.bind(this);
      this.onChangeName = onChangeName.bind(this);
      this.onSelectFocus = onSelectFocus.bind(this);
    }

    submitExercise = () => {
      const exerciseToSubmit = this.state;
      const { navigation } = this.props;
      exerciseToSubmit.id = idGenerator();
      const { isValid, missingString } = checkExerciseValidity(exerciseToSubmit);
      if (isValid) {
        const { exercises, setExercises } = this.props;
        exercises.push(exerciseToSubmit);
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
      const { categories } = this.props;
      const {
        name, categoryId, weight, executionNumber, repetitionNumber, restTime,
      } = this.state;
      return (
        <View style={commonStyles.AHprimaryContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <NewExerciseIllustration illustrationSize={illustrationSize} />
              <AimHighTextField
                fieldName="name"
                onChangeText={this.onChangeName}
                value={name}
              />
              <AimHighSelector
                fieldName="focus"
                categories={categories}
                selectedValue={categoryId}
                onSelect={this.onSelectFocus}
              />
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
              <View style={styles.container} />
              <RectangleButton
                title="create"
                type="add"
                onPress={this.submitExercise}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
}
