import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SessionSlide from './SessionSlide';

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
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
        >
          <SessionSlide />
          <SessionSlide />
          <SessionSlide />
        </ScrollView>
      </View>
    );
  }
}
