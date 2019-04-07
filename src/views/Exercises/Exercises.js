import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DrawerMenu from '../../components/DrawerMenu';

const fakeArmExercise = [
  {
    id: 1,
    name: 'Push Up A',
    category: 'Arms & Shoulders',
    weight: { type: 'weight', value: 16.5 },
  },
  {
    id: 2,
    name: 'Push Up B',
    category: 'Arms & Shoulders',
    weight: { type: 'weight', value: 16.5 },
  },
  {
    id: 3,
    name: 'Push Up C',
    category: 'Arms & Shoulders',
    weight: { type: 'weight', value: 16.5 },
  },
];
const fakeTorsoExercise = [
  {
    id: 1,
    name: 'Push Up2',
    category: 'Torso',
    weight: { type: 'weight', value: 16.5 },
  },
  {
    id: 2,
    name: 'Push Up3',
    category: 'Torso',
    weight: { type: 'weight', value: 16.5 },
  },
  {
    id: 3,
    name: 'Push Up4',
    category: 'Torso',
    weight: { type: 'weight', value: 16.5 },
  },
];

const fakeExerciseMap = new Map([
  ['Arms & Shoulders', fakeArmExercise],
  ['Torso', fakeTorsoExercise],
]);

export default class Exercises extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Session cycles</Text>
      </View>
    );
  }
}
