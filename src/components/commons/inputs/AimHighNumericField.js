import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import commonStyles from '../../../globals/commonStyles';
import dimension from '../../../globals/dimensions';

import PlusButton from '../buttons/PlusButton';
import MinusButton from '../buttons/MinusButton';

import AimHighDynamicValue from './AimHighDynamicValue';

const styles = StyleSheet.create({
  container: { paddingVertical: 0, marginBottom: dimension.margin },
  fieldNameContainer: { width: '35%', paddingVertical: dimension.margin * 3 / 2 },
  lineTextAndButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  buttonsContainer: {
    height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  separator: {
    width: 5,
  },
});


export default function AimHighNumericField({
  fieldName, value, increase, lower, type, holdMode,
}) {
  return (
    <View
      style={[commonStyles.AHsecondaryContainerWithBorder, styles.container]}
    >
      <View style={styles.fieldNameContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
      </View>
      <View style={styles.lineTextAndButtonContainer}>
        <AimHighDynamicValue value={value} type={type} />
        <View style={styles.buttonsContainer}>
          <PlusButton onPress={increase} holdMode={holdMode} />
          <View style={styles.separator} />
          <MinusButton onPress={lower} holdMode={holdMode} />
        </View>
      </View>
    </View>
  );
}
