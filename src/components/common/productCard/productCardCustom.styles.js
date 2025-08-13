import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { sizes } from '../../../utils/theme/sizes';
import { fontSizes, fontFamily } from '../../../utils/theme/fonts';

const deviceWidth = sizes.layout.deviceWidth;

export const styles = StyleSheet.create({
  card: {
    margin: sizes.sm,
    borderRadius: sizes.radius.md,
    backgroundColor: colors.brand.secondary,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  title: {
    fontWeight: '700',
    fontSize: fontSizes.lg,
    marginVertical: sizes.xs,
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
  },
  description: {
    marginVertical: sizes.xs,
    fontSize: fontSizes.base,
    color: colors.text.secondary,
    lineHeight: fontSizes.base * 1.5,
    fontFamily: fontFamily.regular,
  },
  price: {
    fontSize: fontSizes.md,
    color: colors.brand.accent,
    fontWeight: '700',
    marginVertical: sizes.xs,
    fontFamily: fontFamily.bold,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: sizes.xs,
  },
  starsRow: {
    flexDirection: 'row',
  },
  starIcon: {
    marginRight: sizes.xs / 2,
  },
  ratingText: {
    marginLeft: sizes.sm,
    fontSize: fontSizes.sm,
    color: colors.ui.placeholder,
    fontFamily: fontFamily.regular,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.md,
  },
  button: {
    flex: 1,
    marginRight: sizes.sm,
    borderRadius: sizes.radius.sm,
    height: 38,
    justifyContent: 'center',
  },
  favoriteIcon: {
    marginLeft: sizes.sm,
    alignSelf: 'flex-start',
  },
});
