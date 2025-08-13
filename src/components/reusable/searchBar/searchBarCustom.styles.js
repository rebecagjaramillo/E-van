import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../utils/theme/colors'; 
import { sizes } from '../../../utils/theme/sizes'; 
import { fontFamily, fontSizes } from '../../../utils/theme/fonts'; 

export default StyleSheet.create({
  searchbar: {
    marginHorizontal: sizes.layout.screenHorizontalPadding,
    marginVertical: sizes.sm,
    borderRadius: sizes.radius.md,
    backgroundColor: colors.ui.inputBackground,
    ...sizes.layout.shadow,
    elevation: Platform.OS === 'android' ? 2 : 0,
  },
  inputStyle: {
    color: colors.text.primary,
    fontSize: fontSizes.base,
    fontFamily: fontFamily.regular,
  },
});
