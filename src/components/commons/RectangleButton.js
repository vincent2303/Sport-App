import React from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native';

import commoStyle from '../../globals/commonStyles';
import dimensions from '../../globals/dimensions';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 45,
    position: 'absolute',
    bottom: dimensions.margin,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenColor: {
    backgroundColor: colors.green,
  },
  redColor: {
    backgroundColor: colors.red,
  },
});

function getBackgroundStyle(type) {
  switch (type) {
    case 'add':
      return styles.greenColor;
    case 'delete':
      return styles.redColor;
    default:
      return styles.greenColor;
  }
}

export default function RectangleButton({ onPress, title, type }) {
  const backgroundStyle = getBackgroundStyle(type);
  return (
    <TouchableOpacity style={[styles.container, backgroundStyle]} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={commoStyle.AHlargeWhiteText}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>

  );
}
