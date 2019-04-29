import React, { Component } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import HeaderBackButton from '../../components/commons/HeaderBackButton';
import headerStyle from '../../globals/header';

import NewExerciseIllustration from '../../components/exercises/NewExerciseIllustration';
import AimHighTextField from '../../components/commons/AimHighTextField';
import AimHighSelector from '../../components/commons/AimHighSelector';
import AimHighNumericField from '../../components/commons/AimHighNumericField';

import commonStyles from '../../globals/commonStyles';
import styles from './styles';

const { height } = Dimensions.get('window');
const illustrationSize = height * 0.2;

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
        focus: null,
        weight: null,
        repetitionNumber: null,
        restTime: null,
      };
    }

    onChangeName = ({ text }) => {
      this.setState({ name: text });
    }

    onSelectFocus = (focus) => {
      this.setState({ focus });
    }

    increaseWeight = () => {
      let { weight } = this.state;
      if (!weight) {
        weight = 0;
      }
      weight += 0.1;
      this.setState({ weight });
    }

    lowerWeight = () => {
      let { weight } = this.state;
      if (!weight) {
        weight = 0;
      }
      weight -= 0.1;
      this.setState({ weight });
    }

    increaseRepetitionNumber = () => {
      let { repetitionNumber } = this.state;
      if (!repetitionNumber) {
        repetitionNumber = 0;
      }
      repetitionNumber += 1;
      this.setState({ repetitionNumber });
    }

    lowerRepetitionNumber = () => {
      let { repetitionNumber } = this.state;
      if (!repetitionNumber) {
        repetitionNumber = 0;
      }
      if (repetitionNumber > 0) {
        repetitionNumber -= 1;
        this.setState({ repetitionNumber });
      }
    }

    increaseRestTime = () => {
      let { restTime } = this.state;
      if (!restTime) {
        restTime = 0;
      }
      restTime += 1;
      this.setState({ restTime });
    }

    lowerRestTime = () => {
      let { restTime } = this.state;
      if (!restTime) {
        restTime = 0;
      }
      if (restTime > 0) {
        restTime -= 1;
        this.setState({ restTime });
      }
    }

    render() {
      const { categories } = this.props;
      const {
        name, focus, weight, repetitionNumber, restTime,
      } = this.state;
      console.log('restTime', restTime);
      return (
        <View style={commonStyles.AHprimaryContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <NewExerciseIllustration illustrationSize={illustrationSize} />
              <AimHighTextField fieldName="name" onChangeText={this.onChangeName} value={name} />
              <AimHighSelector fieldName="focus" selectionArray={categories} selectedValue={focus} onSelect={this.onSelectFocus} />
              <AimHighNumericField
                fieldName="weight"
                type="weight"
                value={weight}
                increase={this.increaseWeight}
                lower={this.lowerWeight}
                holdMode
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
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
}
