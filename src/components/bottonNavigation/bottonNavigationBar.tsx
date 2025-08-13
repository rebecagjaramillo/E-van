import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { View, Text, Platform } from 'react-native';
import { colors } from '../../utils/theme/colors';
import { styles } from './bottonNavigationBar.styles';
import HomeScreen from '../../screens/mainTabs/homeScreen';

interface BottomNavigationBarProps {
  initialRoute?: string;
  onRouteChange?: (route: string) => void;
}

interface TabRoute {
  key: string;
  title: string;
  icon: string;
}

const tabs: TabRoute[] = [
  { key: 'home', title: 'Inicio', icon: 'home' },
  { key: 'buscar', title: 'Buscar', icon: 'magnify' },
  { key: 'favoritos', title: 'Favoritos', icon: 'heart' },
  { key: 'cuenta', title: 'Mi Cuenta', icon: 'account' },
];

const routeToIndex: Record<string, number> = tabs.reduce(
  (acc, tab, i) => ({ ...acc, [tab.key]: i }),
  {}
);

const Placeholder: React.FC<{ text: string }> = ({ text }) => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>{text}</Text>
  </View>
);

const BuscarRoute = () => <Placeholder text="Funcionalidad de búsqueda próximamente" />;
const FavoritosRoute = () => <Placeholder text="Tus favoritos aparecerán aquí" />;
const CuentaRoute = () => <Placeholder text="Configuración de tu cuenta" />;

const renderScene = BottomNavigation.SceneMap({
  home: HomeScreen,
  buscar: BuscarRoute,
  favoritos: FavoritosRoute,
  cuenta: CuentaRoute,
});

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  initialRoute = 'home',
  onRouteChange,
}) => {
  const [index, setIndex] = useState(() => routeToIndex[initialRoute] ?? 0);

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
    onRouteChange?.(tabs[newIndex].key);
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes: tabs }}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
      barStyle={styles.bottomNav}
      shifting={false}
      sceneAnimationEnabled={Platform.OS === 'android'}
      activeColor={colors.brand.accent}
      inactiveColor={colors.text.disabled}
    />
  );
};

export default BottomNavigationBar;
