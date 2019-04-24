import React from 'react';
import {
  Text, View, TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import colors from '../globals/colors';
import dimensions from '../globals/dimensions';
import { addIcon } from '../images';

const buttonRadius = 90;
const styles = StyleSheet.create({
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
  centerElementContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '200',
  },
  addIcon: {
    width: 45,
    height: 45,
  },
});

function getCenterElement({ type, value }) {
  if (type === 'text') return <Text style={styles.text}>{value}</Text>;
  switch (value) {
    case 'addIcon':
      return <Image source={addIcon} style={styles.addIcon} />;
    default:
      return <Text style={styles.text}>START</Text>;
  }
}

export default function CircleButton({ centerElement, onPress }) {
  const JSXcenterElement = getCenterElement(centerElement);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
      <View style={styles.centerElementContainer}>
        {JSXcenterElement}
      </View>
    </TouchableOpacity>
  );
}
