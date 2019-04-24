import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import dimensions from '../../globals/dimensions';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  touchableContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: dimensions.margin,

  },
  text: {
    fontSize: dimensions.fontSize.regular,
    fontWeight: '200',
    color: colors.white,
  },
});
export default function DrawerItem({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}
