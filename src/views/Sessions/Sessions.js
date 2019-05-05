import React, { Component } from 'react';
import { View } from 'react-native';

import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';
import SessionsCaroussel from '../../components/Sessions/SessionsCaroussel';

import commonStyles from '../../globals/commonStyles';
import headerStyle from '../../globals/header';
import CircleButton from '../../components/commons/buttons/CircleButton';

export default class Sessions extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SESSIONS',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });


  render() {
    const { sessions, navigation } = this.props;
    return (
      <View style={commonStyles.AHprimaryContainer}>
        <SessionsCaroussel />
        <CircleButton
          centerElement={{ type: 'icon', value: 'addIcon' }}
          onPress={() => { navigation.navigate('NewSession'); }}
        />
      </View>
    );
  }
}
