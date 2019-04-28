import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../globals/colors';
import { whitePlus } from '../../images';

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: colors.green,
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

export default function PlusButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.IconContainer}>
        <Image
          source={whitePlus}
          style={styles.iconStyle}
        />
      </View>
    </TouchableOpacity>
  );
}
