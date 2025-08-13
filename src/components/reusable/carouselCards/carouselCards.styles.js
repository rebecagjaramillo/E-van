import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { sizes } from '../../../utils/theme/sizes';

export const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    paddingVertical: sizes.md,
    paddingHorizontal: sizes.sm,
    backgroundColor: colors.brand.secondary,
    borderRadius: sizes.radius.lg,
    marginVertical: sizes.lg,

    ...Platform.select({
      ios: {
        shadowColor: colors.ui.border,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
        shadowColor: colors.ui.border,
      },
    }),
  },
});