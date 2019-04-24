import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderBackButton from '../../components/commons/HeaderBackButton';
import headerStyle from '../../globals/header';
import colors from '../../globals/colors';

import NewExerciseIllustration from '../../components/exercises/NewExerciseIllustration';

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
          <Text>Salut</Text>
        </View>
      );
    }
}
