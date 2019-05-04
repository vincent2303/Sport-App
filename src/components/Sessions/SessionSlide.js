import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dimensions, { height, width } from '../../globals/dimensions';

const styles = StyleSheet.create({
  slideContainer: {
    width: width - 2 * dimensions.margin,
    height: height * 0.4,
    backgroundColor: 'red',
  },
});


export default function SessionSlide() {
  return (
    <View style={styles.slideContainer}>
      <Text>aaaaaa</Text>
    </View>
  );
}
