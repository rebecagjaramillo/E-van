import React, { memo } from 'react';
import { Appbar } from 'react-native-paper';
import { View, Image } from 'react-native';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';
import SearchBarCustom from '../../components/reusable/searchBar/searchBarCustom';
import styles from './appBarCustom.styles';
import logoEovan from '../../assets/images/logo/logo_eovan.png';

export interface AppBarCustomProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartPress: () => void;
  onProfilePress: () => void;
}

const AppBarCustom: React.FC<AppBarCustomProps> = ({
  searchQuery,
  onSearchChange,
  onCartPress,
  onProfilePress,
}) => {
  return (
    <Appbar.Header
      style={styles.header}
      statusBarHeight={sizes.layout.screenTopPadding}
    >
      <View style={styles.leftContainer}>
        <Image
          source={logoEovan}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Logo Eovan"
        />
        <View style={styles.searchContainer}>
          <SearchBarCustom
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Buscar productos..."
          />
        </View>
      </View>

      {/* Acciones */}
      <View style={styles.actionsContainer}>
        <Appbar.Action
          icon="cart-outline"
          onPress={onCartPress}
          color={colors.brand.accent}
          accessibilityLabel="Abrir carrito"
        />
        <Appbar.Action
          icon="account-circle-outline"
          onPress={onProfilePress}
          color={colors.text.primaryInverse}
          accessibilityLabel="Ver perfil"
        />
      </View>
    </Appbar.Header>
  );
};

export default memo(AppBarCustom);
