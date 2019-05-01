import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { getExercisePerCategoryIdMap } from '../../utils/exercises';

import HeaderBackButton from '../../components/commons/HeaderBackButton';
import ExerciseCategory from '../../components/exercises/ExerciseCategory';
import CircleButton from '../../components/commons/CircleButton';

import headerStyle from '../../globals/header';
import commonStyles from '../../globals/commonStyles';

export default class Exercises extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'EXERCISES',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });

  onNewExercise = () => {
    const { navigation } = this.props;
    navigation.navigate('NewExercise');
  }

  render() {
    const { exercises, categories } = this.props;
    const exercisePerCategoryIdMap = getExercisePerCategoryIdMap({ exercises, categories });
    return (
      <View style={commonStyles.AHprimaryContainer}>
        <ScrollView>
          <View style={commonStyles.buttonSpace}>
            {Object.keys(exercisePerCategoryIdMap).map(categoryId => (
              <ExerciseCategory
                key={categoryId}
                categoryName={categories[categoryId].name}
                exerciseArray={exercisePerCategoryIdMap[categoryId]}
              />
            ))}
          </View>
        </ScrollView>
        <CircleButton
          centerElement={{ type: 'icon', value: 'addIcon' }}
          onPress={this.onNewExercise}
        />
      </View>
    );
  }
}
