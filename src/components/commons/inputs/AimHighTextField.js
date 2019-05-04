import React from 'react';
import {
  View, TouchableOpacity, Text, TextInput, StyleSheet,
} from 'react-native';
import commonStyles from '../../../globals/commonStyles';
import dimensions from '../../../globals/dimensions';

const styles = StyleSheet.create({
  container: { marginBottom: dimensions.margin },
});

export default function AimHighTextField({ fieldName, onChangeText, value }) {
  let componentInput;
  return (
    <TouchableOpacity
      style={[commonStyles.AHsecondaryContainerWithBorder, styles.container]}
      onPress={() => { componentInput.focus(); }}
    >
      <View style={{ width: '35%' }}>
        <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
      </View>
      <TextInput
        style={commonStyles.AHlargeWhiteText}
        onChangeText={(text) => { onChangeText({ fieldName, text }); }}
        ref={(input) => { componentInput = input; }}
        value={value}
        autoCapitalize="characters"
        autoCorrect={false}
      />
    </TouchableOpacity>
  );
}
