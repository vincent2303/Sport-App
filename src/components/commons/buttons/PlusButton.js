import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../../globals/colors';
import { whitePlus } from '../../../images';

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: colors.green,
  },
  IconContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  iconStyle: {
    flex: 1,
    width: '70%',
    resizeMode: 'contain',
  },
});

export default class PlusButton extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  render() {
    const {
      onPress,
      holdMode,
    } = this.props;
    const touchableOpacityPressProps = {};
    if (holdMode) {
      touchableOpacityPressProps.onPressIn = () => {
        onPress();
        this.timer = setInterval(onPress, 100);
      };
      touchableOpacityPressProps.onPressOut = () => {
        clearTimeout(this.timer);
      };
    } else {
      touchableOpacityPressProps.onPress = onPress;
    }
    return (
      <TouchableOpacity style={styles.container} {...touchableOpacityPressProps}>
        <View style={styles.IconContainer}>
          <Image
            source={whitePlus}
            style={styles.iconStyle}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
