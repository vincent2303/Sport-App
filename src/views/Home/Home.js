import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import DrawerMenu from '../../components/DrawerMenu';
import style from './style';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <DrawerMenu />
        <Text>Home!</Text>
        <Button title="open drawer" onPress={() => { navigation.openDrawer(); }} />
      </View>
    );
  }
}
