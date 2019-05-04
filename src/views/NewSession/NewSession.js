import React, { Component } from 'react';
import { View } from 'react-native';

import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';

import commonsStyles from '../../globals/commonStyles';
import headerStyle from '../../globals/header';

export default class NewSession extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NEW EXERCISE',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });

  render() {
    return (
      <View style={commonsStyles.AHprimaryContainer} />
    );
  }
}
