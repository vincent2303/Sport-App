import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SessionSlide from './SessionSlide';
import EditButton from '../commons/buttons/EditButton';
import CarousselIndicator from './CarousselIndicator';

import dimensions from '../../globals/dimensions';

const styles = StyleSheet.create({
  container: {
    marginTop: dimensions.margin * 3,
    marginVertical: dimensions.margin,
    marginHorizontal: dimensions.margin,
    alignItems: 'center',
  },
});

export default class SessionsCaroussel extends Component {
  render() {
    const { sessions } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <ScrollView
            horizontal
            pagingEnabled
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            bounces={false}
          >
            {sessions.map((session, index) => (
              <SessionSlide key={session.id} session={session} sessionIndex={index} />
            ))}
          </ScrollView>
          <EditButton />
        </View>
        <CarousselIndicator slideNumber={sessions.length} />
      </View>

    );
  }
}
