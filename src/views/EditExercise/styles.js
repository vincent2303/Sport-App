import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';
import { width, height } from '../../globals/dimensions';

export default StyleSheet.create({
  graphiqueContainer: {
    width,
    height: height * 0.3,
    backgroundColor: colors.secondaryBlue,
  },
});
