import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { getCategoryMap } from '../../utils/exercises';

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
    const { exercises } = this.props;
    const categoryMap = getCategoryMap(exercises);
    return (
      <View style={commonStyles.AHprimaryContainer}>
        <ScrollView>
          <View style={commonStyles.buttonSpace}>
            {Object.keys(categoryMap).map(categoryName => (
              <ExerciseCategory
                key={categoryName}
                categoryName={categoryName}
                exerciseArray={categoryMap[categoryName]}
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
