import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { fontSizes, fontFamily } from '../../../utils/theme/fonts';
import { sizes } from '../../../utils/theme/sizes';

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.md,
  },
  listContainer: {
    paddingHorizontal: sizes.sm,
  },
  categoryButton: {
    marginRight: sizes.md,
    paddingVertical: sizes.sm,
    paddingHorizontal: sizes.lg,
    borderRadius: sizes.radius.full,
    backgroundColor: colors.ui.inputBackground,
  },
  selectedCategoryButton: {
    backgroundColor: colors.brand.accent,
  },
  categoryText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.medium,
    color: colors.text.primary,
  },
  selectedCategoryText: {
    color: colors.brand.secondary,
    fontFamily: fontFamily.bold,
  },
  sectionTitle: {
    fontSize: fontSizes.xl,
    fontFamily: fontFamily.bold,
    color: colors.text.primary,
    marginBottom: sizes.md,
    marginLeft: sizes.sm,
  },
});

export default styles;