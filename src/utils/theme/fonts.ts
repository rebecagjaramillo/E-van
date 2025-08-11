export const fontFamily = {
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-Bold',
  italic: 'Montserrat-Italic',
};

export const fontSizes = {
  /** 12px - Para texto muy pequeño como notas legales o etiquetas de bajo nivel. */
  xs: 12,
  /** 14px - Para texto secundario, leyendas o metadatos. */
  sm: 14,
  /** 16px - Tamaño base. Ideal para el cuerpo de texto principal (descripciones, etc.). */
  base: 16,
  /** 18px - Para subtítulos, texto en inputs o botones. */
  md: 18,
  /** 20px - Para títulos de tarjetas o elementos importantes. */
  lg: 20,
  /** 24px - Para títulos de sección principales. */
  xl: 24,
  /** 32px - Para títulos de pantalla grandes y llamativos (Hero titles). */
  xxl: 32,
};

export const textStyles = {
  headline: {
    fontFamily: fontFamily.bold,
    fontSize: fontSizes.xxl,
  },
  title1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSizes.xl,
  },
  title2: {
    fontFamily: fontFamily.medium,
    fontSize: fontSizes.lg,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSizes.base,
    lineHeight: fontSizes.base * 1.5, 
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSizes.sm,
  },
  button: {
    fontFamily: fontFamily.medium,
    fontSize: fontSizes.md,
  },
};