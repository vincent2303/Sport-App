import React from 'react';
import {
  View, Image,
} from 'react-native';
import { wolfLogo } from '../../images/index';

// takes full size of parent, place the logo centered

export default function Logo() {
  return (
    <View style={{
      width: '100%', height: '100%', paddingLeft: '15%%',
    }}
    >
      <Image
        source={wolfLogo}
        style={{
          flex: 1,
          width: '100%',
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}
