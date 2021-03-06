import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import commonStyles from '../../../globals/commonStyles';

const styles = StyleSheet.create({
  weightLineContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weightValueContainer: {
    width: '65%',
  },
  weightUnitContainer: {
    width: '35%',
  },
});

function getWeightString(weightValue) {
  if (weightValue === 0) return 'body';
  return weightValue;
}

function WeightLine({ value }) {
  const weightString = getWeightString(value);
  return (
    <View style={styles.weightLineContainer}>
      <View style={styles.weightValueContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>
          {weightString}
        </Text>
      </View>
      {weightString !== 'body' && (
      <View style={styles.weightUnitContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>Kg</Text>
      </View>
      )}
    </View>
  );
}

function ExecutionLine({ value }) {
  return (
    <View style={styles.weightLineContainer}>
      <View style={styles.weightValueContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>
          {value}
        </Text>
      </View>
      <View style={styles.weightUnitContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>ex</Text>
      </View>
    </View>
  );
}

function RepLine({ value }) {
  return (
    <View style={styles.weightLineContainer}>
      <View style={styles.weightValueContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>
          {value}
        </Text>
      </View>
      <View style={styles.weightUnitContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>rep</Text>
      </View>
    </View>
  );
}

function RestLine({ value }) {
  return (
    <View style={styles.weightLineContainer}>
      <View style={styles.weightValueContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>
          {value}
        </Text>
      </View>
      <View style={styles.weightUnitContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>sec</Text>
      </View>
    </View>
  );
}

function SessionTimeLine({ value }) {
  return (
    <View style={styles.weightLineContainer}>
      <View style={styles.weightValueContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>
          {value}
        </Text>
      </View>
      <View style={styles.weightUnitContainer}>
        <Text style={commonStyles.AHlargeWhiteText}>min</Text>
      </View>
    </View>
  );
}

export default function AimHighDynamicValue({ value, type }) {
  if (value === null) {
    // return a view so that justifyContent space between places the buttons group on the right
    return <View />;
  }
  switch (type) {
    case 'weight':
      return (<WeightLine value={value} />);
    case 'repetitionNumber':
      return (<RepLine value={value} />);
    case 'restTime':
      return (<RestLine value={value} />);
    case 'sessionTime':
      return (<SessionTimeLine value={value} />);
    case 'executionNumber':
      return (<ExecutionLine value={value} />);
    default:
      return (
        <Text style={commonStyles.AHlargeWhiteText}>
          {value}
        </Text>
      );
  }
}
