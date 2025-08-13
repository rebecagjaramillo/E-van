import React from 'react';
import { FAB } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import styles from './fabButtonCustom.styles';

interface FabButtonProps {
  icon?: string;
  label?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const FabButton: React.FC<FabButtonProps> = ({
  icon = 'plus',
  label,
  onPress,
  style,
}) => {
  return (
    <FAB
      icon={icon}
      label={label}
      onPress={onPress}
      style={[styles.fab, style]}
      accessibilityRole="button"
      accessibilityLabel={label || icon}
      small={false} 
      uppercase={false} 
      color="#fff" 

    />
  );
};

export default FabButton;
