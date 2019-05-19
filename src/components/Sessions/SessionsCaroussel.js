import React, { Component } from 'react';
import {
  View, ScrollView, StyleSheet, Animated,
} from 'react-native';

import SessionSlide from './SessionSlide';
import EditButton from '../commons/buttons/EditButton';
import CarousselIndicator, { dotSpacing } from './CarousselIndicator';

import dimensions, { width } from '../../globals/dimensions';

const styles = StyleSheet.create({
  container: {
    marginTop: dimensions.margin * 3,
    marginVertical: dimensions.margin,
    marginHorizontal: dimensions.margin,
    alignItems: 'center',
  },
});

function getPage(xOffset) {
  return Math.round(xOffset / width);
}

export default class SessionsCaroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicDotPosition: new Animated.Value(0),
      onPage: 0,
    };
  }

  updatePage = ({ nativeEvent }) => {
    const xOffset = nativeEvent.contentOffset.x;
    const onPage = getPage(xOffset);
    this.setState({ onPage });
    const { dynamicDotPosition } = this.state;
    Animated.timing(dynamicDotPosition, {
      toValue: dotSpacing * onPage,
      duration: 200,
    }).start();
  }

  onEditPress = () => {
    const { onPage } = this.state;
    const { sessions, editSession } = this.props;
    const sessionToEdit = sessions[onPage];
    editSession({ sessionToEdit });
  }

  render() {
    const { sessions } = this.props;
    const { dynamicDotPosition } = this.state;
    return (
      <View>
        <View style={styles.container}>
          <ScrollView
            horizontal
            pagingEnabled
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onMomentumScrollEnd={this.updatePage}
          >
            {sessions.map((session, index) => (
              <SessionSlide key={session.id} session={session} sessionIndex={index} />
            ))}
          </ScrollView>
          <EditButton onPress={this.onEditPress} />
        </View>
        <CarousselIndicator
          slideNumber={sessions.length}
          dynamicDotPosition={dynamicDotPosition}
        />
      </View>
    );
  }
}
