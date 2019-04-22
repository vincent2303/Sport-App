import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colors from '../../globals/colors';
import headerStyle from '../../globals/header';

export default class Exercises extends Component {
  static navigationOptions = {
    title: 'EXERCISES',
    ...headerStyle,
  };

  render() {
    console.log(this.props);
    return (
      <View style={{
        flex: 1, backgroundColor: colors.darkBlue,
      }}
      >
        <Text>Session cycles</Text>
      </View>
    );
  }
}
