import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';
import { fontSizes, fontFamily } from '../../utils/theme/fonts'

export const styles = StyleSheet.create({
  bottomNav: {
    elevation: Platform.OS === 'android' ? 8 : 0,
    shadowColor: Platform.OS === 'ios' ? colors.brand.primary : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: -2 } : undefined,
    shadowRadius: Platform.OS === 'ios' ? 4 : undefined,
    backgroundColor: colors.brand.secondary,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brand.secondary,
    padding: sizes.md,
  },
  placeholderText: {
    fontSize: fontSizes.base,
    color: colors.ui.placeholder,
    fontStyle: 'italic',
    fontFamily: fontFamily.italic,
  },
});
