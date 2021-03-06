import { StyleSheet } from 'react-native';
import colors from './colors';
import dimensions, { height } from './dimensions';

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

// Exercise illustration
const illustrationSize = height * 0.2;

export default StyleSheet.create({

  // CONTAINER
  AHprimaryContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  AHsecondaryContainer: {
    backgroundColor: colors.secondaryBlue,
    padding: dimensions.margin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  AHsecondaryContainerWithBorder: {
    backgroundColor: colors.secondaryBlue,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: colors.electricYellow,
    paddingVertical: dimensions.margin * 3 / 2,
    paddingRight: dimensions.margin,
    paddingLeft: dimensions.margin - 3,
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
    width: 20,
    height: 20,
  },
  mediumIcon: {
    width: 45,
    height: 45,
  },
  veryLargeIcon: {
    width: 70,
    height: 70,
  },
});

export { illustrationSize };
