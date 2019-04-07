import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../globals/colors';
import dimensions from '../globals/dimensions';

const style = StyleSheet.create({
  container: {
    marginLeft: dimensions.margin,
    position: 'absolute',
    top: dimensions.margin / 2,
    left: dimensions.margin / 2,
  },
});

export default function DrawerMenu({ onPress }) {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Icon
        name="ios-menu"
        color={colors.electricYellow}
        size={70}
      />
    </TouchableOpacity>
  );
}
