import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderBackButton from '../../components/commons/HeaderBackButton';
import headerStyle from '../../globals/header';
import colors from '../../globals/colors';

import NewExerciseIllustration from '../../components/exercises/NewExerciseIllustration';
import AimHighTextField from '../../components/commons/AimHighTextField';

export default class NewExercise extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'NEW EXERCISE',
      ...headerStyle,
      headerLeft: (
        <HeaderBackButton onPress={() => navigation.goBack(null)} />
      ),
    });

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: colors.darkBlue }}>
          <NewExerciseIllustration />
          <AimHighTextField fieldName="name" />
          <AimHighTextField fieldName="focus" />
          <AimHighTextField fieldName="weight" />
          <AimHighTextField fieldName="rep" />
          <AimHighTextField fieldName="rest" />

        </View>
      );
    }
}
