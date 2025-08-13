import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { sizes } from '../../../utils/theme/sizes';
import { fontSizes, fontFamily } from '../../../utils/theme/fonts';

const styles = StyleSheet.create({
  button: {
    marginVertical: sizes.sm,
    borderRadius: sizes.radius.md,
    elevation: 2,
  },
  content: {
    paddingVertical: sizes.sm,
    paddingHorizontal: sizes.lg,
  },
  label: {
    fontWeight: '700',
    fontSize: fontSizes.md,
    color: colors.brand.secondary, 
    fontFamily: fontFamily.medium,
  },
});

export default styles;