import {
  StyleSheet,
} from 'react-native';
import colors from '../../globals/colors';
import dimensions from '../../globals/dimensions';

const styles = StyleSheet.create({
  logoAndTextContainer: {
    width: '100%',
    height: '80%',
    marginTop: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '50%',
  },
  title: {
    fontSize: dimensions.fontSize.big,
    fontWeight: '100',
    color: colors.white,
  },
  subTitle: {
    fontSize: dimensions.fontSize.small,
    fontWeight: '100',
    color: colors.white,
  },
});

export default styles;
