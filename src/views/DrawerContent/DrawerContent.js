import React, { Component } from 'react';
import { View } from 'react-native';
import DrawerItem from '../../components/drawer/DrawerItem';
import styles from './style';

export default class DrawerContent extends Component {
  navigateToSessions = () => {
    const { navigation, sessions } = this.props;
    if (!sessions.length) {
      navigation.navigate('EditSession');
    } else {
      navigation.navigate('Sessions');
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <DrawerItem title="Home" onPress={() => navigation.navigate('Home')} />
        <DrawerItem title="Exercises" onPress={() => navigation.navigate('Exercises')} />
        <DrawerItem title="Session cycle" onPress={this.navigateToSessions} />
        <DrawerItem title="Session report" onPress={() => navigation.navigate('SessionReport')} />
      </View>
    );
  }
}
