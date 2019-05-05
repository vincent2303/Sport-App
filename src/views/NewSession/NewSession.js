import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';
import ExerciseCategory from '../../components/exercises/ExerciseCategory';
import AimHighTextField from '../../components/commons/inputs/AimHighTextField';
import commonsStyles from '../../globals/commonStyles';
import headerStyle from '../../globals/header';
import dimensions from '../../globals/dimensions';
import { getExercisePerCategoryIdMap } from '../../utils/exercises';
import AimHighNumericField from '../../components/commons/inputs/AimHighNumericField';
import RectangleButton from '../../components/commons/buttons/RectangleButton';

const styles = StyleSheet.create({
  container: {
    paddingTop: dimensions.margin * 2,
  },
});

export default class NewSession extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NEW SESSION',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      exercisesIdMap: new Map(),
      sessionTime: null,
    };
  }

  onChangeSessionName = ({ text }) => {
    this.setState({ name: text });
  }

  increaseSessionTime = () => {
    let { sessionTime } = this.state;
    if (!sessionTime) {
      sessionTime = 0;
    }
    sessionTime += 1;
    this.setState({ sessionTime });
  }

  lowerSessionTime = () => {
    let { sessionTime } = this.state;
    if (!sessionTime) {
      sessionTime = 0;
    }
    if (sessionTime > 0) {
      sessionTime -= 1;
      this.setState({ sessionTime });
    }
  }

  onChooseExercise = ({ id }) => {
    const { exercisesIdMap } = this.state;
    if (exercisesIdMap.has(id)) {
      exercisesIdMap.delete(id);
    } else {
      exercisesIdMap.set(id);
    }
    this.setState({ exercisesIdMap });
  }

  render() {
    const { exercises, categories } = this.props;
    const { exercisesIdMap, name, sessionTime } = this.state;
    const exercisePerCategoryIdMap = getExercisePerCategoryIdMap({ exercises, categories });

    return (
      <View style={commonsStyles.AHprimaryContainer}>
        <ScrollView style={styles.container}>
          <AimHighTextField
            fieldName="name"
            onChangeText={this.onChangeSessionName}
            value={name}
          />
          <AimHighNumericField
            fieldName="time"
            type="restTime"
            value={sessionTime}
            increase={this.increaseSessionTime}
            lower={this.lowerSessionTime}
            holdMode
          />
          <View style={commonsStyles.buttonSpace}>
            {Object.keys(exercisePerCategoryIdMap).map(categoryId => (
              <ExerciseCategory
                key={categoryId}
                categoryName={categories[categoryId].name}
                exerciseArray={exercisePerCategoryIdMap[categoryId]}
                onChooseExercise={this.onChooseExercise}
                selectionMode
                exercisesIdMap={exercisesIdMap}
              />
            ))}
          </View>
        </ScrollView>
        <RectangleButton
          title="create"
          type="add"
          onPress={null}
        />
      </View>
    );
  }
}
