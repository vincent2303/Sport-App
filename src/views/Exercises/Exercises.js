import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { getCategoryMap } from '../../utils/exercises';

import HeaderBackButton from '../../components/HeaderBackButton';
import ExerciseCategory from '../../components/ExerciseCategory';
import AddButton from '../../components/StartButton';

import styles from './style';
import headerStyle from '../../globals/header';

export default class Exercises extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'EXERCISES',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });

  render() {
    const { exercises } = this.props;
    const categoryMap = getCategoryMap(exercises);
    return (
      <View>
        <ScrollView style={styles.container}>
          <View style={styles.categroyContainer}>
            {Object.keys(categoryMap).map(categoryName => (
              <ExerciseCategory
                key={categoryName}
                categoryName={categoryName}
                exerciseArray={categoryMap[categoryName]}
              />
            ))}
          </View>
        </ScrollView>
        <AddButton />
      </View>
    );
  }
}
