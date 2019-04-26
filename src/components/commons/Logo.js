import React from 'react';
import {
  View, Image, StyleSheet,
} from 'react-native';
import { wolfLogo } from '../../images/index';

// takes full size of parent, place the logo centered

const styles = StyleSheet.create({
  container: {
    width: '100%', height: '100%', paddingLeft: '15%%',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
});

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={wolfLogo}
        style={styles.image}
      />
    </View>
  );
}
