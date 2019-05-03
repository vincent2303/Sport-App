import React from 'react';
import {
  View, Image, StyleSheet,
} from 'react-native';
import { customExerciseIcon } from '../../images';
import commonStyles from '../../globals/commonStyles';
import { height } from '../../globals/dimensions';

const heightIllustrationBanner = height * 0.2;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightIllustrationBanner,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function NewExerciseIllustration() {
  return (
    <View style={styles.container}>
      <Image source={customExerciseIcon} style={commonStyles.veryLargeIcon} />
    </View>
  );
}
