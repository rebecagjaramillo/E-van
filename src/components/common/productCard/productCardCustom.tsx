import React, { useMemo } from 'react';
import { Card, Button, Paragraph, Title, IconButton } from 'react-native-paper';
import { View, ImageSourcePropType } from 'react-native';
import { styles } from './ProductCardCustom.styles';
import { fontFamily } from '../../../utils/theme/fonts';
import { colors } from '../../../utils/theme/colors';


const MAX_STARS = 5;

export interface Product {
  id: string | number;
  image: string | ImageSourcePropType;
  name: string;
  description: string;
  price: number;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isFavorite?: boolean;
  onPress?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
  onPress,
}) => {
  const renderStars = useMemo(() => {
    const stars = [];
    const rating = product.rating ?? 0;

    for (let i = 0; i < MAX_STARS; i++) {
      let iconName: 'star' | 'star-half-full' | 'star-outline' = 'star-outline';
      if (i < Math.floor(rating)) {
        iconName = 'star';
      } else if (i < rating) {
        iconName = 'star-half-full';
      }
      stars.push(
        <IconButton
          key={i}
          icon={iconName}
          size={16}
          iconColor="#FFD700" 
          style={styles.starIcon}
          disabled
          accessibilityIgnoresInvertColors
          accessibilityLabel={`Estrella ${i + 1} ${
            iconName === 'star'
              ? 'completa'
              : iconName === 'star-half-full'
              ? 'media'
              : 'vacía'
          }`}
        />
      );
    }
    return stars;
  }, [product.rating]);

  return (
    <Card
      style={styles.card}
      mode="elevated"
      onPress={() => onPress?.(product)}
      accessibilityRole="button"
      accessibilityHint="Ver detalles del producto"
    >
      <Card.Cover
        source={
          typeof product.image === 'string'
            ? { uri: product.image }
            : product.image
        }
      />

      <Card.Content>
        <Title
          style={[styles.title, { fontFamily: fontFamily.bold }]}
          numberOfLines={2}
        >
          {product.name}
        </Title>
        <Paragraph
          style={[styles.description, { fontFamily: fontFamily.regular }]}
          numberOfLines={3}
        >
          {product.description}
        </Paragraph>

        <Paragraph
          style={[styles.price, { fontFamily: fontFamily.bold, color: colors.brand.accent }]}
        >
          ${product.price.toFixed(2)}
        </Paragraph>

        <View style={styles.ratingContainer}>
          <View style={styles.starsRow}>{renderStars}</View>
          <Paragraph style={[styles.ratingText, { fontFamily: fontFamily.regular }]}>
            ({product.rating?.toFixed(1) ?? '0.0'})
          </Paragraph>
        </View>

        <View style={styles.actionsContainer}>
          <Button
            mode="contained"
            icon="cart"
            onPress={() => onAddToCart?.(product)}
            style={styles.button}
            accessibilityLabel="Agregar al carrito"
            labelStyle={{ fontFamily: fontFamily.medium }}
            contentStyle={{ height: 38 }}
          >
            Agregar
          </Button>

          <IconButton
            icon={isFavorite ? 'heart' : 'heart-outline'}
            onPress={() => onToggleFavorite?.(product)}
            iconColor={isFavorite ? colors.brand.accent : colors.ui.placeholder}
            size={24}
            style={styles.favoriteIcon}
            accessibilityLabel={isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
            accessibilityRole="button"
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
