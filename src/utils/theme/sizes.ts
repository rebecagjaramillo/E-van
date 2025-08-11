import { Dimensions, Platform, StatusBar } from 'react-native';

// Obtener las dimensiones de la ventana del dispositivo una sola vez

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

/** Valores para todos los paddings y margins. **/

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

/** Sistema de radios para bordes. **/

const radius = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
};

/** Tamaños de layout y componentes comunes **/

const layout = {
  // --- Dimensiones del Dispositivo ---
  deviceWidth,
  deviceHeight,

  // --- Tamaños de Componentes Estándar ---
  buttonHeight: 48,
  inputHeight: 50,
  bottomTabBarHeight: 70,

  // --- Padding Horizontal para Pantallas ---
  screenHorizontalPadding: spacing.lg, // 24px
  contentWidth: deviceWidth - spacing.lg * 2,

  // --- Lógica Específica de la Plataforma con Platform.OS ---

  screenTopPadding: Platform.OS === 'ios'
    ? 44 
    : StatusBar.currentHeight || spacing.lg, 

  headerHeight: Platform.OS === 'ios' ? 100 : 60,

  shadow: Platform.OS === 'ios'
    ? {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }
    : {
        elevation: 5,
        shadowColor: '#000',
      },
};

// Exportación final de todas las constantes de tamaño para ser usadas en la app.
export const sizes = {
  ...spacing,
  radius,
  layout,
};