import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../globals/colors';
import dimensions from '../globals/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingLeft: dimensions.margin,
    width: dimensions.margin * 3,
  },
});

export default function HeaderBackButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name="ios-arrow-back"
        color={colors.electricYellow}
        size={30}
      />
    </TouchableOpacity>
  );
}
