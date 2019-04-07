import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import colors from '../globals/colors';
import dimensions from '../globals/dimensions';

const buttonRadius = 100;
const style = StyleSheet.create({
  container: {
    width: buttonRadius,
    height: buttonRadius,
    borderRadius: buttonRadius / 2,
    backgroundColor: colors.darkBlue,
    borderWidth: 1,
    borderColor: colors.electricYellow,
    position: 'absolute',
    bottom: dimensions.margin,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '200',
  },
});

export default function StartButton() {
  return (
    <TouchableOpacity style={style.container} activeOpacity={0.5}>
      <View style={style.textContainer}>
        <Text style={style.text}>START</Text>
      </View>
    </TouchableOpacity>
  );
}
