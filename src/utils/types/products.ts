import { ImageSourcePropType } from 'react-native';

export type ProductImage = string | ImageSourcePropType;

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  images: ImageSourcePropType[];
  rating: number;
  reviewsCount?: number;
  category?: string;
  isFavorite?: boolean;
}