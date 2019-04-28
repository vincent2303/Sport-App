import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../globals/colors';
import { whiteMinus } from '../../images';

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: colors.red,
  },
  IconContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  iconStyle: {
    flex: 1,
    width: '70%',
    resizeMode: 'contain',
  },
});

export default function MinusButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.IconContainer}>
        <Image
          source={whiteMinus}
          style={styles.iconStyle}
        />
      </View>
    </TouchableOpacity>
  );
}
