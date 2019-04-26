import React from 'react';
import {
  View, TouchableOpacity, Text, TextInput,
} from 'react-native';
import commonStyles from '../../globals/commonStyles';

export default function AimHighTextField({ fieldName, onChangeText, value }) {
  let componentInput;
  return (
    <TouchableOpacity
      style={commonStyles.AHsecondaryContainerWithBorder}
      onPress={() => { componentInput.focus(); }}
    >
      <View style={{ width: '45%' }}>
        <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
      </View>
      <TextInput
        style={commonStyles.AHlargeWhiteText}
        onChangeText={(text) => { onChangeText({ fieldName, text }); }}
        ref={(input) => { componentInput = input; }}
        value={value}
        autoCapitalize="characters"
      />
    </TouchableOpacity>
  );
}
