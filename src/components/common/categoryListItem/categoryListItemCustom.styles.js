import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { fontSizes, fontFamily } from '../../../utils/theme/fonts';

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: fontSizes.md,
    color: colors.text.primary,
    fontFamily: fontFamily.medium,
  },
  description: {
    fontSize: fontSizes.sm,
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
