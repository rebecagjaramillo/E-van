import { StyleSheet, Platform } from 'react-native';
import { sizes } from '../../../utils/theme/sizes';
import { colors } from '../../../utils/theme/colors';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: sizes.lg,   
    bottom: sizes.lg,  
    elevation: Platform.OS === 'android' ? 6 : 0,
    shadowColor: Platform.OS === 'ios' ? '#000' : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.3 : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 2 } : undefined,
    shadowRadius: Platform.OS === 'ios' ? 4 : undefined,
    backgroundColor: colors.brand.accent, 
  },
});

export default styles;
