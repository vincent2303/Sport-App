import { StyleSheet } from 'react-native';
import colors from './colors';
import dimensions from './dimensions';

export default StyleSheet.create({
  aimHighContainer: {
    backgroundColor: colors.secondaryBlue,
    borderLeftWidth: 3,
    borderLeftColor: colors.electricYellow,
    width: '100%',
    padding: 12,
    paddingLeft: 10,
    marginBottom: 6,
  },
  aimHighFieldText: {
    color: colors.white,
    fontSize: dimensions.fontSize.largeText,
    fontWeight: '200',
  },
});
