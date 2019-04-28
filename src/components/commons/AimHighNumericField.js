import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import commonStyles from '../../globals/commonStyles';
import dimension from '../../globals/dimensions';

import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

import { getWeightString, getRepString, getRestString } from '../../utils/exercises';

const styles = StyleSheet.create({
  container: { paddingVertical: 0 },
  fieldNameContainer: { width: '35%', paddingVertical: dimension.margin * 2 },
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

function RenderValue({ value }) {
  if (value === null) {
    // return view so that space-between place the buttons group on the right
    return <View />;
  }
  return (
    <Text style={commonStyles.AHlargeWhiteText}>
      {value}
    </Text>
  );
}

function getStringValue({ value, fieldName }) {
  if (value === null) return null;
  switch (fieldName) {
    case 'weight':
      return getWeightString(value);
    case 'rep':
      return getRepString(value);
    case 'rest':
      return getRestString(value);
    default:
      return null;
  }
}

export default function AimHighNumericField({
  fieldName, value, increase, lower,
}) {
  const stringValue = getStringValue({ fieldName, value });
  return (
    <View
      style={[commonStyles.AHsecondaryContainerWithBorder, styles.container]}
    >
      <View style={styles.fieldNameContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
      </View>
      <View style={styles.lineTextAndButtonContainer}>
        <RenderValue value={stringValue} />
        <View style={styles.buttonsContainer}>
          <PlusButton onPress={increase} />
          <View style={styles.separator} />
          <MinusButton onPress={lower} />
        </View>
      </View>
    </View>
  );
}
