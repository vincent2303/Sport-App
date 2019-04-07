import {
  StyleSheet,
} from 'react-native';
import colors from '../../globals/colors';
import dimensions from '../../globals/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  backgroundImageContainer: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 100,
  },
  titleLetters: {
    fontSize: dimensions.fontSize.huge,
    fontWeight: '200',
    color: colors.electricYellow,
  },
  titleSeparator: {
    fontSize: dimensions.fontSize.big,
    fontWeight: '200',
    marginBottom: 10,
    marginLeft: dimensions.margin,
    marginRight: dimensions.margin,
    color: colors.electricYellow,
  },
  subTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: dimensions.fontSize.regular,
    fontWeight: '200',
    color: colors.white,
  },
});

export default styles;
