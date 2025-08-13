import React from 'react';
import { Card, Paragraph } from 'react-native-paper';
import { StyleProp, ViewStyle, ImageStyle, TextStyle, ImageSourcePropType } from 'react-native';
import styles from './cardGeneric.styles';

interface CardGenericProps {
  id?: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  rating: number;
  onPress?: () => void;
  cardStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  priceStyle?: StyleProp<TextStyle>;
  ratingStyle?: StyleProp<TextStyle>;
  formatPrice?: (price: number) => string; 
}

const CardGeneric: React.FC<CardGenericProps> = ({
  id,
  name,
  price,
  image,
  rating,
  onPress,
  cardStyle,
  imageStyle,
  priceStyle,
  ratingStyle,
  formatPrice,
}) => {
  const formattedPrice = formatPrice ? formatPrice(price) : `$${price.toFixed(2)}`;

  return (
    <Card
      style={[styles.card, cardStyle]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={name}
      accessibilityHint={`Precio ${formattedPrice}, calificación ${rating.toFixed(1)} estrellas`}
    >
      <Card.Cover source={image} style={[styles.image, imageStyle]} />
      <Card.Content style={styles.content}>
        <Paragraph style={[styles.price, priceStyle]}>{formattedPrice}</Paragraph>
        <Paragraph style={[styles.rating, ratingStyle]}>⭐ {rating.toFixed(1)}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default CardGeneric;
