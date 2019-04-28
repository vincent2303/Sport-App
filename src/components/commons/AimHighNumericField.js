import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import commonStyles from '../../globals/commonStyles';
import dimension from '../../globals/dimensions';
import colors from '../../globals/colors';

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
  button: {
    width: 50, height: 45,
  },
  addButton: {
    backgroundColor: colors.green,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: colors.red,
  },
});

export default function AimHighNumericField({ fieldName }) {
  return (
    <View
      style={[commonStyles.AHsecondaryContainerWithBorder, styles.container]}
    >
      <View style={styles.fieldNameContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
      </View>
      <View style={styles.lineTextAndButtonContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>
          Salur
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.addButton]}>
            <View style={{
              flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            }}
            >
              <Text style={{ fontSize: 40, color: colors.white }}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.deleteButton]} />
        </View>
      </View>
    </View>
  );
}
