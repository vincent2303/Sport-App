import React, { Component } from 'react';
import { View } from 'react-native';

import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';
import SessionsCaroussel from '../../components/Sessions/SessionsCaroussel';

import commonStyles from '../../globals/commonStyles';
import headerStyle from '../../globals/header';
import CircleButton from '../../components/commons/buttons/CircleButton';

import { getSessionsWithExerciseArray } from '../../utils/sessions';

export default class Sessions extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SESSIONS',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });


  render() {
    const { exercises, sessions, navigation } = this.props;
    const sessionsWithExerciseArray = getSessionsWithExerciseArray({ sessions, exercises });
    return (
      <View style={commonStyles.AHprimaryContainer}>
        <SessionsCaroussel sessions={sessionsWithExerciseArray} />
        <CircleButton
          centerElement={{ type: 'icon', value: 'addIcon' }}
          onPress={() => { navigation.navigate('NewSession'); }}
        />
      </View>
    );
  }
}
