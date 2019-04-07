import React, { Component } from 'react';
import { View } from 'react-native';
import DrawerItem from '../../components/DrawerItem';
import styles from './style';

export default class DrawerContent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <DrawerItem title="Home" onPress={() => navigation.navigate('Home')} />
        <DrawerItem title="Exercises" onPress={() => navigation.navigate('Exercises')} />
        <DrawerItem title="Session cycle" onPress={() => navigation.navigate('SessionCycle')} />
        <DrawerItem title="Session report" onPress={() => navigation.navigate('SessionReport')} />
      </View>
    );
  }
}
