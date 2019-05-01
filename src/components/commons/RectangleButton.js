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
    backgroundColor: colors.green,
    position: 'absolute',
    bottom: dimensions.margin,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function RectangleButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={commoStyle.AHlargeWhiteText}>CREATE</Text>
      </View>
    </TouchableOpacity>

  );
}
