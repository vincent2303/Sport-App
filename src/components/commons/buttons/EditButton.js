import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import commonsStyles from '../../../globals/commonStyles';
import dimensions from '../../../globals/dimensions';
import colors from '../../../globals/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: dimensions.margin,
    bottom: dimensions.margin,
    padding: dimensions.margin / 2,
    backgroundColor: colors.electricYellow,
    width: 100,
  },
  editText: {
    textAlign: 'center',
  },
});

export default function EditButton({ onPress }) {
  return (
    <TouchableOpacity onpress={onPress} style={styles.container}>
      <Text style={[commonsStyles.AHregularWhiteText, styles.editText]}>EDIT</Text>
    </TouchableOpacity>
  );
}
