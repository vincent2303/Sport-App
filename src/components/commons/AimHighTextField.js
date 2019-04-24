import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../../globals/commonStyles';

export default function AimHighTextField({ fieldName }) {
  return (
    <View style={commonStyles.aimHighContainer}>
      <Text style={commonStyles.aimHighFieldText}>{fieldName.toUpperCase()}</Text>
    </View>
  );
}
