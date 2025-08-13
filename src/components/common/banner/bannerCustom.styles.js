import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { sizes } from '../../../utils/theme/sizes';
import { fontSizes, fontFamily } from '../../../utils/theme/fonts';

export const styles = StyleSheet.create({
  container: {
    margin: sizes.md,
    borderRadius: sizes.radius.lg,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: colors.brand.primary,
        shadowOpacity: 0.12,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  cover: {
    height: 200,
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.45)',  
    paddingVertical: sizes.lg,
    paddingHorizontal: sizes.xl,
  },
  title: {
    color: colors.brand.secondary,
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.bold,
    marginBottom: sizes.sm,
  },
  description: {
    color: colors.text.secondary,
    fontSize: fontSizes.sm,
    lineHeight: 20,
    fontFamily: fontFamily.regular,
  },
});
