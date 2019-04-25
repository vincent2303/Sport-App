import { StyleSheet } from 'react-native';
import colors from './colors';
import dimensions from './dimensions';

const regularText = {
  fontSize: dimensions.fontSize.regularText,
  fontWeight: '200',
  color: colors.white,
};

const largeText = {
  fontSize: dimensions.fontSize.largeText,
  fontWeight: '200',
  color: colors.white,
};

export default StyleSheet.create({

  // CONTAINER
  aimHighContainer: {
    backgroundColor: colors.secondaryBlue,
    borderLeftWidth: 3,
    borderLeftColor: colors.electricYellow,
    width: '100%',
    padding: 12,
    paddingLeft: 10,
    marginBottom: 6,
  },
  AHprimaryContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  AHsecondaryContainer: {
    backgroundColor: colors.secondaryBlue,
    padding: dimensions.margin,
    marginTop: dimensions.margin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  // TEXT
  AHregularWhiteText: {
    ...regularText,
    color: colors.white,
  },
  AHregularYellowText: {
    ...regularText,
    color: colors.electricYellow,
  },
  AHlargeWhiteText: {
    ...largeText,
    color: colors.white,
  },
  AHlargeYellowText: {
    ...largeText,
    color: colors.electricYellow,
  },

  // BUTTON SPACE
  buttonSpace: {
    paddingBottom: 120,
  },

  // ICON
  smallIcon: {
    width: dimensions.fontSize.small,
    height: dimensions.fontSize.small,
  },
});
