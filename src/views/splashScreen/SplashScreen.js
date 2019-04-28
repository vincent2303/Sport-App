import React, { Component } from 'react';
import { View, Text } from 'react-native';
import initApp from '../../redux/storageSystem/initApp';

export default class SplashScreen extends Component {
  async componentWillMount() {
    const { navigation } = this.props;
    await initApp();
    navigation.navigate('NewExercise');
  }

  render() {
    return (
      <View>
        <Text> - LOADING - </Text>
        <Text> - LOADING - </Text>
        <Text> - LOADING - </Text>
        <Text> - LOADING - </Text>
        <Text> - LOADING - </Text>
      </View>
    );
  }
}
