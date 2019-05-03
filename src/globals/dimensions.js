import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  margin: 10,
  fontSize: {
    big: 40,
    header: 26,

    // text
    largeText: 22,
    regularText: 16,
  },
};

export {
  width,
  height,
};
