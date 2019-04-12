import React, { Component } from 'react';
import {
  Text, View, StatusBar,
} from 'react-native';
import styles from './style';

import DrawerMenu from '../../components/DrawerMenu';
import StartButton from '../../components/StartButton';
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
          <Text style={styles.subTitle}>Lorem ipsum lorae etoras sus galiacan</Text>
        </View>
        {/* <View style={styles.titleContainer}>
          <Text style={styles.titleLetters}>A</Text>
          <Text style={styles.titleSeparator}>&</Text>
          <Text style={styles.titleLetters}>H</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Lorem ipsum lorae etoras sus galiacan</Text>
        </View> */}
        <StartButton />
      </View>
    );
  }
}
