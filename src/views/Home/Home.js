import React, { Component } from 'react';
import {
  Text, View, StatusBar, ImageBackground,
} from 'react-native';
import { runningManImage } from '../../images';
import style from './style';

import DrawerMenu from '../../components/DrawerMenu';
import StartButton from '../../components/StartButton';

export default class Home extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={runningManImage} style={style.backgroundImageContainer}>
        <StatusBar hidden />
        <DrawerMenu onPress={navigation.openDrawer} />
        <View style={style.titleContainer}>
          <Text style={style.titleLetters}>A</Text>
          <Text style={style.titleSeparator}>&</Text>
          <Text style={style.titleLetters}>H</Text>
        </View>
        <View style={style.subTitleContainer}>
          <Text style={style.subTitle}>Lorem ipsum lorae etoras sus galiacan</Text>
        </View>
        <StartButton />
      </ImageBackground>
    );
  }
}
