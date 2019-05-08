import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import commonStyles from '../../globals/commonStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
  },
});

function SessionTitle({ name, sessionIndex }) {
  const sessionIndexString = `S${sessionIndex}: `;
  return (
    <View style={styles.titleContainer}>
      <Text style={commonStyles.AHregularYellowText}>{sessionIndexString}</Text>
      <Text style={commonStyles.AHregularWhiteText}>{name}</Text>
    </View>
  );
}

function SessionTime({ sessionTime }) {
  const sessionTimeString = `${sessionTime} min`;
  return <Text style={commonStyles.AHregularWhiteText}>{sessionTimeString}</Text>;
}

export default function SessionHeader({ name, sessionIndex, sessionTime }) {
  return (
    <View style={styles.container}>
      <SessionTitle sessionIndex={sessionIndex} name={name} />
      <SessionTime sessionTime={sessionTime} />
    </View>
  );
}
