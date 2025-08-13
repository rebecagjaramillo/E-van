import React from 'react';
import { Searchbar } from 'react-native-paper';
import styles from './searchBarCustom.styles';

interface SearchBarCustomProps {
  value: string;
  onChange: (query: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
  autoFocus?: boolean;
}

const SearchBarCustom: React.FC<SearchBarCustomProps> = ({
  value,
  onChange,
  placeholder = 'Buscar...',
  onSubmitEditing,
  autoFocus = false,
}) => {
  return (
    <Searchbar
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      style={styles.searchbar}
      iconColor="#000"
      inputStyle={styles.inputStyle}
      accessibilityLabel="Barra de búsqueda"
      autoFocus={autoFocus}
      returnKeyType="search"
      clearAccessibilityLabel="Limpiar búsqueda"
    />
  );
};

export default SearchBarCustom;