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
        rep: null,
        rest: null,
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
      weight += 0.5;
      this.setState({ weight });
    }

    lowerWeight = () => {
      let { weight } = this.state;
      if (!weight) {
        weight = 0;
      }
      weight -= 0.5;
      this.setState({ weight });
    }

    render() {
      const { categories } = this.props;
      const {
        name, focus, weight, rep, rest,
      } = this.state;
      return (
        <View style={commonStyles.AHprimaryContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <NewExerciseIllustration illustrationSize={illustrationSize} />
              <AimHighTextField fieldName="name" onChangeText={this.onChangeName} value={name} />
              <AimHighSelector fieldName="focus" selectionArray={categories} selectedValue={focus} onSelect={this.onSelectFocus} />
              <AimHighNumericField fieldName="weight" value={weight} increase={this.increaseWeight} lower={this.lowerWeight} />
              <AimHighNumericField fieldName="rep" onChangeValue={this.onChangeText} value={rep} />
              <AimHighNumericField fieldName="rest" onChangeValue={this.onChangeText} value={rest} />
              <View style={styles.container} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
}
