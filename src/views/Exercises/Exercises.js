import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Exercises extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Session cycles</Text>
      </View>
    );
  }
}
