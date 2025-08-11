import { Platform } from 'react-native';

// Valor base para todas las medidas
const baseSize = 8;

export const Sizes = {
  // Espaciado (Padding y Margen)
  
  spacing: {
    xsmall: baseSize / 2,     // 4
    small: baseSize,          // 8
    medium: baseSize * 2,     // 16
    large: baseSize * 3,      // 24
    xlarge: baseSize * 4,     // 32
  },

  // Tamaños de fuente (Font Size)

  font: {
    xsmall: baseSize * 1.25,  // 10
    small: baseSize * 1.5,    // 12
    body: baseSize * 1.75,    // 14
    large: baseSize * 2,      // 16
    xlarge: baseSize * 2.25,  // 18
    title: baseSize * 3,      // 24
    hero: baseSize * 5,       // 40
  },

  // Tamaños de íconos

  icon: {
    small: baseSize * 2,      // 16
    medium: baseSize * 3,     // 24
    large: baseSize * 4,      // 32
  },

  // Tamaños de bordes (Border Radius)

  borderRadius: {
    small: baseSize / 2,      // 4
    medium: baseSize,         // 8
    large: baseSize * 2,      // 16
    pill: 999,
  },

  // Alturas de componentes específicos (ej. botones, inputs)
  
  componentHeight: {
    small: baseSize * 4,      // 32
    medium: baseSize * 6,     // 48
    large: baseSize * 8,      // 64
  },
};

// --- Ajustes específicos por plataforma ---

const platformSpecificSizes = {

  font: {
    caption: Platform.OS === 'ios' ? 12 : 14,
    small: Platform.OS === 'ios' ? 14 : 16,
    body: Platform.OS === 'ios' ? 16 : 18,
    large: Platform.OS === 'ios' ? 18 : 20,
    title: Platform.OS === 'ios' ? 24 : 26,
  },
};

export const PlatformSizes = {
  ...Sizes,
  font: {
    ...Sizes.font,
    ...platformSpecificSizes.font,
  },
};