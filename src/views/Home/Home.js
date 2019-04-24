import React, { Component } from 'react';
import {
  Text, View, StatusBar,
} from 'react-native';
import styles from './style';

import DrawerMenu from '../../components/DrawerMenu';
import CircleButton from '../../components/CircleButton';
import Logo from '../../components/Logo';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.homeContainer}>
        <StatusBar hidden />
        <DrawerMenu onPress={navigation.openDrawer} />
        <View style={styles.logoAndTextContainer}>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <Text style={styles.title}>App Name</Text>
          <Text style={styles.subTitle}>
            Lorem ipsum lorae etoras sus galiacan
          </Text>
        </View>
        <CircleButton onPress={null} centerElement={{ type: 'text', value: 'START' }} />
      </View>
    );
  }
}
