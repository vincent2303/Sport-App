import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderBackButton from '../../components/commons/buttons/HeaderBackButton';

import NewExerciseIllustration from '../../components/exercises/NewExerciseIllustration';
import commonStyles, { illustrationSize } from '../../globals/commonStyles';
import headerStyle from '../../globals/header';

export default class EditExercise extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'EDIT',
      ...headerStyle,
      headerLeft: (
        <HeaderBackButton onPress={() => navigation.goBack(null)} />
      ),
    });

    render() {
      return (
        <View style={commonStyles.AHprimaryContainer}>
          <NewExerciseIllustration illustrationSize={illustrationSize} />
          <View />
        </View>
      );
    }
}
