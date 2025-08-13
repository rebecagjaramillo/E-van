import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { sizes } from '../../../utils/theme/sizes';
import { fontSizes, fontFamily } from '../../../utils/theme/fonts';

const styles = StyleSheet.create({
  card: {
    margin: sizes.md,
    borderRadius: sizes.radius.md,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: Platform.OS === 'ios' ? colors.brand.primary : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 2 } : undefined,
    shadowRadius: Platform.OS === 'ios' ? 4 : undefined,
    overflow: 'hidden',
    backgroundColor: colors.brand.secondary,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  content: {
    padding: sizes.md,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: '700',
    marginBottom: sizes.xs,
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
  },
  price: {
    fontSize: fontSizes.md,
    color: colors.brand.accent,
    fontWeight: '600',
    marginBottom: sizes.sm,
    fontFamily: fontFamily.medium,
  },
  rating: {
    fontSize: fontSizes.sm,
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
