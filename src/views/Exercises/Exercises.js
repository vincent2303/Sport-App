import React, { Component } from 'react';
import { View } from 'react-native';
import { getCategoryMap } from '../../utils/exercises';

import HeaderBackButton from '../../components/HeaderBackButton';
import ExerciseCategory from '../../components/ExerciseCategory';

import colors from '../../globals/colors';
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
      <View style={{
        flex: 1, backgroundColor: colors.darkBlue,
      }}
      >
        {Object.keys(categoryMap).map(categoryName => (
          <ExerciseCategory
            key={categoryName}
            categoryName={categoryName}
            exerciseArray={categoryMap[categoryName]}
          />
        ))}
      </View>
    );
  }
}
