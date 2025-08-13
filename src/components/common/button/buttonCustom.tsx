import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styles from './buttonCustom.styles';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface ButtonCustomProps {
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal' | undefined;
  onPress: () => void;
  label?: React.ReactNode;
  icon?: IconSource;
  disabled?: boolean;
  loading?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  mode = 'contained',
  onPress,
  label = 'Botón',
  icon,
  disabled = false,
  loading = false,
  contentStyle = {},
  labelStyle = {},
  accessibilityLabel,
}) => {
  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      icon={icon}
      disabled={disabled}
      loading={loading}
      contentStyle={[styles.content, contentStyle]}
      labelStyle={[styles.label, labelStyle]}
      style={styles.button}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      uppercase={false}
    >
      {label}
    </PaperButton>
  );
};

export default ButtonCustom;
