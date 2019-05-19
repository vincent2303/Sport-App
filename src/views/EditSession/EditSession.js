import React, { Component } from 'react';
import {
  View, ScrollView, StyleSheet, Alert,
} from 'react-native';

import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';
import ExerciseCategory from '../../components/exercises/ExerciseCategory';
import AimHighTextField from '../../components/commons/inputs/AimHighTextField';
import commonsStyles from '../../globals/commonStyles';
import headerStyle from '../../globals/header';
import dimensions from '../../globals/dimensions';
import { getExercisePerCategoryIdMap } from '../../utils/exercises';
import AimHighNumericField from '../../components/commons/inputs/AimHighNumericField';
import RectangleButton from '../../components/commons/buttons/RectangleButton';

import { checkSessionValidity } from '../../utils/sessions';
import { idGenerator } from '../../utils/idGenerators';

const styles = StyleSheet.create({
  container: {
    paddingTop: dimensions.margin * 2,
  },
});

export default class EditSession extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NEW SESSION',
    ...headerStyle,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.goBack(null)} />
    ),
  });

  constructor(props) {
    super(props);
    const { navigation } = props;
    const sessionToEdit = navigation.getParam('sessionToEdit', null);
    if (!sessionToEdit) { // create new session
      this.state = {
        name: null,
        exerciseIdMap: new Map(),
        sessionTime: null,
        id: idGenerator(),
      };
    } else { // edit existing session
      const {
        id, name, sessionTime, exerciseIdMap,
      } = sessionToEdit;
      this.state = {
        id, name, sessionTime, exerciseIdMap,
      };
    }
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
    const { exerciseIdMap } = this.state;
    if (exerciseIdMap.has(id)) {
      exerciseIdMap.delete(id);
    } else {
      exerciseIdMap.set(id);
    }
    this.setState({ exerciseIdMap });
  }

  onSaveSession = () => {
    const SessionToSave = this.state;
    const { setSessions, sessions, navigation } = this.props;
    const { isValid, missingString } = checkSessionValidity(SessionToSave);
    if (isValid) {
      const editSessionIndex = sessions.findIndex( // -1 if new session
        session => session.id === SessionToSave.id,
      );
      if (editSessionIndex >= 0) {
        sessions[editSessionIndex] = SessionToSave;
      } else { sessions.push(this.state); }
      setSessions(sessions);
      navigation.navigate('Sessions');
    } else {
      Alert.alert('Requiered fields missing', missingString);
    }
  }

  render() {
    const { exercises, categories } = this.props;
    const { exerciseIdMap, name, sessionTime } = this.state;
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
            type="sessionTime"
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
                exerciseIdMap={exerciseIdMap}
              />
            ))}
          </View>
        </ScrollView>
        <RectangleButton
          title="save"
          type="add"
          onPress={this.onSaveSession}
        />
      </View>
    );
  }
}
