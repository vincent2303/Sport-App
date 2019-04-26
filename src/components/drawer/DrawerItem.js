import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import dimensions from '../../globals/dimensions';
import commonStyles from '../../globals/commonStyles';

const styles = StyleSheet.create({
  touchableContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: dimensions.margin,
  },
});
export default function DrawerItem({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}
