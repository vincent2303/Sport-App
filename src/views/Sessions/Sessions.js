import React, { Component } from 'react';
import { View } from 'react-native';

import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';
import SessionsCaroussel from '../../components/Sessions/SessionsCaroussel';

import commonStyles from '../../globals/commonStyles';
import headerStyle from '../../globals/header';

export default class Sessions extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SESSIONS',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });


  render() {
    const { sessions } = this.props;
    console.log(sessions);
    return (
      <View style={commonStyles.AHprimaryContainer}>
        <SessionsCaroussel />
      </View>
    );
  }
}
