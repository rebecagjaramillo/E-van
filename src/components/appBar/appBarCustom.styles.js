import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';

export default StyleSheet.create({
  header: {
    backgroundColor: colors.brand.primary,
    paddingHorizontal: sizes.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...sizes.layout.shadow,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 120,
    height: 35,
    resizeMode: 'contain',
    marginRight: sizes.sm,
  },
  searchContainer: {
    flex: 1,
    marginLeft: sizes.sm,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: sizes.xs,
  },
});
