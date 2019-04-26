import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import commonStyles from '../../globals/commonStyles';

export default function AimHighSelector({ fieldName }) {
  return (
    <TouchableOpacity
      style={commonStyles.AHsecondaryContainerWithBorder}
      onPress={Keyboard.dismiss}
    >
      <View style={{ width: '45%' }}>
        <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}
