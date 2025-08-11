import { ImageSourcePropType } from 'react-native';

export interface Banner {
  id: string;
  image: string | ImageSourcePropType;
  title: string;
  description: string;
  action?: {
    type: 'product' | 'category' | 'external';
    payload: string;
  };
}