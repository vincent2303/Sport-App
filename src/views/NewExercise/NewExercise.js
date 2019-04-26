import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBackButton from '../../components/commons/HeaderBackButton';
import headerStyle from '../../globals/header';

import NewExerciseIllustration from '../../components/exercises/NewExerciseIllustration';
import AimHighTextField from '../../components/commons/AimHighTextField';
import AimHighSelector from '../../components/commons/AimHighSelector';

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
        name: '',
        focus: '',
        weight: '',
        rep: '',
        rest: '',
      };
    }

    onChangeText = ({ fieldName, text }) => {
      const stateChange = { [fieldName]: text };
      this.setState(stateChange);
    }

    render() {
      const {
        name, focus, weight, rep, rest,
      } = this.state;
      return (
        <View style={commonStyles.AHprimaryContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <NewExerciseIllustration illustrationSize={illustrationSize} />
              <AimHighTextField fieldName="name" onChangeText={this.onChangeText} value={name} />
              <AimHighSelector fieldName="focus" onChangeText={this.onChangeText} value={focus} />
              <AimHighTextField fieldName="weight" onChangeText={this.onChangeText} value={weight} />
              <AimHighTextField fieldName="rep" onChangeText={this.onChangeText} value={rep} />
              <AimHighTextField fieldName="rest" onChangeText={this.onChangeText} value={rest} />
              <View style={{ height: illustrationSize }} />
              <View style={styles.container} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
}
