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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: dimensions.fontSize.big,
    fontWeight: '100',
    color: colors.white,
  },
  subTitle: {
    fontSize: dimensions.fontSize.largeText,
    fontWeight: '100',
    color: colors.white,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default styles;
