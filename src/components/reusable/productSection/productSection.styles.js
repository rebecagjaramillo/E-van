import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme/colors';
import { fontSizes, fontFamily } from '../../../utils/theme/fonts';
import { sizes } from '../../../utils/theme/sizes';

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.md,
  },
  sectionTitle: {
    fontSize: fontSizes.xl,
    fontFamily: fontFamily.bold,
    color: colors.text.primary,
    marginBottom: sizes.sm,
    paddingHorizontal: sizes.lg,
  },
  listContainer: {
    paddingLeft: sizes.lg,
  },
});

export default styles;
