import React, { Component } from 'react';
import { View, Text } from 'react-native';
import loadCoreData from '../../redux/storageSystem/loadCoreData';

// function fakeLoad() {
//   return new Promise(((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 4000);
//   }));
// }

export default class SplashScreen extends Component {
  async componentWillMount() {
    const { navigation } = this.props;
    await loadCoreData();
    navigation.navigate('Home');
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
